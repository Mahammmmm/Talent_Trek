const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const JWT_SECRET = "bdcyfyre8399287vdvcbds xjks hxs xhdhhdducbdhd";

app.use(cors())
app.use(express.json())

const mongoUrl = "mongodb+srv://mahammasood2001:MPZoHzPLMS84Pu9e@cluster0.51ggakp.mongodb.net/TalentTrek?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser:true,
})
.then(()=>{
    console.log("DB Connected");
}).catch((e)=>console.log(e));

require("./userDetails")

const User = mongoose.model("User");

app.post("/register",async(req,res)=>{
    const {name,email,pass,cPass,age,dob,contact,city}=req.body;
    
    try{
        const oldUser= await User.findOne({email});

        if(oldUser){
            return res.send({error:"User exists"});
        }
        await User.create({
            name,
            email,
            pass,
            cPass,
            age,
            dob,
            contact,
            city,
        });
        res.send({status:"ok"});
    }catch(error){
        res.send({status:"error"});
    }
});

app.post("/login-user", async (req, res) => {
    const { email, pass } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not Found" });
    }

    // Compare the provided password with the stored password in the database
    if (pass === user.pass) {
        const token = jwt.sign({}, JWT_SECRET);

        // Send the token as part of the response
        return res.json({ status: "ok", data: { token, user } });
    }

    res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try{
        const user = jwt.verify(token,JWT_SECRET);
        const useremail=user.email;
        User.findOne({email:useremail})
        .then((data)=>{
            res.send({status:"ok",data:data});
        })
        .catch((error)=>{
            res.send({status:"error",data:error});
        });
    }catch(error){}
})


app.listen(3000,()=>{
    console.log("Server started");
});
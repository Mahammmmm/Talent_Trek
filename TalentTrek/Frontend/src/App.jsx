import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/LoginPage/LoginPage.jsx"
import Signup from "./Components/SignUpPage/SignUpPage.jsx"
import Main from "./Components/main.jsx"
import ForgetPassword from "./Components/ForgotPassword/ForgotPassword.jsx"
import ResumeTemplates from "./Components/Resume/ResumeTemplates.jsx"
import ResumeForm from "./Components/Resume/ResumeForm.jsx"
import UserProfile from "./Components/UserProfile/UserProfile.jsx"
import Feedback from "./Components/Feedback/Feedback.jsx"
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword.jsx"
import ComplaintRegistration from "./Components/ComplaintRegistration/ComplaintRegistration.jsx"
import Questionnaire from "./Components/Questionnaire/Questionnaire.jsx"
import QstRslt from "./Components/Questionnaire/QuestionnaireResults.jsx"
import QstEnd from "./Components/Questionnaire/QuestionnaireEnd.jsx"
import ViewInstitutes from "./Components/Institutes/ViewInstitutes.jsx"
import ViewJobs from "./Components/Jobs/ViewJobs.jsx"
import EducationForm from "./Components/EducationForm/EducationForm.jsx"
import Main2 from "./Components/MainPage/MainPage.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="main2" element={<Main2 />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetpassword" element={<ForgetPassword />}/>
        <Route path="resumetemplates" element={<ResumeTemplates/>}/>
        <Route path="resumeform" element={<ResumeForm/>}/>
        <Route path="userprofile" element={<UserProfile />}/>
        <Route path="feedback" element={<Feedback/>}/>
        <Route path="complaintregistration" element={<ComplaintRegistration/>}/>
        <Route path="updatepassword" element={<UpdatePassword/>}/>
        <Route path="viewinstitutes" element={<ViewInstitutes/>}/>
        <Route path="viewjobs" element={<ViewJobs/>}/>
        <Route path="q1" element={<Questionnaire />} />
        <Route path="educationform" element={<EducationForm/>}/>
        <Route path="qstend" element={<QstEnd />} />
        <Route path="qstrslt" element={<QstRslt />} />
      </Routes>
    </Router>
  );
};

export default App;

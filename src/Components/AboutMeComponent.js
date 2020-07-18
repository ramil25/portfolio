import React,{useEffect} from 'react';
import Navbar from './NavComponent';

const About =({}) =>{
const title = "About Ramil";
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos+=0.5;
        elem.style.opacity = pos + '%';
      }
    }
  }
  useEffect(()=>{
    document.title ='About Me';
    myMove();
});
return(
    <>
    <Navbar setTitle={title} />
    <div className="container" id="animate">
      <div className="row">
        <div className="col-sm-12">
          <div className="bg-dark text-light">
            <h2 className="text-center">Objectives</h2>
            <h5 className="text-justify pl-3 pr-3 pb-3 pt-1">
            A self-motivated IT professional with huge knowledge and proficiency in JavaScript, HTML
            CSS, and mobile responsive web development, as well as strong skills and ability in
            writing clean and efficient code, seeks the position of Junior Web Developer.
            </h5>
          </div>

          <div className="bg-light text-dark">
            <h2 className="text-center">Personal Information</h2>
            <div className="row text-center">
                <div className="col-sm-6">
                  <label>Gender:</label>
                </div>
                <div className="col-sm-6">
                  Male
                </div>

                <div className="col-sm-6">
                  <label>Date of Birth:</label>
                </div>
                <div className="col-sm-6">
                  July 25, 1993
                </div>

                <div className="col-sm-6">
                  <label>Civil Status:</label>
                </div>
                <div className="col-sm-6">
                  Single
                </div>

                <div className="col-sm-6">
                  <label>Citizenship:</label>
                </div>
                <div className="col-sm-6">
                  Filipino
                </div>

                <div className="col-sm-6">
                  <label>Language:</label>
                </div>
                <div className="col-sm-6">
                  English and Tagalog
                </div>
            </div>
          </div>

          <div className="bg-dark text-light">
            <h2 className="text-center">Educational Background</h2>
              <div className="row">
                <div className="col-sm-4 text-center">
                  <h5>Tertiary</h5>
                </div>
                <div className="col-sm-8 text-center pl-4">
                  <label className="text-left">
                  Laguna State Polytechnic University – L. De Leon St. Siniloan, Laguna
                  <br />Course: Bachelor of Science in Information Technology
                  <br />Year Graduated: 2016
                  </label>
                </div>
                </div>
              </div>

              <div className="bg-light text-dark">
              <h2 className="text-center">Skills</h2>
              <ul>
                 <li>Work dedicated.</li>
                <li>Programming language such as EJS, React, NodeJS, PHP, HTML5 ,CSS3,
                    ES6,C#,Java, Action Script 3.0,MongoDB and SQL </li>
                    <li>Oriented in office applications such as Advance Word Processing, Spreadsheet
                    and Presentation.</li>
                    <li>Has a knowledge in adobe creative Cloud(Photoshop, Illustrator, After Effects,
                        Animate and Premier).</li>
                    <li>Knew how to create Messenger Business Bot</li>
                    <li>Knew how to create Mobile Apps and Games</li>
                    <li>Knew how to layout using adobe products</li>
                    <li>Knew how to troubleshoot computer</li>
                    <li>Average communication skills.</li>
              </ul>
              </div>
              <div className="bg-dark text-light">
               <h2 className="text-center">Work Expirience</h2>
               <div className="row">
               <div className="col-sm-6">
               <ul>
                  <li>
                Freelance Web Developer<br/>
                EJS, React and NodeJS Advance CRUD Projects<br/>
                January 2020 – June 2020 <br /><br />
               </li>  
               <li>
               IT Support <br/>– ITASCo.(Information Technology Alumni Services Cooperative)
               <br/> At Siniloan, Laguna
                <br/>2016-2017<br/><br/>
                </li> 
                <li>
                  Assistant Instructor(Senior High School) 
                  <br />– AMA COMPUTER COLLEGE Sta.
                    Cruz Campus at Sta. Cruz, Laguna
                   <br/> September 8,2017 – June 30, 2020 <br/><br/>   
               </li> 
                </ul>
               </div>

               <div className="col-sm-6">
               <ul> 
               <li>
               Freelance Web Support Developer
              2016 – 2017<br /><br/>
                 </li> 

                 <li>
                 Project base Android Game Development
                   <ul>
                  <li>Heavy Jump Android Game For Children.</li> 
                  <li>Wikabulary: An Educational Application.</li> 
                  <li>KulPop Android Game</li> 
                  <li>Fish Defender An Educational Game for Android </li>
                  <li>TagPictionary Tagalog Picture Dictionary</li>
                  </ul>
                 </li>
                </ul>
               </div>
               </div>
              </div>

        </div>
      </div>
    </div>
    </>

);
}
export default About;
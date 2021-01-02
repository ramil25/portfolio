import React,{useEffect} from 'react';
import Navbar from './NavComponent';

const Contact =() =>{
const title = "Contact Ramil";
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos === 100) {
        clearInterval(id);
      } else {
        pos+=0.5;
        elem.style.opacity = pos + '%';
      }
    }
  }
  useEffect(()=>{
    document.title ='Contact Me';
    myMove();
});
return(
    <>
    <Navbar setTitle={title} />
    <div className="container-fluid mt-3" id="animate">
    <div className="row">
    <div className="col-3">
    
    </div>
    <div className="col-md-6 col-sm-12 text-center p-1">
      <div className="header bg-secondary t-0 b-0">
    <h2 className="text-light p-3">Contact me at the following:</h2>
    </div>
    <div className="bg-danger text-light t-0 b-0">
    <h3>Email Address:</h3>
    <b>ramilkaharian25@gmail.com</b>
    </div>
    <div className="bg-warning text-light t-0 b-0">
    <h3>Contact Number:</h3>
    <b>+639969874926</b>
    </div>
    <div className="bg-primary text-light t-0 b-0">
    <h3>Facebook Account:</h3>
    <b>Ramil Lapitan Kaharian</b>
    </div>
    </div>
    <div className="col-3">
    
    </div>
    </div>
    </div>
    </>
);
}
export default Contact;

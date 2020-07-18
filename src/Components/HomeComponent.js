import React,{useEffect} from 'react';
import Navbar from './NavComponent';

const Home =({}) =>{
const title = "Home";
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
    document.title ='Welcome';
    myMove();
});
return(
    <>
    <Navbar setTitle={title} />
    <div className="container position-relative" id="animate">
        <div className="row">
            <div className="col-sm-12 home-info">
            <div className="text-center mt-5">
                <h2 className="">Welcome to My Web Portfolio!!!</h2>
                <img src="/images/1.jpg" width="200" height="200" className="border rounded-circle border-light" />
            </div>
            <div className="text-center mt-3 text-light text-stroke">
                <h3>Ramil L. Kaharian</h3>
                <h4>Web and Android Game Developer</h4>
            </div>
            </div>
            <div className="col-sm-12 bg-dark mb-0 text-center">
                <h5 className="font-italic text-light pl-5 pr-5 ml-5 mr-5 pt-2 pb-2 ">
                "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
               <br /> — Martin Fowler
                </h5>
                <h5 className="text-center mt-3 text-light">
                    Just Click "My Resume" button to download my updated Resume. Thank you and Godbless.
                </h5>
                <a className="btn btn-light btn-lg mt-2 mb-3" href="http://download1589.mediafire.com/iluv8a3vdn0g/zc7716tm2jtvmml/Kaharian+Resume.pdf" >My Resume</a>
            </div>
        </div>
    </div>
    </>
)


}
export default Home;
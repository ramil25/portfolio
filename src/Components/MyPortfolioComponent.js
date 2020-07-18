import React,{useEffect} from 'react';
import Navbar from './NavComponent';

const Portfolio =({}) =>{
const title = "'Ramil`s Portfolio'";
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
    document.title ='Ramil`s Portfolio';
    myMove();
});
return(
    <>
    <Navbar setTitle={title} />
    <div className="container" id="animate">

    </div>
    </>
);
}
export default Portfolio;
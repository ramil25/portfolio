import React,{useEffect} from 'react';
import Navbar from './NavComponent';

const Portfolio =() =>{
const title = "'Ramil`s Portfolio'";
let projects =[{
  id: 1,
  name:"Mathutor an Educational Game",
  description:"Mathematics Game with tutorial"
},
{
  id: 2,
  name:"TagPictionary",
  description:"Tagalog Picture Dictionary"
},
{
  id: 3,
  name:"KulPop",
  description:"An Filipino subject tutorial about media for students"
},
{
  id: 4,
  name:"Wikabulary",
  description:"An Filipino Vocabulary Games for students"
},
{
  id: 5,
  name:"React Project Advance Crud",
  description:"A project that made by react with advance Crud and Bootstrap 4"
}];
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
    document.title ='Ramil`s Portfolio';
    myMove();
});
const ProjectList=(props) =>{
  return<li className="bg-primary btn btn-primary list-group-item border mt-4"><h4>{props.name}</h4><br/>{props.description}</li>
}

const projectItem =projects.map((project)=>
 <ProjectList key={project.id} name={project.name} description={project.description} />
)

return(
    <>
    <Navbar setTitle={title} />
    <div className="container" id="animate">
      <div className="row">
      <ul className="list-group col-lg-4">
        {projectItem}
        </ul>
        </div>
    </div>
    </>
);
}
export default Portfolio;
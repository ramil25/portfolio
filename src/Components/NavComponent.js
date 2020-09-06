import React from 'react'
import { useHistory } from "react-router-dom";

const NavBar =({setTitle}) =>{
    const history = useHistory();

    const NavigationHandler =(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML==='Home'){
            history.push('/');
        }
        else if(e.target.innerHTML==='About Me'){
            history.push('/AboutMe');
        }
        else if(e.target.innerHTML==='My Portfolio'){
            history.push('/MyPortfolio');
        }
        else if(e.target.innerHTML==='Contact Me'){
            history.push('/ContactMe');
        }
    }

    return(
        <>
        <nav className="navbar sticky-top navbar-nav navbar-expand-lg navbar-dark bg-danger">
        <span className="navbar-brand mr-auto ml-3" onClick={()=>{history.push("")}}>{setTitle}</span>
        <ul className="navbar-nav ml-autocol-sm-12">
            <li onClick={NavigationHandler} className="btn nav-item text-light mr-4">Home</li>
            <li onClick={NavigationHandler} className=" btn nav-item text-light mr-4">About Me</li>
            <li onClick={NavigationHandler} className=" btn nav-item text-light mr-4">My Portfolio</li>
            <li onClick={NavigationHandler} className="btn nav-item text-light mr-4">Contact Me</li>
        </ul>
        </nav>
        </>
    );
}
export default NavBar;
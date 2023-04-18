import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Quary from "./searchParam";


const About=()=>{
    const navigate=useNavigate("/contact")

const goToContact=()=>{
navigate("/contact")
}

    return <>
    

    <section>
    <h1>About Page </h1>
    </section>
    <Quary/>
    <button onClick={()=>goToContact()}>Contact</button>
    <button onClick={()=>navigate(-1)}>GO BACK</button>
    
    </>
};

export default About;
import React from "react";
import {useSearchParams } from "react-router-dom";
const Name='name'
const Quary=()=>{

    const [searchParam,setSearchParam]=useSearchParams();
    if(!searchParam.get(Name))return;

    return <>
    <div style={{ fontSize: "50px" }}>
             Now showing {Name} {searchParam.get('name')}
           </div>
    
    </>
};

export default Quary;
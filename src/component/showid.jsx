import React from "react";
import { useNavigate,useParams } from "react-router-dom";

const ShowId=()=>{

    let {userId}=useParams();
    return <>
    <div style={{ fontSize: "50px" }}>
             Now showing post {userId}
           </div>
    </>
};

export default ShowId;
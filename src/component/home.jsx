import React from "react";

import Header from "./sub_components/Header";
import { Outlet } from "react-router-dom";
export default () => {
  return <>
  <Header/>
  <Outlet/>

  
  
  </>
};

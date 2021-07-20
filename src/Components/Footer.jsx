import React from "react";
import App from "./App";

var currentYear = new Date().getFullYear();

function Footer(){
   return (
       <footer>
           <p>Copyright ©{currentYear}</p>
       </footer>
   )
}

export default Footer;
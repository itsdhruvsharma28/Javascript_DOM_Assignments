 /*change contact into Project */
 const p=document.getElementsByTagName("li");
 p[2].innerHTML=`<a href="./contact/contact.html">Project</a>`;

 /*now we change placeholder name*/
 let place =document.querySelector("header nav div input");
 place.placeholder="search My projects";

 /*we change placeholder of inputs*/
 let plc_1=document.getElementById("main_left_details");
 plc_1[0].placeholder="FSJS 2.O";
 plc_1[1].placeholder="fsjs@inuron.ai";
 plc_1[2].placeholder="Hello world";

 let plc_2=document.getElementById("main_right_details");
 plc_2[0].placeholder="FSJS 2.O";
 plc_2[1].placeholder="fsjs@inuron.ai";
 plc_2[2].placeholder="Hello world";
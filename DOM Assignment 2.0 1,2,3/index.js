 /*adding new element using DOM*/ 
 let li=document.createElement("li");
 li.innerHTML=`<a>Hire me</a>`;
 let ul=document.querySelector("header nav ul");
ul.appendChild(li);

/*change contact into Project */
const p=document.getElementsByTagName("li");
p[2].innerHTML=`<a href="./contact/contact.html">Project</a>`;  

/*now we change placeholder name*/
let place =document.querySelector("header nav div input");
place.placeholder="search My projects";

/*Now we change text Content */
let content=document.getElementsByTagName("span");
content[2].innerText="an Employee"; 
content[3].innerText="inuron intelligence Pvt Ltd";

/*now we change image part*/
let image=document.querySelector("img");
  image.src="./ds.jpg";
 /* we can also write this image.setAttribute("src", "./ds.jpg");*/

 /*we add new button */
 let new_btn=document.createElement("button");
 new_btn.innerText="Contact Me";
let right_section=document.getElementById("hero")
right_section.appendChild(new_btn);    
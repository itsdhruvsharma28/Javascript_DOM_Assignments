let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

/*change contact into Project */
const p = document.getElementsByTagName("li");
p[2].innerHTML = `<a href="./contact/contact.html">Project</a>`;

/*now we change placeholder name*/
let place = document.querySelector("header nav div input");
place.placeholder = "search My projects";

/*now we change color of h3 element*/
let new_color = document.getElementsByTagName("h3");
new_color[0].style.backgroundColor = "pink";
new_color[1].style.backgroundColor = "pink";
new_color[2].style.backgroundColor = "pink";
new_color[3].style.backgroundColor = "pink";

/*now we add  new div tag tags*/
let new_tag = document.createElement('div');
new_tag.innerHTML = `<h3>Skills</h3>`;
new_tag.className = "accordian";
new_tag.id = "accord4";
new_tag.style.backgroundColor = "pink";
let acs = document.getElementsByClassName("accordian-wrapper")[0];
acs.appendChild(new_tag);

let n=document.querySelector(".accordian");
 n.innerHTML[4]=`<p>efef></p>`;

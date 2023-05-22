const ab = document.querySelector(".btns");
let x = document.createElement("a");
x.classList.add("new-link");
x.textContent="pro subscription";
x.style.backgroundColor="blueviolet";
x.style.color="white";
x.style.borderRadius="3px";
x.style.fontSize="25px";
x.style.padding="10px 15px";
x.href="index.html";
ab.append(x);

let cards=document.querySelector(".recipe-gallery");
let new_card=document.createElement("div");
new_card.className="card";
new_card.innerHTML=`<h3>add your 6th card here</h3>`;
cards.appendChild(new_card);
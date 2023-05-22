let newhadding=document.createElement("h2");
newhadding.innerText=`This Is My New Headding.`;
newhadding.className="new-head";
let newpara=document.createElement("p");
newpara.innerText=`zfhusi sfnsjzdf zsfns zsfjsiod zsfjsz zsfjzsoi zsfhsdz zsfnhsdzzs sfhsio fsido dsoifjs dndvmfklsfgslk fjsfs ksnfjs sfjksnf `;
newpara.className="new-p";

let acces_1=document.getElementsByClassName("col-lg-4 new");
acces_1[0].appendChild(newhadding);
acces_1[0].appendChild(newpara);

let scroll_btn=document.getElementsByClassName("col-lg-4 new");
 scroll_btn[0].style.height="33rem";
 scroll_btn[0].style.width="25rem"; 
 scroll_btn[0].style.gap="30px";   
 scroll_btn[0].style.overflow="scroll";

let bgc_image=document.getElementsByTagName("body");
bgc_image[0].style.backgroundImage="none";

let click_btn=document.querySelector(".navbar-toggler");
click_btn.addEventListener("click",features);

function features(){
let pq=document.querySelector(".elements");
}
let abc=document.createElement("div");
abc.className="elements";
abc.innerHTML="Home<br>New<br>Popular<br>Trending<br>Categories";

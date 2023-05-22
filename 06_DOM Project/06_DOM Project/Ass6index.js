let logo_img=document.getElementsByClassName("logo");
logo_img[0].setAttribute("src", "./assets/ineuron-logo.png");
logo_img[0].setAttribute("alt", "inuron-img");
logo_img[0].setAttribute("width", "600px");

let linkdin=document.createElement("img");
  linkdin.setAttribute("src", "./assets/linkedin-icon.svg");
  linkdin.setAttribute("alt", "linkdin-logo");
  linkdin.setAttribute("width", "19px");
   link=document.getElementsByClassName("footer_social");
   link[0].appendChild(linkdin);
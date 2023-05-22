let anchor=document.querySelectorAll("section div a");
     anchor[1].remove();
     anchor[3].remove();
     anchor[5].remove();
     anchor[7].remove();
     anchor[9].remove();     

     let input_bar=document.getElementsByClassName("main__form-input");
       input_bar[0].placeholder="javascript, react, node, Html and Css, MERN";
       input_bar[0].disabled=false;
  
      let submit_button=document.getElementsByClassName("main__form-btn");
      submit_button[0].disabled=false;
      submit_button[0].style.backgroundColor="black";
      submit_button[0].style.color="white";
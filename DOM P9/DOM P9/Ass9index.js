let title_text=document.getElementsByTagName("h1");
        title_text[0].style.color="red";

        let image_btn=document.getElementsByClassName("add-to-cart");
        image_btn[0].innerHTML=`<img src="./images/icon-cart.svg" />Add to Cart`;
     
      var bgc_btn=document.getElementsByClassName("add-to-cart");
      bgc_btn[0].addEventListener("mouseover", changebgc);

      function changebgc() {
        let x =document.getElementsByClassName("add-to-cart");
        x[0].style.backgroundColor +="red";

      }
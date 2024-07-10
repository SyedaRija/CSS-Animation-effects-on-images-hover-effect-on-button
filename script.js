const button = document.querySelector(".btn");

      button.addEventListener("click", e => {
        e.preventDefault();
        button.classList.add("animate")


        setTimeout(() => {
          button.classList.remove("animate")
        }, 600);
      });

      window.addEventListener("scroll", reveal);

      function reveal(){
          let reveals = document.querySelectorAll(".reveal");
      
          for (let i = 0; i < reveals.length; i++) {
              let windowheight = window.innerHeight;
              let revealTop = reveals[i].getBoundingClientRect().top;
              let revealPoint = 150;
      
              if(revealTop < windowheight - revealPoint){
                  reveals[i].classList.add("active");
              }
              else{
                  reveals[i].classList.remove("active");
      
              }
              
          }
      
      }

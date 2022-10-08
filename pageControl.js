// assigning variables
const link = document.querySelectorAll("#prevent");
const darkHeader = document.querySelector(".lgh-section");
const mobile_link = document.querySelector(".home-container");
const about_container = document.querySelector(".about-container");
const resume_container = document.querySelector(".resume-container");
const skills_container = document.querySelector(".skills-container");
const portfolio_container = document.querySelector(".portfolio-container");
const contact_container = document.querySelector(".contact-container");

window.addEventListener('DOMContentLoaded', () => {
 darkHeader.style.display = "none";
 about_container.style.display = "none";
 resume_container.style.display = "none";
 skills_container.style.display = "none";
 portfolio_container.style.display = "none";
 contact_container.style.display = "none";
})
// ///pages
let Home = "Home";
let About = "About";
let Resume = "Resume";
let Skills_Services = "Skills &amp; Services";
let Portfolio = "Portfolio";
let Contact = "Contact";
// ///////


// prevent refreshing
link.forEach((e) => {
  e.addEventListener("click", (e) => {
    // console.log(e.target)
    page = e.target.innerHTML;
   
   // /////page to show
    if (page === Home) {
      console.log("home!!!");

      // darkHeader.style.display = "none";
      darkHeader.style.opacity = "0.3";
      setTimeout(() => {
        darkHeader.style.display = "none";
      }, 900);
 about_container.style.display = "none";
 resume_container.style.display = "none";
 skills_container.style.display = "none";
 portfolio_container.style.display = "none";
 contact_container.style.display = "none";

      if (window.matchMedia("(min-width: 769px)").matches) {
        /* the viewport is at least 400 pixels wide */
        console.log("remove now");
        mobile_link.style.display = "";
      }
      mobile_link.setAttribute("style", "display: flex !important");
    }

   
     if (page === About) {
      console.log("About");
   darkHeader.style.display = "";
      darkHeader.style.opacity = "1";
      

      if (window.matchMedia("(min-width: 769px)").matches) {
       /* the viewport is at least 400 pixels wide */
       console.log('remove now')
       mobile_link.style.display='none'
      }
      // mobile_link.setAttribute("style", "display: none !important");
 about_container.style.display = "";
 resume_container.style.display = "none";
 skills_container.style.display = "none";
 portfolio_container.style.display = "none";
 contact_container.style.display = "none";
      mobile_link.setAttribute("style", "display: none !important");


   }
    if (page === Resume) {
     console.log("Resume");
     

 darkHeader.style.display = "";
 darkHeader.style.opacity = "1";

       if (window.matchMedia("(min-width: 769px)").matches) {
         /* the viewport is at least 400 pixels wide */
         console.log("remove now");
         mobile_link.style.display = "none";
     }
      mobile_link.setAttribute("style", "display: none !important");
     
 about_container.style.display = "none";
 resume_container.style.display = "";
 skills_container.style.display = "none";
 portfolio_container.style.display = "none";
 contact_container.style.display = "none";

   }



    if (page === Skills_Services) {
 darkHeader.style.display = "";
 darkHeader.style.opacity = "1";

  if (window.matchMedia("(min-width: 769px)").matches) {
    /* the viewport is at least 400 pixels wide */
    console.log("remove now");
   mobile_link.style.display = "none";
     }
      mobile_link.setAttribute("style", "display: none !important");
     
 about_container.style.display = "none";
 resume_container.style.display = "none";
 skills_container.style.display = "";
 portfolio_container.style.display = "none";
 contact_container.style.display = "none";
   }
   


    if (page === Portfolio) {
 darkHeader.style.display = "";
 darkHeader.style.opacity = "1";
     
  if (window.matchMedia("(min-width: 769px)").matches) {
    /* the viewport is at least 400 pixels wide */
    console.log("remove now");
    mobile_link.style.display = "none";
     }
      mobile_link.setAttribute("style", "display: none !important");
 about_container.style.display = "none";
 resume_container.style.display = "none";
 skills_container.style.display = "none";
 portfolio_container.style.display = "";
 contact_container.style.display = "none";
     
   }
   


    if (page === Contact) {
 darkHeader.style.display = "";
 darkHeader.style.opacity = "1";
     
  if (window.matchMedia("(min-width: 769px)").matches) {
        /* the viewport is at least 400 pixels wide */
        console.log("remove now");
        mobile_link.style.display = "none";
     }
      mobile_link.setAttribute("style", "display: none !important");
 about_container.style.display = "none";
 resume_container.style.display = "none";
 skills_container.style.display = "none";
 portfolio_container.style.display = "none";
 contact_container.style.display = "";
     
    }
   
   
   
  });
});


// ///// controlling on resizing window

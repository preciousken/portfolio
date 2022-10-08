const toggle = document.querySelector('.toggle-icons')
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let mobile_contents = document.querySelector(".mobile-contents");
let prevent = document.querySelectorAll('#prevent')

// controll for what to show


// prevent refreshing
prevent.forEach((e) => {
 e.addEventListener("click", (e) => {
  e.preventDefault()
   span1.classList.remove("rota1");
   span2.classList.remove("rota2");
   span3.classList.remove("rota3");
   mobile_contents.classList.remove("show-mobile-contents");
 })
})


toggle.addEventListener("click", () => {
 span1.classList.toggle("rota1");
 span2.classList.toggle("rota2")
 span3.classList.toggle("rota3");
 console.log('clicked')

 // ////show mobile contents////
 mobile_contents.classList.toggle('show-mobile-contents')
})



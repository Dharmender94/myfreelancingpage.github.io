let hamburger = document.querySelector("#hamburger_icon")
let navLinks = document.querySelector(".bottom_nav-links")
let close = document.querySelector("#close")

if(hamburger){
  hamburger.addEventListener("click",()=>{
    navLinks.classList.add("active")
  })
} 

if(close){
  close.addEventListener("click",()=>{
    navLinks.classList.remove("active")
  })
}
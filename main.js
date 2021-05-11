/*------------------------------------------  Date copyright  ------------------------------------------*/
const year = new Date();
document.querySelector("#year").innerText = year.getFullYear();

/*------------------------------------------ MENU HAMBURGER  ------------------------------------------*/
const burger = document.querySelector("#hamburger");

burger.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-responsive");
  document.querySelector("ul").classList.toggle("ul-responsive");
  document.querySelector(".box-burger").classList.toggle("active");
  burger.classList.toggle("active");
});

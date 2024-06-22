const wrapper= document.querySelector(".wrapper");
const loginLine=document.querySelector(".login-link");
const registerLink=document.querySelector(".registerLink");

registerLink.addEventListener("click", () =>{
    wrapper.classList.add("active");
});

loginLine.addEventListener("click", () =>{
    wrapper.classList.remove("active");
});

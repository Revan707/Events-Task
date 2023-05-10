const myMenu=document.querySelector(".myMenu");
const menuBody=document.querySelector(".menu_body")
let state="flex"
myMenu.addEventListener("click",()=>{
    menuBody.style.display=state
    state=state=="flex"?"none":"flex"
})
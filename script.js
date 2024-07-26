const menuOpen = document.querySelector(".menuOpen")
console.log(menuOpen)
const menuClose = document.querySelector(".menuClose")

const sidebar = document.querySelector(".sidebar")



menuOpen.addEventListener('click',()=>{
   sidebar.style.display="flex";
})

menuClose.addEventListener('click',()=>{
    sidebar.style.display="none";

})
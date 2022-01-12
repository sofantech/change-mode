let change_mod=document.getElementById("change-mod");
let body=document.querySelector("body");
change_mod.onclick=function(){
    change_mod.classList.toggle("active");
    body.classList.toggle("active");
}
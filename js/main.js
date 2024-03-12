"use strict";


const modalBtn = document.querySelector("#registration-form");
const regForm = document.querySelector("#modal");
const spanX = document.querySelectorAll(".exit")[0];
const spanX1 = document.querySelectorAll(".exit")[1];


const loginFormBtn = document.querySelector("#login-form");
const logForm = document.querySelector("#login-modal");



modalBtn.addEventListener("click", ()=>{
    regForm.style.display="block";
});

window.addEventListener("click", (event)=>{
    if(event.target==regForm || event.target==logForm){
        regForm.style.display="none";
        logForm.style.display="none";
    }
});

spanX.addEventListener("click", ()=>{
    regForm.style.display="none";
});

spanX1.addEventListener("click", ()=>{
    logForm.style.display="none";
});

loginFormBtn.addEventListener("click", ()=>{
    logForm.style.display="block";
});


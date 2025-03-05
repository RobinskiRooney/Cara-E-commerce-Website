// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
let mainImg = document.getElementById("MainImg");
let products = document.getElementsByClassName("pro");
let smallImg = document.getElementsByClassName("small-img");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*flip products*/

[...smallImg].forEach(img =>img.addEventListener("click",()=>{
    mainImg.src = img.src;
}));
/*View SIngle Product*/
[...products].forEach(product => product.addEventListener("click",() => {
    window.location.href='sproduct.html';
}))

let input = document.createElement("input");
let button = document.createElement("button")

button.innerText = "click me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);
input.placeholder ="username";
button.setAttribute("id","btn");
let btn = document.querySelector('#btn');
btn.classList.add('btnstyle');

let h1 = document.createElement("h1");
h1.innerText = "hi am h1";
h1.classList.add('h1style');
document.querySelector('body').append(h1);

let p1 = document.createElement('p');
p1.innerHTML=  "Apna college <b>delta</b> practise";
document.querySelector('body').append(p1);
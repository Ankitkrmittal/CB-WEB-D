/// evnets 

let btn = document.querySelector('button');
btn.addEventListener("click", () => {
    console.log("button is presed ");
})
btn.addEventListener("mouseout",(event) =>{
    console.log(event);
    console.dir(event);
})

let input = document.querySelector("input");
input.addEventListener("keypress",(event)=>{
    console.log(event.key);
    console.log(event.value);
   // console.log(event);
});
let div = document.querySelector("div");
window.addEventListener("scroll" ,(event)=>{
    alert("you are scrolling");
    console.log("you are scrolling")
});
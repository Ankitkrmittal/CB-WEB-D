

hello();
function hello() {
    console.log("hello");
}

outerfun();

function outerfun() {
    console.log("i am outside");
   
    function innerfun() {
        console.log("i am inside");
    }
    return innerfun;
}



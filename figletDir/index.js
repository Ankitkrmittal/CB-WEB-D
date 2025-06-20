const figlet = require("figlet");

figlet("hello world",function(err,data){
    if(err){
        console.log("some random error occur");
        return;
    } 
    console.log(data);
})
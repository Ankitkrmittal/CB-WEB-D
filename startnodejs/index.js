const express = require("express");
const app = express();
console.dir(app);

let port = 3000;
app.listen(port,()=>{
    console.log(`app is listenin on ${port}`);
})

app.use((req,res) =>{
    console.log("new incomming request");
    res.send("this is just a basic response");
});
app.get("/:username",(req,res)=>{
    console.log(req.params);
    res.send("hello i am root");
})
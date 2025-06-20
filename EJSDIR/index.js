const express = require("express");

const app = express();
 
let port = 8000;
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
});

// app.get("/ig/:username",(req,res)=>{
//    let {username} =req.params;
//    res.render("instagram.ejs",{username});

// })

app.get("/ig/:username",(req,res)=>{
    let {username } = req.params;
     const instaData = require("./data.json");
    res.render("instagram.ejs",{data :instaData.username});

 
 })


app.listen(port,()=>{
    console.log(`listening on ${port}`);

})
let url ="https://catfact.ninja/fact"
let url2 = "https://dog.ceo/api/breeds/image/random"

// fetch(url)
// .then( (res)=>{
//     console.log(res);
//     // res.json().then((data)=>{
//     //     console.log(data.fact);
//     // })
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((e)=>{
//   console.log(e);
// })



// async function getFacts() {
//    let res = await fetch(url);
//    let data = await res.json();
//    console.log(res);
// }


//using axios


// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts()
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// })
// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         //console.log(res.data);
//         return res.data.fact;

//     } catch(e) {
//         console.log(e);
//         return "no fact found";
//     }
// }


//dog api images

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
     let link = await getImages();
     let image = document.querySelector("#result");
     image.setAttribute("src",link);
});

async function getImages() {
  try{
    let res = await axios.get(url2);
    return res.data.message;

  } catch(e) {
    console.log(e);

    return "no image found";
  }
}

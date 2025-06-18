let kalTimeSeAuga = new Promise((resolve,reject)=>{
    let kalTimeseaaya = true;
    if(kalTimeseaaya) {
        resolve("Aaja andar baith jaa")
    } else {
        reject("bahar nikal nalayak")
    }
})
kalTimeSeAuga
  .then((msg)=>{
    console.log(msg)
    return "task complete kar"
  })
  .then((msg)=>{
    console.log(msg)
    return "sabash"
  })
  .then((msg)=>{
    console.log(msg)
  })
  .catch((err)=>{
    console.log(err)
  })
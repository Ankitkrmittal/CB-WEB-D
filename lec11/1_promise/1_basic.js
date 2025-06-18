let kalTimeSeAuga = new Promise((resolve,reject)=>{
    let kalTimeseaaya = false;
    if(kalTimeseaaya) {
        resolve("Aaja andar baith jaa")
    } else {
        reject("bahar nikal nalayak")
    }
})
kalTimeSeAuga
  .then(()=>{
    console.log(msg)
  })
  .catch((err)=>{
    console.log(err)
  })
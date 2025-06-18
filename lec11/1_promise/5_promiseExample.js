function download(){
    console.log("Download started")
    return new Promise((resolve,reject)=>{
        let downloadCompleted = true;
        setTimeout(()=>{
            if(downloadCompleted) {
                resolve("download complete")
            } else{
                reject("download not competed")
            }
            
        },5000)
    })
    
}

function compress(msg){
    console.log(msg)
    console.log("compress started")
    return new Promise((resolve,reject)=>{
        let compressCompleted = true;
        setTimeout(()=>{
            if(compressCompleted){
                resolve("compress completed")
            } else {
                reject("compress notcompleted")
            }
        },4000)
    })
    
}

function upload(msg){
    console.log(msg)
    console.log("Upload started")
    return new Promise((resolve,reject)=>{
         let uploadcompleted= true;
        setTimeout(()=>{
            if(uploadcompleted){
                resolve("upload completed")
            } else{
                reject("upload not ompleted")
            }
        },5000)
    })
    
}

function allDone(msg){
    console.log(msg)
    console.log("Process Completed")
}

download()
  .then()
  .then(upload)
  .then(allDone)
  .catch((msg)=>{
     console.log(msg)
  })
  
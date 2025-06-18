
let list = document.querySelector('.movie-list')
let childern = FileList.childern

for(let i=0;i<childern.length;i++) {
   console.log(childern[i])
}
setTimeout(()=>{
    childern[0].remove()
},4000)

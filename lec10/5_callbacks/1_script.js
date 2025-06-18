function f1(cb1,cb2) {
    setTimeout(()=>{
        console.log("Maggi aaa gyi gharpe!")
        cb1(cb2)
    },5000)
}
function f2(cb) {
    setTimeout(()=>{
        console.log("maggie ban gyi!")
        cb()
    },4500)
}
function f3() {
    setTimeout(()=>{
        console.log("maggie serve ho gyi")
    },4000)
}
f1(f2,f3)
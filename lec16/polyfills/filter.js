Array.prototype.myfilter = function(fun) {
    let newArr = [];
    let arr = this
    for(let i=0;i<arr.length;i++) {
        if(fun[i],i,arr) {
            newArr.push(arr[i])
        }
        
    }
}
let fun =(item,index,arr)=>{
    return item%2==0;
}
let arr = [1,2,3,4,5]
let newBrr = arr.myfilter(fun)

console.log(newBrr);

//reduced function bana h aaj ka homework
let arr= [2,3,5,677,77,77,44,3];
let arrayaverage =(arr) =>{
    let n = arr.length;
    let sum =0;
    for(let i=0;i<n;i++) {
         sum += arr[i] 
    }
    sum /=n;
    
    return sum;
}
console.log(arrayaverage(arr))

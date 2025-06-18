 let arr1= [1,2,3,4,5,6,7,8,9]

 
 let sum = arr1.reduce((accumulator,item,index,arr)=>{
    console.log(accumulator,item,index,arr)
    
    return accumulator+=item;
 })
 console.log(sum)
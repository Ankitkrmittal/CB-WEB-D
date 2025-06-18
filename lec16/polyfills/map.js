Array.prototype.squareMap = function() {
    let newArray = [];
    let arr = this;

    for(let i=0;i<arr.length;i++) {
        newArray.push(arr[i]*arr[i]);
    }
    return newArray
}
let arr = [1,2,3,4]
let newArr = arr.squareMap()
console.log(newArr)
function add(num) {
    if(!num)return 0;
    return function helper(num1) {
        if(!num1) return num;
        num += num1;
        return helper; 
    }
}
console.log(add(2)(3)());


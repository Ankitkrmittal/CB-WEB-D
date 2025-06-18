
function memozie() {
     let cache = {}

     return function(n) {
        if(cache[n]) return cache[n]
        function fact(n) {
            let ans =1;
            console.log("fact is envoked for n")
            for(let i=1;i<=n;i++) {
                ans*=i;
                cache[i]= ans;
            }
            return ans;
        }
        
        let ans = fact(n);
        
        return ans;
     }
}
let x= memozie(fact);
console.log(x(5))


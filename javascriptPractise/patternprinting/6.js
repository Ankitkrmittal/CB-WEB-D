let n =5;
let m =2;

for(let i=0;i<n;i++) {
    let row ="";
    for(let j =0;j<m*i;j++) {
        row +="  ";
    }
    for(let j=0;j<n-i;j++) {
        row +="* ";
    }
    console.log(row);
}
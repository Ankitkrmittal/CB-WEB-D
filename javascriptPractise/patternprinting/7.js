let n =5;
let m =5;

for(let i=1;i<=n;i++) {
    let row ="";
    for(let j=1;j<=m;j++) {
        if(i==1||i==n||j==1||j==n){
            row +="* ";
        } else {
            row += "  "
        }
        
    }
    console.log(row);
}


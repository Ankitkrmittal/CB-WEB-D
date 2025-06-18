function printPersonDetails(city) {
    console.log(this.name);
    console.log(this.age);
    console.log(this.college);
    console.log(city)
}
let p1 = {
    name:"shyam",
    age:20,
    college:"DTU"
}
let p2 ={
    name:"Ram",
    age:21,
    college:"IIT"
}


printPersonDetails.call(p2,"Delhi")
//apply has same functionality as call except here parameters required by function
printPersonDetails.apply(p2,["delhi"])

let f1 = printPersonDetails.bind(p1,"delhi")
let f2 = printPersonDetails.bind(p2,"delhi")

f1();
f2();


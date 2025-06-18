class person{
    name ="person"  //classfield
    greet(){
        console.log("hi")  // classmethod
    }
}
let  p1= new person();
console.log(p1.name)

console.log(p1.name,person.name)
let person= {
    name:"person",
    greet:function() {
        console.log("hello")
    } 
}
let jack = Object.create(person)
let tom = Object.create(person)

console.log(jack.name,tom.name)
console.log(jack)
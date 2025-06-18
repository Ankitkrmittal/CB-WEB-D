class vehicle{
    constructor(company,year) {
        //console.log("this is vechile contructor")
        this.company = company;
        this.year = year;
    }

    details() {
        console.log(`this vehile was made in ${this.year} by ${this.company}`)
    }
}
class car extends vehicle {
    constructor(name,price,company,year) {
        super(company,year)
       // console.log('this is car constructor')
        this.name = name;
        this.price =price;
    }
    start() {
        console.log("this car is running")
    }
    details() {
        console.log(`this is ${this.name} car with a price of ${this.price}`)
        super.details()
    }
} 
//let v1 = vehicle("BYD",2024)
let c1 = new car('punch','8L','tata','2024')
c1.details()
console.log("car object",c1)
console.log("c1 ka parent",c1.prototype)


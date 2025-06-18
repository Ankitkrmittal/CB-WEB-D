class vehicle{
    constructor(company,year) {
        this.company = company;
        this.year = year;
    }

    details() {
        console.log("this vehile was made in $(this.year) by $(this.company")
    }
}
class car extends vehicle {
    start() {
        console.log("this car is running")
    }
}
//let v1 = vehicle("BYD",2024)
let c1 = new car("tata",2016)


class car{
    constructor(name,company,price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
    static comparePrice(carA,carB) {
        return carA.price-carB.price;
    }
}
let c1 = new car('curvv')
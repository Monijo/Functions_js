class Auto{
    constructor(brand, maxSpeed){
        this.brand = brand;
        this.maxSpeed =maxSpeed;
        this.engine =false;
        this.speed = 0;
    }
    startsEngin(){
        this.engine =true;
        console.log("Engine start")
    }
    stopEngin(){
        this.engine = false;
        console.log("Engin stop")
    }
    speedUp(amount){
        if( this.engine){
            this.speed = Math.min(this.speed +amount, this.maxSpeed)
            console.log(`Your speed is ${this.speed}`)
        }else{
            console.log("Start engin first")
        }
    }
    slowDown(amount){
        this.speed = Math.max(this.speed - amount, 0)
        console.log(`Your speed is ${this.speed}`)
    }
}
const bmw = new Auto('bmw', 140);
bmw.startsEngin()
bmw.speedUp(123)
bmw.speedUp(150)

class Van extends Auto{
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }
    speedUp(amount) {
        super.speedUp(amount * 0.9);
    }
    stopEngin() {
        if(!this.speed){
            super.stopEngin()
        }else{
            console.log("Slow down first")
        }
    }

    emergencyStart(){
        this.startsEngin()
    }

}

const bmw2 = new Van("Seria 2", 160, 7)
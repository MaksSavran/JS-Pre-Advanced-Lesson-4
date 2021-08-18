class CoffeeMake {
    constructor(typeOfCoffee) {
        this.typeOfCoffee = typeOfCoffee;
    }
    on() {
        console.log('I am turned on');
    }
    off() {
        console.log('I am turned off');
    }
}

class DripCoffeeMaker extends CoffeeMake {
    constructor(typeOfCoffee){
        super(typeOfCoffee);
    }
    makeCoffee() {
        console.log(`I make some coffee from ${this.typeOfCoffee}`);
    }
}

class EspressoMachine extends CoffeeMake {
    constructor(typeOfCoffee){
        super(typeOfCoffee);
    }
    makeEspresso() {
        console.log(`I make espresso from ${this.typeOfCoffee}`);
    }
}


class CoffeeMachine extends CoffeeMake{
    constructor(typeOfCoffee, milk, sugar) {
        super(typeOfCoffee);
        this.milk = milk;
        this.sugar = sugar;
    }
    makeCappuccino() {
        console.log(`I make cappuccino form ${this.typeOfCoffee}, ${this.milk}, ${this.sugar}`)
    }
    makeLatte() {
        console.log(`I make latte form ${this.typeOfCoffee}, ${this.milk}, ${this.sugar}`)
    }
}




let drip = new DripCoffeeMaker('ground coffee');
let espresso = new EspressoMachine('pressed ground coffee');
let coffeeMachine = new CoffeeMachine('coffee beans', 'milk', 'sugar');

// console.log('drip', drip);
// console.log('espresso', espresso);
// console.log('coffeeMachine', coffeeMachine);

// drip.on();
// drip.makeCoffee();
// drip.off();

// espresso.on();
// espresso.makeEspresso();
// espresso.off();

// coffeeMachine.on();
// coffeeMachine.makeCappuccino();
// coffeeMachine.makeLatte();
// coffeeMachine.off();

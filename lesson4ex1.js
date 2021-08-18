class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const secondWorker = new Worker('Artem', 'Popov', 15, 25);
// console.log(worker.name);
// console.log(worker.surname); 
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
// console.log(secondWorker.getSalary());

// console.log(worker.getSalary() + secondWorker.getSalary());
class Traveler {
    constructor(name){
        this._name = name;
        this._comida = 1;
        this._isHealthy = true;
    }
    hunt() {
        this._comida += 2;
    }
    eat() {
        if(this._comida > 0) {
            this._comida--;
        }else {
            this._isHealthy = false;
        }
        
    }
}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passageiros = [];
    }
    getAvailableSeatCount() {
        return this._capacity - this._passageiros.length;
    }
    join(pessoa) {
        if(this.getAvailableSeatCount() > 0) {
            this._passageiros.push(pessoa)
        } 
    }
    shouldQuarantine() {
        return this._passageiros.some((pessoa) => pessoa._isHealthy == false)
    }
    totalFood() {
        return this._passageiros.reduce((acc, cur) => acc + cur._comida, 0);
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
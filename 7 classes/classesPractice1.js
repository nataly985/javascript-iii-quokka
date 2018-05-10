// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Ninja{
    constructor(name, bestTime, farthest ,difficulty){
        this.name = name;
        this.bestTime = bestTime; 
        this.farthest = farthest;
        this.difficulty = difficulty;

    }

    updateTime(newTime){
        if (this.bestTime > newTime){
            this.bestTime = newTime;
        }
    }

    upgradeDifficulty(){
        this.farthest++;
    }
    display(){
        return `The amazing ninja ${this.name} completed the course in ${this.bestTime} seconds. With a difficulty of ${this.farthest};
    }
}

var brack = new Ninja('Brack', 50000000, .0000);

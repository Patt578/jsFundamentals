class User{
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }
    greet(){
        console.log("Welcome back, " + this.name);
    }
    status(){
        console.log('Current statu: '+this.type);
    }
}

let theDude = new User('Anonymous dude');

theDude.greet();


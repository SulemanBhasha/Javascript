class Notes {
    constructor(name,age){
        this.name=name
        this.age= age
    }
    
}

let notes = new Notes("Suleman",19)
console.log(notes);

console.log("-----------------------------------");

const user ={
    userName:"Suleman",
    password:"Anfal",
     getUserdetails: function(){
            console.log("user is find " + this.userName);     
    }
    
}
console.log(user.userName);
console.log(user.getUserdetails());
console.log(this);
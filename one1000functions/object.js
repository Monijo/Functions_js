const user1 ={
    name: 'Monika',
    score: 3,
    increment: function(){
        user1.score++
    }
}

console.log(user1);
user1.increment();
console.log(user1);

const user2 ={}
user2.name = "Przemek"
user2.score = 6
user2.increment = function (){
    user2.score++;
}

const user3 = Object.create(null)

function userCreator(name, score){
    const newUser={};
    newUser.name = name
    newUser.score = score
    newUser.increment = function (){

    newUser.score++;
}
    return newUser
}

const userFunctionStore={
    increment: function() {

        this.score++
    },
    login: function(){console.log("Loggin in")}
}
function userCreator2(name, score){
    const newUser=Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const user6 = userCreator2("Mateusz", 4)
console.log(user6.hasOwnProperty('score'))

//----

function userCreator3(name, score){
    this.name = name;
    this.score=score;
}
userCreator3.prototype.increment = function(){
    this.score ++
}
const user7 =new userCreator3('Monika', 3);
user7.increment();
console.log(user7);

// map Array prototype custom implementation
Array.prototype.map = function(cb){
    const newArr = []
    this.forEach((e, id, arr) => {
        newArr.push(cb(e * 2, id, arr));
    })
    return newArr;
}

Array.prototype.filter = function(fn){
    const newArr = [];
    for(let i = 0; i<this.length; i++ ){
        const result = fn(this[i], i , this)
        if(Boolean(result) && this[i] !== 42){
            newArr.push(this[i])
        }
    }
    return newArr
}

//-----2015 Syntatic sugar

class UserCreator{
    constructor(name, score) {
        this.name = name;
        this.score=score;
    }
    increment(){
        this.score++
    }
    login(){
        console.log("Login")
    }
}

const user8 =new UserCreator("Krzysiek", 9)


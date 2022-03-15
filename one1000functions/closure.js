// function fullSentence(name, magic){
//     const counter = 0;
//     function sentence(city){
//         return ` Mam na imie ${name} i pochodze z ${city}`
//     }
//     return sentence
// }


// const getText = fullSentence('monika') // deklaracja sentence
// console.log(getText)// tu clouser
// console.log(getText("Kraków"))


// // Funkcja power 10(digit)

// // const power10 =(digit) => digit **10
// // console.log(power10(2))

// function raiseToPower2(power){
//     return function inner(digit){
//         return digit ** power
//     }
// }

// const raiseToPower=(power)=> (digit) => digit ** power;

// const power10 = raiseToPower(10)
// const power2 = raiseToPower(2)
// const power1 = raiseToPower(1)

// console.log(power10(2))
// console.log(power2(2))
// console.log(power1(2))

// //uui -->1,2,3,4

// function generatorUUID(id=0){
//     function next(){
//         const result = id;
//         id ++;
//         return result;
//     }
//     return next
// }

// const genUUIS2 = (id=0) => () => id++;

// const uuid = generatorUUID()
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
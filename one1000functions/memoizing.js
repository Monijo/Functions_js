// // const cashe =  {};

// // function add(a,b){
// //     if(cashe[`${a}${b}`] === undefined){

    

// //     //complex logic simulation
// //     for(let i=0; i< 10000; i++){
// //         let result = i* i 
// //     }
// //     console.log("calculating")
// //     cashe[`${a}${b}`] == a+b
// // }

// //     return cashe[`${a}${b}`] 
// // }

// // console.log("start")
// // add(1,2)
// // add(1,3)
// // add(1,3)
// // add(1,3)
// // console.log("Done")

// // function cachAdd(){
// // const casche = {}

// // function add(a,b){
// //     if(cache[`${a}${b}`] === undefined){

    

// //             //complex logic simulation
// //             for(let i=0; i< 10000; i++){
// //                 let result = i* i 
// //             }
// //             console.log("calculating")
// //             cache[`${a}${b}`] == a+b
// //         }
        
// //             return cache[`${a}${b}`] 
// // }
// // }


// function cache(fn){
//     const c = {}
//     function inner(a,b){
//         if(c[`${a}${b}`] === undefined){
//             c[`${a}${b}`] = fn(a,b)
//         }
//         return c[`${a}${b}`]
//     }
//     return inner
// }
    

// function add(a,b){

//     //zlozona logika
// return a+b

// }

// const add = cache(add)
     
// console.log()



// ///moj cache!!uniwersalny!!!!!


// function cache(fn){
//     const c = {}
//     function inner(...params){
//         if(c[params.join()] === undefined){
//             c[params.join()] = fn(...params)
//         }
//         return c[params.join()]
//     }
//     return inner
// }


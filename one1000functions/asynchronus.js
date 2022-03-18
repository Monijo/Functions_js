
// setTimeout(()=>{
// console.log("elo")
// }, 500)

// document.body.addEventListener("mouseover", (event)=>{
// console.log("Działa")
// })


// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Resolve value :)")
//     }, 1000);

//     setTimeout(()=> {
//         reject("Reject value :)")
//     }, 1000);



// }); //deklaracja promisa nowego obiektu


// promise
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally teardown!")
// })

// const squareRef = document.querySelector(".square")
//
//
//     squareRef.style.left= "300px";
//
//     setTimeout(()=>{
//         squareRef.style.top= "300px";
//         setTimeout(()=>{
//             squareRef.style.left= "0px";
//             setTimeout(()=>{
//                 squareRef.style.top= "0px";
//             }, 5000)
//         }, 5000)
//     }, 5000)
//
//
//     const squareRef = document.querySelector(".square")
// setInterval(()=>{
//     setTimeout(()=>{
//             squareRef.style.left= "300px";
//
//     setTimeout(()=>{
//         squareRef.style.top= "300px";
//         setTimeout(()=>{
//             squareRef.style.left= "0px";
//             setTimeout(()=>{
//                 squareRef.style.top= "0px";
//             }, 5000)
//         }, 5000)
//     }, 5000)
//
//  })
//
// },20000)
//
//
//



//fetch 2015 obsluga ajax (obsługa XMLHTTPRequest->to on potrafi robic asynchron zapytania, uzycie tego na promisach)


// const result = fetch(url);
// result.then((response)=> response.json())
// .then((data)=> new Promise((resolve)=> {
//     setTimeout(()=>{
//         resolve(data)
//     }, 2000)
// }))
// .then((finalData)=> console.log(finalData))
//
// const myFetch = (url, {method="GET", headers, body=null}={})=>{
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//
//         request.open(method, url, false);
//         request.send(body)
//
//         if(request.status === 200){
//             resolve(request.responseText)
//         }
//         reject(request.status)
//     })
// }
//
// const myFetch = (url, {method="GET", headers, body=null}={})=>{
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//
//         request.open(method, url, true); //to sie dziej w czasie
//         request.send(body)
//
//         request.onreadystatechange=((event)=>{
//             if(request.readyState === 4){
//                 if(request.status === 200){
//                     resolve(request.response)
//                 }
//                 reject(request.status)
//             }
//
//         }
//         )
//     })
// }
// const url = undefined
// const response = myFetch(url)
// response.then((data)=>console.log(data))
// .then((err)=>err)
//
//
// function* gen(){
//     console.log(1)
//     yield 1
//     console.log(2)
//     yield 2
//     console.log(3)
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
//
// function* gen2(){
//     while(true){
//         yield 1
//         yield 2
//         yield 3
//     }
//
// }
//
// function* gen3(players){
//     let id=0
//     while(true){
//         yield players[id% players.length]
//         id++
//     }
// }
// const p = ["ala", "ola", "kasia"]

// function* gen4(players){
//     let id=0
//     while(true){
//         yield players[id]
//         id = ++id%players.length
//     }
// }


// function* magic(){
//     let a=10;
//     let b = yield a + 20;
//     yield b;
// }
// const generator = magic()
// console.log(g.next())
// console.log(g.next(42))
// console.log(g.next())


function* getData(url){
    const data = yield fetch(url)
    console.log(data)
}

const u = "http://api.nbp.pl/api/exchangerates/rates/A/usd?format=json"
const fetchData = getData(u)
fetchData.next().value.then((response)=>response.json()).then((data)=>fetchData.next(data))
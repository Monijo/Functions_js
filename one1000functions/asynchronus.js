
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

    const squareRef = document.querySelector(".square")
setInterval(()=>{
    setTimeout(()=>{
            squareRef.style.left= "300px";

    setTimeout(()=>{
        squareRef.style.top= "300px";
        setTimeout(()=>{
            squareRef.style.left= "0px";
            setTimeout(()=>{
                squareRef.style.top= "0px";
            }, 5000)
        }, 5000)
    }, 5000)

 })

},20000)






//fetch 2015 obsluga ajax (obsługa XMLHTTPRequest->to on potrafi robic asynchron zapytania, uzycie tego na promisach)


// const result = fetch(url);
// result.then((response)=> response.json())
// .then((data)=> new Promise((resolve)=> {
//     setTimeout(()=>{
//         resolve(data)
//     }, 2000)
// }))
// .then((finalData)=> console.log(finalData))



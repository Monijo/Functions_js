// palindrome
function isPalindrome(text){
    return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
}

const is_palindrome2 = function(text){
     return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
}

const is_palindrome3 = text => text.toLowerCase().split("").reverse().join('') === text.toLowerCase();



const lessThanTen = (digit) => digit <=10 //implicite return

const lessThanTen2 = (digit) => {
    return digit <= 0;
}


const get_max_number = (...values) =>{
    let max = values[0]
    for(let i = 1; i< values.length; i++){
        if (values[i] > max){
            max = values[i];
        }
    }
    return max;
}

const max2 = (...digits) =>{
    let max = digits[0];

    digits.forEach((digit)=>{
        if(digit > max){
            max = digit;
        }

    })
    return max
}

const max3 = (...digits) =>{
    return digits.reduce((max,current) =>{
        if(current > max){
            return current
        }
        return max;
    }, digits[0])
}



function range(start, stop, step=1){ // bez spacjii przy argumentach!
    if (stop === undefined){  // nie moze byc 0 bo to poprawna wartosc stopu
        stop=start;
        start = 0 ;
    }
    const temp = [];
    while (temp.length < (stop-start)/step){
        temp.push(start + temp.length* step)// np 0+ 1*2, 0+ 2*2, 0+ 3*2
    }
    return temp
}

range()

//1

function distFromAverage(arr){
    const newArr = []

    const averageFromArr = arr.reduce((total, item)=> total +item, 0 )/arr.length
    for (let digit of arr){
        let newDigit = Math.abs(digit - averageFromArr)
        newArr.push(newDigit)
    }

    return newArr
}
// console.log(distFromAverage([1,2,3,4,5,6,7]))
// console.log(distFromAverage([1,1,1,1]))
// console.log(distFromAverage([2,8,3,7]))
//


//2

function printTable(arr){
    arr.forEach(el=>console.log(el))
}
// printTable([1,2,3,4,5])

//3

function multiply(arr){
    return arr.reduce((total, item)=> total * item, 1)
}
// console.log(multiply([1,2,3,4,5,6,7]));
// console.log(multiply([1,1,1,1]));
// console.log(multiply([2,8,3,7]));

//4

function getEvenAverage(arr){
    const newArr=[];
    for(let el of arr){
        if (el%2 === 0){
            newArr.push(el)
        }}


    if(newArr.length ===0){
        return null
    }
    else{
        const value = newArr.reduce((total, item)=> total +item, 0 )/newArr.length
        return value.toFixed(2)
    }
}

// console.log(getEvenAverage([1,2,3,4,5,6,7]));
// console.log(getEvenAverage([1,1,1,1]));
// console.log(getEvenAverage([2,8,3,7,4]));

//5

function sortArray(arr){
    return arr.sort((a,b)=> a-b)
}

// console.log(sortArray([145,11,3,64,4,6,10]))

//6

function addArrays(arr1,arr2){
    const newArr=[]
    if(arr1.length > arr2.length){
        for(let i=0; i<arr2.length; i++){
            let newValue = arr1[i]+arr2[i]
            newArr.push(newValue)


        }
        const redundandNum = arr1.splice(-(arr1.length- arr2.length))
        return newArr.concat(redundandNum)
    }

    if(arr2.length > arr1.length){
        for(let i=0; i<arr1.length; i++){
            let newValue = arr1[i]+arr2[i]
            newArr.push(newValue)


        }
        const redundandNum = arr2.splice(-(arr2.length- arr1.length))
        return newArr.concat(redundandNum)
    }

       if(arr2.length === arr1.length){
        for(let i=0; i<arr1.length; i++){
            let newValue = arr1[i]+arr2[i]
            newArr.push(newValue)


        }

        return newArr
    }


}
//
// console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
// console.log(addArrays([8,3,22], [1,3,2]));
// console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));

//7

function print2DArray(arr){
    arr.forEach(el=>el.forEach(elw=>console.log(elw)))
}

// print2DArray([[1,2,3,4],["kot", "pies", "chomik"]])

//8

function getNumber(num, arr){
    return arr.includes(num)
}

// console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
// console.log(getNumber(5, [33, 54, 2, 1, 4, 100] ));

//9

function addTheSameNumbers(num, arr){
    if( !arr.includes(num)){
        return null
    }
    let i =0;
    for(let el of arr){
        if(el === num){
            i++
        }

    }
    return (i*num)
}

// console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
// console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
// console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) );
// console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));

//10

function doubleNumber(arr){
    return arr.map((elem)=>elem*2)
}

// console.log(doubleNumber([1,2,3,4,5,6,7]))

//11

function chooseEvenNumbers(arr){
    return arr.filter((el)=> el%2===0)
}

// console.log(chooseEvenNumbers([1,2,3,4,5,6,7,8]))

//12

function makeEvenNumber(arr){
    const newArr=[];
    for(let num of arr){
        if(num%2===0){
            newArr.push(num)
        }else{
            newArr.push(num +1)
        }
    }
    return newArr
}

// console.log(makeEvenNumber([1,2,3,4,5,6,7,7]))

//13

// async function getExchangeRate(url, currencyCode){
//     const response = await fetch(`${url}${currencyCode}?format=json`);
//     return  await response.json()
//
// }
//
// getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a', 'USD').then(data=>{
//     console.log(data.rates[0].mid)
// })


//14


function getWeather(url){

    return fetch(url).then(resp=>resp.json())

}

function getWeatherData(pr, weatherParams){
    pr.then(data=>{
        const newData= data.map(param => `${param.stacja}: ${param[weatherParams]}`)
        console.log(newData)
    })

}

const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/")
getWeatherData(result, 'temperatura')








//15





//16
//17
//18
//19
//20




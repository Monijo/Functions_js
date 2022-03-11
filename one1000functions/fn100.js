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

//
// function getWeather(url){
//
//     return fetch(url).then(resp=>resp.json())
//
// }
//
// function getWeatherData(pr, weatherParams){
//     pr.then(data=>{
//         const newData= data.map(param => `${param.stacja}: ${param[weatherParams]}`)
//         console.log(newData)
//     })
//
// }
//
// const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/")
// getWeatherData(result, 'temperatura')
//
//
//
//
//



//15

const exampleArr =[1,2,3,4,5,5,6,0,7,7]

function getDoubleOfNumber(arr){
    return arr.map((element)=>element*2)
}
// console.log(getDoubleOfNumber(exampleArr))



//16

function getEvenNumber(arr){
    return arr.filter((element)=> element%2 === 0)
}

// console.log(getEvenNumber(exampleArr))


//17

function getEvenNumberLowerThan8(arr){
    return arr.filter((element)=> element%2 ===0 && element <8)
}

// console.log(getEvenNumberLowerThan8(exampleArr))

//18


function getNumberLowerThan10andAddToThem1(arr){
    return arr.filter((element)=>element <10).map((element)=>element+1)
}

// console.log(getNumberLowerThan10andAddToThem1(exampleArr))


//19

function getAverageFromFirst10Numbers(arr){
    const first10Elem= arr.filter((element,index,arr)=>index<10)
    return first10Elem.reduce((acc, cu)=>acc+cu)/first10Elem.length
}
// console.log(getAverageFromFirst10Numbers(exampleArr))

//20


function getElementsWithEvenIndex(arr){
    return arr.filter((element, index, arr)=>index%2===0)
}

// console.log(getElementsWithEvenIndex(exampleArr))

//21

function getNumbersReturs4Time(arr){
    const newList = [];
    arr.map((element)=>newList.push([element, element, element, element]))
    return newList.flat(1)
}
// console.log(getNumbersReturs4Time(exampleArr))

//22

function changeListToMap(arr){
    return arr.flatMap((el, index, arr)=>[`${index}:`, el])
}

// console.log(changeListToMap(exampleArr))
//23

const stringArr = ["Ala", "Kasia", "Kuba", "Ola", "Igor"]


function checkIfNameIsInArr(arr, name){
    return arr.includes(name)
}

// console.log(checkIfNameIsInArr(stringArr,"Ola"))
// console.log(checkIfNameIsInArr(stringArr, "Leon"))

//24

function findShortWords(strArr){
    return strArr.filter((element)=> element.split("").length <5)
}

// console.log(findShortWords(stringArr))

//25

function findWordsStartsWithLetter(arr, letter){
    return arr.filter((element)=>element.startsWith(letter))
}

// console.log(findWordsStartsWithLetter(stringArr, "K"))

//26

function get3TimesReapeatWords(arr){
    return arr.map((element)=> element.repeat(3))
}

// console.log(get3TimesReapeatWords(stringArr))

//27

function getFirstAndLastLetterOfWord(arr){
    return arr.map((element, index, arr)=> `${element.charAt(0)} and ${element.charAt(element.split("").length-1)}`)
}
// console.log(getFirstAndLastLetterOfWord(stringArr))

//28

function changeFirstLetterToLowerCase(arr){
    return arr.map((element)=> element.charAt(0).toLowerCase())
}
// console.log(changeFirstLetterToLowerCase(stringArr))

//29

function getMiddleOftheWord(arr){
    return arr.map((element, index, arr)=> element.substring(1, element.split("").length-1))
}

// console.log(getMiddleOftheWord(stringArr))

//30

function fillDotsTo20inStrIfNeed(arr){
    return arr.map((element)=> element.padEnd(20, '.'))
}

// console.log(fillDotsTo20inStrIfNeed(stringArr))

//31

function getDice6Numbers(num){
    const newArr=[];
    let i=0;
    while (i<num){
         const randomDiceThrow = Math.floor(Math.random()*6 +1)
         newArr.push(randomDiceThrow)
         i++
    }
    return newArr.reduce((acc, cu)=> acc+cu)

}

// console.log(getDice6Numbers(1))
// console.log(getDice6Numbers(2))
//32

function multiplyNumbersByRandomNumber(arr){
    return arr.map((element)=> element * (Math.random()*10))
}
// console.log(multiplyNumbersByRandomNumber(exampleArr))
//33

function findElementGraterThanAverage(arr){
    return  arr.filter((element)=> element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))

}
// console.log(findElementGraterThanAverage(exampleArr))

//34
const findFirstElementGraterThanAverage2 = (arr)=> arr.find(element => element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))
// console.log(findFirstElementGraterThanAverage2(exampleArr))
//35

function changeToStarsMoreThan3El(arr){
    return arr.fill("*", 3)
}
// console.log(changeToStarsMoreThan3El(exampleArr))
//36

function getTheReverseNum(num){
    return num.toString().split("").reverse((a,b)=>a-b).join("")
}

// console.log(getTheReverseNum(123456))

//37

function toAlphabeticalOrder(word){
    return word.split("").sort().join("")
}
// console.log(toAlphabeticalOrder("traktor"))

//38

function toUpperCaseFirstLetterOfWord(text){
    return text.split(" ").map((element)=>(element.charAt(0).toUpperCase() + element.substring(1))).join(" ")
}
console.log(toUpperCaseFirstLetterOfWord("to jest przykladowe zdanie."))
//39

function makeBoard(){
    for(let i =0; i<8; i++){
        if(i%2===1){
            console.log("# ".repeat(4))
        }else{
            console.log(" #".repeat(4))
        }
    }
}
makeBoard()
//40

function checkIfWordIsInSentence(text, word){
    return `"${word}" ${text.includes(word) ? 'is' : 'is not'} in the sentence "${text}"`
}

console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'lis'))
console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'ma'))



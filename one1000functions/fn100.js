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

// console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'lis'))
// console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'ma'))


//41

function coverCardNum(number){
    const numToStr = new String(number)
    const last4Num = numToStr.slice(-4)
    return numToStr.slice(-4).padStart(numToStr.length, "*")
}

// console.log(coverCardNum(838347437845784578))

//42

function checkIfEndsWithA(arr){
    return arr.filter((element)=>element.endsWith('a'))
}

// console.log(checkIfEndsWithA(stringArr))

//43

function concatAndReturnNotRepetedElements(arr1, arr2){
    return new Set(arr1.concat(arr2))
}

// console.log(concatAndReturnNotRepetedElements([1,2,3,4,5], [3,4,5,6,7]))


//44

function concatAndReturnLowerThan10(arr1, arr2){
    return arr1.concat(arr2).filter((element)=> element < 10)
}

// console.log(concatAndReturnLowerThan10([1,22,33,45,56,6], [2,3,4,5,6,8,66,444]))

//45

function concatArrAndSumTheNumbers(arr1, arr2){
    return arr1.concat(arr2).reduce((acc, cu)=> acc+cu)
}

// console.log(concatArrAndSumTheNumbers([1,2,3], [4,5,6]))
//

//46

function isAllElementsGreaterThan100(arr){
    return arr.every((e)=> e>100)
}

// console.log(isAllElementsGreaterThan100([101,102,103]))
// console.log(isAllElementsGreaterThan100([101,102,10]))
//

//47

function isSomeElementsStartingWithLetter(arr, letter){
    return arr.some((el)=> el.startsWith(`${letter}`))
}

// console.log(isSomeElementsStartingWithLetter(["Ala", "Kot", "Pies"], "P"))

//48

function isUndefinedinArr(arr){
    return arr.some((el)=>el===undefined)
}

console.log(isUndefinedinArr([1,2,3,4]))
console.log(isUndefinedinArr([1,2,undefined,4]))

//49

function findFirstElementLowerThan0(arr){
    return arr.find(el=> el <0)
}

console.log(findFirstElementLowerThan0([1,2,3,4,5,6,-8,9999,-9]))

//50

function changeStringToArray(text){
    return Array.from(text)
}

console.log(changeStringToArray("To jest text o niczym"))

//51

function getTriangleField(a,h){
    return (a*h/2)
}

console.log(getTriangleField(3, 4))
//52

function getCelciusTemperature(farenTemp){
    return ((farenTemp - 32)/1.8)

}
console.log(getCelciusTemperature(100))
//53

function getText10times(text){
    return text.repeat(10)
}
console.log(getText10times("To jest text "))
//54

function removeWhitespace(text){
    return text.trimStart().trimEnd()
}

console.log(removeWhitespace("               To jest text z duza iloscia spacjii na poczatku i koncu          "))

//55

function replaceJavaByJS(text){
    return text.replace('java', "JS")
}

console.log(replaceJavaByJS("To java jest najlepszym jezykiem na swiecie"))

//56

function deleteNamesOfAnotherLanguages(text){
    return text.replace("java", "python").replace("PHP", "java script")
}

console.log(deleteNamesOfAnotherLanguages("PHP i java to najlepsze języki na swiecie"))
//57

function fillLast3ElementsByOK(arr){
    return arr.fill("OK", -3)
}
console.log(fillLast3ElementsByOK([1,2,3,4,5,6,6,7,8,8,8]))

//58

function checkIfAllUsersAreFemail(listName){
    return listName.every((element)=> element.endsWith("a"))
}

console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Monika"]))
console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Mirek"]))

//59

function addPersonAtFirstPlace(name){
    const newList = [];
    const newLength =  newList.unshift(name)
    return `Użytkownik ${name} został dodany do listy ktora ma aktualnie ${newLength} użytkowników`
}

console.log(addPersonAtFirstPlace("Ania"))


//60

function addMemberToGroup(member){
    const firstYearList = [];
    const secondYearList = [];
    if(member.rok === 1){
        firstYearList.push(member);
        return `Uczen ${member.name} został dodany do grupy pierwszej`
    }else{
        secondYearList.push(member);
        return `Uczen ${member.name} zostal dodany do grupy drugiej`
    }

}
console.log(addMemberToGroup({name: "Karol", rok: 2}))

//61

function kmToMiles(km){
    return `${km} to ${km*0.62} mil`
}
console.log(kmToMiles(100))
//62

function findFirstEvenNumber(arr){
    return arr.find((element)=> element%2===0)
}
console.log(findFirstEvenNumber([1,3,5,6,7,8]))

//63

function findFirstElementWitchIsInList(arr, list){
    for(let el of arr){
        if(list.includes(el)){
            return `Pierwszy wyszukany element z listy to ${el}`
        }

    }
    return 'Nie znaleziono zadnego elementu z listy'
}

console.log(findFirstElementWitchIsInList([1,2,3,4,5,5,6,6,7,7], [7,8]))

//64

function returnArrWithout0and9(arr){
    return arr.filter((el)=> el !== 0 && el !==9)
}
console.log(returnArrWithout0and9([1,2,33,4,5,6,6,99,9,9,9,9,1,0]))

//65

const data_to_exercise=[
    {
        name: "Jan",
        age: 23,
        occupation: "Postman"
    },
    {
        name: "Adam",
        age: 93,
        occupation: "teacher"
    },
    {
        name: "Agata",
        age: 43,
        occupation: "Policman"
    },
    {
        name: "Poly",
        age: 13,
        occupation: "student"
    },
    {
        name: "Kuba",
        age: 53,
        occupation: "doctor"
    },
    {
        name: "Pam",
        age: 44,
        occupation: "Postman"
    }
]

function getPostmans(data){
    return data.filter((person)=>person.occupation.toLowerCase() == "postman")
}
console.log(getPostmans(data_to_exercise))
//66
function getNamesPeopleUnder50(data){
    return `Osoby przed 50 to ${data.filter((person)=> person.age <50).map((person)=>person.name)}!`
}
console.log(getNamesPeopleUnder50(data_to_exercise))
//67

function getNamesStartsWithA(data){
    return `Osoby zaczynajace sie na 'A' to ${data.filter((person)=>person.name.startsWith("A")).map((person)=>person.name).join(" and ")}!`
}
console.log(getNamesStartsWithA(data_to_exercise))
//68

function getSumOfAgePostmans(data){
    return `Sum of age postmans is ${data.filter((person)=>person.occupation.toLowerCase() === "postman").reduce((acc, cu)=> acc+cu.age, 0)}`
}
console.log(getSumOfAgePostmans(data_to_exercise))

//69

function getOccupationOfPerson(data, name){
    return (data.map((person)=>person.name).includes(name) ? `Zawód ${name} to ${data.filter((person)=> person.name.toLowerCase() === name.toLowerCase()).map((person)=>person.occupation)}`: "Nie ma takiej osoby na liście")
}
console.log(getOccupationOfPerson(data_to_exercise, "Kuba"))
console.log(getOccupationOfPerson(data_to_exercise, "Adolf"))
//70

function checkIfPersonIsUnder18(name, data){
    let age =(data.filter((person)=> person.name.toLowerCase()===name.toLowerCase()).map((person)=>person.age)) <18 ?"underage" : "of age"
    return data.map((person)=>person.name).includes(name) ? `${name.toUpperCase()} is ${age}`: "Brak takiej osoby na liście"

}
console.log(checkIfPersonIsUnder18("Kuba", data_to_exercise))
console.log(checkIfPersonIsUnder18("Poly", data_to_exercise))
console.log(checkIfPersonIsUnder18("Roberto", data_to_exercise))

//71

function getBajtFromBit(bits){
    return `${bits} bitów to ${bits/8} bajtów`
}

console.log(getBajtFromBit(1000))
//72

function multiplayNumbersByNumbersFromAnotherArr(arr1, arr2){
    const newArr=[]
    for(let i=0; i<arr1.length; i++){
        newArr.push((arr1[i]*arr2[i]))
    }
    return newArr
}
console.log(multiplayNumbersByNumbersFromAnotherArr([1,2,3],[4,5,6]))
//73

function checkIfSentenceStartsWithUpperCase(sentence){

    if(sentence.charAt(0) === sentence.charAt(0).toUpperCase()){
        return "Starts with upper case"
    }
    else{
        return "Char is lower case"
    }
}
console.log(checkIfSentenceStartsWithUpperCase("To zdanie jest z duzej"))
console.log(checkIfSentenceStartsWithUpperCase("a To zdanie jest z małej"))

//74
function returnFormateDate(data){
    return `Dzisiaj jest: dzień: ${data.getDate()}, miesiąć: ${data.getMonth()+1} i rok: ${data.getFullYear()}`
}
console.log(returnFormateDate(new Date()))

//75

function getActualDate(){
    const now=new Date()
    return `Dzisiaj jest ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} rok`
}

console.log(getActualDate())
//76

function actualTime(){
    const now=new Date()
    const hours = now.getHours()
    const min = now.getMinutes() <10 ? "0"+now.getMinutes(): now.getMinutes()  //`${now.getMinutes()}`.padStart(2, "0")
    return `Akualnie jest: ${hours}:${min}`
}

console.log(actualTime())
//77

function getNameOfDay(){
    const now=new Date()
    const days=["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piatek", "sobota"]
    return `Dziaisja jest ${days[now.getDay()]}`
}
console.log(getNameOfDay())

//78

function replaceAllBadWords(word,new_word,text){
    return text.replaceAll(word, new_word)
}

console.log(replaceAllBadWords("Java", "Python", "Podobno Java to najlepszy jezyk świata i to Java bedzie jezykiem przyszłości"))

//79

function replaceAllStarsByQuestionMark(text){
    return text.replaceAll("*", "?")
}
console.log(replaceAllStarsByQuestionMark("To jest text o ***** i to są *******"))


//80

function sliceTextInHalf(text){
    return text.slice(text.length/2)
}
console.log(sliceTextInHalf("To jest text do przecięcia i! wykrzyknik jest na środku!"))

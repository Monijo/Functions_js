// // palindrome
// function isPalindrome(text){
//     return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
// }

// const is_palindrome2 = function(text){
//      return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
// }

// const is_palindrome3 = text => text.toLowerCase().split("").reverse().join('') === text.toLowerCase();



// const lessThanTen = (digit) => digit <=10 //implicite return

// const lessThanTen2 = (digit) => {
//     return digit <= 0;
// }


// const get_max_number = (...values) =>{
//     let max = values[0]
//     for(let i = 1; i< values.length; i++){
//         if (values[i] > max){
//             max = values[i];
//         }
//     }
//     return max;
// }

// const max2 = (...digits) =>{
//     let max = digits[0];

//     digits.forEach((digit)=>{
//         if(digit > max){
//             max = digit;
//         }

//     })
//     return max
// }

// const max3 = (...digits) =>{
//     return digits.reduce((max,current) =>{
//         if(current > max){
//             return current
//         }
//         return max;
//     }, digits[0])
// }



// function range(start, stop, step=1){ // bez spacjii przy argumentach!
//     if (stop === undefined){  // nie moze byc 0 bo to poprawna wartosc stopu
//         stop=start;
//         start = 0 ;
//     }
//     const temp = [];
//     while (temp.length < (stop-start)/step){
//         temp.push(start + temp.length* step)// np 0+ 1*2, 0+ 2*2, 0+ 3*2
//     }
//     return temp
// }

// range()

// //1

// function distFromAverage(arr){
//     const newArr = []

//     const averageFromArr = arr.reduce((total, item)=> total +item, 0 )/arr.length
//     for (let digit of arr){
//         let newDigit = Math.abs(digit - averageFromArr)
//         newArr.push(newDigit)
//     }

//     return newArr
// }
// // console.log(distFromAverage([1,2,3,4,5,6,7]))
// // console.log(distFromAverage([1,1,1,1]))
// // console.log(distFromAverage([2,8,3,7]))
// //


// //2

// function printTable(arr){
//     arr.forEach(el=>console.log(el))
// }
// // printTable([1,2,3,4,5])

// //3

// function multiply(arr){
//     return arr.reduce((total, item)=> total * item, 1)
// }
// // console.log(multiply([1,2,3,4,5,6,7]));
// // console.log(multiply([1,1,1,1]));
// // console.log(multiply([2,8,3,7]));

// //4

// function getEvenAverage(arr){
//     const newArr=[];
//     for(let el of arr){
//         if (el%2 === 0){
//             newArr.push(el)
//         }}


//     if(newArr.length ===0){
//         return null
//     }
//     else{
//         const value = newArr.reduce((total, item)=> total +item, 0 )/newArr.length
//         return value.toFixed(2)
//     }
// }

// // console.log(getEvenAverage([1,2,3,4,5,6,7]));
// // console.log(getEvenAverage([1,1,1,1]));
// // console.log(getEvenAverage([2,8,3,7,4]));

// //5

// function sortArray(arr){
//     return arr.sort((a,b)=> a-b)
// }

// // console.log(sortArray([145,11,3,64,4,6,10]))

// //6

// function addArrays(arr1,arr2){
//     const newArr=[]
//     if(arr1.length > arr2.length){
//         for(let i=0; i<arr2.length; i++){
//             let newValue = arr1[i]+arr2[i]
//             newArr.push(newValue)


//         }
//         const redundandNum = arr1.splice(-(arr1.length- arr2.length))
//         return newArr.concat(redundandNum)
//     }

//     if(arr2.length > arr1.length){
//         for(let i=0; i<arr1.length; i++){
//             let newValue = arr1[i]+arr2[i]
//             newArr.push(newValue)


//         }
//         const redundandNum = arr2.splice(-(arr2.length- arr1.length))
//         return newArr.concat(redundandNum)
//     }

//        if(arr2.length === arr1.length){
//         for(let i=0; i<arr1.length; i++){
//             let newValue = arr1[i]+arr2[i]
//             newArr.push(newValue)


//         }

//         return newArr
//     }


// }
// //
// // console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
// // console.log(addArrays([8,3,22], [1,3,2]));
// // console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));

// //7

// function print2DArray(arr){
//     arr.forEach(el=>el.forEach(elw=>console.log(elw)))
// }

// // print2DArray([[1,2,3,4],["kot", "pies", "chomik"]])

// //8

// function getNumber(num, arr){
//     return arr.includes(num)
// }

// // console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
// // console.log(getNumber(5, [33, 54, 2, 1, 4, 100] ));

// //9

// function addTheSameNumbers(num, arr){
//     if( !arr.includes(num)){
//         return null
//     }
//     let i =0;
//     for(let el of arr){
//         if(el === num){
//             i++
//         }

//     }
//     return (i*num)
// }

// // console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
// // console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
// // console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) );
// // console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));

// //10

// function doubleNumber(arr){
//     return arr.map((elem)=>elem*2)
// }

// // console.log(doubleNumber([1,2,3,4,5,6,7]))

// //11

// function chooseEvenNumbers(arr){
//     return arr.filter((el)=> el%2===0)
// }

// // console.log(chooseEvenNumbers([1,2,3,4,5,6,7,8]))

// //12

// function makeEvenNumber(arr){
//     const newArr=[];
//     for(let num of arr){
//         if(num%2===0){
//             newArr.push(num)
//         }else{
//             newArr.push(num +1)
//         }
//     }
//     return newArr
// }

// // console.log(makeEvenNumber([1,2,3,4,5,6,7,7]))

// //13

// // async function getExchangeRate(url, currencyCode){
// //     const response = await fetch(`${url}${currencyCode}?format=json`);
// //     return  await response.json()
// //
// // }
// //
// // getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a', 'USD').then(data=>{
// //     console.log(data.rates[0].mid)
// // })


// //14

// //
// // function getWeather(url){
// //
// //     return fetch(url).then(resp=>resp.json())
// //
// // }
// //
// // function getWeatherData(pr, weatherParams){
// //     pr.then(data=>{
// //         const newData= data.map(param => `${param.stacja}: ${param[weatherParams]}`)
// //         console.log(newData)
// //     })
// //
// // }
// //
// // const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/")
// // getWeatherData(result, 'temperatura')
// //
// //
// //
// //
// //



// //15

// const exampleArr =[1,2,3,4,5,5,6,0,7,7]

// function getDoubleOfNumber(arr){
//     return arr.map((element)=>element*2)
// }
// // console.log(getDoubleOfNumber(exampleArr))



// //16

// function getEvenNumber(arr){
//     return arr.filter((element)=> element%2 === 0)
// }

// // console.log(getEvenNumber(exampleArr))


// //17

// function getEvenNumberLowerThan8(arr){
//     return arr.filter((element)=> element%2 ===0 && element <8)
// }

// // console.log(getEvenNumberLowerThan8(exampleArr))

// //18


// function getNumberLowerThan10andAddToThem1(arr){
//     return arr.filter((element)=>element <10).map((element)=>element+1)
// }

// // console.log(getNumberLowerThan10andAddToThem1(exampleArr))


// //19

// function getAverageFromFirst10Numbers(arr){
//     const first10Elem= arr.filter((element,index,arr)=>index<10)
//     return first10Elem.reduce((acc, cu)=>acc+cu)/first10Elem.length
// }
// // console.log(getAverageFromFirst10Numbers(exampleArr))

// //20


// function getElementsWithEvenIndex(arr){
//     return arr.filter((element, index, arr)=>index%2===0)
// }

// // console.log(getElementsWithEvenIndex(exampleArr))

// //21

// function getNumbersReturs4Time(arr){
//     const newList = [];
//     arr.map((element)=>newList.push([element, element, element, element]))
//     return newList.flat(1)
// }
// // console.log(getNumbersReturs4Time(exampleArr))

// //22

// function changeListToMap(arr){
//     return arr.flatMap((el, index, arr)=>[`${index}:`, el])
// }

// // console.log(changeListToMap(exampleArr))
// //23

// const stringArr = ["Ala", "Kasia", "Kuba", "Ola", "Igor"]


// function checkIfNameIsInArr(arr, name){
//     return arr.includes(name)
// }

// // console.log(checkIfNameIsInArr(stringArr,"Ola"))
// // console.log(checkIfNameIsInArr(stringArr, "Leon"))

// //24

// function findShortWords(strArr){
//     return strArr.filter((element)=> element.split("").length <5)
// }

// // console.log(findShortWords(stringArr))

// //25

// function findWordsStartsWithLetter(arr, letter){
//     return arr.filter((element)=>element.startsWith(letter))
// }

// // console.log(findWordsStartsWithLetter(stringArr, "K"))

// //26

// function get3TimesReapeatWords(arr){
//     return arr.map((element)=> element.repeat(3))
// }

// // console.log(get3TimesReapeatWords(stringArr))

// //27

// function getFirstAndLastLetterOfWord(arr){
//     return arr.map((element, index, arr)=> `${element.charAt(0)} and ${element.charAt(element.split("").length-1)}`)
// }
// // console.log(getFirstAndLastLetterOfWord(stringArr))

// //28

// function changeFirstLetterToLowerCase(arr){
//     return arr.map((element)=> element.charAt(0).toLowerCase())
// }
// // console.log(changeFirstLetterToLowerCase(stringArr))

// //29

// function getMiddleOftheWord(arr){
//     return arr.map((element, index, arr)=> element.substring(1, element.split("").length-1))
// }

// // console.log(getMiddleOftheWord(stringArr))

// //30

// function fillDotsTo20inStrIfNeed(arr){
//     return arr.map((element)=> element.padEnd(20, '.'))
// }

// // console.log(fillDotsTo20inStrIfNeed(stringArr))

// //31

// function getDice6Numbers(num){
//     const newArr=[];
//     let i=0;
//     while (i<num){
//          const randomDiceThrow = Math.floor(Math.random()*6 +1)
//          newArr.push(randomDiceThrow)
//          i++
//     }
//     return newArr.reduce((acc, cu)=> acc+cu)

// }

// // console.log(getDice6Numbers(1))
// // console.log(getDice6Numbers(2))
// //32

// function multiplyNumbersByRandomNumber(arr){
//     return arr.map((element)=> element * (Math.random()*10))
// }
// // console.log(multiplyNumbersByRandomNumber(exampleArr))
// //33

// function findElementGraterThanAverage(arr){
//     return  arr.filter((element)=> element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))

// }
// // console.log(findElementGraterThanAverage(exampleArr))

// //34
// const findFirstElementGraterThanAverage2 = (arr)=> arr.find(element => element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))
// // console.log(findFirstElementGraterThanAverage2(exampleArr))
// //35

// function changeToStarsMoreThan3El(arr){
//     return arr.fill("*", 3)
// }
// // console.log(changeToStarsMoreThan3El(exampleArr))
// //36

// function getTheReverseNum(num){
//     return num.toString().split("").reverse((a,b)=>a-b).join("")
// }

// // console.log(getTheReverseNum(123456))

// //37

// function toAlphabeticalOrder(word){
//     return word.split("").sort().join("")
// }
// // console.log(toAlphabeticalOrder("traktor"))

// //38

// function toUpperCaseFirstLetterOfWord(text){
//     return text.split(" ").map((element)=>(element.charAt(0).toUpperCase() + element.substring(1))).join(" ")
// }
// console.log(toUpperCaseFirstLetterOfWord("to jest przykladowe zdanie."))
// //39

// function makeBoard(){
//     for(let i =0; i<8; i++){
//         if(i%2===1){
//             console.log("# ".repeat(4))
//         }else{
//             console.log(" #".repeat(4))
//         }
//     }
// }
// makeBoard()
// //40

// function checkIfWordIsInSentence(text, word){
//     return `"${word}" ${text.includes(word) ? 'is' : 'is not'} in the sentence "${text}"`
// }

// // console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'lis'))
// // console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'ma'))


// //41

// function coverCardNum(number){
//     const numToStr = new String(number)
//     const last4Num = numToStr.slice(-4)
//     return numToStr.slice(-4).padStart(numToStr.length, "*")
// }

// // console.log(coverCardNum(838347437845784578))

// //42

// function checkIfEndsWithA(arr){
//     return arr.filter((element)=>element.endsWith('a'))
// }

// // console.log(checkIfEndsWithA(stringArr))

// //43

// function concatAndReturnNotRepetedElements(arr1, arr2){
//     return new Set(arr1.concat(arr2))
// }

// // console.log(concatAndReturnNotRepetedElements([1,2,3,4,5], [3,4,5,6,7]))


// //44

// function concatAndReturnLowerThan10(arr1, arr2){
//     return arr1.concat(arr2).filter((element)=> element < 10)
// }

// // console.log(concatAndReturnLowerThan10([1,22,33,45,56,6], [2,3,4,5,6,8,66,444]))

// //45

// function concatArrAndSumTheNumbers(arr1, arr2){
//     return arr1.concat(arr2).reduce((acc, cu)=> acc+cu)
// }

// // console.log(concatArrAndSumTheNumbers([1,2,3], [4,5,6]))
// //

// //46

// function isAllElementsGreaterThan100(arr){
//     return arr.every((e)=> e>100)
// }

// // console.log(isAllElementsGreaterThan100([101,102,103]))
// // console.log(isAllElementsGreaterThan100([101,102,10]))
// //

// //47

// function isSomeElementsStartingWithLetter(arr, letter){
//     return arr.some((el)=> el.startsWith(`${letter}`))
// }

// // console.log(isSomeElementsStartingWithLetter(["Ala", "Kot", "Pies"], "P"))

// //48

// function isUndefinedinArr(arr){
//     return arr.some((el)=>el===undefined)
// }

// console.log(isUndefinedinArr([1,2,3,4]))
// console.log(isUndefinedinArr([1,2,undefined,4]))

// //49

// function findFirstElementLowerThan0(arr){
//     return arr.find(el=> el <0)
// }

// console.log(findFirstElementLowerThan0([1,2,3,4,5,6,-8,9999,-9]))

// //50

// function changeStringToArray(text){
//     return Array.from(text)
// }

// console.log(changeStringToArray("To jest text o niczym"))

// //51

// function getTriangleField(a,h){
//     return (a*h/2)
// }

// console.log(getTriangleField(3, 4))
// //52

// function getCelciusTemperature(farenTemp){
//     return ((farenTemp - 32)/1.8)

// }
// console.log(getCelciusTemperature(100))
// //53

// function getText10times(text){
//     return text.repeat(10)
// }
// console.log(getText10times("To jest text "))
// //54

// function removeWhitespace(text){
//     return text.trimStart().trimEnd()
// }

// console.log(removeWhitespace("               To jest text z duza iloscia spacjii na poczatku i koncu          "))

// //55

// function replaceJavaByJS(text){
//     return text.replace('java', "JS")
// }

// console.log(replaceJavaByJS("To java jest najlepszym jezykiem na swiecie"))

// //56

// function deleteNamesOfAnotherLanguages(text){
//     return text.replace("java", "python").replace("PHP", "java script")
// }

// console.log(deleteNamesOfAnotherLanguages("PHP i java to najlepsze języki na swiecie"))
// //57

// function fillLast3ElementsByOK(arr){
//     return arr.fill("OK", -3)
// }
// console.log(fillLast3ElementsByOK([1,2,3,4,5,6,6,7,8,8,8]))

// //58

// function checkIfAllUsersAreFemail(listName){
//     return listName.every((element)=> element.endsWith("a"))
// }

// console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Monika"]))
// console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Mirek"]))

// //59

// function addPersonAtFirstPlace(name){
//     const newList = [];
//     const newLength =  newList.unshift(name)
//     return `Użytkownik ${name} został dodany do listy ktora ma aktualnie ${newLength} użytkowników`
// }

// console.log(addPersonAtFirstPlace("Ania"))


// //60

// function addMemberToGroup(member){
//     const firstYearList = [];
//     const secondYearList = [];
//     if(member.rok === 1){
//         firstYearList.push(member);
//         return `Uczen ${member.name} został dodany do grupy pierwszej`
//     }else{
//         secondYearList.push(member);
//         return `Uczen ${member.name} zostal dodany do grupy drugiej`
//     }

// }
// console.log(addMemberToGroup({name: "Karol", rok: 2}))

// //61

// function kmToMiles(km){
//     return `${km} to ${km*0.62} mil`
// }
// console.log(kmToMiles(100))
// //62

// function findFirstEvenNumber(arr){
//     return arr.find((element)=> element%2===0)
// }
// console.log(findFirstEvenNumber([1,3,5,6,7,8]))

// //63

// function findFirstElementWitchIsInList(arr, list){
//     for(let el of arr){
//         if(list.includes(el)){
//             return `Pierwszy wyszukany element z listy to ${el}`
//         }

//     }
//     return 'Nie znaleziono zadnego elementu z listy'
// }

// console.log(findFirstElementWitchIsInList([1,2,3,4,5,5,6,6,7,7], [7,8]))

// //64

// function returnArrWithout0and9(arr){
//     return arr.filter((el)=> el !== 0 && el !==9)
// }
// console.log(returnArrWithout0and9([1,2,33,4,5,6,6,99,9,9,9,9,1,0]))

// //65

// const data_to_exercise=[
//     {
//         name: "Jan",
//         age: 23,
//         occupation: "Postman"
//     },
//     {
//         name: "Adam",
//         age: 93,
//         occupation: "teacher"
//     },
//     {
//         name: "Agata",
//         age: 43,
//         occupation: "Policman"
//     },
//     {
//         name: "Poly",
//         age: 13,
//         occupation: "student"
//     },
//     {
//         name: "Kuba",
//         age: 53,
//         occupation: "doctor"
//     },
//     {
//         name: "Pam",
//         age: 44,
//         occupation: "Postman"
//     }
// ]

// function getPostmans(data){
//     return data.filter((person)=>person.occupation.toLowerCase() == "postman")
// }
// console.log(getPostmans(data_to_exercise))
// //66
// function getNamesPeopleUnder50(data){
//     return `Osoby przed 50 to ${data.filter((person)=> person.age <50).map((person)=>person.name)}!`
// }
// console.log(getNamesPeopleUnder50(data_to_exercise))
// //67

// function getNamesStartsWithA(data){
//     return `Osoby zaczynajace sie na 'A' to ${data.filter((person)=>person.name.startsWith("A")).map((person)=>person.name).join(" and ")}!`
// }
// console.log(getNamesStartsWithA(data_to_exercise))
// //68

// function getSumOfAgePostmans(data){
//     return `Sum of age postmans is ${data.filter((person)=>person.occupation.toLowerCase() === "postman").reduce((acc, cu)=> acc+cu.age, 0)}`
// }
// console.log(getSumOfAgePostmans(data_to_exercise))

// //69

// function getOccupationOfPerson(data, name){
//     return (data.map((person)=>person.name).includes(name) ? `Zawód ${name} to ${data.filter((person)=> person.name.toLowerCase() === name.toLowerCase()).map((person)=>person.occupation)}`: "Nie ma takiej osoby na liście")
// }
// console.log(getOccupationOfPerson(data_to_exercise, "Kuba"))
// console.log(getOccupationOfPerson(data_to_exercise, "Adolf"))
// //70

// function checkIfPersonIsUnder18(name, data){
//     let age =(data.filter((person)=> person.name.toLowerCase()===name.toLowerCase()).map((person)=>person.age)) <18 ?"underage" : "of age"
//     return data.map((person)=>person.name).includes(name) ? `${name.toUpperCase()} is ${age}`: "Brak takiej osoby na liście"

// }
// console.log(checkIfPersonIsUnder18("Kuba", data_to_exercise))
// console.log(checkIfPersonIsUnder18("Poly", data_to_exercise))
// console.log(checkIfPersonIsUnder18("Roberto", data_to_exercise))

// //71

// function getBajtFromBit(bits){
//     return `${bits} bitów to ${bits/8} bajtów`
// }

// console.log(getBajtFromBit(1000))
// //72

// function multiplayNumbersByNumbersFromAnotherArr(arr1, arr2){
//     const newArr=[]
//     for(let i=0; i<arr1.length; i++){
//         newArr.push((arr1[i]*arr2[i]))
//     }
//     return newArr
// }
// console.log(multiplayNumbersByNumbersFromAnotherArr([1,2,3],[4,5,6]))
// //73

// function checkIfSentenceStartsWithUpperCase(sentence){

//     if(sentence.charAt(0) === sentence.charAt(0).toUpperCase()){
//         return "Starts with upper case"
//     }
//     else{
//         return "Char is lower case"
//     }
// }
// console.log(checkIfSentenceStartsWithUpperCase("To zdanie jest z duzej"))
// console.log(checkIfSentenceStartsWithUpperCase("a To zdanie jest z małej"))

// //74
// function returnFormateDate(data){
//     return `Dzisiaj jest: dzień: ${data.getDate()}, miesiąć: ${data.getMonth()+1} i rok: ${data.getFullYear()}`
// }
// console.log(returnFormateDate(new Date()))

// //75

// function getActualDate(){
//     const now=new Date()
//     return `Dzisiaj jest ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} rok`
// }

// console.log(getActualDate())
// //76

// function actualTime(){
//     const now=new Date()
//     const hours = now.getHours()
//     const min = now.getMinutes() <10 ? "0"+now.getMinutes(): now.getMinutes()  //`${now.getMinutes()}`.padStart(2, "0")
//     return `Akualnie jest: ${hours}:${min}`
// }

// console.log(actualTime())
// //77

// function getNameOfDay(){
//     const now=new Date()
//     const days=["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piatek", "sobota"]
//     return `Dziaisja jest ${days[now.getDay()]}`
// }
// console.log(getNameOfDay())

// //78

// function replaceAllBadWords(word,new_word,text){
//     return text.replaceAll(word, new_word)
// }

// console.log(replaceAllBadWords("Java", "Python", "Podobno Java to najlepszy jezyk świata i to Java bedzie jezykiem przyszłości"))

// //79

// function replaceAllStarsByQuestionMark(text){
//     return text.replaceAll("*", "?")
// }
// console.log(replaceAllStarsByQuestionMark("To jest text o ***** i to są *******"))


// //80

// function sliceTextInHalf(text){
//     return text.slice(text.length/2)
// }
// console.log(sliceTextInHalf("To jest text do przecięcia i! wykrzyknik jest na środku!"))


// //81

// const products=[
//     {
//         name: "pencil",
//         category: "school",
//         price: 1.5,
//         amount: 200
//     },{
//         name: "pen",
//         category: "school",
//         price: 3.5,
//         amount: 100
//     },{
//         name: "bike",
//         category: "travel",
//         price: 1050,
//         amount: 30
//     },{
//         name: "tent",
//         category: "travel",
//         price: 300,
//         amount: 70
//     },{
//         name: "aple",
//         category: "food",
//         price: 1.0,
//         amount: 270
//     },{
//         name: "orange",
//         category: "food",
//         price: 2,
//         amount: 90
//     },{
//         name: "crem",
//         category: "cosmetics",
//         price: 15.5,
//         amount: 60
//     },{
//         name: "shampoo",
//         category: "cosmetics",
//         price: 9.7,
//         amount: 64
//     },
// ]

// function getProductsFromCategory(data, category){
//     return data.filter((product)=>product.category === category).map((product)=>product.name).join(", ")
// }

// console.log(getProductsFromCategory(products, "cosmetics"))

// //82

// function getTotalAmountOfProducts(data){
//     return `Ilość produktów w magazynie: ${data.reduce((acc, cu)=>acc+cu.amount, 0)}`
// }
// console.log(getTotalAmountOfProducts(products))

// //83

// function getCheapestAndMostExpensiveProducts(data){
//     const cheapestProduct = data.sort((a,b)=> a.price - b.price)[0]
//     const mostExpensiveProduct = data.sort((a,b)=> a.price - b.price)[data.length -1]
//     return `Most expensive product in our store: ${mostExpensiveProduct.name} and the cheapest ${cheapestProduct.name}`
// }
// console.log(getCheapestAndMostExpensiveProducts(products))

// //84

// function estimatedProfit(data){
//     return `Szacowany zysk z sprzedazy produktów: ${data.map((product)=> product.price * product.amount).reduce((acc, cu)=>acc+cu)} zł.`
// }
// console.log(estimatedProfit(products))

// //85


// function getCategoriesOfProducts(data){
//     const allCategories = data.map((product)=>product.category);
//     const newArr = []
//     for(let category of allCategories){
//         if(!newArr.includes(category)){
//             newArr.push(category)
//         }
//     }
//     return `Kategorie w naszym sklepie: ${newArr.join(", ")}.`
// }
// console.log(getCategoriesOfProducts(products))

// //86

// function makeSentenceFromArr(arr){
//     return arr.join(" ")
// }
// console.log(makeSentenceFromArr(["To", "są", "przykładowe", "słowa"]))

// //87

// function countWhiteMarks(text){
//     return  text.split("").filter((letter)=>letter === " ").length
// }
// console.log(countWhiteMarks("To jest tekst z duża ilośćią spacjii "))
// //88

// function getAlphabet(){
//     const alphabetArr = [];
//     for(let i=97; i<123; i++){ //ASCII
//         let letter = String.fromCharCode(i)
//         alphabetArr.push(letter)
//     }
//     return alphabetArr
// }
// console.log(getAlphabet())

// //89

// function encryptWord(word){
//     const alphabet = getAlphabet()
//     return word.split("").map((letter)=> (alphabet[alphabet.indexOf(letter)+1])).join("")
// }
// console.log(encryptWord("kot"))
// //90

// function decryptWord(encryptWord){
//     const alphabet = getAlphabet()
//     return encryptWord.split("").map((letter)=> (alphabet[alphabet.indexOf(letter)-1])).join("")
// }
// console.log(decryptWord("lpu"))


// //91

// function astronomicalUnitsToKm(au){
//     return `${au}j.a. to ${au * 149597870.691} kilometrów [km]`
// }
// console.log(astronomicalUnitsToKm(2))
// //92

// function isArray(col){
//     return Array.isArray(col)
// }
// console.log(isArray([1,2,3]))
// console.log(isArray(2))

// //93

// function cloneArray(col){
//     return [...col]
// }
// console.log(cloneArray([1,2,3]))
// //94

// function cloneArray2(col){
//     return col.slice()
// }
// console.log("Kopiowanie2: ", cloneArray2([1,2,3]))

// //95
// function cloneArr3(col){
//     return col.concat()
// }
// console.log(cloneArr3([1,2,3,4,5,5]))

// //96

// function getAbsValueFromSub(a,b){
//     return Math.abs(a-b)
// }
// console.log(getAbsValueFromSub(2, 10))
// //97

// function roundOffNumber(num){
//     const numAfterSpot = num.toString().split(".")
//     const result = parseInt(numAfterSpot[1]) > 4 ? parseInt(numAfterSpot[0]) + 1: numAfterSpot[0];
//     return result
// }
// console.log(roundOffNumber(12.7))
// //98

// function getNumRaisedToPower(num, pow){
//     return Math.pow(num, pow)
// }
// console.log("2 do potęgi 4 to ", getNumRaisedToPower(2, 4) )

// //99

// function checkIfWordIsInTheList(word, arr){
//     for(let w of arr){
//         if(w===word){
//             return true
//         }

//     }
//     return false
// }
// console.log("Is word 'cat' in arr ['dog', 'hamster', 'duck', 'cat'] ", checkIfWordIsInTheList("cat", ['dog', 'hamster', 'duck', 'cat'] ))
// //100

// function returnArrWith100numbers(){
//     const arrWithNumbers = [];
//     for(let i =1; i<101; i++){
//         arrWithNumbers.push(i)
//     }
//     return arrWithNumbers
// }
// console.log(returnArrWith100numbers())

// //101

// function getArrFillByNumInRangeN(n){
//     const arr =[];
//     for(let i = 1; i<n+1; i++){
//         arr.push(i)
//     }
//     return arr
// }

// console.log(getArrFillByNumInRangeN(8))
// //102

// function getArrFillByRandomNumFrom1to100(n){
//     const arr =[]
//     for(let i =1; i< n+1; i++ ){
//         let randomNum = Math.ceil(Math.random()*100)
//         arr.push(randomNum)
//     }
//     return arr
// }

// console.log(getArrFillByRandomNumFrom1to100(10))
// //103

// function getArrFilledByNumberNegAndPos(n){
//     const arr =[]
//     for(let i=1; i<n+1; i++){
//         let randomNum = Math.ceil((Math.random()*201)-100)
//         arr.push(randomNum)
//     }
//     return arr

// }

// console.log(getArrFilledByNumberNegAndPos(20))
// //104

// function getJsonFromObject(obj){
//     return JSON.stringify(obj)
// }
// console.log(getJsonFromObject({a:90, b:20}))
// //105

// function checkIfNumIsInfinity(num){
//     if(num === Infinity){
//         return `It is infinity!`
//     }else{
//         return `It is regular number :(`
//     }
// }
// console.log(checkIfNumIsInfinity(122222222222))
// console.log(checkIfNumIsInfinity(Math.pow(10,1000)))

// //106

// function getValuesFromMap(map){
//     return map.values()
// }

// const map=new Map()
// map.set('1','a')
// map.set('2','b')
// map.set('3','c')
// console.log(getValuesFromMap(map))
// //107

// function getSizeOfMap(map){
//     return `Map size is ${map.size}`
// }
// console.log(getSizeOfMap(map))

// //108

// function getMapWithNumericKeysAndEmptyStr(num_keys){
//     const map = new Map()
//     for(let i =1; i<num_keys+1; i++){
//         map.set(i, "")
//     }
//     return map
// }

// console.log(getMapWithNumericKeysAndEmptyStr(10))
// //109

// function isKeyInMap(map, key){
//     return map.has(key)
// }
// console.log(isKeyInMap(map, '4'))
// console.log(isKeyInMap(map, '2'))

// //110

// function createSetFillByNumToN(n){
//     const set = new Set()
//     for(let i =1; i<n+1; i++){
//         set.add(i)
//     }
//     return set
// }

// console.log(createSetFillByNumToN(10))

// //111

// function isNumInSet(set, num){
//     return set.has(num)
// }

// const set = new Set()
// set.add(12)
// set.add(10)
// set.add(16)
// set.add(13)
// console.log(isNumInSet(set, 10))


// //112

// function createSetFilledByLetters(){
//     const set = new Set()
//     for(let i = 65; i<91; i++){
//         set.add(String.fromCharCode(i))
//     }
//     return set
// }
// console.log(createSetFilledByLetters())

// //113

// function removeDuplicateFromArr(arr){
//     return [...(new Set(arr))]
// }
// console.log(removeDuplicateFromArr([1,2,3,3,4,4,4,5,1, "kot"]))
// //114

// function findPairOfNumInArrEqual10(arr){
//     for(let el of arr){
//         for(let anotherEl of arr){
//             if(el+ anotherEl === 10 && el !== anotherEl){
//                 return `${el} and ${anotherEl} equal 10`
//             }
//         }
//     }
//     return "Not found"
// }

// console.log(findPairOfNumInArrEqual10([1,2,3,4,5,6]))
// console.log(findPairOfNumInArrEqual10([1,2,3,4,5,11,19]))

// //115

// function removeSpecificElementFromArr(arr, element){
//     return `Usunięto ${element} i pozostała tablica ${arr.filter((el)=> el !== element)}`
// }
// console.log(removeSpecificElementFromArr([1,2,3,4,6,6,6,7,7,7], 7))
// //116

// function getRandomItemFromArr(arr){
//     return arr[Math.floor(Math.random()*arr.length)]
// }
// console.log(getRandomItemFromArr(["kot", "pies", "pałka", "zapałka"]))

// //117

// function filter0BlankLinesAndNullFromArr(arr){
//     return arr.filter((el)=> el !== 0 && el !== null && el !==" ")
// }
// console.log(filter0BlankLinesAndNullFromArr([1,2,3,null, 9,0,88,9, " "]))
// //118

// function getRandomDate(){

//     const day = Math.floor(Math.random()*31)
//     const month = Math.floor(Math.random()*12)
//     const year = Math.floor(Math.random()*2022)
//     const date = new Date(year, month, day)
//     return date
// }
// console.log(getRandomDate())
// //119

// function addFieldAndFreezeTheObject(key,val,obj){
//     obj.key=val
//      return Object.freeze(obj)
// }

// console.log(addFieldAndFreezeTheObject(88, "lis", {1:"kot", 2: "pies"}))


// //120
// function isFrozen(obj){
//     const val = Object.isFrozen(obj)? "jest": " nie jest"
//     return `Ten obiekt ${val} zamrozony`
// }
// console.log(isFrozen({a:"hak", b:"jak"}))
// console.log(isFrozen(addFieldAndFreezeTheObject(88, "lis", {1:"kot", 2: "pies"})))

// //121

// function makeUniqueKeyInMapandReturnMap(){
//     const map = new Map()
//     for(let i =1; i<10; i++){
//         map.set(Symbol(i), i)
//     }
//     return map
// }
// console.log(makeUniqueKeyInMapandReturnMap())
// //122
// function getUnionFromTwoArr(arr1, arr2){
//     const newArr=[]
//     for(let el of arr1){
//         if(arr2.includes(el)){
//             newArr.push(el)
//         }
//     }
//     return newArr


// }
// console.log(getUnionFromTwoArr([1,2,3,4,5],[4,5,6,7,8,8]))

// //123

// function findDuplicate(arr){
//     const newArr=[];
//     const repeatElem=[]
//     for(let el of arr){
//         if(newArr.includes(el)){
//             repeatElem.push(el)
//         }else{
//             newArr.push(el)
//         }
//     }
//     return `Powtarzaja sie ${[...new Set(repeatElem)].join(" and ")}`
// }
// console.log(findDuplicate([1,2,3,4,5,6,6,6,7,8,8,9,10]))

// //124

// function findLeapInArrOFNum(arr){
//     for(let i =0; i<arr.length; i++){
//     if(arr[i]+1 !== arr[i+1]){
//         return `Wystąpiła przerwa w ciągu liczb: ${arr[i]} oraz ${arr[i+1]}`
//     }
//     }
//     return `Liczby są w ciagu`
// }

// console.log(findLeapInArrOFNum([1,2,3,4,5,6,7,9,10]))

// //125

// function findTheHighestValueInArr(arr){
//     return arr.sort((a,b)=>b-a)[0]
// }
// console.log(findTheHighestValueInArr([1,2,33,4,5,5,66,555,7]))

// //126

// function removeFromSet(element, set){
//      set.delete(element)
//     return set
// }
// const set1 = new Set()
// set1.add("kot");
// set1.add("pies");
// set1.add("koń");
// console.log(removeFromSet("kot", set1))

// //127
// //diffrence of sets

// function getDifferenceFrom2Arr(arr1,arr2) {
//     return arr1.filter((el) => !arr2.includes(el))

// }

// console.log(getDifferenceFrom2Arr([1,2,3,4,5,6,7], [5,6,7,8,9,99]))


// //128
// //Intersection
// function getCommonPartFrom2Arr(arr1, arr2){
//     return arr1.filter((el)=>arr2.includes(el))
// }

// console.log(getCommonPartFrom2Arr([1,2,3,4,5,6], [5,6,7,89,9]))
// //129
// //Unia setów
// function makeUnionFromTwoSets(set1, set2){
//     return new Set([...set1, ...set2])
// }


// let firSet = new Set([1,2,3,4,5])
// let secondSet = new Set([4,5,6,7,8])

// console.log(makeUnionFromTwoSets(firSet, secondSet))
// //130

// function getAverageFromSumNumberFromList(arr){
//     return arr.reduce((acc, cu)=> acc+cu)/arr.length
// }
// console.log(getAverageFromSumNumberFromList([1,2,3,4,5,6,7]))

// //131

// function getSumOfPowerNumbFromArr(arr){
//     return arr.map((num)=> Math.pow(num, 2)).reduce((acc, cu)=> acc+ cu)

// }
// console.log(getSumOfPowerNumbFromArr([1,2,3,4]))

// //132

// function getLongestWordInList(arr){
//     return `Najdluzszy wyraz ma ${arr.map((word)=>word.length).reduce((acc, cu)=> acc> cu ? acc: cu)} liter i jest to ${arr.filter((word)=>word.length === 9) }`
// }

// console.log(getLongestWordInList(["kot", "pies", "lis", "kuropatwa"]))

// //133

// function getBigestNumberFromArr(arr){
//     return arr.reduce((acc, cu)=> acc > cu ? acc: cu)
// }
// console.log(getBigestNumberFromArr([1,2,333,6,7,99,0]))
// //134

// function getSmalestNumFromArr(arr){
//     return arr.reduce((acc, cu)=> acc > cu ? cu :acc)
// }

// console.log(getSmalestNumFromArr([1,2,333,6,7,99,0]))
// //135

// function getLongerArr(arr1, arr2){
//     return (arr1.length > arr2.length ? arr1: arr2)
// }

// console.log(getLongerArr([1,2,2,3,3,4,45,5], [2,3]))
// //136

// function getShorterArr(arr1, arr2){
//     return( arr1.length > arr2.length ? arr2: arr1)
// }

// console.log(getShorterArr([1,2,2,3,3,4,45,5], [2,3]))
// //137

// function checkIfFirstArrIncludesInSecondArr(arr1, arr2){
//     for(let el of arr1){
//         if(!arr2.includes(el)){
//             return ` Sorry first arr doesn t includes in second arr`
//         }
//     }
//     return `Bingo First includes in Second`
// }
// console.log(checkIfFirstArrIncludesInSecondArr([1,2,3,4],[1,2,3,4,5,6,7]))
// console.log(checkIfFirstArrIncludesInSecondArr([1,2,3,4],[1,2,3,99,5,6,7]))
// //138

// function getSubFromNumbersFrom2(arr1, arr2){
//     const newArr=[]
//     for(let i =0; i< arr1.length; i++){
//         newArr.push((arr2[i] ? arr1[i]-arr2[i] : arr1[i]))
//     }
//     return newArr
// }
// // console.log(getSubFromNumbersFrom2([1,2,3,4,6], [0,1,1,1,1]))
// // console.log(getSubFromNumbersFrom2([1,2,3,4,6], [0,1,1]))

// //139

// function multiplyNumbersFrom2Arrays(arr1, arr2){
//     const newArr=[];
//     for(let i =0; i <arr1.length; i++){
//         newArr.push((arr2[i] || arr2[i] === 0 ? arr1[i]* arr2[i] : arr1[i]))
//     }
//     return newArr
// }
// console.log(multiplyNumbersFrom2Arrays([1,2,3,4,6], [3,1,1,1,1]))
// console.log(multiplyNumbersFrom2Arrays([1,2,3,4,6], [0, 2,1,1]))

// //140

// function findBiggerSizeOFSets(set1, set2){
//     return (set1.size> set2.size ? set1: set2)
// }
// let x = new Set([1,2,3,4,5,66,99,88,777])
// let y= new Set([4,5,6,7,8])
// console.log(findBiggerSizeOFSets(x, y ))

// //141

// function getSumFromNestedArrays(nestedArr){
//     return nestedArr.flat().reduce((acc, cu)=> acc+cu)
// }
// console.log(getSumFromNestedArrays([[1,2,3,4],[3,4,5,2],[3,4,5,6]]))


// //142

// function findWordsStartsWithLetterAndEndsWithAnotherLetter(arr, startLetter, endsLetter){
//     return arr.filter((word)=> word.startsWith(startLetter) && word.endsWith(endsLetter))
// }
// console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter(["kot", 'pies', "koń"], "k", "t"))
// console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter(["kot", 'pies', "koń"], "p", "l"))

// //143

// function findWordsStartsWithLetterAndEndsWithAnotherLetter2(arr, startLetter, endLetter){
//     return arr.reduce((acc, cur)=>cur.startsWith(startLetter) && cur.endsWith(endLetter)?[...acc, cur]: acc ,[])
// }

// console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter2(["kot", 'pies', "koń"], "k", "t"))
// console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter2(["kot", 'pies', "koń"], "p", "l"))

// //144

// function checkIfInTheListIsWordLongerThanTen(arr){
//     return arr.some((word)=> word.length > 10)
// }
// console.log(checkIfInTheListIsWordLongerThanTen(["kokardka", "tulipan", "Lototo"]))

// //145

// function changeSetToList(set){
//     return [...set]
// }
// console.log(changeSetToList(set1))

// //146

// function changeMapToListOfValues(map){
//     return [...map.values()]
// }
// const map1 = new Map();
// map1.set(1, 'aligator')
// map1.set(2, 'mucha')
// map1.set(3, 't-rex')
// console.log(changeMapToListOfValues(map1))
// //147

// function objectToList(obj){
//     return Object.values(obj)
// }
// const obj={
//     name: "Monika",
//     age: "34",
//     animals: "cat"
// }
// console.log(objectToList(obj))

// //148

// function getKeysFromObj(obj){
//     return Object.keys(obj)
// }
// console.log(getKeysFromObj(obj))
// //149

// function getListOfKeyValueOfObj(obj){
//     return Object.entries(obj).flat()
// }
// console.log(getListOfKeyValueOfObj(obj))
// //150

// function sumOfNumLessThan100(...args){
//     return args.filter((el)=> el > 100).reduce((acc, cu)=> acc+cu)
// }
// console.log(sumOfNumLessThan100(1,2,3,4,5,667,7,77,101)) // bez kwadratowych nawiasów


// //151

// function multiplyArgumentAndRejectStr(...args){
//     return args.filter((e)=> typeof e==='number').reduce((acc, cu)=> acc*cu)
// }
// console.log(multiplyArgumentAndRejectStr(10,'Hi',null,undefined,20))
// //152

// function replace8by1inNumbers(...args){
//     return args.map((el)=> el === 8 ? 1: el)
// }
// console.log(replace8by1inNumbers(1,2,7,8,9,0,8,7))

// //153

// function deleteNumAfterDot(floatNum){
//     return Math.trunc(floatNum)
// }
// console.log(deleteNumAfterDot(2.6))
// console.log(deleteNumAfterDot(8.2))

// //154

// function checkIfNumbersInArrArePositiveNegativeOr0(arr){
//     return arr.forEach(el=>console.log(Math.sign(el)))
// }
// console.log(checkIfNumbersInArrArePositiveNegativeOr0([1,1,1,1,0,-6,-6,-5]))
// //155

// function getDiagonalSquare(a){
//     return (a* Math.sqrt(2))
// }
// console.log(getDiagonalSquare(10))
// //156

// function findLowestNum(...args){
//     return Math.min(...args)
// }
// console.log(findLowestNum(99,5,8,5,-1))

// //157
// function findMaxNum(...args){
//     return Math.max(...args)
// }
// console.log(findMaxNum(1,9,88,77,55))

// //158

// function forEachElGetOpositSignNum(...args){
//     return args.map((el)=> el - 2*el)
// }

// console.log(forEachElGetOpositSignNum(1,2,3,-9,-7))

// //159

// function findValueOfKeyandDoubleIt(map, key ){
//     return map.get(key) ? map.get(key)*2 : "Not find"
// }
// const map2 = new Map()
// map2.set(1, 2)
// map2.set(2, 3)
// map2.set(3, 4)
// console.log(findValueOfKeyandDoubleIt(map2, 3))

// //160

// function sayHello(name){
//     return `Hello ${name}!`
// }

// //161

// const data=[
//     {
//         Surname: "Kowalscy",
//         Names: ["Ola", "Kasia", "Ania", "Kuba"],
//         city: "Kraków",
//         isUserApp: true,
//         points: 42
//     },{
//         Surname: "Nowakowie",
//         Names: ["Ela", "Asia", "Hania", "Karol"],
//         city: "Kraków",
//         isUserApp: true,
//         points: 74
//     },{
//         Surname: "Liliputowie",
//         Names: ["Piotr", "Krysia", "Mikołaj"],
//         city: "Zakopane",
//         isUserApp: true,
//         points: 96
//     },{
//         Surname: "Andersowie",
//         Names: ["Ania", "Leon"],
//         city: "Katowice",
//         isUserApp: false,
//         points: 0
//     },{
//         Surname: "Goprowie",
//         Names: ["Robert", "Lila"],
//         city: "Lublin",
//         isUserApp: true,
//         points: 70
//     },
// ]

// function findUsers(data){
//     return data.filter((family)=> family.isUserApp === true)
// }
// console.log(findUsers(data))
// //162
// function findUsers2(data){
//     return data.reduce((acc, cu)=> cu.isUserApp === true ? [...acc, cu]: acc, []).map(family=> family.Surname)
// }
// console.log(findUsers2(data))

// //163
// function findUsersFromCity(city){
//     return findUsers(data).filter((family)=> family.city === city).map((family)=>family.Surname)
// }
// console.log(findUsersFromCity("Kraków"))
// //164

// function findUsersWithAlmost3members(){
//     return findUsers(data).filter((family)=> family.Names.length > 2).map(fam=>fam.Surname)
// }
// console.log(findUsersWithAlmost3members())
// //165

// function findUsersStartsWithLetter(letter){
//     return findUsers(data).filter(family=>family.Surname.startsWith(letter))
// }
// console.log(findUsersStartsWithLetter("G"))

// //166

// function findFamieliesWithNameInNames(data, name){
//     return data.filter(family=>family.Names.includes(name)).map(fam=>fam.Surname)
// }
// console.log(findFamieliesWithNameInNames(data, "Kuba"))

// //167

// function getCitiesMembers(){
//     return new Set(findUsers(data).map(family=>family.city))
// }
// console.log(getCitiesMembers())
// //168

// function getSumOfPoinstsUsers(){
//     return findUsers(data).reduce((acc, cu)=> acc+cu.points, 0)
// }
// console.log(getSumOfPoinstsUsers())
// //169

// function getInfoAboutPoints(){
//     return findUsers(data).map(fam=>`${fam.Surname} liczba pktów: ${fam.points}`)
// }
// console.log(getInfoAboutPoints())

// //170

// function getInfoWhoIsNotAUser(data){
//     return `Nie jest uzytkownikiem: ${data.filter(fam=>fam.isUserApp===false).map(fam=>fam.Surname)}`
// }
// console.log(getInfoWhoIsNotAUser(data))


//171 i 171
function fullAddress(city){
    function address(street){
        return `Użytkownik meszka w miescie ${city} na ulicy ${street}`
    }
    return address
}

const getMessage = fullAddress("Kraków")
console.log(getMessage("Opolska"))


//172 i 173

function fullData(amount){
    function data(price){
        return `Użytkownik zakupił ${amount} w cenie ${price} zł/ sztukę czyli zapłacił ${amount*price} zł.`
    }
    return data
}

const getData = fullData(20)
console.log(getData(2.5))

//174 i 175

function aboutProduct(rating){
    function product(name){
        return `Produkt ${name} posiada ocene ${rating} w naszym sklepie!`
    }
    return product
}

const getProduct5stars = aboutProduct("5.0")
console.log(getProduct5stars("Pen Ajax"))
console.log(getProduct5stars("Pencil Obol"))
//176 i 177

function getPriceAfterSubTax(tax){
    function product(price){
        return `Po opłaceniu podatku ${tax}%  cena to ${(price - (price*(tax/100)))}`
    }
    return product
}

const getPriceAfter21Tax = getPriceAfterSubTax(21)
console.log(getPriceAfter21Tax(100))
console.log(getPriceAfter21Tax(150))
console.log(getPriceAfter21Tax(55))

//178 i

function getIncomes(timeInDays){
    function getIncomesForOneDay(income){
        return `Przychód za ${timeInDays} ${timeInDays > 1? "dni": "dzień"} wynosi ${income*timeInDays} zł`
    }
    return getIncomesForOneDay
}

const annualIncome = getIncomes(365)
const oneDayIncome = getIncomes(1)
console.log("Przychód dzienny 1000 zł ",annualIncome(1000))
console.log("Przychód dzienny 200 zł ",annualIncome(200))
console.log("Przychód dzienny 50000 zł ",annualIncome(50000))
console.log("Przychód dzienny 50 zł ",oneDayIncome(50))



//180 i 181

function getAreaOfTriangle(aInCm){
    function triangle(h){
        return `${0.5 * aInCm * h} cm2`
    }
    return triangle
}

const getAreaWith10cmSide = getAreaOfTriangle(10)
console.log(getAreaWith10cmSide(4))
console.log(getAreaWith10cmSide(10))
console.log(getAreaWith10cmSide(7))


//182 i 183

function priceForTickets(num){
    function getPriceForAllTickets(price){
        return `Cena do zapłaty to ${num*price} zł`
    }
    return getPriceForAllTickets
}

const priceFor10Ticket = priceForTickets(10)
const priceFor1Ticket = priceForTickets(1)
console.log(priceFor1Ticket(12))
console.log(priceFor1Ticket(16))
console.log(priceFor10Ticket(12))
console.log(priceFor10Ticket(16))
//184 i 185

function getTotalAmountOfFlats(num_floors){
    function flats(amountFlatsOnTheFloor){
        return `W bloku ${num_floors} piętrowym, gdy na piętrze jest ${amountFlatsOnTheFloor} mieszkań całkowita liczba mieszkań to ${num_floors*amountFlatsOnTheFloor}`
    }
    return flats
}

const getNumberOfFlatsIn10FloorsBuilding = getTotalAmountOfFlats(10)
const getNumberOfFlatsIn7FloorsBuilding = getTotalAmountOfFlats(7)

console.log(getNumberOfFlatsIn7FloorsBuilding(4))
console.log(getNumberOfFlatsIn7FloorsBuilding(5))
console.log(getNumberOfFlatsIn10FloorsBuilding(4))
console.log(getNumberOfFlatsIn10FloorsBuilding(5))

//186 i 187 i 188

function add3Numbers(num1){
    function num2(num2){
        function num3(num3){
            return (num1 + num2 +num3)
        }
        return num3
    }
    return num2
}

const getAdd3Numbers = add3Numbers(10)
console.log(getAdd3Numbers(20)(30))


// 189 i 190

function getRandomValuesFromArr(arr){
    function numberOfValues(num){
        const newArr=[]
        for(let i=0; i< num; i++){
            let j = Math.floor(Math.random()*arr.length)
                newArr.push(arr[j])
        }
        return newArr
    }
    return numberOfValues
}

const getRandomFromArr = getRandomValuesFromArr([1,2,3,3,3,3,4,5,6,76,7,7,8,8,9,0])
console.log(getRandomFromArr(4))
console.log(getRandomFromArr(9))

//191
//192

function power(power){
    function digit(digit){
        return digit ** power
    }
    return digit
}
const power10 = power(10)
console.log(power10(2))
console.log(power10(3))

//192

const raiseToPower = (power) => (digit) => digit ** power

const power8 = raiseToPower(8)
console.log(power8(2))
console.log(power8(3))
//193

function genUUID(){
    let id =0
    function next(){
        const result = id;
        id ++;
        return result
    }
    return next
}
const generatorUUID = genUUID()
console.log(generatorUUID())
console.log(generatorUUID())
console.log(generatorUUID())
console.log(generatorUUID())
console.log(generatorUUID())
console.log(generatorUUID())


//194

const genUUID2 = (id=0)=>()=>id++;
//195

// const cache = {};
//
// function add(a,b){
//     if(cache[`${a}${b}`] === undefined){
//         //complex logic simulation
//         const t =[];
//         for(let i=0; i <100000; i++) {
//             t.push(i ** i);
//         }
//         console.log("calculating")
//         cache[`${a}${b}`] = a+ b
//         }
//     return cache[`${a}${b}`]
//     }


//196

// function cash_add(){
//     const cache = {}; //obiekt nie jest juz globalny
//     function add2(a,b){
//
//     if(cache[`${a}${b}`] === undefined){
//         //complex logic simulation
//         const t =[];
//         for(let i=0; i <100000; i++) {
//             t.push(i ** i);
//         }
//         console.log("calculating")
//         cache[`${a}${b}`] = a+ b
//         }
//     return cache[`${a}${b}`]
//     }
//
//     return add2
// }
//197

function cache2param(fn){
    const c = {};
    function inner(a, b){
        if(c[`${a}${b}`] === undefined){
            c[`${a}${b}`] = fn(a, b)
        }
        return c[`${a}${b}`]
        }
    return inner
}

//198 i 199
//Uniwersalny cache!

function cache(fn){
    const c = {};

    function inner(...params){
        if(c[params.join()] === undefined){
            c[params.join()] = fn(...params)
        }
        return c[params.join()]
        }
    return inner
}


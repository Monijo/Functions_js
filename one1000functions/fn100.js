// // // // palindrome
// // // function isPalindrome(text){
// // //     return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
// // // }
// //
// // // const is_palindrome2 = function(text){
// // //      return text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
// // // }
// //
// // // const is_palindrome3 = text => text.toLowerCase().split("").reverse().join('') === text.toLowerCase();
// //
// //
// //
// // // const lessThanTen = (digit) => digit <=10 //implicite return
// //
// // // const lessThanTen2 = (digit) => {
// // //     return digit <= 0;
// // // }
// //
// //
// // // const get_max_number = (...values) =>{
// // //     let max = values[0]
// // //     for(let i = 1; i< values.length; i++){
// // //         if (values[i] > max){
// // //             max = values[i];
// // //         }
// // //     }
// // //     return max;
// // // }
// //
// // // const max2 = (...digits) =>{
// // //     let max = digits[0];
// //
// // //     digits.forEach((digit)=>{
// // //         if(digit > max){
// // //             max = digit;
// // //         }
// //
// // //     })
// // //     return max
// // // }
// //
// // // const max3 = (...digits) =>{
// // //     return digits.reduce((max,current) =>{
// // //         if(current > max){
// // //             return current
// // //         }
// // //         return max;
// // //     }, digits[0])
// // // }
// //
// //
// //
// // // function range(start, stop, step=1){ // bez spacjii przy argumentach!
// // //     if (stop === undefined){  // nie moze byc 0 bo to poprawna wartosc stopu
// // //         stop=start;
// // //         start = 0 ;
// // //     }
// // //     const temp = [];
// // //     while (temp.length < (stop-start)/step){
// // //         temp.push(start + temp.length* step)// np 0+ 1*2, 0+ 2*2, 0+ 3*2
// // //     }
// // //     return temp
// // // }
// //
// // // range()
// //
// // // //1
// //
// // // function distFromAverage(arr){
// // //     const newArr = []
// //
// // //     const averageFromArr = arr.reduce((total, item)=> total +item, 0 )/arr.length
// // //     for (let digit of arr){
// // //         let newDigit = Math.abs(digit - averageFromArr)
// // //         newArr.push(newDigit)
// // //     }
// //
// // //     return newArr
// // // }
// // // // console.log(distFromAverage([1,2,3,4,5,6,7]))
// // // // console.log(distFromAverage([1,1,1,1]))
// // // // console.log(distFromAverage([2,8,3,7]))
// // // //
// //
// //
// // // //2
// //
// // // function printTable(arr){
// // //     arr.forEach(el=>console.log(el))
// // // }
// // // // printTable([1,2,3,4,5])
// //
// // // //3
// //
// // // function multiply(arr){
// // //     return arr.reduce((total, item)=> total * item, 1)
// // // }
// // // // console.log(multiply([1,2,3,4,5,6,7]));
// // // // console.log(multiply([1,1,1,1]));
// // // // console.log(multiply([2,8,3,7]));
// //
// // // //4
// //
// // // function getEvenAverage(arr){
// // //     const newArr=[];
// // //     for(let el of arr){
// // //         if (el%2 === 0){
// // //             newArr.push(el)
// // //         }}
// //
// //
// // //     if(newArr.length ===0){
// // //         return null
// // //     }
// // //     else{
// // //         const value = newArr.reduce((total, item)=> total +item, 0 )/newArr.length
// // //         return value.toFixed(2)
// // //     }
// // // }
// //
// // // // console.log(getEvenAverage([1,2,3,4,5,6,7]));
// // // // console.log(getEvenAverage([1,1,1,1]));
// // // // console.log(getEvenAverage([2,8,3,7,4]));
// //
// // // //5
// //
// // // function sortArray(arr){
// // //     return arr.sort((a,b)=> a-b)
// // // }
// //
// // // // console.log(sortArray([145,11,3,64,4,6,10]))
// //
// // // //6
// //
// // // function addArrays(arr1,arr2){
// // //     const newArr=[]
// // //     if(arr1.length > arr2.length){
// // //         for(let i=0; i<arr2.length; i++){
// // //             let newValue = arr1[i]+arr2[i]
// // //             newArr.push(newValue)
// //
// //
// // //         }
// // //         const redundandNum = arr1.splice(-(arr1.length- arr2.length))
// // //         return newArr.concat(redundandNum)
// // //     }
// //
// // //     if(arr2.length > arr1.length){
// // //         for(let i=0; i<arr1.length; i++){
// // //             let newValue = arr1[i]+arr2[i]
// // //             newArr.push(newValue)
// //
// //
// // //         }
// // //         const redundandNum = arr2.splice(-(arr2.length- arr1.length))
// // //         return newArr.concat(redundandNum)
// // //     }
// //
// // //        if(arr2.length === arr1.length){
// // //         for(let i=0; i<arr1.length; i++){
// // //             let newValue = arr1[i]+arr2[i]
// // //             newArr.push(newValue)
// //
// //
// // //         }
// //
// // //         return newArr
// // //     }
// //
// //
// // // }
// // // //
// // // // console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
// // // // console.log(addArrays([8,3,22], [1,3,2]));
// // // // console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));
// //
// // // //7
// //
// // // function print2DArray(arr){
// // //     arr.forEach(el=>el.forEach(elw=>console.log(elw)))
// // // }
// //
// // // // print2DArray([[1,2,3,4],["kot", "pies", "chomik"]])
// //
// // // //8
// //
// // // function getNumber(num, arr){
// // //     return arr.includes(num)
// // // }
// //
// // // // console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
// // // // console.log(getNumber(5, [33, 54, 2, 1, 4, 100] ));
// //
// // // //9
// //
// // // function addTheSameNumbers(num, arr){
// // //     if( !arr.includes(num)){
// // //         return null
// // //     }
// // //     let i =0;
// // //     for(let el of arr){
// // //         if(el === num){
// // //             i++
// // //         }
// //
// // //     }
// // //     return (i*num)
// // // }
// //
// // // // console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
// // // // console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ));
// // // // console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) );
// // // // console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ));
// //
// // // //10
// //
// // // function doubleNumber(arr){
// // //     return arr.map((elem)=>elem*2)
// // // }
// //
// // // // console.log(doubleNumber([1,2,3,4,5,6,7]))
// //
// // // //11
// //
// // // function chooseEvenNumbers(arr){
// // //     return arr.filter((el)=> el%2===0)
// // // }
// //
// // // // console.log(chooseEvenNumbers([1,2,3,4,5,6,7,8]))
// //
// // // //12
// //
// // // function makeEvenNumber(arr){
// // //     const newArr=[];
// // //     for(let num of arr){
// // //         if(num%2===0){
// // //             newArr.push(num)
// // //         }else{
// // //             newArr.push(num +1)
// // //         }
// // //     }
// // //     return newArr
// // // }
// //
// // // // console.log(makeEvenNumber([1,2,3,4,5,6,7,7]))
// //
// // // //13
// //
// // // // async function getExchangeRate(url, currencyCode){
// // // //     const response = await fetch(`${url}${currencyCode}?format=json`);
// // // //     return  await response.json()
// // // //
// // // // }
// // // //
// // // // getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a', 'USD').then(data=>{
// // // //     console.log(data.rates[0].mid)
// // // // })
// //
// //
// // // //14
// //
// // // //
// // // // function getWeather(url){
// // // //
// // // //     return fetch(url).then(resp=>resp.json())
// // // //
// // // // }
// // // //
// // // // function getWeatherData(pr, weatherParams){
// // // //     pr.then(data=>{
// // // //         const newData= data.map(param => `${param.stacja}: ${param[weatherParams]}`)
// // // //         console.log(newData)
// // // //     })
// // // //
// // // // }
// // // //
// // // // const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/")
// // // // getWeatherData(result, 'temperatura')
// // // //
// // // //
// // // //
// // // //
// // // //
// //
// //
// //
// // // //15
// //
// // // const exampleArr =[1,2,3,4,5,5,6,0,7,7]
// //
// // // function getDoubleOfNumber(arr){
// // //     return arr.map((element)=>element*2)
// // // }
// // // // console.log(getDoubleOfNumber(exampleArr))
// //
// //
// //
// // // //16
// //
// // // function getEvenNumber(arr){
// // //     return arr.filter((element)=> element%2 === 0)
// // // }
// //
// // // // console.log(getEvenNumber(exampleArr))
// //
// //
// // // //17
// //
// // // function getEvenNumberLowerThan8(arr){
// // //     return arr.filter((element)=> element%2 ===0 && element <8)
// // // }
// //
// // // // console.log(getEvenNumberLowerThan8(exampleArr))
// //
// // // //18
// //
// //
// // // function getNumberLowerThan10andAddToThem1(arr){
// // //     return arr.filter((element)=>element <10).map((element)=>element+1)
// // // }
// //
// // // // console.log(getNumberLowerThan10andAddToThem1(exampleArr))
// //
// //
// // // //19
// //
// // // function getAverageFromFirst10Numbers(arr){
// // //     const first10Elem= arr.filter((element,index,arr)=>index<10)
// // //     return first10Elem.reduce((acc, cu)=>acc+cu)/first10Elem.length
// // // }
// // // // console.log(getAverageFromFirst10Numbers(exampleArr))
// //
// // // //20
// //
// //
// // // function getElementsWithEvenIndex(arr){
// // //     return arr.filter((element, index, arr)=>index%2===0)
// // // }
// //
// // // // console.log(getElementsWithEvenIndex(exampleArr))
// //
// // // //21
// //
// // // function getNumbersReturs4Time(arr){
// // //     const newList = [];
// // //     arr.map((element)=>newList.push([element, element, element, element]))
// // //     return newList.flat(1)
// // // }
// // // // console.log(getNumbersReturs4Time(exampleArr))
// //
// // // //22
// //
// // // function changeListToMap(arr){
// // //     return arr.flatMap((el, index, arr)=>[`${index}:`, el])
// // // }
// //
// // // // console.log(changeListToMap(exampleArr))
// // // //23
// //
// // // const stringArr = ["Ala", "Kasia", "Kuba", "Ola", "Igor"]
// //
// //
// // // function checkIfNameIsInArr(arr, name){
// // //     return arr.includes(name)
// // // }
// //
// // // // console.log(checkIfNameIsInArr(stringArr,"Ola"))
// // // // console.log(checkIfNameIsInArr(stringArr, "Leon"))
// //
// // // //24
// //
// // // function findShortWords(strArr){
// // //     return strArr.filter((element)=> element.split("").length <5)
// // // }
// //
// // // // console.log(findShortWords(stringArr))
// //
// // // //25
// //
// // // function findWordsStartsWithLetter(arr, letter){
// // //     return arr.filter((element)=>element.startsWith(letter))
// // // }
// //
// // // // console.log(findWordsStartsWithLetter(stringArr, "K"))
// //
// // // //26
// //
// // // function get3TimesReapeatWords(arr){
// // //     return arr.map((element)=> element.repeat(3))
// // // }
// //
// // // // console.log(get3TimesReapeatWords(stringArr))
// //
// // // //27
// //
// // // function getFirstAndLastLetterOfWord(arr){
// // //     return arr.map((element, index, arr)=> `${element.charAt(0)} and ${element.charAt(element.split("").length-1)}`)
// // // }
// // // // console.log(getFirstAndLastLetterOfWord(stringArr))
// //
// // // //28
// //
// // // function changeFirstLetterToLowerCase(arr){
// // //     return arr.map((element)=> element.charAt(0).toLowerCase())
// // // }
// // // // console.log(changeFirstLetterToLowerCase(stringArr))
// //
// // // //29
// //
// // // function getMiddleOftheWord(arr){
// // //     return arr.map((element, index, arr)=> element.substring(1, element.split("").length-1))
// // // }
// //
// // // // console.log(getMiddleOftheWord(stringArr))
// //
// // // //30
// //
// // // function fillDotsTo20inStrIfNeed(arr){
// // //     return arr.map((element)=> element.padEnd(20, '.'))
// // // }
// //
// // // // console.log(fillDotsTo20inStrIfNeed(stringArr))
// //
// // // //31
// //
// // // function getDice6Numbers(num){
// // //     const newArr=[];
// // //     let i=0;
// // //     while (i<num){
// // //          const randomDiceThrow = Math.floor(Math.random()*6 +1)
// // //          newArr.push(randomDiceThrow)
// // //          i++
// // //     }
// // //     return newArr.reduce((acc, cu)=> acc+cu)
// //
// // // }
// //
// // // // console.log(getDice6Numbers(1))
// // // // console.log(getDice6Numbers(2))
// // // //32
// //
// // // function multiplyNumbersByRandomNumber(arr){
// // //     return arr.map((element)=> element * (Math.random()*10))
// // // }
// // // // console.log(multiplyNumbersByRandomNumber(exampleArr))
// // // //33
// //
// // // function findElementGraterThanAverage(arr){
// // //     return  arr.filter((element)=> element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))
// //
// // // }
// // // // console.log(findElementGraterThanAverage(exampleArr))
// //
// // // //34
// // // const findFirstElementGraterThanAverage2 = (arr)=> arr.find(element => element > (arr.reduce((acc,cu)=> acc+cu)/arr.length))
// // // // console.log(findFirstElementGraterThanAverage2(exampleArr))
// // // //35
// //
// // // function changeToStarsMoreThan3El(arr){
// // //     return arr.fill("*", 3)
// // // }
// // // // console.log(changeToStarsMoreThan3El(exampleArr))
// // // //36
// //
// // // function getTheReverseNum(num){
// // //     return num.toString().split("").reverse((a,b)=>a-b).join("")
// // // }
// //
// // // // console.log(getTheReverseNum(123456))
// //
// // // //37
// //
// // // function toAlphabeticalOrder(word){
// // //     return word.split("").sort().join("")
// // // }
// // // // console.log(toAlphabeticalOrder("traktor"))
// //
// // // //38
// //
// // // function toUpperCaseFirstLetterOfWord(text){
// // //     return text.split(" ").map((element)=>(element.charAt(0).toUpperCase() + element.substring(1))).join(" ")
// // // }
// // // console.log(toUpperCaseFirstLetterOfWord("to jest przykladowe zdanie."))
// // // //39
// //
// // // function makeBoard(){
// // //     for(let i =0; i<8; i++){
// // //         if(i%2===1){
// // //             console.log("# ".repeat(4))
// // //         }else{
// // //             console.log(" #".repeat(4))
// // //         }
// // //     }
// // // }
// // // makeBoard()
// // // //40
// //
// // // function checkIfWordIsInSentence(text, word){
// // //     return `"${word}" ${text.includes(word) ? 'is' : 'is not'} in the sentence "${text}"`
// // // }
// //
// // // // console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'lis'))
// // // // console.log(checkIfWordIsInSentence("Ala ma kota i psa", 'ma'))
// //
// //
// // // //41
// //
// // // function coverCardNum(number){
// // //     const numToStr = new String(number)
// // //     const last4Num = numToStr.slice(-4)
// // //     return numToStr.slice(-4).padStart(numToStr.length, "*")
// // // }
// //
// // // // console.log(coverCardNum(838347437845784578))
// //
// // // //42
// //
// // // function checkIfEndsWithA(arr){
// // //     return arr.filter((element)=>element.endsWith('a'))
// // // }
// //
// // // // console.log(checkIfEndsWithA(stringArr))
// //
// // // //43
// //
// // // function concatAndReturnNotRepetedElements(arr1, arr2){
// // //     return new Set(arr1.concat(arr2))
// // // }
// //
// // // // console.log(concatAndReturnNotRepetedElements([1,2,3,4,5], [3,4,5,6,7]))
// //
// //
// // // //44
// //
// // // function concatAndReturnLowerThan10(arr1, arr2){
// // //     return arr1.concat(arr2).filter((element)=> element < 10)
// // // }
// //
// // // // console.log(concatAndReturnLowerThan10([1,22,33,45,56,6], [2,3,4,5,6,8,66,444]))
// //
// // // //45
// //
// // // function concatArrAndSumTheNumbers(arr1, arr2){
// // //     return arr1.concat(arr2).reduce((acc, cu)=> acc+cu)
// // // }
// //
// // // // console.log(concatArrAndSumTheNumbers([1,2,3], [4,5,6]))
// // // //
// //
// // // //46
// //
// // // function isAllElementsGreaterThan100(arr){
// // //     return arr.every((e)=> e>100)
// // // }
// //
// // // // console.log(isAllElementsGreaterThan100([101,102,103]))
// // // // console.log(isAllElementsGreaterThan100([101,102,10]))
// // // //
// //
// // // //47
// //
// // // function isSomeElementsStartingWithLetter(arr, letter){
// // //     return arr.some((el)=> el.startsWith(`${letter}`))
// // // }
// //
// // // // console.log(isSomeElementsStartingWithLetter(["Ala", "Kot", "Pies"], "P"))
// //
// // // //48
// //
// // // function isUndefinedinArr(arr){
// // //     return arr.some((el)=>el===undefined)
// // // }
// //
// // // console.log(isUndefinedinArr([1,2,3,4]))
// // // console.log(isUndefinedinArr([1,2,undefined,4]))
// //
// // // //49
// //
// // // function findFirstElementLowerThan0(arr){
// // //     return arr.find(el=> el <0)
// // // }
// //
// // // console.log(findFirstElementLowerThan0([1,2,3,4,5,6,-8,9999,-9]))
// //
// // // //50
// //
// // // function changeStringToArray(text){
// // //     return Array.from(text)
// // // }
// //
// // // console.log(changeStringToArray("To jest text o niczym"))
// //
// // // //51
// //
// // // function getTriangleField(a,h){
// // //     return (a*h/2)
// // // }
// //
// // // console.log(getTriangleField(3, 4))
// // // //52
// //
// // // function getCelciusTemperature(farenTemp){
// // //     return ((farenTemp - 32)/1.8)
// //
// // // }
// // // console.log(getCelciusTemperature(100))
// // // //53
// //
// // // function getText10times(text){
// // //     return text.repeat(10)
// // // }
// // // console.log(getText10times("To jest text "))
// // // //54
// //
// // // function removeWhitespace(text){
// // //     return text.trimStart().trimEnd()
// // // }
// //
// // // console.log(removeWhitespace("               To jest text z duza iloscia spacjii na poczatku i koncu          "))
// //
// // // //55
// //
// // // function replaceJavaByJS(text){
// // //     return text.replace('java', "JS")
// // // }
// //
// // // console.log(replaceJavaByJS("To java jest najlepszym jezykiem na swiecie"))
// //
// // // //56
// //
// // // function deleteNamesOfAnotherLanguages(text){
// // //     return text.replace("java", "python").replace("PHP", "java script")
// // // }
// //
// // // console.log(deleteNamesOfAnotherLanguages("PHP i java to najlepsze j??zyki na swiecie"))
// // // //57
// //
// // // function fillLast3ElementsByOK(arr){
// // //     return arr.fill("OK", -3)
// // // }
// // // console.log(fillLast3ElementsByOK([1,2,3,4,5,6,6,7,8,8,8]))
// //
// // // //58
// //
// // // function checkIfAllUsersAreFemail(listName){
// // //     return listName.every((element)=> element.endsWith("a"))
// // // }
// //
// // // console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Monika"]))
// // // console.log(checkIfAllUsersAreFemail(["Ala", "Kasia", "Mirek"]))
// //
// // // //59
// //
// // // function addPersonAtFirstPlace(name){
// // //     const newList = [];
// // //     const newLength =  newList.unshift(name)
// // //     return `U??ytkownik ${name} zosta?? dodany do listy ktora ma aktualnie ${newLength} u??ytkownik??w`
// // // }
// //
// // // console.log(addPersonAtFirstPlace("Ania"))
// //
// //
// // // //60
// //
// // // function addMemberToGroup(member){
// // //     const firstYearList = [];
// // //     const secondYearList = [];
// // //     if(member.rok === 1){
// // //         firstYearList.push(member);
// // //         return `Uczen ${member.name} zosta?? dodany do grupy pierwszej`
// // //     }else{
// // //         secondYearList.push(member);
// // //         return `Uczen ${member.name} zostal dodany do grupy drugiej`
// // //     }
// //
// // // }
// // // console.log(addMemberToGroup({name: "Karol", rok: 2}))
// //
// // // //61
// //
// // // function kmToMiles(km){
// // //     return `${km} to ${km*0.62} mil`
// // // }
// // // console.log(kmToMiles(100))
// // // //62
// //
// // // function findFirstEvenNumber(arr){
// // //     return arr.find((element)=> element%2===0)
// // // }
// // // console.log(findFirstEvenNumber([1,3,5,6,7,8]))
// //
// // // //63
// //
// // // function findFirstElementWitchIsInList(arr, list){
// // //     for(let el of arr){
// // //         if(list.includes(el)){
// // //             return `Pierwszy wyszukany element z listy to ${el}`
// // //         }
// //
// // //     }
// // //     return 'Nie znaleziono zadnego elementu z listy'
// // // }
// //
// // // console.log(findFirstElementWitchIsInList([1,2,3,4,5,5,6,6,7,7], [7,8]))
// //
// // // //64
// //
// // // function returnArrWithout0and9(arr){
// // //     return arr.filter((el)=> el !== 0 && el !==9)
// // // }
// // // console.log(returnArrWithout0and9([1,2,33,4,5,6,6,99,9,9,9,9,1,0]))
// //
// // // //65
// //
// // // const data_to_exercise=[
// // //     {
// // //         name: "Jan",
// // //         age: 23,
// // //         occupation: "Postman"
// // //     },
// // //     {
// // //         name: "Adam",
// // //         age: 93,
// // //         occupation: "teacher"
// // //     },
// // //     {
// // //         name: "Agata",
// // //         age: 43,
// // //         occupation: "Policman"
// // //     },
// // //     {
// // //         name: "Poly",
// // //         age: 13,
// // //         occupation: "student"
// // //     },
// // //     {
// // //         name: "Kuba",
// // //         age: 53,
// // //         occupation: "doctor"
// // //     },
// // //     {
// // //         name: "Pam",
// // //         age: 44,
// // //         occupation: "Postman"
// // //     }
// // // ]
// //
// // // function getPostmans(data){
// // //     return data.filter((person)=>person.occupation.toLowerCase() == "postman")
// // // }
// // // console.log(getPostmans(data_to_exercise))
// // // //66
// // // function getNamesPeopleUnder50(data){
// // //     return `Osoby przed 50 to ${data.filter((person)=> person.age <50).map((person)=>person.name)}!`
// // // }
// // // console.log(getNamesPeopleUnder50(data_to_exercise))
// // // //67
// //
// // // function getNamesStartsWithA(data){
// // //     return `Osoby zaczynajace sie na 'A' to ${data.filter((person)=>person.name.startsWith("A")).map((person)=>person.name).join(" and ")}!`
// // // }
// // // console.log(getNamesStartsWithA(data_to_exercise))
// // // //68
// //
// // // function getSumOfAgePostmans(data){
// // //     return `Sum of age postmans is ${data.filter((person)=>person.occupation.toLowerCase() === "postman").reduce((acc, cu)=> acc+cu.age, 0)}`
// // // }
// // // console.log(getSumOfAgePostmans(data_to_exercise))
// //
// // // //69
// //
// // // function getOccupationOfPerson(data, name){
// // //     return (data.map((person)=>person.name).includes(name) ? `Zaw??d ${name} to ${data.filter((person)=> person.name.toLowerCase() === name.toLowerCase()).map((person)=>person.occupation)}`: "Nie ma takiej osoby na li??cie")
// // // }
// // // console.log(getOccupationOfPerson(data_to_exercise, "Kuba"))
// // // console.log(getOccupationOfPerson(data_to_exercise, "Adolf"))
// // // //70
// //
// // // function checkIfPersonIsUnder18(name, data){
// // //     let age =(data.filter((person)=> person.name.toLowerCase()===name.toLowerCase()).map((person)=>person.age)) <18 ?"underage" : "of age"
// // //     return data.map((person)=>person.name).includes(name) ? `${name.toUpperCase()} is ${age}`: "Brak takiej osoby na li??cie"
// //
// // // }
// // // console.log(checkIfPersonIsUnder18("Kuba", data_to_exercise))
// // // console.log(checkIfPersonIsUnder18("Poly", data_to_exercise))
// // // console.log(checkIfPersonIsUnder18("Roberto", data_to_exercise))
// //
// // // //71
// //
// // // function getBajtFromBit(bits){
// // //     return `${bits} bit??w to ${bits/8} bajt??w`
// // // }
// //
// // // console.log(getBajtFromBit(1000))
// // // //72
// //
// // // function multiplayNumbersByNumbersFromAnotherArr(arr1, arr2){
// // //     const newArr=[]
// // //     for(let i=0; i<arr1.length; i++){
// // //         newArr.push((arr1[i]*arr2[i]))
// // //     }
// // //     return newArr
// // // }
// // // console.log(multiplayNumbersByNumbersFromAnotherArr([1,2,3],[4,5,6]))
// // // //73
// //
// // // function checkIfSentenceStartsWithUpperCase(sentence){
// //
// // //     if(sentence.charAt(0) === sentence.charAt(0).toUpperCase()){
// // //         return "Starts with upper case"
// // //     }
// // //     else{
// // //         return "Char is lower case"
// // //     }
// // // }
// // // console.log(checkIfSentenceStartsWithUpperCase("To zdanie jest z duzej"))
// // // console.log(checkIfSentenceStartsWithUpperCase("a To zdanie jest z ma??ej"))
// //
// // // //74
// // // function returnFormateDate(data){
// // //     return `Dzisiaj jest: dzie??: ${data.getDate()}, miesi????: ${data.getMonth()+1} i rok: ${data.getFullYear()}`
// // // }
// // // console.log(returnFormateDate(new Date()))
// //
// // // //75
// //
// // // function getActualDate(){
// // //     const now=new Date()
// // //     return `Dzisiaj jest ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} rok`
// // // }
// //
// // // console.log(getActualDate())
// // // //76
// //
// // // function actualTime(){
// // //     const now=new Date()
// // //     const hours = now.getHours()
// // //     const min = now.getMinutes() <10 ? "0"+now.getMinutes(): now.getMinutes()  //`${now.getMinutes()}`.padStart(2, "0")
// // //     return `Akualnie jest: ${hours}:${min}`
// // // }
// //
// // // console.log(actualTime())
// // // //77
// //
// // // function getNameOfDay(){
// // //     const now=new Date()
// // //     const days=["niedziela", "poniedzia??ek", "wtorek", "??roda", "czwartek", "piatek", "sobota"]
// // //     return `Dziaisja jest ${days[now.getDay()]}`
// // // }
// // // console.log(getNameOfDay())
// //
// // // //78
// //
// // // function replaceAllBadWords(word,new_word,text){
// // //     return text.replaceAll(word, new_word)
// // // }
// //
// // // console.log(replaceAllBadWords("Java", "Python", "Podobno Java to najlepszy jezyk ??wiata i to Java bedzie jezykiem przysz??o??ci"))
// //
// // // //79
// //
// // // function replaceAllStarsByQuestionMark(text){
// // //     return text.replaceAll("*", "?")
// // // }
// // // console.log(replaceAllStarsByQuestionMark("To jest text o ***** i to s?? *******"))
// //
// //
// // // //80
// //
// // // function sliceTextInHalf(text){
// // //     return text.slice(text.length/2)
// // // }
// // // console.log(sliceTextInHalf("To jest text do przeci??cia i! wykrzyknik jest na ??rodku!"))
// //
// //
// // // //81
// //
// // // const products=[
// // //     {
// // //         name: "pencil",
// // //         category: "school",
// // //         price: 1.5,
// // //         amount: 200
// // //     },{
// // //         name: "pen",
// // //         category: "school",
// // //         price: 3.5,
// // //         amount: 100
// // //     },{
// // //         name: "bike",
// // //         category: "travel",
// // //         price: 1050,
// // //         amount: 30
// // //     },{
// // //         name: "tent",
// // //         category: "travel",
// // //         price: 300,
// // //         amount: 70
// // //     },{
// // //         name: "aple",
// // //         category: "food",
// // //         price: 1.0,
// // //         amount: 270
// // //     },{
// // //         name: "orange",
// // //         category: "food",
// // //         price: 2,
// // //         amount: 90
// // //     },{
// // //         name: "crem",
// // //         category: "cosmetics",
// // //         price: 15.5,
// // //         amount: 60
// // //     },{
// // //         name: "shampoo",
// // //         category: "cosmetics",
// // //         price: 9.7,
// // //         amount: 64
// // //     },
// // // ]
// //
// // // function getProductsFromCategory(data, category){
// // //     return data.filter((product)=>product.category === category).map((product)=>product.name).join(", ")
// // // }
// //
// // // console.log(getProductsFromCategory(products, "cosmetics"))
// //
// // // //82
// //
// // // function getTotalAmountOfProducts(data){
// // //     return `Ilo???? produkt??w w magazynie: ${data.reduce((acc, cu)=>acc+cu.amount, 0)}`
// // // }
// // // console.log(getTotalAmountOfProducts(products))
// //
// // // //83
// //
// // // function getCheapestAndMostExpensiveProducts(data){
// // //     const cheapestProduct = data.sort((a,b)=> a.price - b.price)[0]
// // //     const mostExpensiveProduct = data.sort((a,b)=> a.price - b.price)[data.length -1]
// // //     return `Most expensive product in our store: ${mostExpensiveProduct.name} and the cheapest ${cheapestProduct.name}`
// // // }
// // // console.log(getCheapestAndMostExpensiveProducts(products))
// //
// // // //84
// //
// // // function estimatedProfit(data){
// // //     return `Szacowany zysk z sprzedazy produkt??w: ${data.map((product)=> product.price * product.amount).reduce((acc, cu)=>acc+cu)} z??.`
// // // }
// // // console.log(estimatedProfit(products))
// //
// // // //85
// //
// //
// // // function getCategoriesOfProducts(data){
// // //     const allCategories = data.map((product)=>product.category);
// // //     const newArr = []
// // //     for(let category of allCategories){
// // //         if(!newArr.includes(category)){
// // //             newArr.push(category)
// // //         }
// // //     }
// // //     return `Kategorie w naszym sklepie: ${newArr.join(", ")}.`
// // // }
// // // console.log(getCategoriesOfProducts(products))
// //
// // // //86
// //
// // // function makeSentenceFromArr(arr){
// // //     return arr.join(" ")
// // // }
// // // console.log(makeSentenceFromArr(["To", "s??", "przyk??adowe", "s??owa"]))
// //
// // // //87
// //
// // // function countWhiteMarks(text){
// // //     return  text.split("").filter((letter)=>letter === " ").length
// // // }
// // // console.log(countWhiteMarks("To jest tekst z du??a ilo????i?? spacjii "))
// // // //88
// //
// // // function getAlphabet(){
// // //     const alphabetArr = [];
// // //     for(let i=97; i<123; i++){ //ASCII
// // //         let letter = String.fromCharCode(i)
// // //         alphabetArr.push(letter)
// // //     }
// // //     return alphabetArr
// // // }
// // // console.log(getAlphabet())
// //
// // // //89
// //
// // // function encryptWord(word){
// // //     const alphabet = getAlphabet()
// // //     return word.split("").map((letter)=> (alphabet[alphabet.indexOf(letter)+1])).join("")
// // // }
// // // console.log(encryptWord("kot"))
// // // //90
// //
// // // function decryptWord(encryptWord){
// // //     const alphabet = getAlphabet()
// // //     return encryptWord.split("").map((letter)=> (alphabet[alphabet.indexOf(letter)-1])).join("")
// // // }
// // // console.log(decryptWord("lpu"))
// //
// //
// // // //91
// //
// // // function astronomicalUnitsToKm(au){
// // //     return `${au}j.a. to ${au * 149597870.691} kilometr??w [km]`
// // // }
// // // console.log(astronomicalUnitsToKm(2))
// // // //92
// //
// // // function isArray(col){
// // //     return Array.isArray(col)
// // // }
// // // console.log(isArray([1,2,3]))
// // // console.log(isArray(2))
// //
// // // //93
// //
// // // function cloneArray(col){
// // //     return [...col]
// // // }
// // // console.log(cloneArray([1,2,3]))
// // // //94
// //
// // // function cloneArray2(col){
// // //     return col.slice()
// // // }
// // // console.log("Kopiowanie2: ", cloneArray2([1,2,3]))
// //
// // // //95
// // // function cloneArr3(col){
// // //     return col.concat()
// // // }
// // // console.log(cloneArr3([1,2,3,4,5,5]))
// //
// // // //96
// //
// // // function getAbsValueFromSub(a,b){
// // //     return Math.abs(a-b)
// // // }
// // // console.log(getAbsValueFromSub(2, 10))
// // // //97
// //
// // // function roundOffNumber(num){
// // //     const numAfterSpot = num.toString().split(".")
// // //     const result = parseInt(numAfterSpot[1]) > 4 ? parseInt(numAfterSpot[0]) + 1: numAfterSpot[0];
// // //     return result
// // // }
// // // console.log(roundOffNumber(12.7))
// // // //98
// //
// // // function getNumRaisedToPower(num, pow){
// // //     return Math.pow(num, pow)
// // // }
// // // console.log("2 do pot??gi 4 to ", getNumRaisedToPower(2, 4) )
// //
// // // //99
// //
// // // function checkIfWordIsInTheList(word, arr){
// // //     for(let w of arr){
// // //         if(w===word){
// // //             return true
// // //         }
// //
// // //     }
// // //     return false
// // // }
// // // console.log("Is word 'cat' in arr ['dog', 'hamster', 'duck', 'cat'] ", checkIfWordIsInTheList("cat", ['dog', 'hamster', 'duck', 'cat'] ))
// // // //100
// //
// // // function returnArrWith100numbers(){
// // //     const arrWithNumbers = [];
// // //     for(let i =1; i<101; i++){
// // //         arrWithNumbers.push(i)
// // //     }
// // //     return arrWithNumbers
// // // }
// // // console.log(returnArrWith100numbers())
// //
// // // //101
// //
// // // function getArrFillByNumInRangeN(n){
// // //     const arr =[];
// // //     for(let i = 1; i<n+1; i++){
// // //         arr.push(i)
// // //     }
// // //     return arr
// // // }
// //
// // // console.log(getArrFillByNumInRangeN(8))
// // // //102
// //
// // // function getArrFillByRandomNumFrom1to100(n){
// // //     const arr =[]
// // //     for(let i =1; i< n+1; i++ ){
// // //         let randomNum = Math.ceil(Math.random()*100)
// // //         arr.push(randomNum)
// // //     }
// // //     return arr
// // // }
// //
// // // console.log(getArrFillByRandomNumFrom1to100(10))
// // // //103
// //
// // // function getArrFilledByNumberNegAndPos(n){
// // //     const arr =[]
// // //     for(let i=1; i<n+1; i++){
// // //         let randomNum = Math.ceil((Math.random()*201)-100)
// // //         arr.push(randomNum)
// // //     }
// // //     return arr
// //
// // // }
// //
// // // console.log(getArrFilledByNumberNegAndPos(20))
// // // //104
// //
// // // function getJsonFromObject(obj){
// // //     return JSON.stringify(obj)
// // // }
// // // console.log(getJsonFromObject({a:90, b:20}))
// // // //105
// //
// // // function checkIfNumIsInfinity(num){
// // //     if(num === Infinity){
// // //         return `It is infinity!`
// // //     }else{
// // //         return `It is regular number :(`
// // //     }
// // // }
// // // console.log(checkIfNumIsInfinity(122222222222))
// // // console.log(checkIfNumIsInfinity(Math.pow(10,1000)))
// //
// // // //106
// //
// // // function getValuesFromMap(map){
// // //     return map.values()
// // // }
// //
// // // const map=new Map()
// // // map.set('1','a')
// // // map.set('2','b')
// // // map.set('3','c')
// // // console.log(getValuesFromMap(map))
// // // //107
// //
// // // function getSizeOfMap(map){
// // //     return `Map size is ${map.size}`
// // // }
// // // console.log(getSizeOfMap(map))
// //
// // // //108
// //
// // // function getMapWithNumericKeysAndEmptyStr(num_keys){
// // //     const map = new Map()
// // //     for(let i =1; i<num_keys+1; i++){
// // //         map.set(i, "")
// // //     }
// // //     return map
// // // }
// //
// // // console.log(getMapWithNumericKeysAndEmptyStr(10))
// // // //109
// //
// // // function isKeyInMap(map, key){
// // //     return map.has(key)
// // // }
// // // console.log(isKeyInMap(map, '4'))
// // // console.log(isKeyInMap(map, '2'))
// //
// // // //110
// //
// // // function createSetFillByNumToN(n){
// // //     const set = new Set()
// // //     for(let i =1; i<n+1; i++){
// // //         set.add(i)
// // //     }
// // //     return set
// // // }
// //
// // // console.log(createSetFillByNumToN(10))
// //
// // // //111
// //
// // // function isNumInSet(set, num){
// // //     return set.has(num)
// // // }
// //
// // // const set = new Set()
// // // set.add(12)
// // // set.add(10)
// // // set.add(16)
// // // set.add(13)
// // // console.log(isNumInSet(set, 10))
// //
// //
// // // //112
// //
// // // function createSetFilledByLetters(){
// // //     const set = new Set()
// // //     for(let i = 65; i<91; i++){
// // //         set.add(String.fromCharCode(i))
// // //     }
// // //     return set
// // // }
// // // console.log(createSetFilledByLetters())
// //
// // // //113
// //
// // // function removeDuplicateFromArr(arr){
// // //     return [...(new Set(arr))]
// // // }
// // // console.log(removeDuplicateFromArr([1,2,3,3,4,4,4,5,1, "kot"]))
// // // //114
// //
// // // function findPairOfNumInArrEqual10(arr){
// // //     for(let el of arr){
// // //         for(let anotherEl of arr){
// // //             if(el+ anotherEl === 10 && el !== anotherEl){
// // //                 return `${el} and ${anotherEl} equal 10`
// // //             }
// // //         }
// // //     }
// // //     return "Not found"
// // // }
// //
// // // console.log(findPairOfNumInArrEqual10([1,2,3,4,5,6]))
// // // console.log(findPairOfNumInArrEqual10([1,2,3,4,5,11,19]))
// //
// // // //115
// //
// // // function removeSpecificElementFromArr(arr, element){
// // //     return `Usuni??to ${element} i pozosta??a tablica ${arr.filter((el)=> el !== element)}`
// // // }
// // // console.log(removeSpecificElementFromArr([1,2,3,4,6,6,6,7,7,7], 7))
// // // //116
// //
// // // function getRandomItemFromArr(arr){
// // //     return arr[Math.floor(Math.random()*arr.length)]
// // // }
// // // console.log(getRandomItemFromArr(["kot", "pies", "pa??ka", "zapa??ka"]))
// //
// // // //117
// //
// // // function filter0BlankLinesAndNullFromArr(arr){
// // //     return arr.filter((el)=> el !== 0 && el !== null && el !==" ")
// // // }
// // // console.log(filter0BlankLinesAndNullFromArr([1,2,3,null, 9,0,88,9, " "]))
// // // //118
// //
// // // function getRandomDate(){
// //
// // //     const day = Math.floor(Math.random()*31)
// // //     const month = Math.floor(Math.random()*12)
// // //     const year = Math.floor(Math.random()*2022)
// // //     const date = new Date(year, month, day)
// // //     return date
// // // }
// // // console.log(getRandomDate())
// // // //119
// //
// // // function addFieldAndFreezeTheObject(key,val,obj){
// // //     obj.key=val
// // //      return Object.freeze(obj)
// // // }
// //
// // // console.log(addFieldAndFreezeTheObject(88, "lis", {1:"kot", 2: "pies"}))
// //
// //
// // // //120
// // // function isFrozen(obj){
// // //     const val = Object.isFrozen(obj)? "jest": " nie jest"
// // //     return `Ten obiekt ${val} zamrozony`
// // // }
// // // console.log(isFrozen({a:"hak", b:"jak"}))
// // // console.log(isFrozen(addFieldAndFreezeTheObject(88, "lis", {1:"kot", 2: "pies"})))
// //
// // // //121
// //
// // // function makeUniqueKeyInMapandReturnMap(){
// // //     const map = new Map()
// // //     for(let i =1; i<10; i++){
// // //         map.set(Symbol(i), i)
// // //     }
// // //     return map
// // // }
// // // console.log(makeUniqueKeyInMapandReturnMap())
// // // //122
// // // function getUnionFromTwoArr(arr1, arr2){
// // //     const newArr=[]
// // //     for(let el of arr1){
// // //         if(arr2.includes(el)){
// // //             newArr.push(el)
// // //         }
// // //     }
// // //     return newArr
// //
// //
// // // }
// // // console.log(getUnionFromTwoArr([1,2,3,4,5],[4,5,6,7,8,8]))
// //
// // // //123
// //
// // // function findDuplicate(arr){
// // //     const newArr=[];
// // //     const repeatElem=[]
// // //     for(let el of arr){
// // //         if(newArr.includes(el)){
// // //             repeatElem.push(el)
// // //         }else{
// // //             newArr.push(el)
// // //         }
// // //     }
// // //     return `Powtarzaja sie ${[...new Set(repeatElem)].join(" and ")}`
// // // }
// // // console.log(findDuplicate([1,2,3,4,5,6,6,6,7,8,8,9,10]))
// //
// // // //124
// //
// // // function findLeapInArrOFNum(arr){
// // //     for(let i =0; i<arr.length; i++){
// // //     if(arr[i]+1 !== arr[i+1]){
// // //         return `Wyst??pi??a przerwa w ci??gu liczb: ${arr[i]} oraz ${arr[i+1]}`
// // //     }
// // //     }
// // //     return `Liczby s?? w ciagu`
// // // }
// //
// // // console.log(findLeapInArrOFNum([1,2,3,4,5,6,7,9,10]))
// //
// // // //125
// //
// // // function findTheHighestValueInArr(arr){
// // //     return arr.sort((a,b)=>b-a)[0]
// // // }
// // // console.log(findTheHighestValueInArr([1,2,33,4,5,5,66,555,7]))
// //
// // // //126
// //
// // // function removeFromSet(element, set){
// // //      set.delete(element)
// // //     return set
// // // }
// // // const set1 = new Set()
// // // set1.add("kot");
// // // set1.add("pies");
// // // set1.add("ko??");
// // // console.log(removeFromSet("kot", set1))
// //
// // // //127
// // // //diffrence of sets
// //
// // // function getDifferenceFrom2Arr(arr1,arr2) {
// // //     return arr1.filter((el) => !arr2.includes(el))
// //
// // // }
// //
// // // console.log(getDifferenceFrom2Arr([1,2,3,4,5,6,7], [5,6,7,8,9,99]))
// //
// //
// // // //128
// // // //Intersection
// // // function getCommonPartFrom2Arr(arr1, arr2){
// // //     return arr1.filter((el)=>arr2.includes(el))
// // // }
// //
// // // console.log(getCommonPartFrom2Arr([1,2,3,4,5,6], [5,6,7,89,9]))
// // // //129
// // // //Unia set??w
// // // function makeUnionFromTwoSets(set1, set2){
// // //     return new Set([...set1, ...set2])
// // // }
// //
// //
// // // let firSet = new Set([1,2,3,4,5])
// // // let secondSet = new Set([4,5,6,7,8])
// //
// // // console.log(makeUnionFromTwoSets(firSet, secondSet))
// // // //130
// //
// // // function getAverageFromSumNumberFromList(arr){
// // //     return arr.reduce((acc, cu)=> acc+cu)/arr.length
// // // }
// // // console.log(getAverageFromSumNumberFromList([1,2,3,4,5,6,7]))
// //
// // // //131
// //
// // // function getSumOfPowerNumbFromArr(arr){
// // //     return arr.map((num)=> Math.pow(num, 2)).reduce((acc, cu)=> acc+ cu)
// //
// // // }
// // // console.log(getSumOfPowerNumbFromArr([1,2,3,4]))
// //
// // // //132
// //
// // // function getLongestWordInList(arr){
// // //     return `Najdluzszy wyraz ma ${arr.map((word)=>word.length).reduce((acc, cu)=> acc> cu ? acc: cu)} liter i jest to ${arr.filter((word)=>word.length === 9) }`
// // // }
// //
// // // console.log(getLongestWordInList(["kot", "pies", "lis", "kuropatwa"]))
// //
// // // //133
// //
// // // function getBigestNumberFromArr(arr){
// // //     return arr.reduce((acc, cu)=> acc > cu ? acc: cu)
// // // }
// // // console.log(getBigestNumberFromArr([1,2,333,6,7,99,0]))
// // // //134
// //
// // // function getSmalestNumFromArr(arr){
// // //     return arr.reduce((acc, cu)=> acc > cu ? cu :acc)
// // // }
// //
// // // console.log(getSmalestNumFromArr([1,2,333,6,7,99,0]))
// // // //135
// //
// // // function getLongerArr(arr1, arr2){
// // //     return (arr1.length > arr2.length ? arr1: arr2)
// // // }
// //
// // // console.log(getLongerArr([1,2,2,3,3,4,45,5], [2,3]))
// // // //136
// //
// // // function getShorterArr(arr1, arr2){
// // //     return( arr1.length > arr2.length ? arr2: arr1)
// // // }
// //
// // // console.log(getShorterArr([1,2,2,3,3,4,45,5], [2,3]))
// // // //137
// //
// // // function checkIfFirstArrIncludesInSecondArr(arr1, arr2){
// // //     for(let el of arr1){
// // //         if(!arr2.includes(el)){
// // //             return ` Sorry first arr doesn t includes in second arr`
// // //         }
// // //     }
// // //     return `Bingo First includes in Second`
// // // }
// // // console.log(checkIfFirstArrIncludesInSecondArr([1,2,3,4],[1,2,3,4,5,6,7]))
// // // console.log(checkIfFirstArrIncludesInSecondArr([1,2,3,4],[1,2,3,99,5,6,7]))
// // // //138
// //
// // // function getSubFromNumbersFrom2(arr1, arr2){
// // //     const newArr=[]
// // //     for(let i =0; i< arr1.length; i++){
// // //         newArr.push((arr2[i] ? arr1[i]-arr2[i] : arr1[i]))
// // //     }
// // //     return newArr
// // // }
// // // // console.log(getSubFromNumbersFrom2([1,2,3,4,6], [0,1,1,1,1]))
// // // // console.log(getSubFromNumbersFrom2([1,2,3,4,6], [0,1,1]))
// //
// // // //139
// //
// // // function multiplyNumbersFrom2Arrays(arr1, arr2){
// // //     const newArr=[];
// // //     for(let i =0; i <arr1.length; i++){
// // //         newArr.push((arr2[i] || arr2[i] === 0 ? arr1[i]* arr2[i] : arr1[i]))
// // //     }
// // //     return newArr
// // // }
// // // console.log(multiplyNumbersFrom2Arrays([1,2,3,4,6], [3,1,1,1,1]))
// // // console.log(multiplyNumbersFrom2Arrays([1,2,3,4,6], [0, 2,1,1]))
// //
// // // //140
// //
// // // function findBiggerSizeOFSets(set1, set2){
// // //     return (set1.size> set2.size ? set1: set2)
// // // }
// // // let x = new Set([1,2,3,4,5,66,99,88,777])
// // // let y= new Set([4,5,6,7,8])
// // // console.log(findBiggerSizeOFSets(x, y ))
// //
// // // //141
// //
// // // function getSumFromNestedArrays(nestedArr){
// // //     return nestedArr.flat().reduce((acc, cu)=> acc+cu)
// // // }
// // // console.log(getSumFromNestedArrays([[1,2,3,4],[3,4,5,2],[3,4,5,6]]))
// //
// //
// // // //142
// //
// // // function findWordsStartsWithLetterAndEndsWithAnotherLetter(arr, startLetter, endsLetter){
// // //     return arr.filter((word)=> word.startsWith(startLetter) && word.endsWith(endsLetter))
// // // }
// // // console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter(["kot", 'pies', "ko??"], "k", "t"))
// // // console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter(["kot", 'pies', "ko??"], "p", "l"))
// //
// // // //143
// //
// // // function findWordsStartsWithLetterAndEndsWithAnotherLetter2(arr, startLetter, endLetter){
// // //     return arr.reduce((acc, cur)=>cur.startsWith(startLetter) && cur.endsWith(endLetter)?[...acc, cur]: acc ,[])
// // // }
// //
// // // console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter2(["kot", 'pies', "ko??"], "k", "t"))
// // // console.log(findWordsStartsWithLetterAndEndsWithAnotherLetter2(["kot", 'pies', "ko??"], "p", "l"))
// //
// // // //144
// //
// // // function checkIfInTheListIsWordLongerThanTen(arr){
// // //     return arr.some((word)=> word.length > 10)
// // // }
// // // console.log(checkIfInTheListIsWordLongerThanTen(["kokardka", "tulipan", "Lototo"]))
// //
// // // //145
// //
// // // function changeSetToList(set){
// // //     return [...set]
// // // }
// // // console.log(changeSetToList(set1))
// //
// // // //146
// //
// // // function changeMapToListOfValues(map){
// // //     return [...map.values()]
// // // }
// // // const map1 = new Map();
// // // map1.set(1, 'aligator')
// // // map1.set(2, 'mucha')
// // // map1.set(3, 't-rex')
// // // console.log(changeMapToListOfValues(map1))
// // // //147
// //
// // // function objectToList(obj){
// // //     return Object.values(obj)
// // // }
// // // const obj={
// // //     name: "Monika",
// // //     age: "34",
// // //     animals: "cat"
// // // }
// // // console.log(objectToList(obj))
// //
// // // //148
// //
// // // function getKeysFromObj(obj){
// // //     return Object.keys(obj)
// // // }
// // // console.log(getKeysFromObj(obj))
// // // //149
// //
// // // function getListOfKeyValueOfObj(obj){
// // //     return Object.entries(obj).flat()
// // // }
// // // console.log(getListOfKeyValueOfObj(obj))
// // // //150
// //
// // // function sumOfNumLessThan100(...args){
// // //     return args.filter((el)=> el > 100).reduce((acc, cu)=> acc+cu)
// // // }
// // // console.log(sumOfNumLessThan100(1,2,3,4,5,667,7,77,101)) // bez kwadratowych nawias??w
// //
// //
// // // //151
// //
// // // function multiplyArgumentAndRejectStr(...args){
// // //     return args.filter((e)=> typeof e==='number').reduce((acc, cu)=> acc*cu)
// // // }
// // // console.log(multiplyArgumentAndRejectStr(10,'Hi',null,undefined,20))
// // // //152
// //
// // // function replace8by1inNumbers(...args){
// // //     return args.map((el)=> el === 8 ? 1: el)
// // // }
// // // console.log(replace8by1inNumbers(1,2,7,8,9,0,8,7))
// //
// // // //153
// //
// // // function deleteNumAfterDot(floatNum){
// // //     return Math.trunc(floatNum)
// // // }
// // // console.log(deleteNumAfterDot(2.6))
// // // console.log(deleteNumAfterDot(8.2))
// //
// // // //154
// //
// // // function checkIfNumbersInArrArePositiveNegativeOr0(arr){
// // //     return arr.forEach(el=>console.log(Math.sign(el)))
// // // }
// // // console.log(checkIfNumbersInArrArePositiveNegativeOr0([1,1,1,1,0,-6,-6,-5]))
// // // //155
// //
// // // function getDiagonalSquare(a){
// // //     return (a* Math.sqrt(2))
// // // }
// // // console.log(getDiagonalSquare(10))
// // // //156
// //
// // // function findLowestNum(...args){
// // //     return Math.min(...args)
// // // }
// // // console.log(findLowestNum(99,5,8,5,-1))
// //
// // // //157
// // // function findMaxNum(...args){
// // //     return Math.max(...args)
// // // }
// // // console.log(findMaxNum(1,9,88,77,55))
// //
// // // //158
// //
// // // function forEachElGetOpositSignNum(...args){
// // //     return args.map((el)=> el - 2*el)
// // // }
// //
// // // console.log(forEachElGetOpositSignNum(1,2,3,-9,-7))
// //
// // // //159
// //
// // // function findValueOfKeyandDoubleIt(map, key ){
// // //     return map.get(key) ? map.get(key)*2 : "Not find"
// // // }
// // // const map2 = new Map()
// // // map2.set(1, 2)
// // // map2.set(2, 3)
// // // map2.set(3, 4)
// // // console.log(findValueOfKeyandDoubleIt(map2, 3))
// //
// // // //160
// //
// // // function sayHello(name){
// // //     return `Hello ${name}!`
// // // }
// //
// // // //161
// //
// // // const data=[
// // //     {
// // //         Surname: "Kowalscy",
// // //         Names: ["Ola", "Kasia", "Ania", "Kuba"],
// // //         city: "Krak??w",
// // //         isUserApp: true,
// // //         points: 42
// // //     },{
// // //         Surname: "Nowakowie",
// // //         Names: ["Ela", "Asia", "Hania", "Karol"],
// // //         city: "Krak??w",
// // //         isUserApp: true,
// // //         points: 74
// // //     },{
// // //         Surname: "Liliputowie",
// // //         Names: ["Piotr", "Krysia", "Miko??aj"],
// // //         city: "Zakopane",
// // //         isUserApp: true,
// // //         points: 96
// // //     },{
// // //         Surname: "Andersowie",
// // //         Names: ["Ania", "Leon"],
// // //         city: "Katowice",
// // //         isUserApp: false,
// // //         points: 0
// // //     },{
// // //         Surname: "Goprowie",
// // //         Names: ["Robert", "Lila"],
// // //         city: "Lublin",
// // //         isUserApp: true,
// // //         points: 70
// // //     },
// // // ]
// //
// // // function findUsers(data){
// // //     return data.filter((family)=> family.isUserApp === true)
// // // }
// // // console.log(findUsers(data))
// // // //162
// // // function findUsers2(data){
// // //     return data.reduce((acc, cu)=> cu.isUserApp === true ? [...acc, cu]: acc, []).map(family=> family.Surname)
// // // }
// // // console.log(findUsers2(data))
// //
// // // //163
// // // function findUsersFromCity(city){
// // //     return findUsers(data).filter((family)=> family.city === city).map((family)=>family.Surname)
// // // }
// // // console.log(findUsersFromCity("Krak??w"))
// // // //164
// //
// // // function findUsersWithAlmost3members(){
// // //     return findUsers(data).filter((family)=> family.Names.length > 2).map(fam=>fam.Surname)
// // // }
// // // console.log(findUsersWithAlmost3members())
// // // //165
// //
// // // function findUsersStartsWithLetter(letter){
// // //     return findUsers(data).filter(family=>family.Surname.startsWith(letter))
// // // }
// // // console.log(findUsersStartsWithLetter("G"))
// //
// // // //166
// //
// // // function findFamieliesWithNameInNames(data, name){
// // //     return data.filter(family=>family.Names.includes(name)).map(fam=>fam.Surname)
// // // }
// // // console.log(findFamieliesWithNameInNames(data, "Kuba"))
// //
// // // //167
// //
// // // function getCitiesMembers(){
// // //     return new Set(findUsers(data).map(family=>family.city))
// // // }
// // // console.log(getCitiesMembers())
// // // //168
// //
// // // function getSumOfPoinstsUsers(){
// // //     return findUsers(data).reduce((acc, cu)=> acc+cu.points, 0)
// // // }
// // // console.log(getSumOfPoinstsUsers())
// // // //169
// //
// // // function getInfoAboutPoints(){
// // //     return findUsers(data).map(fam=>`${fam.Surname} liczba pkt??w: ${fam.points}`)
// // // }
// // // console.log(getInfoAboutPoints())
// //
// // // //170
// //
// // // function getInfoWhoIsNotAUser(data){
// // //     return `Nie jest uzytkownikiem: ${data.filter(fam=>fam.isUserApp===false).map(fam=>fam.Surname)}`
// // // }
// // // console.log(getInfoWhoIsNotAUser(data))
// //
// //
// // //171 i 171
// // function fullAddress(city){
// //     function address(street){
// //         return `U??ytkownik meszka w miescie ${city} na ulicy ${street}`
// //     }
// //     return address
// // }
// //
// // const getMessage = fullAddress("Krak??w")
// // console.log(getMessage("Opolska"))
// //
// //
// // //172 i 173
// //
// // function fullData(amount){
// //     function data(price){
// //         return `U??ytkownik zakupi?? ${amount} w cenie ${price} z??/ sztuk?? czyli zap??aci?? ${amount*price} z??.`
// //     }
// //     return data
// // }
// //
// // const getData = fullData(20)
// // console.log(getData(2.5))
// //
// // //174 i 175
// //
// // function aboutProduct(rating){
// //     function product(name){
// //         return `Produkt ${name} posiada ocene ${rating} w naszym sklepie!`
// //     }
// //     return product
// // }
// //
// // const getProduct5stars = aboutProduct("5.0")
// // console.log(getProduct5stars("Pen Ajax"))
// // console.log(getProduct5stars("Pencil Obol"))
// // //176 i 177
// //
// // function getPriceAfterSubTax(tax){
// //     function product(price){
// //         return `Po op??aceniu podatku ${tax}%  cena to ${(price - (price*(tax/100)))}`
// //     }
// //     return product
// // }
// //
// // const getPriceAfter21Tax = getPriceAfterSubTax(21)
// // console.log(getPriceAfter21Tax(100))
// // console.log(getPriceAfter21Tax(150))
// // console.log(getPriceAfter21Tax(55))
// //
// // //178 i
// //
// // function getIncomes(timeInDays){
// //     function getIncomesForOneDay(income){
// //         return `Przych??d za ${timeInDays} ${timeInDays > 1? "dni": "dzie??"} wynosi ${income*timeInDays} z??`
// //     }
// //     return getIncomesForOneDay
// // }
// //
// // const annualIncome = getIncomes(365)
// // const oneDayIncome = getIncomes(1)
// // console.log("Przych??d dzienny 1000 z?? ",annualIncome(1000))
// // console.log("Przych??d dzienny 200 z?? ",annualIncome(200))
// // console.log("Przych??d dzienny 50000 z?? ",annualIncome(50000))
// // console.log("Przych??d dzienny 50 z?? ",oneDayIncome(50))
// //
// //
// //
// // //180 i 181
// //
// // function getAreaOfTriangle(aInCm){
// //     function triangle(h){
// //         return `${0.5 * aInCm * h} cm2`
// //     }
// //     return triangle
// // }
// //
// // const getAreaWith10cmSide = getAreaOfTriangle(10)
// // console.log(getAreaWith10cmSide(4))
// // console.log(getAreaWith10cmSide(10))
// // console.log(getAreaWith10cmSide(7))
// //
// //
// // //182 i 183
// //
// // function priceForTickets(num){
// //     function getPriceForAllTickets(price){
// //         return `Cena do zap??aty to ${num*price} z??`
// //     }
// //     return getPriceForAllTickets
// // }
// //
// // const priceFor10Ticket = priceForTickets(10)
// // const priceFor1Ticket = priceForTickets(1)
// // console.log(priceFor1Ticket(12))
// // console.log(priceFor1Ticket(16))
// // console.log(priceFor10Ticket(12))
// // console.log(priceFor10Ticket(16))
// // //184 i 185
// //
// // function getTotalAmountOfFlats(num_floors){
// //     function flats(amountFlatsOnTheFloor){
// //         return `W bloku ${num_floors} pi??trowym, gdy na pi??trze jest ${amountFlatsOnTheFloor} mieszka?? ca??kowita liczba mieszka?? to ${num_floors*amountFlatsOnTheFloor}`
// //     }
// //     return flats
// // }
// //
// // const getNumberOfFlatsIn10FloorsBuilding = getTotalAmountOfFlats(10)
// // const getNumberOfFlatsIn7FloorsBuilding = getTotalAmountOfFlats(7)
// //
// // console.log(getNumberOfFlatsIn7FloorsBuilding(4))
// // console.log(getNumberOfFlatsIn7FloorsBuilding(5))
// // console.log(getNumberOfFlatsIn10FloorsBuilding(4))
// // console.log(getNumberOfFlatsIn10FloorsBuilding(5))
// //
// // //186 i 187 i 188
// //
// // function add3Numbers(num1){
// //     function num2(num2){
// //         function num3(num3){
// //             return (num1 + num2 +num3)
// //         }
// //         return num3
// //     }
// //     return num2
// // }
// //
// // const getAdd3Numbers = add3Numbers(10)
// // console.log(getAdd3Numbers(20)(30))
// //
// //
// // // 189 i 190
// //
// // function getRandomValuesFromArr(arr){
// //     function numberOfValues(num){
// //         const newArr=[]
// //         for(let i=0; i< num; i++){
// //             let j = Math.floor(Math.random()*arr.length)
// //                 newArr.push(arr[j])
// //         }
// //         return newArr
// //     }
// //     return numberOfValues
// // }
// //
// // const getRandomFromArr = getRandomValuesFromArr([1,2,3,3,3,3,4,5,6,76,7,7,8,8,9,0])
// // console.log(getRandomFromArr(4))
// // console.log(getRandomFromArr(9))
// //
// // //191
// // //192
// //
// // function power(power){
// //     function digit(digit){
// //         return digit ** power
// //     }
// //     return digit
// // }
// // const power10 = power(10)
// // console.log(power10(2))
// // console.log(power10(3))
// //
// // //192
// //
// // const raiseToPower = (power) => (digit) => digit ** power
// //
// // const power8 = raiseToPower(8)
// // console.log(power8(2))
// // console.log(power8(3))
// // //193
// //
// // function genUUID(){
// //     let id =0
// //     function next(){
// //         const result = id;
// //         id ++;
// //         return result
// //     }
// //     return next
// // }
// // const generatorUUID = genUUID()
// // console.log(generatorUUID())
// // console.log(generatorUUID())
// // console.log(generatorUUID())
// // console.log(generatorUUID())
// // console.log(generatorUUID())
// // console.log(generatorUUID())
// //
// //
// // //194
// //
// // const genUUID2 = (id=0)=>()=>id++;
// // //195
// //
// // // const cache = {};
// // //
// // // function add(a,b){
// // //     if(cache[`${a}${b}`] === undefined){
// // //         //complex logic simulation
// // //         const t =[];
// // //         for(let i=0; i <100000; i++) {
// // //             t.push(i ** i);
// // //         }
// // //         console.log("calculating")
// // //         cache[`${a}${b}`] = a+ b
// // //         }
// // //     return cache[`${a}${b}`]
// // //     }
// //
// //
// // //196
// //
// // // function cash_add(){
// // //     const cache = {}; //obiekt nie jest juz globalny
// // //     function add2(a,b){
// // //
// // //     if(cache[`${a}${b}`] === undefined){
// // //         //complex logic simulation
// // //         const t =[];
// // //         for(let i=0; i <100000; i++) {
// // //             t.push(i ** i);
// // //         }
// // //         console.log("calculating")
// // //         cache[`${a}${b}`] = a+ b
// // //         }
// // //     return cache[`${a}${b}`]
// // //     }
// // //
// // //     return add2
// // // }
// // //197
// //
// // function cache2param(fn){
// //     const c = {};
// //     function inner(a, b){
// //         if(c[`${a}${b}`] === undefined){
// //             c[`${a}${b}`] = fn(a, b)
// //         }
// //         return c[`${a}${b}`]
// //         }
// //     return inner
// // }
// //
// // //198 i 199
// // //Uniwersalny cache!
// //
// // function cache(fn){
// //     const c = {};
// //
// //     function inner(...params){
// //         if(c[params.join()] === undefined){
// //             c[params.join()] = fn(...params)
// //         }
// //         return c[params.join()]
// //         }
// //     return inner
// // }
// //
// //200 i 201
// function consoleLogAfterTime(time){
//     setTimeout(()=>{
//     console.log(`Wy??wietlam si?? po ${time} msek.`)
// }, time)
// }
// consoleLogAfterTime(2000)
// consoleLogAfterTime(5000)
//
//
// //202 i 203
//
// function consolelogTextAfter10sek(text){
//     setTimeout(()=>{
//         console.log(text)
//     }, 10000)
// }
//
// consolelogTextAfter10sek("Jestem textem z setTimeout")
// //204 i 205
//
// function alertOnPageAfter10sek(extratext){
//     setTimeout(()=>{
//         alert(`Uwaga jeste?? tu ju?? 5 sek!. ${extratext}`)
//     }, 5000)
// }
// // alertOnPageAfter10sek("Zmykaj! Do pracy!")
//
// //206 i 207
//
// // const interval = setInterval(()=>{
// //     alert("Pojawiam si?? co 2 sek!")
// // }, 2000)
// //
// //
// // setTimeout(()=>{
// //     clearInterval(interval)
// // }, 10000)
// //
// //
// // //209 i 210
// // function timer(){
// //     let i=1
// //     setInterval(()=>{
// //      console.log(`Jestes tu ju?? ${i} sek`)
// //          i++
// //  }, 1000)
// // }
// // // const timer1 = timer()
// // // timer1()
// //
// // //211 i 212
// //
// // function countHello(n){
// //     let i =1
// //
// //     const interv = setInterval(()=>{
// //         console.log("Hello", i)
// //         i++
// //           if(i === n+1){
// //         clearInterval(interv)
// //     }
// //     }, 1000)
// //
// // }
// // countHello(8)
// // //213 i 214
// //
// // const div1 = document.querySelector("#div1")
// // const div2 = document.querySelector("#div2")
// // div1.style.background="green"
// // div2.style.background="red"
// //
// //
// // function clickCounter(){
// //     let i = 0;
// //     div1.addEventListener("click", ()=>{
// //     i ++
// //         console.log(`zielony obszar zosta?? klikni??ty  ${i} razy`)
// // })
// // }
// // clickCounter()
// //
// //
// //
// // //215 i 216
// // function alertMouseover(){
// //     div2.addEventListener("mouseover", ()=>{
// //     alert("Jeste?? nad czerwonym obszarem!")
// // })
// // }
// // alertMouseover()
// //
// // //217 i 218
// // function addTextToParagraph(text){
// //     let n = 0
// //     const setTime = setInterval(()=>{
// //     div2.children[n].innerHTML=`<b>${text}</b>`
// //         n++
// //         console.log(` n wynosi ${n}`)
// //         if(n > div2.children.length){
// //             console.log("Jestem z srodka ifa")
// //             clearTimeout(setTime)
// //         }
// // }, 5000)
// // }
// //
// // addTextToParagraph("To jest nowiute??ki text")
// // //219
// //
// // const div3 = document.querySelector("#div3")
// // const button =document.querySelector("button")
// //
// // button.addEventListener("click", ()=>{
// //     div3.style.display = "block"
// //
// // })
// // //220
// // const counter = document.querySelector("#licznik")
// //
// // function getCountClicksButton(){
// //     let num = 1
// //     button.addEventListener("click", ()=>{
// //     counter.innerText = num
// //         num++
// // })
// // }
// // getCountClicksButton()
// //
// //
// // // 221 i 222
// //
// // const div4 = document.querySelector("#div4")
// //
// // function getRandomColorDiv4(){
// //     div4.addEventListener("click", ()=>{
// //         const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// //         div4.style.background = randomColor;
// //     })
// // }
// // getRandomColorDiv4()
// // // 223 i 224
// //
// // function addParagraphTodiv1(){
// //     div1.addEventListener("mouseover", ()=>{
// //         const newP = document.createElement("p")
// //         newP.innerText = "Pojaiwma sie po najechaniu na zielony div"
// //         div1.appendChild(newP)
// //     })
// // }
// // // addParagraphTodiv1()
// // // 225
// //
// // const h1 = document.querySelector("h1")
// //
// // function setRandomColorAfter3sek(){
// //     setInterval(()=>{
// //         const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// //
// //         h1.style.color = randomColor;
// //     }, 3000)
// // }
// // setRandomColorAfter3sek()
// //226
//
// // const myFetch = fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/')
// // myFetch.then((res)=> res.json())
// //         .then((data)=>{
// //     console.dir(data.rates[0].ask)
// // })
// //
//
// // 227 i 228
//
// // const myFetch2 = fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
// // myFetch2
// //     .then((resp)=> resp.json()
// // )
// //     .then((data)=>console.log(data))
// // 229 i 230
//
// // const ul = document.querySelector("#ul")
// // fetch("https://pokeapi.co/api/v2/pokemon").then(resp=>resp.json()).then(data=>{
// //     console.log(data.results)
// //     for(let pokemon of data.results){
// //         const li = document.createElement("li")
// //         li.innerText = pokemon.name
// //         ul.appendChild(li)
// //     }
// // }).catch(err=>console.log(err))
//
// // 231 i 232
//
// function getSumOfParametersDivideByNum(num){
//     function inner(...params){
//         return params.reduce((acc, cu)=> acc+cu)/num
//     }
//     return inner
// }
// const closureInner = getSumOfParametersDivideByNum(3)
// console.log(closureInner(1,2,3,4,5,5,6,7,0))
//
//
//
// // 233 i 234 i 235 i 236
//
// function MultiplyNumByNumAndRandomNum(num){
//     function inner(num2){
//         return (num*num2* (Math.floor(Math.random()*101)))
//     }
//     return inner
// }
// const multplyBy12 = MultiplyNumByNumAndRandomNum(12)
// console.log(multplyBy12(6))
// console.log(multplyBy12(6))
// console.log(multplyBy12(6))
// console.log(multplyBy12(6))
//
// // 237 i 238
//
// function cache3param(fn){
//     const c = {};
//     function inner(a, b, c){
//         if(c[`${a}${b}${c}`] === undefined){
//             c[`${a}${b}${c}`] = fn(a, b, c)
//         }
//         return c[`${a}${b}${c}`]
//         }
//     return inner
// }
//
// // 239 i 240
// const items = [
//     { name: 'Bike', amount: 90, price: 500},
//     { name: 'PlaneToy', amount: 40, price: 100},
//     { name: 'Lamp', amount: 40, price: 40},
//     { name: 'Book', amount: 20, price: 30},
//     { name: 'Tv', amount: 10, price: 1000},
//     { name: 'toyFigure', amount: 30, price: 12},
// ]
//
// const filterItemsUnder100 = items.filter((item)=> item.price < 100)
//
// function getCheapItemAndDiscount (fn){
//     function inner(discount){
//         return fn.map((item)=>{ return `Cena przedmiotu ${item.name} po rabacie ${discount} wynosi ${(item.price - (discount*item.price))}`})
//     }
//     return inner
// }
// const getDiscountOnCheapItems = getCheapItemAndDiscount(filterItemsUnder100)
// console.dir(getDiscountOnCheapItems(0.2))
//
// // 241 i 242
//
// function getNameStartsWithLetter(letter, items){
//     function inner1(){
//         return items.reduce((acc, ce)=>ce.name.startsWith(letter)? [...acc, ce]: acc, [])
//     }
//     return inner1
// }
//
// const getNameStartsWithLetterArr = getNameStartsWithLetter("B", items)
// console.log(getNameStartsWithLetterArr())
//
//
// // 243 i 244 IIFE w consoli
//
//     (()=>{
//         const name = "Adam"
//         console.log("Hello "+ name)
//     })()
//
//     (function(){
//             const name = "Kasia"
//             console.log("hello " + name)
//         }()
//     )
//
//
//
// // 245
//
// function createPhoneNumber(numbers){
//     numbers.unshift("(")
//     numbers.splice(4, 0 , ") ")
//     numbers.splice(8, 0, "-")
//     return numbers.join("").toString()
//
//   }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
//
//
// // 246
//
// function squareDigits(num){
//     return parseInt(num.toString().split("").map((element)=> Math.pow(parseInt(element),2)).join(""))
//   }
//
// // // 247
//
// function sumTwoSmallestNumbers(numbers) {
//     return numbers.sort((a,b)=>a-b).filter((num, index,arr)=>index < 2).reduce((acc, cu)=>acc+cu, 0)
//   }
//
// //248 i  249 i 250 i  251 i 252
//
// const data5 = [
// 	{
// 		"brand": "bmw",
// 		"country": "germany",
// 		"year": 1993,
// 		"colorway": ["black", "red", "grey"]
// 	},
// 	{
// 		"brand": "ford",
// 		"country": "america",
// 		"year": 2015,
// 		"colorway": ["blue", "black", "carbon"]
// 	},
// 	{
// 		"brand": "honda",
// 		"country": "japan",
// 		"year": 1994,
// 		"colorway": ["blue", "gold", "black"]
// 	},
// 	{
// 		"brand": "porsche",
// 		"country": "germany",
// 		"year": 2018,
// 		"colorway": ["black", "carbon", "white", "orange"]
// 	},
// 	{
// 		"brand": "toyota",
// 		"country": "japan",
// 		"year": 1999,
// 		"colorway": ["yellow", "carbon", "black"]
// 	},
// 	{
// 		"brand": "skoda",
// 		"country": "czech_republic",
// 		"year": 2010,
// 		"colorway": ["grey", "blue", "black"]
// 	},
// 	{
// 		"brand": "peugeot",
// 		"country": "france",
// 		"year": 2000,
// 		"colorway": ["green", "red", "yellow"]
// 	},
// 	{
// 		"brand": "ferrari",
// 		"country": "italia",
// 		"year": 2006,
// 		"colorway": ["red", "black", "carbon"]
// 	},
// 	{
// 		"brand": "chevrolet",
// 		"country": "america",
// 		"year": 2003,
// 		"colorway": ["white", "yellow", "black"]
// 	},
// 	{
// 		"brand": "audi",
// 		"country": "germany",
// 		"year": 1999,
// 		"colorway": ["red", "red", "black"]
// 	}
// ]
//
// const result11 = data5.filter((car)=> car.country === "japan").map((car)=>`Car ${car.brand} from Japan, year:  ${car.year}`)
//
// const result12 = data5.filter((car)=> car.colorway.includes("red")).map((car)=> car.brand).join(", ")
//
// const result13 = data5.filter((car)=> car.year > 2001 && car.colorway.includes("carbon")).map((car)=> `${car.brand}-${car.country}`)
// const result14 = data5.reduce((acc, cu)=>acc+cu.year, 0)/data5.length
// const result15 = data5.reduce((acc, cu)=> acc.length < cu.colorway.length ? cu.colorway : acc, [] )
// console.log(result15)
//
//
//
//
// // // 253 i 254
// const countryStartsWithG = data5.filter((car)=>car.country.startsWith("g")).length
// const uniqueCountryStartsWithG = new Set(data5.filter((car)=>car.country.startsWith("g")).map((car)=>car.country))
// console.log(uniqueCountryStartsWithG)
//
//
//  // 255
//
// function mostPopularCountryFromData(data){
//     const countryList = data.map((car)=>car.country).sort()
//     console.log(countryList)
//
//    let occurrencesOfWord = {};
//
//   for (let country of countryList) {
//     if (occurrencesOfWord[country]) {
//       occurrencesOfWord[country]++;
//     } else {
//       occurrencesOfWord[country] = 1;
//     }
//   }
//   console.log(occurrencesOfWord)
//
//   let max = 0;
//   let mostRepeatedWord = '';
//
//   for (let country of countryList) {
//     if (occurrencesOfWord[country] > max) {
//       max = occurrencesOfWord[country];
//       mostRepeatedWord = country;
//     }
//   }
//
//   return `Most repeated word is: ${mostRepeatedWord}`;
//
//
// }
// console.log(mostPopularCountryFromData(data5))
//
//
// // 256 i 257
// const url = "https://reqres.in/api/users/"
//
// function getUsernr(number){
//     fetch(url + number)
//     .then((resp)=> resp.json())
//     .then(data=> console.log(data.data))
//
// }
// getUsernr(3)
//
//
//
// //258 i 259 i 260
//
// function getUsersNames() {
//     fetch(url)
//         .then((resp) => resp.json())
//         .then(data => {
//            data.data.forEach((person)=>console.log((`${person.first_name} ${person.last_name}`)))
//
//
// })
//         .catch((err)=>console.log(err))
// }
// getUsersNames()
//
// //260 i 261
//
// function createNewUserApi(dataJson){
//       fetch(url, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(dataJson)
//       })
//         .then((resp) => resp.json())
//             .then((data)=> console.log(data))
//
//         .catch((err)=>console.log(err))
// }
//
// const dataJSON ={
//     name: 'User 1'
// }
//
// createNewUserApi(dataJSON)
//
// //262 i 263
// function promiseConditionpassByFnc(condition){
//      let p = new Promise((resolve, reject)=>{
//      let a = 1+ 1
//      if( condition){
//          resolve( "Success! from Promise")
//      }else{
//          reject('failed from Promise')
//      }
//  })
//     p.then((resp)=>console.log(resp))
//     p.catch((err)=>console.log(err))
//
// }
// promiseConditionpassByFnc(true)
// promiseConditionpassByFnc(1<0)
//
//
// //264 i 265
// const ulList = document.querySelector("#personList")
// console.log("to jest moje ul", ulList)
// function listPersonFromFetch(url){
// 	fetch(url).then((resp)=>resp.json())
// 		.then((data)=>{
// 			console.log(data.data)
// 			for(let person of data.data){
// 				const li = document.createElement("li")
// 				li.innerText = person.first_name + " " + person.last_name
// 				ulList.appendChild(li)
// 			}
//
//
// 		})
// 		.catch(err=>console.log(err))
// }
// listPersonFromFetch(url)
//266 i 267

// function getParentesisForNuberIfItIsNegative(number){
// 	function inner(){
// 		if (number == null) return
// 		if (number < 0 )return `(${Math.abs(number)})`
// 		return number.toString()
// 	}
// 	return inner
// 		}
//
//
//
// const outerFnc1 = getParentesisForNuberIfItIsNegative(5)
// const outerFnc2 = getParentesisForNuberIfItIsNegative(-5)
// console.log(outerFnc1())
// console.log(outerFnc2())
// //268 i 269 i 270 i 271 i 272 i 273
//
// const artists = [
//   {
//     artist: "Micha?? Anio??",
//     country: "W??ochy",
//     type: ["rze??ba", "malarstwo", "fresk"],
//     genre: ["autoportret", "akt", "sceny religijne"],
//     period: ["Renesans", "Barok"],
//   },
//   {
//     artist: "Piotr Micha??owski",
//     country: "Polska",
//     type: ["malarstwo", "rysunek"],
//     genre: ["portret", "autoportret", "animalistyka", "batalistyka"],
//     period: "Romantyzm",
//   },
//   {
//     artist: "Emil Nolde",
//     country: "Niemcy",
//     type: ["grafika", "malarstwo", "akwarela"],
//     genre: ["portret", "autoportret", "pejza??", "martwa natura"],
//     period: "Ekspresjonizm",
//   },
//   {
//     artist: "Aleksander Gierymski",
//     country: "Polska",
//     type: ["malarstwo", "rysunek"],
//     genre: ["portret", "sceny rodzajowe", "pejza??", "nokturn"],
//     period: "Realizm",
//   },
//   {
//     artist: "Albrecht Durer",
//     country: "Niemcy",
//     type: ["grafika", "malarstwo", "akwarela", "rysunek"],
//     genre: ["portret", "autoportret", "pejza??"],
//     period: "Renesans",
//   },
//   {
//     artist: "Caravaggio",
//     country: "W??ochy",
//     type: ["malarstwo", "rysunek"],
//     genre: ["portret", "sceny religijne", "martwa natura", "sceny rodzajowe"],
//     period: ["Manieryzm"],
//   },
//   {
//     artist: "Giovanni Lorenzo Bernini",
//     country: "W??ochy",
//     type: ["architektura", "rze??ba", "malarstwo"],
//     genre: ["portret", "autoportret", "sceny religijne", "sceny mitologiczne"],
//     period: "Barok",
//   },
//   {
//     artist: "J??zef Che??mo??ski",
//     country: "Polska",
//     type: ["ilustracja", "rysunek", "malarstwo"],
//     genre: ["portret", "animalistyka", "pejza??", "sceny rodzajowe"],
//     period: "Realizm",
//   },
//   {
//     artist: "Vincent van Gogh",
//     country: "Holandia",
//     type: ["malarstwo", "rysunek", "akwarela"],
//     genre: ["autoportret", "pejza??", "martwa natura"],
//     period: ["Postimpresjonizm", "Ekspresjonizm"],
//   },
//   {
//     artist: "Paul Gauguin",
//     country: "Francja",
//     type: ["malarstwo", "ceramika", "rze??ba"],
//     genre: ["portret", "pejza??", "sceny rodzajowe", "autoportret"],
//     period: "Ekspresjonizm",
//   },
// ];
//
// const result1 = artists.filter((artist)=> artist.type.includes("akwarela") && artist.genre.includes("pejza??")).map((artist)=>artist.artist.split(" ")[0])
// console.log(result1)
//
// const result2 = new Set(artists.filter((artist)=>artist.country === "Polska").flatMap((artist)=> artist.type))
// console.log(result2)
//
// const result3 = new Set(artists.filter((artist)=>!artist.genre.includes("autoportret")).flatMap((artist)=>artist.period))
// console.log(result3)
//
//
// //274 i 275 i 276 i 277 i 278 i 279
//
// const quarterfinalists = [
//     {
//         name: "Chelsea",
//         country: "England",
//         city: "London",
//         titles: 6,
//         coach: [
//             {
//                 name: "Thomas Tuchel",
//                 nationality: "Germany",
//                 age: 48
//             }
//         ]
//     },
//     {
//         name: "Manchester City",
//         country: "England",
//         city: "Manchester",
//         titles: 7,
//         coach: [
//             {
//                 name: "Pep Guardiola",
//                 nationality: "Spain",
//                 age: 51
//             }
//         ]
//     },
//     {
//         name: "Liverpool",
//         country: "England",
//         city: "Liverpool",
//         titles: 19,
//         coach: [
//             {
//                 name: "Jurgen Klopp",
//                 nationality: "Germany",
//                 age: 54
//             }
//         ]
//     },
//     {
//         name: "Real Madrid",
//         country: "Spain",
//         city: "Madrid",
//         titles: 34,
//         coach: [
//             {
//                 name: "Carlo Ancelotti",
//                 nationality: "Italy",
//                 age: 62
//             }
//         ]
//     },
//     {
//         name: "Villarreal",
//         country: "Spain",
//         city: "Vila-real",
//         titles: 0,
//         coach: [
//             {
//                 name: "Unai Emery",
//                 nationality: "Spain",
//                 age: 50
//             }
//         ]
//     },
//     {
//         name: "Atletico Madrid",
//         country: "Spain",
//         city: "Madrid",
//         titles: 11,
//         coach: [
//             {
//                 name: "Diego Simeone",
//                 nationality: "Argentina",
//                 age: 51
//             }
//         ]
//     },
//     {
//         name: "Bayern",
//         country: "Germany",
//         city: "Munich",
//         titles: 31,
//         coach: [
//             {
//                 name: "Julian Nagelsmann",
//                 nationality: "Germany",
//                 age: 34
//             }
//         ]
//     },
//     {
//         name: "Benfica",
//         country: "Portugal",
//         city: "Lisbon",
//         titles: 37,
//         coach: [
//             {
//                 name: "Jorge Jesus",
//                 nationality: "Portugal",
//                 age: 67
//             }
//         ]
//     }
// ]
// const result15 = quarterfinalists.reduce((acc, cu)=>acc+cu.coach[0].age, 0)/quarterfinalists.length
// console.log(result15)
// const result16 = quarterfinalists.filter((club)=>club.country === "England").sort((a,b)=>b.titles -a.titles)[0]
// console.log(result16)
//
// const result17 = new Set(quarterfinalists.map((club)=>club.coach[0].nationality))
// console.log(result17)
//
// function getCoachnames(data){
//   function inner(){
//     return data.flatMap((club)=>club.coach[0].name)
//   }
//   return inner
// }
// const getCoachNamesOuter = getCoachnames(quarterfinalists)
// console.log(getCoachNamesOuter())
//
//
//
// //280 i 281 i 282 i 283
//
//
// function getClubsWithMoreThanNumberTitles(num){
//   function inner(data){
//       return data.filter((club)=>club.titles > num).map((club)=>club.name)
//   }
//   return inner
// }
//
// const getClubsWithMoreThan10Titles = getClubsWithMoreThanNumberTitles(10)
// console.log(getClubsWithMoreThan10Titles(quarterfinalists))
//
//
// //284 i 285 i 286 i 287
//
// function getClubsFromCountry(country_name){
//   function inner(data){
//     return data.filter((club)=>club.country === country_name).map((club)=>club.name)
//   }
//   return inner
// }
//
// const getClubsFromGermany = getClubsFromCountry("Germany")
// console.log(getClubsFromGermany(quarterfinalists))
//
//
// //288 i 289 i 290 i 291
// function getClubsWithCoachOlderThan(age){
//   function inner(data){
//     return data.filter((club)=>club.coach[0].age >= 60).map((club)=>club.name)
//   }
//   return inner
// }
//
// const getClubsWithCoachOlderThan60 = getClubsWithCoachOlderThan(60)
// console.log(getClubsWithCoachOlderThan60(quarterfinalists))
//
// //292 i 293 i 294 i 295
//
// function getClubStartsWitchLetter(letter){
//   function inner(data){
//     return data.filter((club)=> club.name.startsWith(letter)).map((club)=>club.name)
//   }
//   return inner
// }
// const getClubStartsWitchB = getClubStartsWitchLetter("B")
// console.log(getClubStartsWitchB(quarterfinalists))
//
//
// //296 i 297
//
// const cars = [
// 	{
// 		"brand": "bmw",
// 		"country": "germany",
// 		"year": 1993,
// 		"colorway": ["black", "red", "grey"]
// 	},
// 	{
// 		"brand": "ford",
// 		"country": "america",
// 		"year": 2015,
// 		"colorway": ["blue", "black", "carbon"]
// 	},
// 	{
// 		"brand": "honda",
// 		"country": "japan",
// 		"year": 1994,
// 		"colorway": ["blue", "gold", "black"]
// 	},
// 	{
// 		"brand": "porsche",
// 		"country": "germany",
// 		"year": 2018,
// 		"colorway": ["black", "carbon", "white"]
// 	},
// 	{
// 		"brand": "toyota",
// 		"country": "japan",
// 		"year": 1999,
// 		"colorway": ["yellow", "carbon", "black"]
// 	},
// 	{
// 		"brand": "skoda",
// 		"country": "czech_republic",
// 		"year": 2010,
// 		"colorway": ["grey", "blue", "black"]
// 	},
// 	{
// 		"brand": "peugeot",
// 		"country": "france",
// 		"year": 2000,
// 		"colorway": ["green", "red", "yellow"]
// 	},
// 	{
// 		"brand": "ferrari",
// 		"country": "italia",
// 		"year": 2006,
// 		"colorway": ["red", "black", "carbon"]
// 	},
// 	{
// 		"brand": "chevrolet",
// 		"country": "america",
// 		"year": 2003,
// 		"colorway": ["white", "yellow", "black"]
// 	},
// 	{
// 		"brand": "audi",
// 		"country": "germany",
// 		"year": 1999,
// 		"colorway": ["red", "red", "black"]
// 	}
// ]
//
// //298 i 299 i 300
//
//
// const result18 = cars.filter((car)=> car.country === "japan").map((car)=>`Car ${car.brand} from Japan, year:  ${car.year}`)
//
// const result19 = cars.filter((car)=> car.colorway.includes("red")).map((car)=> car.brand).join(", ")
//
// const result20 = cars.filter((car)=> car.year > 2001 && car.colorway.includes("carbon")).map((car)=> `${car.brand}-${car.country}`)
//
// // 301 i 302 i 303 i 304
//
// function getAllBrandFromYear(year){
//   function inner(data){
//     return data.filter((data)=>data.year >year).map((car)=>car.brand)
//   }
//   return inner
// }
// const carsAfter1999 = getAllBrandFromYear(1999)
// console.log(carsAfter1999(cars))
//
//
//
// //305 i 306 i 307 i 308
//
// function getAllCarsFromCountry(country){
//   function inner(data){
//       return data.filter((car)=>car.country.toLowerCase() === country.toLowerCase()).map((car)=> car.brand)
//   }
//   return inner
// }
//
// const getCarsFromGermany = getAllCarsFromCountry("germany")
// console.log(getCarsFromGermany(cars))
//
// //309 i 310 i 311 i 312
//
// function getAllCarsWitchColor(color){
//   function inner(data){
//     return data.filter((car)=>car.colorway.includes(color)).map((car)=>car.brand)
//   }
//   return inner
// }
//
// const yellowCars = getAllCarsWitchColor("yellow")
// console.log(yellowCars(cars))
//
// // 313 i 314 i 315 i 316
//
// const drivers = [
//     {
//         name: "Max Verstappen",
//         country: "Netherlands",
//         wins: 20,
//         teams: ['Toro Rosso', 'Red Bull']
//     },
//     {
//         name: "Lewis Hamilton",
//         country: "United Kingdom",
//         wins: 103,
//         teams: ['Mclaren', 'Mercedes']
//     },
//     {
//         name: "Valtteri Bottas",
//         country: "Finland",
//         wins: 10,
//         teams: ['Williams', 'Mercedes', 'Alfa Romeo']
//     },
//     {
//         name: "Sergio Perez",
//         country: "Mexico",
//         wins: 2,
//         teams: ['Sauber', 'Mclaren', 'Force India', 'Racing Point', 'Red Bull']
//     },
//     {
//         name: "Carlos Sainz",
//         country: "Spain",
//         wins: 0,
//         teams: ['Toro Rosso', 'Renault', 'Mclaren', 'Ferrari']
//     },
//     {
//         name: "Lando Norris",
//         country: "United Kingdom",
//         wins: 0,
//         teams: ['Mclaren']
//     },
//     {
//         name: "Charles Leclerc",
//         country: "Monaco",
//         wins: 2,
//         teams: ['Sauber', 'Ferrari']
//     },
//     {
//         name: "Daniel Ricciardo",
//         country: "Australia",
//         wins: 8,
//         teams: ['HRT', 'Toro Rosso', 'Red Bull', 'Renault', 'Mclaren']
//     },
//     {
//         name: "Pierre Gasly",
//         country: "France",
//         wins: 1,
//         teams: ['Toro Rosso', 'Red Bull', 'Alpha Tauri']
//     },
//     {
//         name: "Fernando Alonso",
//         country: "Spain",
//         wins: 32,
//         teams: ['Minardi', 'Renault', 'Mclaren', 'Ferrari', 'Alpine']
//     },
//     {
//         name: "Esteban Ocon",
//         country: "France",
//         wins: 1,
//         teams: ['Manor', 'Force India', 'Renault', 'Alpine']
//     },
//     {
//         name: "Sebastian Vettel",
//         country: "Germany",
//         wins: 53,
//         teams: ['BMW Sauber', 'Toro Rosso', 'Red Bull', 'Ferrari', 'Aston Martin']
//     },
//     {
//         name: "Lance Stroll",
//         country: "Canada",
//         wins: 0,
//         teams: ['Williams', 'Racing Point', 'Aston Martin']
//     },
//     {
//         name: "Yuki Tsunoda",
//         country: "Japan",
//         wins: 0,
//         teams: ['Aplha Tauri']
//     },
//     {
//         name: "George Russell",
//         country: "United Kingdom",
//         wins: 0,
//         teams: ['Williams', 'Mercedes']
//     },
//     {
//         name: "Guanyu Zhou",
//         country: "China",
//         wins: 0,
//         teams: ['Alfa Romeo']
//     },
//     {
//         name: "Nicholas Latifi",
//         country: "Canada",
//         wins: 0,
//         teams: ['Williams']
//     },
//     {
//         name: "Alexander Albon",
//         country: "Thailand",
//         wins: 0,
//         teams: ['Toro Rosso', 'Red Bull', 'Williams']
//     },
//     {
//         name: "Mick Schumacher",
//         country: "Germany",
//         wins: 0,
//         teams: ['Haas']
//     },
//     {
//         name: "Kevin Magnussen",
//         country: "Denmark",
//         wins: 0,
//         teams: ['Mclaren','Renault', 'Haas']
//     },
// ]
//
// function getAllDriverFromCountry(country){
//   function inner(data){
//     return data.filter((driver)=>driver.country === country).map((driver)=>driver.name)
//   }
//   return inner
//
// }
//
// const driversFromFrance = getAllDriverFromCountry("France")
// console.log(driversFromFrance(drivers))
//
//
// // 317 i 318 i 319
//
// function getAllDriversWinsMoreThenNumber(num){
//   function inner(data){
//     return data.filter((driver)=>driver.wins > num).map((driver)=>driver.name)
//   }
//   return inner
// }
//
// const driversWinsMoreThen20 = getAllDriversWinsMoreThenNumber(20)
// console.log(driversWinsMoreThen20(drivers))
//
// //320 i 321
// //322 i 323
//
// function getAllDriversWitchDriveInTeam(team){
//   function inner(data){
//     return data.filter((driver)=>driver.teams.includes(team)).map((driver)=>driver.name)
//   }
//   return inner
// }
//
// const driverFromRedBull = getAllDriversWitchDriveInTeam("Red Bull")
// console.log(driverFromRedBull(drivers))
//
//
// const animals = [
//   {
//     mammals: [
//       {
//         name: 'Eurasian Lynx',
//         habitat: ['Grassland', 'Mountain', 'Taiga', 'Temperate Rainforest'],
//         diet: 'Carnivore',
//         sizeInCm: 130,
//         weightInKg: 30,
//         lifespanInYears: 25
//       },
//       {
//         name: 'Red Fox',
//         habitat: ['Desert', 'Grassland', 'Taiga', 'Woodland'],
//         diet: 'Omnivore',
//         sizeInCm: 90,
//         weightInKg: 12,
//         lifespanInYears: 5
//       }
//     ]
//   },
//   {
//     birds: [
//       {
//         name: 'Black-chinned Hummingbird',
//         habitat: ['Grassland', 'Mountain', 'Woodland'],
//         diet: 'Omnivore',
//         sizeInCm: 8.5,
//         weightInKg: 0.0035,
//         lifespanInYears: 10
//       },
//       {
//         name: 'Ferruginous Hawk',
//         habitat: ['Grassland'],
//         diet: 'Carnivore',
//         sizeInCm: 70,
//         weightInKg: 1.2,
//         lifespanInYears: 20
//       }
//     ]
//   },
//   {
//     reptlies: [
//       {
//         name: 'Alligator Snapping Turtle',
//         habitat: ['Freshwater', 'Swamp'],
//         diet: 'Omnivore',
//         sizeInCm: 80,
//         weightInKg: 80,
//         lifespanInYears: 45
//     },
//       {
//         name: 'Eyelash Viper',
//         habitat: ['Tropical Rainforest'],
//         diet: 'Carnivore',
//         sizeInCm: 80,
//         weightInKg: 0.225,
//         lifespanInYears: 12
//       }
//     ]
//   },
//   {
//     amphibians: [
//       {
//         name: 'Axolotl',
//         habitat: ['Freshwater'],
//         diet: 'Carnivore',
//         sizeInCm: 30,
//         weightInKg: 0.225,
//         lifespanInYears: 12
//       }
//     ]
//   },
//   {
//     fish: [
//       {
//         name: 'Great Hammerhead',
//         habitat: ['Coral Reef', 'Shallow Sea'],
//         diet: 'Carnivore',
//         sizeInCm: 500,
//         weightInKg: 500,
//         lifespanInYears: 30
//     },
//       {
//         name: 'Leafy Seadragon',
//         habitat: ['Shallow Sea'],
//         diet: 'Carnivore',
//         sizeInCm: 35,
//         weightInKg: 0.112,
//         lifespanInYears: 10
//       }
//     ]
//   }
// ]
//
//
// //324 i 325
// //326 i 327 i 328
//
//
// function getAllAnimalsFromSpecificHabitat(habitat){
//     function inner(data){
//         const flatData = data.flatMap((animal)=>Object.values(animal)[0])
//         console.log("Jestem z innera, ", flatData)
//         return flatData.filter((animal)=>animal.habitat.includes(habitat)).map((animal)=>animal.name)
//     }
//     return inner
// }
// const getAnimalsFromGrassland = getAllAnimalsFromSpecificHabitat("Grassland")
// console.log(getAnimalsFromGrassland(animals))
//
// // 329
// //330 i 331
// //332 i 333
//
// function getAnimalByTypeOfDiet(typeOfDiet){
//     function inner(data){
//         const flatData = data.flatMap((animal)=> Object.values(animal)[0])
//         return flatData.filter((animal)=>animal.diet === typeOfDiet).map((animal)=>animal.name)
//     }
//     return inner
// }
//
// const omnivoreAnimals = getAnimalByTypeOfDiet("Omnivore")
// console.log(omnivoreAnimals(animals))
//
// //334 i 335
// //336 i 337
// //338
//
// function getAllAnimalsFromSize(size){
//     function inner(data){
//         const flatData = data.flatMap(animal=> Object.values(animal)[0])
//         return flatData.filter((animal)=>animal.sizeInCm > 20).map((animal)=> animal.name)
//     }
//     return inner
// }
//
// const getAnimalsLargerThen20cm = getAllAnimalsFromSize(20)
// console.log(getAnimalsLargerThen20cm(animals))
//
//
//
// // 339
//
// const reverseSeq = n => {
//   return [...Array(n+1).keys()].slice(1, n+1).reverse()
// };
//
// function sumMix(x){
//   return x.reduce((acc, cu)=> acc +parseInt(cu),0)
// }
//
//
// //340 i 341
//
//
// function countPositivesSumNegatives(input) {
//   if(input === null || input.length ===0){
//     return [] ;
//     }
//         let counter =0;
//     let sum = 0;
//   input.forEach((element)=>{
//     if(element >0){
//       counter ++
//     }
//     else{
//       sum =sum +element
//     }
//   })
//   return [counter, sum]
//
//
//
//
// }
//
// //342 i 343
//
// function cockroachSpeed(s) {
//   return Math.floor(s*(30/1.08))
// }
//
// function makeNegative(num) {
//   return num <=0? num: -num
// }
//
// //344 i 345
// //346 i 347
// //348 i  349
// //350
//
// function getAnimalsLargerOrSmallerThanWeightParameter(weightInKgPara, largerOrSmaller="larger"){
//     function inner(data){
//         const flatData = data.flatMap((animal)=>Object.values(animal)[0])
//         if(largerOrSmaller === "smaller"){
//             return flatData.filter((animal)=>animal.weightInKg < weightInKgPara ).map((animal)=>animal.name)
//         } else{
//             return flatData.filter((animal)=>animal.weightInKg > weightInKgPara).map((animal)=>animal.name)
//         }
//     }
//     return inner
// }
//
// const animalsLHeavierThan15kg = getAnimalsLargerOrSmallerThanWeightParameter(15)
// const animalsLighterThan15kg = getAnimalsLargerOrSmallerThanWeightParameter(15, "smaller")
// console.log("Zwierzeta ci??zsze ni?? 15 kg", animalsLHeavierThan15kg(animals))
// console.log("Zwierzeta l??ejsze ni?? 15 kg", animalsLighterThan15kg(animals))
// // 351
// //352 i 353
// //354 i 355
//
// function getAnimalsWithLifeSpanShorterOrLongerThan(param, shorterOrLonger = "shorter"){
//     function inner(data){
//         const flatData = data.flatMap((animal)=> Object.values(animal)[0])
//         if(shorterOrLonger === "longer"){
//             return flatData.filter((animal)=>animal.lifespanInYears > param).map((animal)=>animal.name)
//         } else{
//             return flatData.filter((animal)=>animal.lifespanInYears < param).map((animal)=>animal.name)
//         }
//     }
//     return inner
// }
// const animalsLiveLongerThan20years = getAnimalsWithLifeSpanShorterOrLongerThan(20, "longer")
// const animalsLiveShorterThan20years = getAnimalsWithLifeSpanShorterOrLongerThan(20)
// console.log(animalsLiveLongerThan20years(animals))
// console.log(animalsLiveShorterThan20years(animals))


const coffeeShop = [
    {
        name: "Fornir",
        street: "D??uga",
        city: "Krak??w",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Jordan Cafe",
        street: "D??uga",
        city: "Krak??w",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 10,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15,
                iceLatte: 14
            }
        ],
    },
    {
        name: "Iluzjon Art Cafe",
        street: "Rynek",
        city: "Sandomierz",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 8,
                americano: 10,
                flatWhite: 15,
                capuccino: 12,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Ministerstwo Kawy",
        street: "Marsza??kowska",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
        coffeePrice: [
            {
                espresso: 11,
                americano: 13,
                flatWhite: 14,
                capuccino: 15,
                latte: 16,
                mocha: 18,
                iceLatte: 18
            }
        ],
    },
    {
        name: "Magia Cafe Bar",
        street: "D??uga",
        city: "Krak??w",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 9,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    },
    {
        name: "Kawiarnia Kafka",
        street: "Obo??na",
        city: "Warszawa",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 11,
                flatWhite: 14,
                capuccino: 13,
                latte: 15,
                mocha: 15
            }
        ],
    },   {
        name: "Kawa",
        street: "D??uga",
        city: "Gda??sk",
        coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
        coffeePrice: [
            {
                espresso: 9,
                americano: 10,
                flatWhite: 13,
                capuccino: 13,
                latte: 14,
                mocha: 15
            }
        ],
    }
    ]


//356 i 357
//358 i 359



function getNamesOfAllCoffeeShopFromCity(city){
    function inner(data){
        return data.filter((coffeeShop)=>coffeeShop.city === city).map((coffeeShop)=>coffeeShop.name)
    }
    return inner
}

const coffeeShopsFromCracow = getNamesOfAllCoffeeShopFromCity("Krak??w")
console.log(coffeeShopsFromCracow(coffeeShop))

//360
//361
//362
//363

function getNamesOfCoffeeShopsWithTypeOfCoffee(type){
    function inner(data){
        return data.filter((coffeeShop)=> coffeeShop.coffee.includes(type)).map((cs)=>cs.name)
    }
    return inner
}

const coffeeShopsWithLatte = getNamesOfCoffeeShopsWithTypeOfCoffee("latte")
console.log(coffeeShopsWithLatte(coffeeShop))
//364
//365
//366
//367

function getNamesOfCoffeeShopsWithMenuLongerThan(num){
    function inner(data){
        return data.filter((cs)=> cs.coffee.length > num).map((cs)=>cs.name)
    }
    return inner
}

const coffeeShopsWithLongerMenuThan5 = getNamesOfCoffeeShopsWithMenuLongerThan(5)
console.log(coffeeShopsWithLongerMenuThan5(coffeeShop))

//368
//369
//370
//371

function checkPriceCoffeeInCoffeeShop(coffee, cafe){
    function inner(data){
        return data.filter((cs)=>cs.name === cafe).map((cs)=> cs.coffeePrice[0].latte)
    }
    return inner
}
const costOfLatteInFornir = checkPriceCoffeeInCoffeeShop("latte", "Fornir")
console.log(costOfLatteInFornir(coffeeShop))
//372
//373
//374


function getNumberIncreasedByNum(num){
    function inner(arr){
        return arr.map((element)=>element + num)
    }
    return inner
}

const getNumbersIncreasedBy20 = getNumberIncreasedByNum(20)
console.log(getNumbersIncreasedBy20([1,2,3,4,5,6,7,8]))
//375
//376
//377

function getNumbersDecreaseByNum(num){
    function inner(arr){
        return arr.map((el)=> el-num)
    }
    return inner
}
const getNumbersDecreaseBy70 = getNumbersDecreaseByNum(70)
console.log(getNumbersDecreaseBy70([1,2,3,4,5,6,7]))

//378
//379
//380

function multiplyEvenNumByFirstNumAndOddNumberBySecondNum(fNum, sNum){
    function inner(data){
        return data.map((element)=> element%2? element*sNum: element*fNum)
    }
    return inner
}
const multiplyEvenNumBy7OddNumBy4 = multiplyEvenNumByFirstNumAndOddNumberBySecondNum(7, 4)
console.log(multiplyEvenNumBy7OddNumBy4([1,2,3,4,5,6,7,87]))

//381
//382
//383

function sumEveryPositiveElementInColection(col){
    return col.filter((el)=>el>0).reduce((acc, cu)=> acc+ cu, 0)
}
console.log(sumEveryPositiveElementInColection([1,2,3,4,5,6,6,7]))


//384
//385

function sumLargestAndSmallestNumberFromCollection(col){
    const sortedCol =  col.sort((a, b)=>a-b)
    return (sortedCol[0] + sortedCol[col.length-1])
}

console.log(sumLargestAndSmallestNumberFromCollection([1,33,77,4,22,0,-1,201]))

//386
//387
//388
function findMedianaAndAverageFromArr(arr){
    const sortedArray = arr.sort((a,b)=>a - b)
    const mediana = sortedArray.length%2? sortedArray[(sortedArray.length-1)/2] : sortedArray[sortedArray.length/2]
    const average = arr.reduce((acc, cu)=>acc+cu)/arr.length
    return  `Mediana wynosi ${mediana} a ??rednia wynosi ${average}.`


}

console.log(findMedianaAndAverageFromArr([1,2,3,4,5]))
console.log(findMedianaAndAverageFromArr([1,2,3,4,5, 6]))


  const family = [
    {
      name: 'John',
      age: 33
    },
    {
      name: 'Ann',
      age: 16,
    },
    {
      name: 'Kely',
      age: 5,
    },
    {
      name: 'Nate',
      age: 27,
    },
    {
      name: 'Brook',
      age: 85,
    }
  ];

//389
//390

function getDifferenceBetweenOldestAndYoungestPerson(data){
    const sortedData = data.sort((a,b)=> a.age - b.age);
    return (sortedData[data.length-1].age-sortedData[0].age)
}
console.log(getDifferenceBetweenOldestAndYoungestPerson(family))
//391
//392
function getAverageAgeFromFamily(data){
    return data.reduce((acc, cu)=> acc+ cu.age,0)/data.length
}

console.log(getAverageAgeFromFamily(family))
//393
//394
function alphabetPosition(text) {
  return (text
    .toUpperCase()
    .match(/[A-Z]/gm) || [])
    .map(e => e.charCodeAt() - 64)
    .join(' ');
}
console.log(alphabetPosition("To jest toxt z ! do zaszyfrowania w liczby"))


//395 i 396

function findNextSquare(sq) {
  const result = Math.sqrt(sq)

  return result%1? -1: Math.pow(result+1, 2)
}
console.log(144)
console.log(142)

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1,2,3,4,5,6,6,7,8,89]))


//397
//398
function Numeronyms(sentence){
    return  sentence.split(" ").map((word)=> word.length> 3?(word[0] + (word.length-2) + word[word.length-1]): word).join(" ")

}

console.log(Numeronyms("To jest zdanie w ktorym niektore wyrazy zostana zmienione"))

//399
//400

function factorialOfNumber(number){
    const newArray = [];
    for(let i =1; i<number+1; i++){
        newArray.push(i)
    }
    return newArray.reduce((acc, cu)=>acc*cu, 1)

}

console.log(factorialOfNumber(6))
//401
//402 :)
//403

function factorialOfNumber2(num){
    const newArr = new Array(num).fill(null);
    return newArr.map((curVal, index)=> index+1).reduce((acc, cu)=>acc*cu)
}

console.log(factorialOfNumber2(6))


//404


function countElementInArrays(arr){
    const obj = {

    }
    for(let el of arr.flat()){
        if(!obj[el]){
            obj[el]=1
        }else{
            obj[el]++
        }
    }
    return obj
}
console.log(countElementInArrays([['a', 'b', 'c', 'd'], ['b', 'b', 'c'],['d', 's']]))

//405
//406

function getNameInitials(names){
    return names.split(" ").map((name)=>name[0]).join("")
}
console.log(getNameInitials(" Anna Helena Klara"))

//407


function exclainWord(word){
    return `${word}!`
}
console.log(exclainWord("Kasia"))


//408
//409

function doubleLetter(word){
    return word.split("").map((letter)=> `${letter}${letter}`).join("")
}
console.log(doubleLetter("hgdgdfc"))

//410
//411
//412
//413
function atLeastTwo(arr, callback){
    return (arr.filter((num)=> callback(num)).length > 1? true: false)
}

function isOdd(el){
    return el%2
}

function isBiggerThan3(num){
    return num > 3
}

console.log(atLeastTwo([1,2,3,4,5,6,7], isOdd))
console.log(atLeastTwo([6,2,8,4,8,6,7], isOdd))
console.log(atLeastTwo([6,2,8,4,8,6,7], isBiggerThan3))
console.log(atLeastTwo([6,2,0, 1,2,2,2], isBiggerThan3))

//414


function repeatFunction(text, numOfRepeat, cb){
    for(let i = 0; i< numOfRepeat; i++){
        text = cb(text)
    }
    return text

}
console.log(repeatFunction("power", 3, exclainWord))
console.log(repeatFunction("power", 2, doubleLetter))

const directors = [
  {
    name: "Christopher",
    surname: "Nolan",
    birth: 1970,
    children: ["Flora Nolan", "Oliver Nolan", "Rory Nolan", "Magnus Nolan"],
    movies: [
      {
        title: "Memento",
        year: 2000,
        genre: "Thriller",
        distributor: "Newmarket Films",
      },
      {
        title: "Inception",
        year: 2010,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
      {
        title: "Dunkirk",
        year: 2017,
        genre: "War",
        distributor: "Warner Bros.",
      },
      {
        title: "Tenet",
        year: 2020,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
    ],
  },
  {
    name: "Quentin",
    surname: "Tarantino",
    birth: 1963,
    children: ["Leo Tarantino"],
    movies: [
      {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        distributor: "Miramax",
      },
      {
        title: "Kill Bill",
        year: 2003,
        genre: "Action",
        distributor: "Miramax",
      },
      {
        title: "Django",
        year: 2012,
        genre: "Western",
        distributor: "Columbia Pictures",
      },
      {
        title: "The Hateful Eight",
        year: 2015,
        genre: "Western",
        distributor: "The Weinstein Company",
      },
    ],
  },
  {
    name: "Martin",
    surname: "Scorsese",
    birth: 1942,
    children: [
      "Francesca Scorsese",
      "Domenica Cameron-Scorsese",
      "Cathy Scorsese",
    ],
    movies: [
      {
        title: "After Hours",
        year: 1985,
        genre: "Black comedy",
        distributor: "Warner Bros.",
      },
      {
        title: "Casino",
        year: 1995,
        genre: "Crime",
        distributor: "Universal Pictures",
      },
      {
        title: "The Departed",
        year: 2006,
        genre: "Crime",
        distributor: "Warner Bros.",
      },
      {
        title: "The Irishman",
        year: 2019,
        genre: "Crime",
        distributor: "Netflix",
      },
    ],
  },
];

//415
//416
//417
//418

//
//
// function getDirectorsBirthAfterYear(year){
//     function inner(data){
//         return data.filter((director)=>director.birth > year).map((director)=> `${director.name} ${director.surname}`)
//     }
//     return inner
// }
//
// const directorsBornAfter1965 = getDirectorsBirthAfterYear(1965)
// console.log(directorsBornAfter1965(directors))
//
// //419
// //420
// //421
// //422
//
// function getDirectorsWithMoreThanChildren(num){
//     function inner(data){
//         return data.filter((director)=>director.children.length > num).map((dir)=> `${dir.name} ${dir.surname}`)
//     }
//     return inner
// }
//
// const directorsWithMoreThan4Kids = getDirectorsWithMoreThanChildren(3)
// console.log(directorsWithMoreThan4Kids(directors))

//423
//424
//425
//426
//427

// function getDistributorOfFilm(movieEx){
//     function inner(data){
//         return data.flatMap(dir=>dir.movies).filter((film)=> film.title === movieEx).map((film)=>film.distributor)
//     }
//     return inner
// }
// const getDistributorOfDjango = getDistributorOfFilm("Django")
// console.log(getDistributorOfDjango(directors))
//
// //428
// //429
// //430
// //431
// //432
// function getYearOfFilmProduction(movie){
//     function inner(data){
//         return data.flatMap((dir)=>dir.movies).filter((film)=> film.title === movie).map((film)=>film.year)
//     }
//     return inner
// }
// const getYearOfDjango = getYearOfFilmProduction("Django")
// console.log(getYearOfDjango(directors))
//
// //433
// //434
// //435
// //436
// //437
//
// function getGenreOfFilmProduction(movie){
//     function inner(data){
//         return data.flatMap((dir)=>dir.movies).filter((film)=> film.title === movie).map((film)=>film.genre)
//     }
//     return inner
// }
// const getGenreOfDjango = getGenreOfFilmProduction("Django")
// console.log(getGenreOfDjango(directors))
//
//
// //438
// //439
// //440
// //441
// //442
//
// function getFilmsAfterYear(year){
//     function inner(data){
//         return data.flatMap((dir)=>dir.movies).filter((film)=> film.year > year).map((film)=>film.title)
//     }
//     return inner
// }
// const filmsAfter2001 = getFilmsAfterYear(2002)
// console.log(filmsAfter2001(directors))
//
// //443
// //444
// //445
// //446
// //447
//
// function getFilmsOfTheGenre(genre){
//     function inner(data){
//         return data.flatMap((dir)=>dir.movies).filter((film)=> film.genre === genre).map((film)=>film.title)
//     }
//     return inner
// }
// const westernFilms = getFilmsOfTheGenre("Western")
// console.log(westernFilms(directors))
//
//
// //448
// //449
// //450
// //451
// //452
//
//
// function getFilmsFromDistributor(distributor){
//     function inner(data){
//         return data.flatMap((dir)=>dir.movies).filter((film)=> film.distributor === distributor).map((film)=>film.title)
//     }
//     return inner
// }
// const filmsFromMiramax = getFilmsFromDistributor("Miramax")
// console.log(filmsFromMiramax(directors))
//
//
// //453
// //454
// //455
// //456
// //457
//
// function getInfoAboutFilm(movie){
//     function inner(data){
//         return (data.flatMap((dir)=>dir.movies).filter((film)=> film.title === movie)
//             .map((film)=>`Tytu?? : ${film.title}, year: ${film.year}, genre: ${film.genre}, distributor: ${film.distributor}`))
//     }
//     return inner
// }
// const infoAboutDjango = getInfoAboutFilm("Django")
// console.log(infoAboutDjango(directors))
//
//
//
// //458
// //459
// //460
// //461
// //462
//
// function getInfoAboutDirector(directorSurname){
//     function inner(data){
//         return (data.filter((dir)=> dir.surname === directorSurname)
//             .map((dir)=>`Imi?? : ${dir.name}, Nazwisko: ${dir.surname}, Urodzony: ${dir.birth}, liczba dzieci: ${dir.children.length}`))
//     }
//     return inner
// }
// const infoAboutNolan = getInfoAboutDirector("Nolan")
// console.log(infoAboutNolan(directors))


const weatherData = [

  {
    id_stacji: "12235",
    stacja: "Chojnice",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-0.4",
    predkosc_wiatru: "3",
    kierunek_wiatru: "150",
    wilgotnosc_wzgledna: "42.7",
    suma_opadu: "0",
    cisnienie: "1034.4",
  },

  {
    id_stacji: "12135",
    stacja: "Hel",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "1.2",
    predkosc_wiatru: "3",
    kierunek_wiatru: "190",
    wilgotnosc_wzgledna: "55.8",
    suma_opadu: "0",
    cisnienie: "1034.3",
  },
  {
    id_stacji: "12500",
    stacja: "Jelenia G\u00f3ra",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-0.2",
    predkosc_wiatru: "6",
    kierunek_wiatru: "80",
    wilgotnosc_wzgledna: "38.8",
    suma_opadu: "0",
    cisnienie: "1030.6",
  },
  {
    id_stacji: "12435",
    stacja: "Kalisz",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-0.1",
    predkosc_wiatru: "3",
    kierunek_wiatru: "90",
    wilgotnosc_wzgledna: "45.6",
    suma_opadu: "0",
    cisnienie: "1034",
  },
  {
    id_stacji: "12650",
    stacja: "Kasprowy Wierch",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-9.7",
    predkosc_wiatru: "3",
    kierunek_wiatru: "70",
    wilgotnosc_wzgledna: "12.8",
    suma_opadu: "0.4",
    cisnienie: null,
  },

  {
    id_stacji: "12105",
    stacja: "Koszalin",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "2.3",
    predkosc_wiatru: "4",
    kierunek_wiatru: "140",
    wilgotnosc_wzgledna: "31.8",
    suma_opadu: "0",
    cisnienie: "1032.5",
  },
  {
    id_stacji: "12488",
    stacja: "Kozienice",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-4.9",
    predkosc_wiatru: "0",
    kierunek_wiatru: "0",
    wilgotnosc_wzgledna: "64.7",
    suma_opadu: "0",
    cisnienie: "1036.2",
  },


  {
    id_stacji: "12465",
    stacja: "????d??",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-1",
    predkosc_wiatru: "3",
    kierunek_wiatru: "100",
    wilgotnosc_wzgledna: "36.7",
    suma_opadu: "0",
    cisnienie: "1035.1",
  },
  {
    id_stacji: "12280",
    stacja: "Miko??ajki",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-2.9",
    predkosc_wiatru: "2",
    kierunek_wiatru: "190",
    wilgotnosc_wzgledna: "57.9",
    suma_opadu: "0",
    cisnienie: "1035.9",
  },
  {
    id_stacji: "12270",
    stacja: "M??awa",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-1.6",
    predkosc_wiatru: "2",
    kierunek_wiatru: "90",
    wilgotnosc_wzgledna: "46.6",
    suma_opadu: "0",
    cisnienie: "1035.8",
  },
  {
    id_stacji: "12660",
    stacja: "Nowy S??cz",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-3",
    predkosc_wiatru: "1",
    kierunek_wiatru: "150",
    wilgotnosc_wzgledna: "57.9",
    suma_opadu: "0",
    cisnienie: "1035.9",
  },
  {
    id_stacji: "12272",
    stacja: "Olsztyn",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-3.2",
    predkosc_wiatru: "0",
    kierunek_wiatru: "0",
    wilgotnosc_wzgledna: "47.7",
    suma_opadu: "0",
    cisnienie: "1035.7",
  },
  {
    id_stacji: "12530",
    stacja: "Opole",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-1.1",
    predkosc_wiatru: "3",
    kierunek_wiatru: "90",
    wilgotnosc_wzgledna: "36.7",
    suma_opadu: "0",
    cisnienie: "1033.8",
  },
  {
    id_stacji: "12285",
    stacja: "Ostrowka",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-4",
    predkosc_wiatru: "0",
    kierunek_wiatru: "0",
    wilgotnosc_wzgledna: "54.5",
    suma_opadu: "0",
    cisnienie: "1036.2",
  },
  {
    id_stacji: "12230",
    stacja: "Pi??a",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "0.9",
    predkosc_wiatru: "3",
    kierunek_wiatru: "110",
    wilgotnosc_wzgledna: "36.7",
    suma_opadu: "0.01",
    cisnienie: "1033.4",
  },
  {
    id_stacji: "12001",
    stacja: "Platforma",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "3.4",
    predkosc_wiatru: "9",
    kierunek_wiatru: "170",
    wilgotnosc_wzgledna: null,
    suma_opadu: "0",
    cisnienie: "1033.5",
  },
  {
    id_stacji: "12360",
    stacja: "P??ock",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-2.1",
    predkosc_wiatru: "1",
    kierunek_wiatru: "100",
    wilgotnosc_wzgledna: "61.9",
    suma_opadu: "0",
    cisnienie: "1035.3",
  },
  {
    id_stacji: "12330",
    stacja: "Pozna??",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "1.4",
    predkosc_wiatru: "5",
    kierunek_wiatru: "110",
    wilgotnosc_wzgledna: "33.7",
    suma_opadu: "0",
    cisnienie: "1033",
  },
  {
    id_stacji: "12695",
    stacja: "Przemy??l",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-2.1",
    predkosc_wiatru: "3",
    kierunek_wiatru: "40",
    wilgotnosc_wzgledna: "42.5",
    suma_opadu: "0",
    cisnienie: "1035.6",
  },
  {
    id_stacji: "12540",
    stacja: "Raciborz",
    data_pomiaru: "2022-03-11",
    godzina_pomiaru: "19",
    temperatura: "-0.1",
    predkosc_wiatru: "3",
    kierunek_wiatru: "90",
    wilgotnosc_wzgledna: "33.8",
    suma_opadu: "0",
    cisnienie: "1033.4",
  },
];

//463
//464
//465
//466

// function getAllStationsWithPressureGraterThan(pressure){
//     function inner(data){
//         return data.filter((el)=> parseFloat(el.cisnienie) > pressure).map((station)=>station.stacja)
//     }
//     return inner
// }
//
// const presserGreaterThan1033 = getAllStationsWithPressureGraterThan(1033);
// console.log(presserGreaterThan1033(weatherData))
//
// //467
// //468
// //469
// //470
//
// function getAllStationWithRainfallMoreThan(rainfall){
//     function inner(data){
//         return data.filter((el)=>parseFloat(el.suma_opadu) > rainfall).map((el)=>el.stacja)
//     }
//     return inner
// }
//
// const rainfallMoreThan0 = getAllStationWithRainfallMoreThan(0)
// console.log(rainfallMoreThan0(weatherData))
// //471
// //472
// //473
// //474
//
//
// function getAllStationWitchRelativeHumidityMoreThan(relativeHumidity){
//     function inner(data){
//         return data.filter((st)=>parseFloat(st.wilgotnosc_wzgledna) > relativeHumidity).map((st)=>st.stacja)
//     }
//     return inner
// }
//
// const stationWitchRelativeHumidityMoreThan40 = getAllStationWitchRelativeHumidityMoreThan(40)
// console.log(stationWitchRelativeHumidityMoreThan40(weatherData))

//475
//476
//477
//478

// function getAllStationWithWindDirection(windDirection){
//     function inner(data){
//         return data.filter((st)=> st.kierunek_wiatru === windDirection).map((st)=>st.stacja)
//     }
//     return inner
// }
// const stationsWithWindDirection90 = getAllStationWithWindDirection("90")
// console.log(stationsWithWindDirection90(weatherData))
//
// //479
// //480
// //481
// //482
//
// function getAllStationsWithWindSpeedMoreThan(windSpeed){
//     function inner(data){
//         return data.filter((st)=>parseInt(st.predkosc_wiatru) >windSpeed).map((st)=>st.stacja)
//     }
//     return inner
// }
// const stationsWithWindSpeedMoreThan2 = getAllStationsWithWindSpeedMoreThan(2)
// console.log(stationsWithWindSpeedMoreThan2(weatherData))
// //483
// //484
// //485
// //486
//
// function getAllStationsWithTemperatureMoreThan(temp){
//     function inner(data){
//         return data.filter((st)=>parseFloat(st.temperatura) >temp).map((st)=>st.stacja)
//     }
//     return inner
// }
// const stationsWithTempMoreThan0 = getAllStationsWithTemperatureMoreThan(0)
// console.log(stationsWithTempMoreThan0(weatherData))


//487
//488
//489
//490
//491

// function getAverageTemperatureAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru===timeStr).map((st)=>parseFloat(st.temperatura)).reduce((acc, cu)=>acc+cu)/data.length
//     }
//     return inner
// }
// const measurementsFrom19= getAverageTemperatureAtTime("19")
// console.log(measurementsFrom19(weatherData))


//492
//493
//494
//495
//496

// function getAveragePressureAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru===timeStr).map((st)=>parseFloat(st.cisnienie) || 0).reduce((acc, cu)=>acc+cu)/data.length
//     }
//     return inner
// }
// const measurementsFrom19pressure= getAveragePressureAtTime("19")
// console.log(measurementsFrom19pressure(weatherData))



//497
//498
//498
//500
//501

// function getAverageRainFallAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru===timeStr).map((st)=>parseFloat(st.suma_opadu) || 0).reduce((acc, cu)=>acc+cu)/data.length
//     }
//     return inner
// }
// const measurementsFrom19rainFall= getAverageRainFallAtTime("19")
// console.log(measurementsFrom19rainFall(weatherData))


//502
//503
//504
//505
//506

// function getAverageRelativeHumidityAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru===timeStr).map((st)=>parseFloat(st.wilgotnosc_wzgledna) || 0).reduce((acc, cu)=>acc+cu)/data.length
//     }
//     return inner
// }
// const measurementsFrom19RelativeHumidity= getAverageRelativeHumidityAtTime("19")
// console.log(measurementsFrom19RelativeHumidity(weatherData))

//507
//508
//509
//510
//511

// function getAverageWindSpreedAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru===timeStr).map((st)=>parseFloat(st.predkosc_wiatru) || 0).reduce((acc, cu)=>acc+cu)/data.length
//     }
//     return inner
// }
// const measurementsFrom19WindSpeed= getAverageWindSpreedAtTime("19")
// console.log(measurementsFrom19WindSpeed(weatherData))


//512
//513
//514
//515
//516

// function getMaxPressureAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.cisnienie)).reduce((acc, cu)=> cu>acc?cu:acc)
//     }
//     return inner
// }
// const maxPressureAtTime19= getMaxPressureAtTime("19")
// console.log(maxPressureAtTime19(weatherData))

//517
//518
//519
//520
//521

// function getMinPressureAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.cisnienie)).reduce((acc, cu)=> cu<acc?cu:acc)
//     }
//     return inner
// }
// const minPressureAtTime19= getMinPressureAtTime("19")
// console.log(minPressureAtTime19(weatherData))

//522
//523
//524
//525
//526

// function getMinRainFallAtStationAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.suma_opadu)).reduce((acc, cu)=> cu<acc?cu:acc)
//     }
//     return inner
// }
// const minRainFallAtStationAt19= getMinRainFallAtStationAtTime("19")
// console.log(minRainFallAtStationAt19(weatherData))

//527
//528
//529
//530
//531

// function getMaxRainFallAtStationAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.suma_opadu)).reduce((acc, cu)=> cu>acc?cu:acc)
//     }
//     return inner
// }
// const maxRainFallAtStationAt19= getMaxRainFallAtStationAtTime("19")
// console.log(maxRainFallAtStationAt19(weatherData))

//532
//533
//534
//535
//536

// function maxRecordedRelativeHumidityAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.wilgotnosc_wzgledna)).reduce((acc, cu)=> cu>acc?cu:acc)
//     }
//     return inner
// }
// const maxRecordedRelativeHumidityAt19= maxRecordedRelativeHumidityAtTime("19")
// console.log(maxRecordedRelativeHumidityAt19(weatherData))

//537
//538
//539
//540
//541
//
// function minRecordedRelativeHumidityAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.wilgotnosc_wzgledna)).reduce((acc, cu)=> cu<acc?cu:acc)
//     }
//     return inner
// }
// const minRecordedRelativeHumidityAt19= minRecordedRelativeHumidityAtTime("19")
// console.log(minRecordedRelativeHumidityAt19(weatherData))

//542
//543
//544
//545
//546


// function minRecordedWindSpeedAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.predkosc_wiatru)).reduce((acc, cu)=> cu<acc?cu:acc)
//     }
//     return inner
// }
// const minRecordedWindSpeedAt19= minRecordedWindSpeedAtTime("19")
// console.log(minRecordedWindSpeedAt19(weatherData))

//547
//548
//549
//550
//551

// function maxRecordedWindSpeedAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.predkosc_wiatru)).reduce((acc, cu)=> cu>acc?cu:acc)
//     }
//     return inner
// }
// const maxRecordedWindSpeedAt19= maxRecordedWindSpeedAtTime("19")
// console.log(maxRecordedWindSpeedAt19(weatherData))

//552
//553
//554
//555
//556

// function maxRecordedTempAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>st.godzina_pomiaru === timeStr).map((st)=>parseFloat(st.temperatura)).reduce((acc, cu)=> cu>acc?cu:acc)
//     }
//     return inner
// }
// const maxRecordedTempAt19= maxRecordedTempAtTime("19")
// console.log(maxRecordedTempAt19(weatherData))

//557
//558
//559
//560



// function getTempAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} temperatura wynios??a: ${st.temperatura || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getTempatStationOpole= getTempAtStation("Opole")
// console.log(getTempatStationOpole(weatherData))
//561
//562
//563
//564

// function getInfoAboutWindSpeedAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} pr??dko???? wiatru wynios??a: ${st.predkosc_wiatru || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getInfoAboutWindSpeedAtStationOpole= getInfoAboutWindSpeedAtStation("Opole")
// console.log(getInfoAboutWindSpeedAtStationOpole(weatherData))

//565
//566
//567
//568

// function getInfoAboutWindDirectionAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} zanotowano kierunek wiatru : ${st.kierunek_wiatru || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getInfoAboutWindDirectionAtStationOpole= getInfoAboutWindDirectionAtStation("Opole")
// console.log(getInfoAboutWindDirectionAtStationOpole(weatherData))


//569
//570
//571
//572

// function getInfoAboutRelativeHumidityAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} zanotowano wilgotno???? wzgl??dn?? : ${st.wilgotnosc_wzgledna || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getInfoAboutRelativeHumidityAtStationOpole= getInfoAboutRelativeHumidityAtStation("Opole")
// console.log(getInfoAboutRelativeHumidityAtStationOpole(weatherData))

//573
//574
//575
//576

// function getInfoAboutRainfallAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} zanotowano sum?? opad??w : ${st.suma_opadu || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getInfoAboutRainfallAtStationOpole= getInfoAboutRainfallAtStation("Opole")
// console.log(getInfoAboutRainfallAtStationOpole(weatherData))


//577
//578
//579
//580

// function getInfoAboutPressureAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Na stacji ${st.stacja} zanotowano ci??nienie : ${st.cisnienie || "Brak pomiaru"}`)
//     }
//     return inner
// }
// const getInfoAboutPressureAtStationOpole= getInfoAboutPressureAtStation("Opole")
// console.log(getInfoAboutPressureAtStationOpole(weatherData))

//581
//582
//583
//584

// function getAllStationNameWhereNotRegisterParameterAtTime(timeStr){
//     function inner(data){
//         return data.filter((st)=>Object.values(st).includes(null)).map((st)=>st.stacja)
//     }
//     return inner
// }
// const stationWithNoRegisterParmeterAt19 = getAllStationNameWhereNotRegisterParameterAtTime("19")
// console.log(stationWithNoRegisterParmeterAt19(weatherData))
//
// //585
// //586
// //587
// //588
//
// function getTechInfoAboutStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=>`Stacja: ${st.stacja}, id: ${st.id_stacji}, data: ${st.data_pomiaru}, godz: ${st.godzina_pomiaru}`)
//     }
//     return inner
// }
//
// const InfoAboutStationOpole = getTechInfoAboutStation("Opole")
// console.log(InfoAboutStationOpole(weatherData))
// //589
// //590
// //591
// //592
//
// function getNameStationById(id){
//     function inner(data){
//         return data.filter((st)=>parseInt(st.id_stacji) === id).map((st)=>st.stacja)
//     }
//     return inner
// }
// const getStationById12530 = getNameStationById(12530)
// console.log(getStationById12530(weatherData))
// //593
// //594
// //595
// //596
//
// function getTimeMeasermentAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=> st.godzina_pomiaru)
//     }
//     return inner
// }
//
// const getTimeMeasermentFormStationOpole = getTimeMeasermentAtStation("Opole")
// console.log(getTimeMeasermentFormStationOpole(weatherData))
//
//
//
//
// //597
// //598
// //599
// //600
// function getDataMeasermentAtStation(station){
//     function inner(data){
//         return data.filter((st)=>st.stacja === station).map((st)=> st.data_pomiaru)
//     }
//     return inner
// }
//
// const getDataMeasermentFormStationOpole = getDataMeasermentAtStation("Opole")
// console.log(getDataMeasermentFormStationOpole(weatherData))
// //601
//
//
// function getNumberOfStationWithRecordedMeasurements(data){
//     return data.length
// }
// console.log(getNumberOfStationWithRecordedMeasurements(weatherData))



//602
//603
// const myFavoritePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         alert('Mine??o 10 sek')
//         resolve("Promis sie uda??!")
//     }, 10000)
//
//         setTimeout(()=>{
//         alert('Mine??o 10 sek')
//         reject("Promis sie nie uda??!")
//     }, 10000)
// })
//
// myFavoritePromise.then((resp)=>{
//     console.log(resp)
// })
//     .catch((err)=>{
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log("wkoncu!")
//     })

//604

// const url = "https://api.le-systeme-solaire.net/rest/bodies/"
//
// fetch(url).then(resp => resp.json()).then(data => {
//     const newArr = []
//     const moonArr = [];
//     for (let el of data.bodies) {
//         if (el.isPlanet === true) {
//             newArr.push(el)
//             if (el.englishName === "Neptune") {
//                 el.moons.forEach(el => moonArr.push(`"${el.moon}"`))
//             }
//
//         }
//     }
//     console.log(moonArr.join(", "))
//     console.log(newArr)
// })

const solar_system = [
    {
        alternativeName: "",
        aphelion: 69816900,
        argPeriapsis: 29.022,
        aroundPlanet: null,
        avgTemp: 440,
        axialTilt: 0.0352,
        bodyType: "Planet",
        density: 5.4291,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.2056,
        englishName: "Mercury",
        equaRadius: 2440.53,
        escape: 4250,
        flattening: 0,
        gravity: 3.7,
        id: "mercure",
        inclination: 7,
        isPlanet: true,
        longAscNode: 48.378,
        mainAnomaly: 174.796,
        mass: {massValue: 3.30114, massExponent: 23},
        meanRadius: 2439.4,
        moons: null,
        name: "Mercure",
        perihelion: 46001200,
        polarRadius: 2439.7,
        semimajorAxis: 57909050,
        sideralOrbit: 87.969,
        sideralRotation: 1407.6,
    },
    {
        alternativeName: "",
        aphelion: 108939000,
        argPeriapsis: 54.78,
        aroundPlanet: null,
        avgTemp: 737,
        axialTilt: 177.36,
        bodyType: "Planet",
        density: 5.243,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.0067,
        englishName: "Venus",
        equaRadius: 6051.8,
        escape: 10360,
        flattening: 0,
        gravity: 8.87,
        id: "venus",
        inclination: 3.39,
        isPlanet: true,
        longAscNode: 76.785,
        mainAnomaly: 50.115,
        mass: {massValue: 4.86747, massExponent: 24},
        meanRadius: 6051.8,
        moons: null,
        name: "V??nus",
        perihelion: 107477000,
        polarRadius: 6051.8,
        semimajorAxis: 108208475,
        sideralOrbit: 224.701,
        sideralRotation: -5832.5,
    },
    {
        alternativeName: "",
        aphelion: 152100000,
        argPeriapsis: 85.901,
        aroundPlanet: null,
        avgTemp: 288,
        axialTilt: 23.4393,
        bodyType: "Planet",
        density: 5.5136,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.0167,
        englishName: "Earth",
        equaRadius: 6378.1366,
        escape: 11190,
        flattening: 0.00335,
        gravity: 9.8,
        id: "terre",
        inclination: 0,
        isPlanet: true,
        longAscNode: 18.272,
        mainAnomaly: 358.617,
        mass: {massValue: 5.97237, massExponent: 24},
        meanRadius: 6371.0084,
        moons: [{moon: 'La Lune'}],
        name: "La Terre",
        perihelion: 147095000,
        polarRadius: 6356.8,
        semimajorAxis: 149598023,
        sideralOrbit: 365.256,
        sideralRotation: 23.9345,
    },
    {
        alternativeName: "",
        aphelion: 249200000,
        argPeriapsis: 286.231,
        aroundPlanet: null,
        avgTemp: 210,
        axialTilt: 25.19,
        bodyType: "Planet",
        density: 3.9341,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.0935,
        englishName: "Mars",
        equaRadius: 3396.19,
        escape: 5030,
        flattening: 0.00589,
        gravity: 3.71,
        id: "mars",
        inclination: 1.85,
        isPlanet: true,
        longAscNode: 49.667,
        mainAnomaly: 19.412,
        mass: {massValue: 6.41712, massExponent: 23},
        meanRadius: 3389.5,
        moons: [{moon: 'Phobos'}, {moon: 'De??mos'}],
        name: "Mars",
        perihelion: 206700000,
        polarRadius: 3376.2,
        semimajorAxis: 227939200,
        sideralOrbit: 686.98,
        sideralRotation: 24.6229
    },

    {
        alternativeName: "",
        aphelion: 816620000,
        argPeriapsis: 273.442,
        aroundPlanet: null,
        avgTemp: 165,
        axialTilt: 3.12,
        bodyType: "Planet",
        density: 1.3262,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.0489,
        englishName: "Jupiter",
        equaRadius: 71492,
        escape: 60200,
        flattening: 0.06487,
        gravity: 24.79,
        id: "jupiter",
        inclination: 1.304,
        isPlanet: true,
        longAscNode: 100.398,
        mainAnomaly: 20.02,
        mass: {massValue: 1.89819, massExponent: 27},
        meanRadius: 69911,
        moons: ["Io", "Europe", "Ganym??de", "Callisto", "Amalth??e", "Himalia", "??lara", "Pasipha??", "Sinop??", "Lysith??a",
            "Carm??", "Anank??", "L??da", "Th??b??", "Adrast??e", "M??tis", "Callirrho??", "Th??misto", "M??gaclit??", "Tayg??t??", "Chald??n??",
            "Harpalyk??", "Kalyk??", "Iocast??", "Erinom??", "Isono??", "Praxidyk??", "Autono??", "Thyon??", "Hermipp??", "Aitn??",
            "Eurydom??", "Euanth??", "Euporie", "Orthosie", "Spond??", "Cal??", "Pasith??e", "H??g??mone", "Mn??m??", "Aoed??",
            "Thelxino??", "Arch??", "Callichore", "H??lic??", "Carpo", "Euk??lad??", "Cyll??ne", "Cor??", "Hers??", "S/2003 J 2",
            "Euph??m??", "S/2003 J 4", "Eir??n??", "S/2003 J 9", "S/2003 J 10", "S/2003 J 12", "Philophrosyne", "S/2003 J 16",
            "S/2003 J 18", "S/2003 J 19", "S/2003 J 23", "Dia", "S/2010 J 1", "S/2010 J 2", "S/2011 J 1", "S/2011 J 2", "S/2017 J 1",
            "S/2016 J 1", "Val??tudo", "S/2017 J 2", "S/2017 J 3", "Pandia", "S/2017 J 5", "S/2017 J 6", "S/2017 J 7", "S/2017 J 8",
            "S/2017 J 9", "Ersa", "S/2003 J 24"],
        name: "Jupiter",
        perihelion: 740379835,
        polarRadius: 66854,
        semimajorAxis: 778340821,
        sideralOrbit: 4332.589,
        sideralRotation: 9.925
    },
    {
        alternativeName: "",
        aphelion: 1503509229,
        argPeriapsis: 336.178,
        aroundPlanet: null,
        avgTemp: 134,
        axialTilt: 26.73,
        bodyType: "Planet",
        density: 0.6871,
        dimension: "",
        discoveredBy: "",
        discoveryDate: "",
        eccentricity: 0.0565,
        englishName: "Saturn",
        equaRadius: 60268,
        escape: 36090,
        flattening: 0.09796,
        gravity: 10.44,
        id: "saturne",
        inclination: 2.485,
        isPlanet: true,
        longAscNode: 113.759,
        mainAnomaly: 317.02,
        mass: {massValue: 5.68336, massExponent: 26},
        meanRadius: 58232,
        moons: ["Mimas", "Encelade", "T??thys", "Dion??", "Rh??a", "Titan", "Hyp??rion", "Japet", "Ph??b??", "Janus", "Epim??th??e",
            "H??l??ne", "T??lesto", "Calypso", "Atlas", "Prom??th??e", "Pandore", "Pan", "Ymir", "Paaliaq", "Tarvos", "Ijiraq",
            "Suttungr", "Kiviuq", "Mundilfari", "Albiorix", "Skathi", "Erriapo", "Siarnaq", "Thrymr", "Narvi", "M??thone",
            "Pall??ne", "Pollux", "Daphnis", "Aegir", "Bebhionn", "Bergelmir", "Bestla", "Farbauti", "Fenrir", "Fornjot",
            "Hati", "Hyrrokkin", "Kari", "Loge", "Skoll", "Surtur", "Anth??", "Jarnsaxa", "Greip", "Tarqeq", "??g??on",
            "S/2004 S 7", "S/2004 S 12", "S/2004 S 13", "S/2004 S 17", "S/2006 S 1", "S/2006 S 3", "S/2007 S 2", "S/2007 S 3",
            "S/2009 S 1", "S/2004 S 22", "S/2004 S 21", "S/2004 S 20", "S/2004 S 23", "S/2004 S 24", "S/2004 S 25",
            "S/2004 S 26", "S/2004 S 27", "S/2004 S 28", "S/2004 S 29", "S/2004 S 30", "S/2004 S 31", "S/2004 S 32",
            "S/2004 S 33", "S/2004 S 34", "S/2004 S 35", "S/2004 S 36", "S/2004 S 37", "S/2004 S 38", "S/2004 S 39"],
        name: "Saturne",
        perihelion: 1349823615,
        polarRadius: 54364,
        semimajorAxis: 1426666422,
        sideralOrbit: 10759.22,
        sideralRotation: 10.656,
    },
    {
        alternativeName: "",
        aphelion: 3006318143,
        argPeriapsis: 98.862,
        aroundPlanet: null,
        avgTemp: 76,
        axialTilt: 97.77,
        bodyType: "Planet",
        density: 1.27,
        dimension: "",
        discoveredBy: "William Herschel",
        discoveryDate: "13/03/1781",
        eccentricity: 0.0457,
        englishName: "Uranus",
        equaRadius: 25559,
        escape: 21380,
        flattening: 0.02293,
        gravity: 8.87,
        id: "uranus",
        inclination: 0.772,
        isPlanet: true,
        longAscNode: 73.967,
        mainAnomaly: 142.2386,
        mass: {massValue: 8.68127, massExponent: 25},
        meanRadius: 25362,
        moons: ["Ariel", "Umbriel", "Titania", "Ob??ron", "Miranda", "Cord??lia", "Oph??lie", "Bianca", "Cressida", "Desd??mone",
            "Juliette", "Portia", "Rosalinde", "Belinda", "Puck", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano",
            "Trinculo", "Francisco", "Margaret", "Ferdinand", "Perdita", "Mab", "Cupid"],
        name: "Uranus",
        perihelion: 2734998229,
        polarRadius: 24973,
        semimajorAxis: 2870658186,
        sideralOrbit: 30685.4,
        sideralRotation: -17.24
    },
    {
        alternativeName: "",
        aphelion: 4537039826,
        argPeriapsis: 256.932,
        aroundPlanet: null,
        avgTemp: 55,
        axialTilt: 28.3,
        bodyType: "Planet",
        density: 1.638,
        dimension: "",
        discoveredBy: "Urbain Le Verrier, John Couch Adams, Johann Galle",
        discoveryDate: "23/09/1846",
        eccentricity: 0.0113,
        englishName: "Neptune",
        equaRadius: 24764,
        escape: 23560,
        flattening: 0.01708,
        gravity: 11.15,
        id: "neptune",
        inclination: 1.769,
        isPlanet: true,
        longAscNode: 131.823,
        mainAnomaly: 256.228,
        mass: {massValue: 1.02413, massExponent: 26},
        meanRadius: 24622,
        moons: ["Triton", "N??re??de", "Na??ade", "Thalassa", "Despina", "Galat??e", "Larissa", "Prot??e", "Halim??de", "Psamath??e",
            "Sao", "Laom??die", "N??so", "Hippocampe"],
        name: "Neptune",
        perihelion: 4459753056,
        polarRadius: 24341,
        semimajorAxis: 4498396441,
        sideralOrbit: 60189,
        sideralRotation: 16.11
    }

]

//605
//606
//607
//608
//
// function getPlanetsWithAvreageTemperatureInKGraterThan(tempInKelvins){
//     function inner(data){
//         return data.filter((planet)=>planet.avgTemp > tempInKelvins).map((planet)=>planet.englishName)
//     }
//     return inner
// }
// const getNamePlanetsWithTemperaturGreaterThan100K = getPlanetsWithAvreageTemperatureInKGraterThan(100)
// console.log(getNamePlanetsWithTemperaturGreaterThan100K(solar_system))
//
// //609
// //610
// //611
// //612
//
//
// function getPlanetsAvreageTemperatureInCelcius(planetName){
//     function inner(data){
//         return data.filter((planet)=>planet.englishName === planetName).map((planet)=>planet.avgTemp- 273.15)
//     }
//     return inner
// }
// const getAvreageTempInCelciusFromEarth = getPlanetsAvreageTemperatureInCelcius("Earth")
// console.log(getAvreageTempInCelciusFromEarth(solar_system))
//
// //613
// //614
// //615
// //616
//
// function getPlanetWithMoreMoonsThenNumber(number){
//     function inner(data){
//         return data.filter((planet)=>planet.moons? planet.moons.length > number : 0).map((planet)=>planet.englishName)
//     }
//     return inner
// }
//
// const planetsWithMoonsMoreThanOne = getPlanetWithMoreMoonsThenNumber(1);
// console.log(planetsWithMoonsMoreThanOne(solar_system))
// //617
// //618
// //619
// //620
//
//
//
// function getDifferenceAphelionAndPerihelion(planeta){
//     return (planeta.aphelion - planeta.perihelion)
// }
//
// function getPlnaetNameWithBiggestDifferenceAphelionAndPerihelion(data){
//     return data.map((pl)=> [pl.englishName, getDifferenceAphelionAndPerihelion(pl)]).sort((a,b)=> b[1] - a[1])[0]
// }
// console.log(getPlnaetNameWithBiggestDifferenceAphelionAndPerihelion(solar_system))
//
//
//
//
// //621
// //622
// //623
// //624
// //625
// //626
//
// function getNamesPlanetsWithDensityGreaterThan(planetName){
//     function inner(data){
//         const planetDensity = data.filter((pl)=>pl.englishName === planetName).map((pl)=>pl.density)
//         return data.filter((pl)=>pl.density > planetDensity).map((pl)=>pl.englishName)
//     }
//     return inner
// }
//
// const planetsWithDensityGreaterThanUranus = getNamesPlanetsWithDensityGreaterThan("Uranus")
// console.log(planetsWithDensityGreaterThanUranus(solar_system))
//
// //627
// //628
// //629
// //630
// //631
// //632
//
//
// function getNamesPlanetsWithInclinationGreaterThan(planetName){
//     function inner(data){
//         const planetInclination = data.filter((pl)=>pl.englishName === planetName).map((pl)=>pl.inclination)
//         return data.filter((pl)=>pl.inclination > planetInclination).map((pl)=>pl.englishName)
//     }
//     return inner
// }
//
// const planetsWithInclinationGreaterThanMars = getNamesPlanetsWithInclinationGreaterThan("Mars")
// console.log(planetsWithInclinationGreaterThanMars(solar_system))
//
// //633
// //634
// //635
// //636
// //637
// //638
//
// function getNamesPlanetsWithGravityGreaterThan(planetName){
//     function inner(data){
//         const planetGravity = data.filter((pl)=>pl.englishName === planetName).map((pl)=>pl.gravity)
//         return data.filter((pl)=>pl.gravity > planetGravity).map((pl)=>pl.englishName)
//     }
//     return inner
// }
//
// const planetsWithGravityGreaterThanEarth = getNamesPlanetsWithGravityGreaterThan("Earth")
// console.log(planetsWithGravityGreaterThanEarth(solar_system))
//
//
// //639
// //640
// //641
// //642
// //643
// //644
//
// function getPlanetWithSideralRotationBiggerThan(planetName){
//     function inner(data){
//         const planetSideralRotation = data.filter((pl)=>pl.englishName === planetName).map((pl)=>pl.sideralRotation)
//         return data.filter((pl)=>pl.sideralRotation > planetSideralRotation).map((pl)=>pl.englishName)
//     }
//     return inner
// }
//
// const planetsWithSideralRotationBiggerThanEarth = getPlanetWithSideralRotationBiggerThan("Earth")
// console.log(planetsWithSideralRotationBiggerThanEarth(solar_system))
// //645
// //646
// //647
// //648
//
// function getInfoAboutDiscovery(planet){
//     function inner(data){
//         return data.filter((pl)=> pl.englishName === planet).map((pl)=>pl.discoveredBy? `Planet ${pl.englishName} discoverd by: ${pl.discoveredBy} in ${pl.discoveryDate}`: "No info")
//     }
//     return inner
// }
//
// const getInfoAboutNeptune =  getInfoAboutDiscovery("Neptune")
// console.log(getInfoAboutNeptune(solar_system))
// //649
// //650
// //651
//
// function getAverageTempPlanets(data){
//     return data.map((pl)=>pl.avgTemp).reduce((acc, cur)=> acc+cur)/data.length
// }
// console.log(getAverageTempPlanets(solar_system))
// //652
// //653
// //654
//
// function getAveragDensityOfPlanets(data){
//     return data.map((pl)=>pl.density).reduce((acc, cur)=> acc+cur)/data.length
// }
// console.log(getAveragDensityOfPlanets(solar_system))
//
// //655
// //656
// //657
//
// function getAverageNumOfMoonsPlanets(data){
//     return data.map((pl)=>pl.moons? pl.moons.length: 0).reduce((acc, cur)=> acc+cur)/data.length
// }
// console.log(getAverageNumOfMoonsPlanets(solar_system))
//
//
// //658
// //659
// //660
//
// function getAverageGravityPlanets(data){
//     return data.map((pl)=>pl.gravity).reduce((acc, cur)=> acc+cur)/data.length
// }
// console.log(getAverageGravityPlanets(solar_system))

//661
//662
//663
//664
// function findPlanetOwnTheMoon(moonName){
//     function inner(data){
//         return data.filter((pl)=> pl.moons ? pl.moons.includes(moonName): 0).map((pl)=>pl.englishName)
//     }
//     return inner
// }
//
// const planetOwnCallisto = findPlanetOwnTheMoon("Callisto")
// console.log(planetOwnCallisto(solar_system))

//665
//666
//667
//668

// function getNamePlanetHighestAvgTemp(arr){
//     const highestAvgTemp =  arr.reduce((acc, cu)=> cu.avgTemp > acc? cu.avgTemp : acc, 0)
//     return arr.filter((pl)=>pl.avgTemp === highestAvgTemp).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetHighestAvgTemp(solar_system))
//
//
// //669
// //670
// //671
// //672
//
// function getNamePlanetLowestAvgTemp(arr){
//     const lowestAvgTemp =  arr.reduce((acc, cu)=> cu.avgTemp < acc? cu.avgTemp : acc, 1000)
//     return arr.filter((pl)=>pl.avgTemp === lowestAvgTemp).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetLowestAvgTemp(solar_system))
//
//
//
// //673
// //674
// //675
// //676
//
// function getNamePlanetLowestGravity(arr){
//     const lowestGravity =  arr.reduce((acc, cu)=> cu.gravity < acc? cu.gravity : acc, 1000)
//     return arr.filter((pl)=>pl.gravity === lowestGravity).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetLowestGravity(solar_system))
//
// //677
// //678
// //679
// //680
//
// function getNamePlanetHighestGravity(arr){
//     const highestGravity =  arr.reduce((acc, cu)=> cu.gravity > acc? cu.gravity : acc, 0)
//     return arr.filter((pl)=>pl.gravity === highestGravity).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetHighestGravity(solar_system))
//
// //681
// //682
// //684
// //685
//
// function getNamePlanetHighestDensity(arr){
//     const highestDensity =  arr.reduce((acc, cu)=> cu.density > acc? cu.density : acc, 0)
//     return arr.filter((pl)=>pl.density === highestDensity).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetHighestDensity(solar_system))
//
// //686
// //687
// //688
// //689
//
// function getNamePlanetLowestDensity(arr){
//     const lowestDensity =  arr.reduce((acc, cu)=> cu.density < acc? cu.density : acc, 10000)
//     return arr.filter((pl)=>pl.density === lowestDensity).map((pl)=>pl.englishName)
// }
// console.log(getNamePlanetLowestDensity(solar_system))
//
// //690
// //691
// //692
// //693
//
// function getAvgTempOnPlanet(planet){
//     function inner(data){
//         return data.filter((pl)=>pl.englishName===planet).map((pl)=>pl.avgTemp)
//     }
//     return inner
// }
// const getAverageTempOnPluton = getAvgTempOnPlanet("Jupiter")
// console.log(getAverageTempOnPluton(solar_system))
//
// //694
// //695
// //696
// //697
// function getDensityPlanet(planet){
//     function inner(data){
//         return data.filter((pl)=>pl.englishName===planet).map((pl)=>pl.density)
//     }
//     return inner
// }
// const densityOfJupiter = getDensityPlanet("Jupiter")
// console.log(densityOfJupiter(solar_system))
//
//
// //698
// //699
// //700
// //701
//
// function getGravityPlanet(planet){
//     function inner(data){
//         return data.filter((pl)=>pl.englishName===planet).map((pl)=>pl.gravity)
//     }
//     return inner
// }
// const gravityOfJupiter = getGravityPlanet("Jupiter")
// console.log(gravityOfJupiter(solar_system))
//
// //702
// //703
// //704
// //705
//
// function getperihelionPlanet(planet){
//     function inner(data){
//         return data.filter((pl)=>pl.englishName===planet).map((pl)=>pl.perihelion)
//     }
//     return inner
// }
// const perihelionOfJupiter = getperihelionPlanet("Jupiter")
// console.log(perihelionOfJupiter(solar_system))

//706

// fetch("https://api.punkapi.com/v2/beers").then((resp)=>resp.json())
//     .then(data=> {
//             const arr = [];
//             for (let obj of data) {
//                 arr.push(obj)
//             }
//             console.log(arr)
//         }
//     )


const beers = [
    {
        abv: 4.5,
        attenuation_level: 75,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        contributed_by: "Sam Mason",
        description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        ebc: 20,
        first_brewed: "09/2007",
        food_pairing:['Spicy chicken tikka masala', 'Grilled chicken quesadilla', 'Caramel toffee cake'],
        ibu: 60,
        id: 1,
        name: "Buzz",
        ph: 4.4,
        srm: 10,
        tagline: "A Real Bitter Experience.",
        target_fg: 1010,
        target_og: 1044,
        volume: {value: 20, unit: 'litres'}
    },
    {
        abv: 6.3,
        attenuation_level: 80,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
        contributed_by: "Ali Skinner",
        description: "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
        ebc: 30,
        first_brewed: "09/2013",
        food_pairing:['Spicy crab cakes', 'Spicy cucumber and carrot Thai salad', 'Sweet filled dumplings'],
        ibu: 55,
        id: 4,
        name: "Pilsen Lager",
        ph: 4.4,
        srm: 15,
        tagline: "Unleash the Yeast Series.",
        target_fg: 1012,
        target_og: 1060,
        volume: {value: 20, unit: 'litres'},

    }, {
        abv: 4.5,
        attenuation_level: 72.8,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.",
        contributed_by: "Sam Mason",
        description: "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",
        ebc: 62,
        first_brewed: "02/2010",
        food_pairing:['Pastrami', 'Swiss and horseradish sandwich', 'Sharp cheddar cheese and onion/ raisin chutney', 'Peanut brittle'],
        ibu: 42,
        id: 14,
        name: "Alpha Dog",
        ph: 4.4,
        srm: 31,
        tagline: "Existential Red Ale.",
        target_fg: 1025,
        target_og: 1046,
        volume: {value: 20, unit: 'litres'},

}, {
        abv: 8,
        attenuation_level: 86,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "After primary fermentation is complete, rack off into a secondary fermeter and add the oak chips to replicate the authentic Islay barrel experience.",
        contributed_by: "Sam Mason ",
        description: "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.",
        ebc: 12,
        first_brewed: "12/2007",
        food_pairing:['Oysters', 'Hickory smoked ham', 'Rocky Road'],
        ibu: 60,
        id: 23,
        name: "Storm",
        ph: 4.4,
        srm: 6,
        tagline: "Islay Whisky Aged IPA.",
        target_fg: 1010,
        target_og: 1082,
        volume: {value: 20, unit: 'litres'}
    },{
        abv: 4.7,
        attenuation_level: 79,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.",
        contributed_by: "Sam Mason",
        description: "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.",
        ebc: 8,
        first_brewed: "10/2008",
        food_pairing:['Poached sole fillet with capers', 'Summer fruit salad', 'Banana split'],
        ibu: 45,
        id: 25,
        name: "Bad Pixie",
        ph: 4.4,
        srm: 4,
        tagline: "Spiced Wheat Beer.",
        target_fg: 1010,
        target_og: 1047,
        volume: {value: 20, unit: 'litres'},
    },{
        abv: 55,
        attenuation_level: 100,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "You'll have to get this one all the way down to -70??C. Taxidermy is not optional.",
        contributed_by: "Sam Mason",
        description: "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.",
        ebc: null,
        first_brewed: "06/2011",
        food_pairing:['Roasted wood pigeon with black pudding', 'Pan seared venison fillet with juniper sauce', 'Apricot coconut cake'],
        ibu: null,
        id: 24,
        name: "The End Of History",
        ph: 4.4,
        srm: null,
        tagline: "The World's Strongest Beer.",
        target_fg: 1000,
        target_og: 1112,
        volume: {value: 20, unit: 'litres'},
    },{
        abv: 5.2,
        attenuation_level: 88.9,
        boil_volume: {value: 25, unit: 'litres'},
        brewers_tips: "Source some really good heather honey to get the right spicy esters in the beer.",
        contributed_by: "Sam Mason",
        description: "Re-brewed as a spring seasonal, this beer ??? which appeared originally as an Equity Punk shareholder creation ??? retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
        ebc: 15,
        first_brewed: "05/2013",
        food_pairing:['Mussels with a garlic and herb sauce', 'Crab melt sandwich', 'Shortbread cookies'],
        ibu: 38,
        id: 6,
        name: "Electric India",
        ph: 4.4,
        srm: 7.5,
        tagline: "Vibrant Hoppy Saison.",
        target_fg: 1005,
        target_og: 1045,
        volume: {value: 20, unit: 'litres'},
    }
]


// //707
// //708
// //709
// //710
//
// function getBeersWithABVMoreThan(value){
//     function inner(data){
//         return data.filter((beer)=> beer.abv > value).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const strongBeer = getBeersWithABVMoreThan(10);
// console.log(strongBeer(beers))
// //711
// //712
// //713
// //714
//
// function getBeersWithEBCMoreThan(value){
//     function inner(data){
//         return data.filter((beer)=> beer.ebc > value).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const darkBeer = getBeersWithEBCMoreThan(19);
// console.log(darkBeer(beers))
//
//
// //715
// //716
// //717
// //718
// function getBeersWithIBUMoreThan(value){
//     function inner(data){
//         return data.filter((beer)=> beer.ibu > value).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const bitterBeer = getBeersWithIBUMoreThan(25);
// console.log(bitterBeer(beers))
//
//
// //719
// //720
// //721
// //722
//
// function getBeersWithPHLessThan(value){
//     function inner(data){
//         return data.filter((beer)=> beer.ph < value).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const phLessThan4point5 = getBeersWithPHLessThan(4.5);
// console.log(phLessThan4point5(beers))
//
//
//
// //723
// //724
// //725
// //726
//
// function getBeersContributedBy(company){
//     function inner(data){
//         return data.filter((beer)=> beer.contributed_by === company).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const contributedByAliSkinner = getBeersContributedBy("Ali Skinner");
// console.log(contributedByAliSkinner(beers))
//
// //727
// //728
// //729
// //730
//
// function getBeersFirstBrewedBeforYear(year){
//     function inner(data){
//         return data.filter((beer)=> parseInt(beer.first_brewed.split("/")[1]) <year).map((beer)=>beer.name)
//     }
//     return inner
// }
//
// const firstBrewedBefore2012 = getBeersFirstBrewedBeforYear(2010)
// console.log(firstBrewedBefore2012(beers))
//
// //731
// //732
// //733
// //734
//
// function getBeersWithWordInTagLine(word){
//     function inner(data){
//         return data.filter((beer)=> beer.tagline.split(" ").includes(word)).map((b)=>b.name)
//     }
//     return inner
// }
//
// const beersWihBitterInTagLine = getBeersWithWordInTagLine("Bitter")
// console.log(beersWihBitterInTagLine(beers))
//
//
// //735
// //736
// //737
//
//
// function getAAverageABVParameter(data){
//     return data.reduce((acc, cu)=>acc + cu.abv, 0)/data.length
// }
// console.log(getAAverageABVParameter(beers))
// //737
// //738
// function getAAverageEBCParameter(data){
//     return data.reduce((acc, cu)=>acc + cu.ebc, 0)/data.length
// }
// console.log(getAAverageEBCParameter(beers))
//
//
// //739
// //740
//
// function getAAverageIBUParameter(data){
//     return data.reduce((acc, cu)=>acc + cu.ibu, 0)/data.length
// }
// console.log(getAAverageIBUParameter(beers))
//
// //741
// //742
// //743
// //744
// //745
// //746
// function getBeersWithAlcoholByVolumeGreaterThanInBeer(beer){
//
//     function inner(data){
//         const beerToCompare =data.filter((b)=>b.name === beer).map((b)=>b.abv)
//         return data.filter((beer)=> beer.abv > beerToCompare).map((b)=>b.name)
//     }
//     return inner
// }
//
// const beersWithMoreAlcoholThanStorm = getBeersWithAlcoholByVolumeGreaterThanInBeer("Storm")
// console.log(beersWithMoreAlcoholThanStorm(beers))
//
// //747
// //748
// //749
// //750
// //751
// //752
//
// function getBeersDarkerThan(beer){
//
//     function inner(data){
//         const beerToCompare =data.filter((b)=>b.name === beer).map((b)=>b.ebc)
//         return data.filter((beer)=> beer.ebc > beerToCompare).map((b)=>b.name)
//     }
//     return inner
// }
//
// const beersDarkerThanStorm = getBeersDarkerThan("Storm")
// console.log(beersDarkerThanStorm(beers))
//
// //753
// //754
// //755
// //756
// //757
// //758
//
// function getBeersMoreBitterThanBeer(beer){
//
//     function inner(data){
//         const beerToCompare =data.filter((b)=>b.name === beer).map((b)=>b.ibu)
//         return data.filter((beer)=> beer.ibu > beerToCompare).map((b)=>b.name)
//     }
//     return inner
// }
//
// const beersMoreBitterThanAlphaDog = getBeersMoreBitterThanBeer("Alpha Dog")
// console.log(beersMoreBitterThanAlphaDog(beers))
//
//
// //759
// //760
// //761
// //762
// //763
// //764
//
// function getBeersBrewedBeforeBeer(beer){
//
//     function inner(data){
//         const beerToCompare =data.filter((b)=>b.name === beer).map((b)=>b.first_brewed.split("/")[1])
//         return data.filter((beer)=> beer.first_brewed.split("/")[1] > beerToCompare).map((b)=>b.name)
//     }
//     return inner
// }
//
// const beersBrewedBeforeAlphaDog = getBeersBrewedBeforeBeer("Alpha Dog")
// console.log(beersBrewedBeforeAlphaDog(beers))


//765
//766
//767
//768
function findBeerWithHighestABV(data){
    const highestABV =  data.reduce((acc, cu)=>acc < cu.abv? cu.abv:acc , 0)
    return data.filter((b)=> b.abv ===highestABV).map((b)=>b.name)
}
console.log(findBeerWithHighestABV(beers))

//769
//770
//771
//772

function findBeerWithHighestEBC(data){
    const highestEBC =  data.reduce((acc, cu)=>acc < cu.ebc? cu.ebc:acc , 0)
    return data.filter((b)=> b.ebc ===highestEBC).map((b)=>b.name)
}
console.log(findBeerWithHighestEBC(beers))

//773
//774
//775
//776

function findBeerWithHighestIBU(data){
    const highestIBU =  data.reduce((acc, cu)=>acc < cu.ibu? cu.ibu:acc , 0)
    return data.filter((b)=> b.ibu ===highestIBU).map((b)=>b.name)
}
console.log(findBeerWithHighestIBU(beers))

//777
//778
//779
//780

function findBeerWithLowestABV(data){
    const lowestABV =  data.reduce((acc, cu)=>acc > cu.abv? cu.abv:acc , 1000)
    return data.filter((b)=> b.abv ===lowestABV).map((b)=>b.name)
}
console.log(findBeerWithLowestABV(beers))

//781
//782
//783
//784

function findBeerWithLowestEBC(data){
    const lowestEBC =  data.reduce((acc, cu)=>acc > cu.ebc? cu.ebc:acc , 1000)
    return data.filter((b)=> b.ebc ===lowestEBC).map((b)=>b.name)
}
console.log(findBeerWithLowestEBC(beers))

//785
//786
//787
//788

function findBeerWithLowestIBU(data){
    const lowestIBU =  data.reduce((acc, cu)=>acc > cu.ibu? cu.ibu:acc , 1000)
    return data.filter((b)=> b.ibu ===lowestIBU).map((b)=>b.name)
}
console.log(findBeerWithLowestIBU(beers))

//789
//790
//791
//792
//793
//794

function oldestBeer(data){
    const oldestDate =  data.reduce((acc, cu)=>acc > parseInt(cu.first_brewed.split("/")[1])? parseInt(cu.first_brewed.split("/")[1]) :acc , 2022)
    console.log(oldestDate)
    const oldestMonth =  data.filter((b)=> parseInt(b.first_brewed.split("/")[1]) === oldestDate).reduce((acc, cu)=> acc > parseInt(cu.first_brewed.split("/")[0])? parseInt(cu.first_brewed.split("/")[0]): 12)
    console.log(oldestMonth)
     return data.filter((b)=>parseInt(b.first_brewed.split("/")[0]) ===oldestMonth &&  parseInt(b.first_brewed.split("/")[1]) === oldestDate).map(b=>b.name)
}
console.log(oldestBeer(beers))


//795
//796
//797
//798

function getFoodPairingToBeer(beerName){
    function inner(data){
        return data.filter((beer)=> beer.name === beerName).map(b=>b.food_pairing).join(", ")
    }
    return inner
}

const foodPairingToElectricIndia = getFoodPairingToBeer("Electric India")
console.log(foodPairingToElectricIndia(beers))

//799
//800
//801
//802

function findBeerPairingToFood(foodName){
    function inner(data){
        return data.filter((b)=>b.food_pairing.includes(foodName)).map(b=>b.name)
    }
    return inner
}
const beerPairingToCrabMeltSandwitch = findBeerPairingToFood('Crab melt sandwich')
console.log(beerPairingToCrabMeltSandwitch(beers))

//803
//804
//805
//806

class Machine{
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
        this.isWorking = false;
    }
    turnOn(){
        this.isWorking = true;
        console.log("It is working")

}
    turnOff(){
        this.isWorking = false;
        console.log("It is not working")
    }


}

class WashingMachine extends Machine{
    constructor(weight, height, loadingWeight) {
        super(weight, height);
        this.loadingWeight = loadingWeight
    }
    programLaundry(){
        if(this.isWorking === true){
            console.log("Programuje pranie")
        }else{
            console.log("Najpierw w????cz pralk??")
        }
    }
    additionalRinse(){
        if(this.isWorking === true){
            console.log("Dodatkowe p??ukanie")
        }else{
            console.log("Najpierw w????cz pralk??")
        }
    }
}


const washinMachine1 = new WashingMachine(400, 130, 8)
washinMachine1.programLaundry()
washinMachine1.turnOn()
washinMachine1.programLaundry()
washinMachine1.additionalRinse()
washinMachine1.turnOff()
//807
//808
//809
//810
//811
//812
//813
//814
//815
//816
//817
//818
//819
//820
//821
//822
//823
//824
//825
//826
//827
//828
//829
//830
//831
//832
//833
//834
//835
//836
//837
//838
//839
//840
//841
//842
//843
//844
//845
//846
//847
//848
//849
//850
//851
//852
//853
//854
//855
//856
//857
//858
//859
//860
//861
//862
//863
//864
//865
//866
//867
//868
//869
//870

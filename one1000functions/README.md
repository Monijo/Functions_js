#Closure

-dostep do zmiennej spoza aktualnie wykonywanego zasiegu.

##Creating:
-2 functions(outer, inner)
-outer musi zwracac deklaracje funkcjii inner
-funkcja inner musi wykorzystywac cos(zmienne, deklaracje funkcji i klas) z funkcjii outer


##Pros & Cons:
-persistence :)
-memory leak-przypadkowe dopisanie do closure czegos duzego


##Programowanie asynchroniczne
1. callback->uzywane do obslugi asynchronicznosci
2. Promise 2015
3. Generators and Coroutines - obsluga
4. Async/await - syntatic sugar-nowa nazwa dla funkcjonalnosci ktora juz jest(Promise i )


```javascript

function callback(element=1, i=0, array=[1,2,3]){
    return 'New value'
}


const newArray = [1,2,3].map(callback)
//['New value', 'New value', 'New value']


const initialValue = 0;

const callback_=(accumulator=array[0], cuurentElement=array[1], id=0, array=[1,2,3])=>{
    const newAccumulator = acumulator+currentElement
    return newAccumulator
}
const newAggregationValue = [1,2,3].reduce(callback_, initialValue)

```


## OOP object oriented programing

1. Abstraction-ukrywanie złożonej logiki w latwo dostepnym , ktorych mozna reuzywac.
2. Inheritance - kopiowanie puli metod rodzica
3. Polymorphizm - metody o tej samej nazwie moze miec rozne implementacje??
   1. Encapsulation- ograniczenia dostepu. 
   a. Acces modifiers:
   -private
   - protected
   - public
   - read only
### SOLID:
   
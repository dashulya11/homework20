// // every(); все елементы массива больше данного числа true/false
console.log('every()');
const arrayEvery1 = [11, 9, 12, 13];
const arrayEvery2 = [11, 10, 12, 13];
function every(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (!callback(array[i], i, array)) return false;
    }
    return true;
}
console.log(every(arrayEvery1, (item, i, array) => item >= 10));//false
console.log(every(arrayEvery2, (item, i, array) =>  item >= 10));//true

//some() яв. ли какой-либо элемент массива четным true/false
console.log('some()');
const arraySome1 = [11, 9, 11, 13];
const arraySome2 = [11, 10, 8, 15];
function some(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) return true;
    }
    return false;
}
console.log(some(arraySome1, (item, i, array) => item % 2 === 0));//false
console.log(some(arraySome2, (item, i, array) =>  item % 2 === 0));//true

//lastIndexOf поиск елемента по массиву с конца
console.log('lastIndexOf()');
const arr = ['djess','dasha', 'olya', 'vova','dasha'];
function lastIndexOf(arr, item, fromIndex = null) {
    if(fromIndex === null) fromIndex = arr.length -1;
    for (let i = fromIndex; i >= 0; i--){
        if (arr[i] === item) return i;
    }
    return -1;
}
console.log(lastIndexOf(arr, 'dasha'));//4

//IndexOf поиск елемента по массиву сначала
console.log('IndexOf()');
const arr2 = [1, 2, 3, 4, 3, 1];
function IndexOf(arr, item, fromIndex = null) {
    if (fromIndex >= arr.length - 1) {
        return -1;
    } 
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] === item) return i;
    }
    return -1;
    }
console.log(IndexOf(arr2, 4));//3

//find()
console.log('find()');
const arr3 = [1, 26, 3, 4];
const arrDouble3 = [1, 3, 1, 7, 5, 11];

function findElement(array) {
    for (let i = 0; i <= array.length; i++){
        if (evenNumbers(array[i], i, array)) return array[i];
    }
    return undefined;
}
console.log(findElement(arr3,evenNumbers));//22
console.log(findElement(arrDouble3,evenNumbers));//undefined

//findIndex поиск четного числа в массиве вывод индекса
console.log('findIndex()');
const arr4 = [1, 21, 24, 4];
const arrDouble4 = [1, 3, 1, 7, 5, 11];
function evenNumbers(element,index,array) {
    return element % 2 === 0;
}
function findIndex(array) {
    for (let i = 0; i <= array.length; i++){
        if (evenNumbers(array[i], i, array)) return i;
    }
    return -1;
}
console.log(findIndex(arr4,evenNumbers));//2
console.log(findIndex(arrDouble4,evenNumbers));//-1


//includes
console.log('includes()');
const pets = ['cat', 'dog', 'bird'];
const animal = ['tiger', 'dog', 'dogs'];
function lookForPet(element,array) {
    for (let i = 0; i <= array.length; i++){
        if (array[i] === element) return true;
    }
    return false;
}
console.log(lookForPet('dog', pets));//true
console.log(lookForPet('cat', animal));//false

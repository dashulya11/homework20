// every(); все елементы массива больше данного числа true/false
console.log('every()');
const arr6 = [1,10,15];
const arrDouble6 = [10, 12, 50];
function everyCheck(currentValue, array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] >= currentValue) {
            return true;
        }
        return false;
    }
}
console.log(everyCheck(10, arr6));//false
console.log(everyCheck(10, arrDouble6));//true

//some() яв. ли какой-либо элемент массива четным true/false
console.log('some()');
const arr7 = [1,3,6,5,3,7];
const arrDouble7 = [1, 11, 1, 13, 5, 11];
function someElement(array) {
    for (let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}
console.log(someElement(arr7));//true
console.log(someElement(arrDouble7));//false

//lastIndexOf поиск елемента по массиву с конца
console.log('lastIndexOf()');
const arr = ['djess','dasha', 'olya', 'vova','dasha'];
function lastIndexOf(arr, item, fromIndex = null) {
    fromIndex === null ? fromIndex = arr.length -1 : null;
    for (let i = fromIndex; i >= 0; i--){
        if (arr[i] === item) return i;
    }
    return -1;
    }
console.log(lastIndexOf(arr, 'dasha'));

//IndexOf поиск елемента по массиву сначала
console.log('IndexOf()');
const arr2 = [1, 2, 3, 4, 3, 1];
function IndexOf(arr, item) {
        for (let i = 0; i <= arr.length; i++){
            if (arr[i] === item) return i;
        }
        return -1;
    }
console.log(IndexOf(arr2, 1));

//find()
console.log('find()');
const arr3 = [1, 22, 3, 4];
const arrDouble3 = [1, 3, 1, 7, 5, 11];
function findElement(array) {
    for (let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 0) return array[i];
        
    }
    return undefined;
}
console.log(findElement(arr3));//22
console.log(findElement(arrDouble3));//undefined

//findIndex поиск четного числа в массиве вывод индекса
// console.log('findIndex()');
const arr4 = [1, 21, 24, 4];
const arrDouble4 = [1, 3, 1, 7, 5, 11];
function findIndex(array) {
    for (let i = 0; i <= array.length; i++){
        if (array[i] % 2 === 0) return i;
        
    }
    return -1;
}
console.log(findIndex(arr4));//2
console.log(findIndex(arrDouble4));//-1


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
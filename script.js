// making the seconsfloor array
console.log("making the seconsfloor array");

console.log(makeTheArr(10));
console.log(makeTheArr(5));

function makeTheArr(valueOfSide){
    let arr = new Array(valueOfSide);

    for(let i = 0; i < valueOfSide; i++){
        arr[i] = new Array (valueOfSide);

        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] = Math.floor(Math.random()*10);
        }
    }

    return arr;
}


// compare sum of arrays
// Вернуть массив чума числовых значений которого больше

console.log('compare sum of arrays');

let arr1 = [3,4,5,6,3,5, "d"];
let arr2 = [3,4,5,6,3,18, "work"];


function compareArrays(firstArr, secondArr){
    let sumArr1 = 0;
    let sumArr2 = 0;

    firstArr.forEach(elem => {
        if(typeof elem == 'number'){
            sumArr1 += elem;
        }
    });

    secondArr.forEach(elem => {
        if(typeof elem == 'number'){
            sumArr2 += elem;
        }
    });

    if(sumArr1 > sumArr2){
        return firstArr;
    } else if(sumArr1 < sumArr2){
        return secondArr;
    } return "sum the same";
}


console.log(compareArrays(arr1, arr2));

// primitive calculator

console.log("Primitive calculator");

console.log(doMath(10,"*", 10));
console.log(doMath(NaN,"^", 10));
console.log(doMath(true,"^", 10));

function doMath(a, znak, b){

    if(typeof a != "number" || typeof b != 'number' || isNaN(a) || isNaN(b)){
        return "not valid data";
    }

    if(znak == "+"){
        return a+b;
    }
    if(znak == "-"){
        return a-b;
    }
    if(znak == "*"){
        return a*b;
    }
    if(znak == "/"){
        return a/b;
    }
    if(znak == "%"){
        return a%b;
    }
    if(znak == "^"){
        return a**b;
    }
}

// deleting extra things
//Удаление со строк символов, указаных в аргументе функции

console.log("deleting extra things");

let str = "Hellllllo world";
let arrOfExtr = ['l', 'd'];


function deleteExtraSym(str, arrOfExtraSym){
  let arrOfStr = '';
  arrOfStr = str.split("");
  let resultStr = "";

  for(let i = 0; i < arrOfStr.length; i++){

    for(let j = 0; j < arrOfExtraSym.length; j++){

      if(arrOfStr[i] == arrOfExtraSym[j]){
        delete arrOfStr[i];
      } 
    }
  }

  resultStr = arrOfStr.join('');
  console.log(resultStr);
}

deleteExtraSym(str, arrOfExtr);




//function predicat
//EXAMPLE returning all double items of array
console.log("Function predicat");

let values = [33, 2, 4, 3];

filter(predicat, values);

function filter(func, arr){
    let resultArr = [];

    for(let item of arr){
        if(func(item)){
            resultArr.push(item);
        }
    }
    console.log(resultArr);
}

function predicat(item){
    return item % 2 == 0;
}

// finding the middle of array
// написать функцию которая выводит в консоль средний элемент массива, если кол-во элементов массива четное - выводит два центральных 
console.log("finding the middle of array");



middle(values)
middle([2,3,4456,56,4]);

function middle(arr){
    if(arr.length%2 == 0){
        console.log(arr[(arr.length - 2)/2], arr[(arr.length - 2)/2 + 1]);
    } else {
        console.log(arr[(arr.length - 1)/2]);
    }
}

// Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с двумя аргументами числами.
console.log("new Function(primitive calc)")

console.log(doCalc(2,3, pow));
console.log(doCalc(8,3, mul));
console.log(doCalc(2,1234, sum));
console.log(doCalc(9,3, div));
console.log(doCalc(6));



function doCalc(num1, num2, func = null){
    if(num1 && num2){
        return func(num1, num2);
    } else {
        let arrOfOperands = [num1, num2];

        for(let i = 0; i < arrOfOperands.length; i++){
            if(arrOfOperands[i]){
                return factorial(arrOfOperands[i]);
            }
        }
    }
}

function pow(firstOperand, secondOperand){
    return Math.pow(firstOperand, secondOperand);
}

function mul(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}

function sum(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}

function div(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}

function factorial(num){
    let result = 1;

    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
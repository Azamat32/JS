//1 переменные

/*const firstname = 'Azamat'
    //const lastname = 'Tastemirov' //string
const isProgrammer = true //boolean
    //const age = 17 //number
const _ = 'private'
const dar4 = 5*/


//3 . Мутирование
//console.log('Имя человека :' + firstname + ',а возраст человека :' + age)
//alert('Имя человека :' + firstname + ',а возраст человека :' + age)
//console.log(age.toString())

////const lastName = prompt('Введите фамилию :')
////alert(firstname + ' ' + lastName)
//console.log(lastName)


// Операторы

//const currentYear = 2021
//const birthYEar = 2004

//const age = currentYear - birthYEar
//alert(age)

//const a = 10
//const b = 6
//let c = 44
//c += a
//console.log(c)
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)

//let i = 0;
//for (i = 0; i < 12; i++) {
//    alert(i);
//}
/*let i = 2;
for (; i <= 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);

}*/

/*function random(number) {
    return Math.ceil(Math.random() * number);
}
let number = random(10)
alert(number)*/


/*let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}*/

//pop удаляет элементы в конце
/*let fruits = ["Яблоко", "Апельсин", "Груша"];

alert(fruits.pop());
alert(fruits.length); // удаляем "Груша" и выводим его

alert(fruits);

//push Добавляет элемент в конец массива:
let fruits1 = ["Яблоко", "Апельсин"];

fruits1.push("Груша");

alert(fruits1);
//shift
//Удаляет из массива первый элемент и возвращает его:
let fruits2 = ["Яблоко", "Апельсин", "Груша"];

alert(fruits2.shift()); // удаляем Яблоко и выводим его
alert(fruits2); // Апельсин, Груша
//unshift Добавляет элемент в начало массива:
let fruits4 = ["Апельсин", "Груша"];

fruits4.unshift('Яблоко');

alert(fruits4); // Яблоко, Апельсин, Груша
//Методы push и unshift могут добавлять сразу несколько элементов:


let fruits3 = ["Яблоко"];

fruits3.push("Апельсин", "Груша");
fruits3.unshift("Ананас", "Лимон");

// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert(fruits3);*/

/*let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);*/
/*let arr = ["a", "b"];

arr.push(function() {
    alert(this);
})

arr[2]();*/
/*function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());*/
// ЗАмыкание
// function calcelement(x) {
//     return function(y) {
//         return x + y;
//     };
// };

// const add1 = calcelement(3);
// console.log(add1(2));


// Конструкторы, создание объектов через "new"
// function Calculator(params) {
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
//     this.sum = function(params) {
//         return this.a + this.b;
//     }
//     this.num = function(params) {
//         return this.a * this.b;
//     }
//     this.lum = function name(params) {
//         return this.a % this.b;
//     }

// }
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.num());
// alert("Lum=" + calculator.lum());



// Тип данных Symbol


// let id = Symbol('id2');

// alert(id.description)

// let user = {
//     name: "Вася"
// };

// let id = Symbol("id");

// user[id] = 1;

// alert(user[id]);
// читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");

// // проверяем -- это один и тот же символ
// alert(id === idAgain); // true

// var foo = {
//     toString: function() {
//       return 'foo';
//     },
//     valueOf: function() {
//       return 2;
//     }
//   };

//   alert( foo );
//   alert( foo + 1 );
//   alert( foo + "3" );
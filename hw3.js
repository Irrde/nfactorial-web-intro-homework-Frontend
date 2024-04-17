// First Task
// let user = {};
// user.name = prompt("Your name?:");
// user.age = prompt("Your age?:");
// user.gender = prompt("Your gender:(Men or Women)");

// console.log("User name:", user.name);
// console.log("User age:", user.age);
// console.log("User genser:", user.gender);


// Second Task
// let userInput= prompt("Number:")
// if (userInput !== null && !isNaN(userInput)) {
//     alert("Вы ввели число: " + userInput);
//   }else{

//     alert("Something going wrong")
//   }

// Third Task

// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// switch(a){
//     case 0:
//     alert(0);
//     break;

//     case 1:
//     alert(1);
//     break;

//     case 2:
//     case 3:
//         alert("2,3")
//         break

// default:
// alert("Something going wrong")


// }


// Fourth Task
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Сумма всех четных чисел в промежутке от 1 до 100:", sum);


let i = 0;
while(i < 3){
    alert(`number ${i}!`)
    i++

}

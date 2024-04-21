// First task
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }

// Second task
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(3, 2));  
// console.log(pow(3, 3));  
// console.log(pow(1, 100));

// Third task
// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );
  
// Fourth task
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10


// Fifth task
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);

// alert( names ); // Вася, Петя, Маша


// Sixth task
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// Seventh task
function getAverageAge(users) {
    let totalAge = 0;
    for (let i = 0; i < users.length; i++) {
      totalAge += users[i].age;
    }
    return totalAge / users.length;
  }
  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
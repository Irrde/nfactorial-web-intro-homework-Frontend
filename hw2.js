// First task
const restaurant = {
    name: "Вкусный уголок",
    location: "Сайна-Жандосова 19",
    rating: 5,
    isOpen: true,
    menu: ["Паста", "Пицца", "Салат", "Стейк"]
  }

  console.log(`Меню: ${restaurant.menu}`)



// Second task
let vehicle = {}; 
vehicle.brandName = "BMW"; 
vehicle.model = "X5";
vehicle.model = "M1"; 
delete vehicle.model; 


// Third task
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let totalSum = 0;
for (let key in salaries) {
    totalSum += salaries[key];
}

console.log(`Сумма зарплат: ${totalSum}`)
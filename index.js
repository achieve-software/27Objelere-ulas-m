//OBJECTLERE ULAŞIM
////? .notasyonu ile erisim
//? square bracket ile erisim

const car = new Object();
car.brand = "Volvo";
car.model = 1990;
car.color = "egean blue";

const car2 = new Object();
car2.brand = "BMW";
car2.model = 2023;
car2.color = "red";

console.log(car);
console.log(car.model); //? .notasyonu ile erisim
console.log(car["color"]); //? square bracket ile erisim

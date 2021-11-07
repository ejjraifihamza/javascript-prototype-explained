/*
! Create 3 constructor (Vehicle is parent of Car, and SportCar is child of Car)
? in Vehicle we have methode: getType()
? in Car we have methods: getType(), start()
? in SportCar we have method: getType()
! and create new instance c1 from SportCar
*/
function Vehicle() {}
Vehicle.prototype.getType = () => {
  console.log("Vehicle");
};

function Car() {}
Car.prototype = Object.create(Vehicle.prototype); // ²
Car.prototype.getType = () => {
  console.log("Car");
};
Car.prototype.start = () => {
  console.log("Start");
};

function SportCar() {}
SportCar.prototype = Object.create(Car.prototype); // ²
SportCar.prototype.getType = () => {
  console.log("SportCar");
};

const c1 = new SportCar();
c1.getType(); // SportCar
// ? so now when you create a link you can access all methods in all constructor
console.log(c1);
c1.__proto__.__proto__.getType(); // Start
c1.__proto__.__proto__.__proto__.getType(); // Vehicle
c1.start();

/*
 * for now you can't access to Car or Vehicle methods
 * to do so you have to create a linked list between Vehicle and Car and SportCar
 * you can do that by:
 * Car.prototype = Object.create(Vehicle.prototype) ²
 * SportCar.prototype = Object.create(Car.prototype) ²
 */

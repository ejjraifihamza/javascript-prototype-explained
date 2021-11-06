/*
! How to iterate through an array
! get property description (array, object)
! how to iterate through an object
! check if the property is enumerable (you can iterate this property or not)
! Create student function and set props
! Iterate and check if a prototype property is enumerable
*/

// ! How to iterate through an array
const grades = [12, 17, 11];

// ! get property description (array)
console.log(Object.getOwnPropertyDescriptor(grades, 0)); // {value: 12, writable: true, enumerable: true, configurable: true}
// * it's enumerable so you can iterate this one

// ? check for lenght property
console.log(Object.getOwnPropertyDescriptor(grades, "length")); // {value: 3, writable: true, enumerable: false, configurable: false}
// * it's not enumerable so you can not iterate this one

for (const key in grades) {
  console.log(key); // 0 1 2
}

console.log("#########################################");

// ! how to iterate through an object
const student = {
  age: 23,
  fullNAme: "Jhon Doe",
};

// ! get property description (object)
console.log(Object.getOwnPropertyDescriptor(student, "age")); // {value: 23, writable: true, enumerable: true, configurable: true}
// * it's enumerable so you can iterate this one

for (const val in student) {
  console.log(val); // age fullName
}

console.log("#########################################");

// ! Create student function and set props
function studentOne(fullName, age) {
  this._fullName = fullName;
  this._age = age;
  this._getFullName = () => {
    return `${this._fullName}`;
  };
}

const student_1 = new studentOne("Jhon Doe", 26);
console.log(student_1);

// ! Iterate and check if a prototype property is enumerable
console.log(Object.getOwnPropertyDescriptor(student_1, "_age")); // {value: 26, writable: true, enumerable: true, configurable: true}
console.log(student_1.propertyIsEnumerable("_age")); // true

for (const key in student_1) {
  console.log(key); // _fullName _age _getFullName
}
console.log("#########################################");

// ! add a property to the function
studentOne.prototype._notes = [10, 12, 15];

// ! check if this property i add if enumerable or not
console.log(student_1.constructor.prototype.propertyIsEnumerable("_notes")); // true
console.log();
for (const key in student_1) {
  console.log(key); // _fullName _age _getFullName _notes
}

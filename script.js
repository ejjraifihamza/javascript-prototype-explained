// ! create a function
// function player() {
//   this._fullName = "Jhon Doe"; // ! this keyword refer to object so value of function now are accessible from constructor
// }
// const player_1 = new player();
// console.log(player_1._fullName); // * Jhon Doe

// ! the elements of the function are now accessible from an constructor by this keyword
function player(fullName, age) {
  (this._fullName = fullName),
    (this._age = age),
    (this._getInfo = function () {
      return `the player name is: ${this._fullName} and he's ${this._age} years old`;
    });
}

player.prototype = {
  _price: 2000,
  _contry: "USA",
  _getAllInfo: function () {
    return `${this._getInfo()} and he coust ${this._price} $ and he is from ${
      this._contry
    }`;
  },
};

const player_1 = new player("Jhon Doe", 26);
console.log(player_1._getAllInfo());

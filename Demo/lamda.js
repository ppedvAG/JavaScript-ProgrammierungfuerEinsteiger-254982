// Traditionelle Funktion
function(parameter1, parameter2) {
  // code
}

// Arrow Function
(parameter1, parameter2) => {
  // code
}


() => {
  // code
}


(param1, param2) => {
  // code
}

myNumber = 5;
myNumberSquared = myNumber => myNumber * myNumber; // Arrow Function mit Vergleich

//gleich wie
function square(param1) {
    return param1 *  param1;
}
myNumberSquared = square(mynumber);

a=5;
b=7;
ggT = (a, b) => {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

() => ({ name: "Alice", age: 30 })


const myObject = {
  value: 10,
  getValue: () => {
    console.log(this.value); // 'this' ist hier nicht myObject
  }
};
myObject.getValue(); // undefined

const myObject = {
  value: 10,
  getValue: function() {
    console.log(this.value); // 10
  }
};
myObject.getValue();


const numbers = [1, 2, 3, 4, 5];

// Traditionell
const doubledTraditional = numbers.map(function(num) {
  return num * 2;
});
console.log(doubledTraditional); // [2, 4, 6, 8, 10]

// Arrow Function
const doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow);     // [2, 4, 6, 8, 10]


const ages = [12, 23, 19, 5, 40];

// Traditionell
const adultAgesTraditional = ages.filter(function(age) {
  return age >= 18;
});
console.log(adultAgesTraditional); // [23, 19, 40]

// Arrow Function
const adultAgesArrow = ages.filter(age => age >= 18);
console.log(adultAgesArrow);     // [23, 19, 40]

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fehler:', error));
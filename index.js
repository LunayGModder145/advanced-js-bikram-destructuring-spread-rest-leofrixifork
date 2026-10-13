//### DESTRUCTURING ARRAYS ###

//1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, Ana] = empleados;
console.log(Ana);

//2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com

const [{ email }] = empleados;
console.log(email);

//3.- Usa destructuración para cambiar los valores de a y b;


// Inicialmente
let a = 5;
let b = 3;

// Al final
//let a = 3;
//let b = 5;

[a, b] = [b, a];

//4.- Dado el objeto **HIGH_TEMPERATURES**

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};



//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana


//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

//### SPREAD/REST ###

//5.- Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

function sumEveryOther (...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}

//6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).

addOnlyNums(1, "perro", 2, 4); //7

function addOnlyNums (...numbers) {
return numbers.filter(num  => typeof num === "number").reduce((acc, num) => acc + num, 0)
}


//7.- Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.


countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

function countTheArgs (...numbers) {
return numbers.length;
}


//8.- Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays (array1, array2) {
    return [...array1, ...array2];
}


//9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
 
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques(...args) {
    return [...new Set(args)];
}




//10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.


combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...args) {
    return args.flatMap(arr => arr);
}


//11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args) {
    return args.map(num  =>  num ** 2).reduce((acc, num) => acc + num, 0)
}
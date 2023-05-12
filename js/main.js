// LENGTH - Devuelve el largo del array

let array1 = [1, 2, 3, 4, 5];

console.log(array1);

array1.push(6);

console.log("PUSH --- " + array1);

array1.unshift(0);

console.log("UNSHIFT ---- " + array1);

array1.pop();

console.log("POP ----- " + array1);

array1.shift();

console.log("SHIFT ----- " + array1);

let arrayNombres = ["Mara", "David", "Jose", "Dani", "Mati", "Alba", "Dani"];

console.log(arrayNombres.indexOf("Dan"));

let arrayNombresModificado = arrayNombres.slice(0, arrayNombres.length / 2);

// console.log(arrayNombres)
// console.log(arrayNombresModificado)

let arrayConcatenado = arrayNombres.concat(
  arrayNombresModificado.slice(arrayNombres.length / 3)
);

// console.log(arrayConcatenado)
// arrayConcatenado.reverse()
// console.log(arrayConcatenado)

// console.log(arrayNombres.toString())
// console.log(arrayNombres.join(", "))
let stringSplit = "Hola, buenas";

let pepe = Array.from(stringSplit);
console.log(pepe);

// console.log(stringSplit.split(""))

// ITERAR CON BUCLE FOR

let arrayNumerosIterar = [1, 2, 3, 4, 5, 6, 7];
let arrayDuplicados = [];
// for(i = 0; i < arrayNumerosIterar.length; i++){
//     arrayDuplicados.push(arrayNumerosIterar[i] * 2)
//     console.log(arrayDuplicados)
// }

arrayNumerosIterar.forEach((num) => console.log(num * 2));

let mayoresDe3 = arrayNumerosIterar.filter((num) => num > 3);

console.log(mayoresDe3);

arrayDuplicados = arrayNumerosIterar.map((num) => num * 2);
// console.log(arrayDuplicados)

let personas = [
  {
    id: 1,
    nombre: "Mara",
    edad: 30,
  },
  {
    id: 2,
    nombre: "David",
    edad: 37,
  },
  {
    id: 3,
    nombre: "Jose",
    edad: 40,
  },
  {
    id: 4,
    nombre: "Marta",
    edad: 17,
  },
  {
    id: 5,
    nombre: "Coral",
    edad: 15,
  },
];

personas.map((persona) =>
  console.log(
    `El nombre de esta persona es ${persona.nombre} y tiene ${persona.edad} años`
  )
);

let mayoresDeEdad = personas.filter((persona) => persona.edad > 18);

console.log(mayoresDeEdad);

console.log(personas.find((persona) => persona.edad < 18 && persona.id == 5));

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [num1, num2, ...nums] = array2;
console.log(array2);
console.log(num1);
console.log(num2);
console.log(nums);

const suma = (...args) => {
    let suma = 0
    console.log(args)
    args.map(arg => suma += arg)
    return suma
}

console.log(suma(1, 2))


// console.log(`El primer número es ${num1}, el segundo número es ${num2}`);

let persona = {
  nombre: "Mara",
  edad: 30,
};
// let edad = persona.edad
let { nombre, edad } = persona;

// console.log(edad);
// console.log(nombre)

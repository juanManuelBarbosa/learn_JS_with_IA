/* "prompt: quiero que me expliques en detalle que son las variables en jS"
r: En JavaScript, las variables son contenedores que se utilizan para almacenar valores.
 Estos valores pueden ser números, cadenas de texto, booleanos, objetos u otros tipos de datos. 
*/ 

//ejemplos
var nombre = "juan"; // variable declarada con VAR
let edad = 25; // variable declarada con LET 
const PI = 2.1416; //constante, no puede modificar su valor posteriormente 


/*las variables en  JavaScript son dinamicas, lo que significa que pueden cambiar de 
tipo y de valor durante la ejecucion del programa. */

let numero = 10; //primera declaracion y asignacion de valor .
console.log(numero); //(metodo que sirve para imprimir por consola) imprime: 10

numero = "veinte"; //se asigna otro valor, modificando a su vez el tipo de dato.
console.log(numero); //imprime: veinte

/*En el ejemplo anterior, la variable  numero  se inicializa con el valor 10 y se imprime
en la consola. Luego, se asigna el valor "veinte" a la misma variable y se vuelve
a imprimir en la consola. Como puedes ver, la variable cambió de tipo y de valor. 
 
Es importante tener en cuenta que las variables en JavaScript son sensibles
a mayúsculas y minúsculas. Por lo tanto, nombre  y  Nombre  se consideran variables diferentes. 
 
Las variables en JavaScript también pueden ser utilizadas en expresiones matemáticas, 
concatenación de cadenas de texto y en muchas otras operaciones. Por ejemplo:*/ 

let numero1 = 5;
let numero2 = 10;
let suma = numero1 + numero2;
console.log(suma); // imprime: 15

let nombre = "Juan";
let saludo = "Hola, " + nombre + "!";
console.log(saludo); // imprime: Hola, Juan!

/*En el ejemplo anterior, se realizó una suma entre las variables  numero1  y  numero2, 
y se almacenó el resultado en la variable  suma . Luego, se concatenó la variable  nombre
con la cadena de texto "Hola, " y se almacenó en la variable  saludo . 
 

Las variables en JavaScript son fundamentales para almacenar y manipular datos en un programa. 
Son una herramienta poderosa que te permitirá desarrollar aplicaciones más dinámicas y flexibles. */



//nota: a partir de aca recomiendo retomar lectura una vez sepas lo que son 
//las funciones, SCOPE y bucles para entender mejor 

//p:"que diferencia existe entre variables declaradas con VAR y cariables declaradas con LET"

/*En JavaScript, hay diferencias importantes entre las variables declaradas 
con  `var`  y las variables declaradas con  `let` . Aquí te explico las principales diferencias:

1. Alcance de bloque: Las variables declaradas con  `var`  tienen un alcance de función
 o global, lo que significa que están disponibles en todo el ámbito de la función en
la que se declaran o en todo el programa si se declaran fuera de una función. Por otro lado,
las variables declaradas con  `let`  tienen un alcance de bloque,
 lo que significa que solo están disponibles dentro del bloque en el que se declaran,
como una sentencia  `if` , un bucle  `for`  o un bloque de código delimitado por llaves `{}` .

Ejemplo:
*/

function ejemplo() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 30; // La variable x se sobrescribe en el alcance de función
    let y = 40; // La variable y es una nueva variable en el alcance de bloque
    console.log(x); // Output: 30
    console.log(y); // Output: 40
  }

  console.log(x); // Output: 30
  console.log(y); // Output: 20
}

//2. Hoisting: Las variables declaradas con  `var`  son "elevadas" al inicio del ámbito
//en el que se declaran, lo que significa que se pueden utilizar antes de su declaración.
//Sin embargo, su valor será  `undefined`  hasta que se les asigne un valor.
//Por otro lado, las variables declaradas con  `let`  no son elevadas y no se pueden utilizar
//antes de su declaración.

//Ejemplo:
console.log(x); // Output: undefined
var x = 10;

console.log(y); // Error: y is not defined
let y = 20;


//3. Reasignación en bucles  `for` : Cuando se utilizan variables declaradas con  `var` 
//en un bucle  `for` , su valor se mantiene después de que el bucle termine.
//En cambio, las variables declaradas con  `let`  se reinician en cada iteración del bucle.

//Ejemplo:
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 3, 3, 3
  }, 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j); // Output: 0, 1, 2
  }, 1000);
}

/*En el primer bucle, todas las funciones  `setTimeout`  se ejecutan después de que 
el bucle haya terminado y la variable  `i`  tiene un valor de 3 en ese momento.
En el segundo bucle, cada función  `setTimeout`  se ejecuta en su propia iteración del bucle,
por lo que la variable  `j`  mantiene su valor correspondiente en cada iteración.

En resumen, las variables declaradas con  `var`  tienen un alcance de función o global, 
se elevan y pueden ser reasignadas en bucles  `for` . Las variables declaradas con  `let` 
tienen un alcance de bloque, no se elevan y no pueden ser reasignadas en bucles  `for`. 
En general, se recomienda utilizar  `let`  en lugar de  `var`  para declarar variables en 
JavaScript, ya que  `let`  proporciona un comportamiento más predecible y evita problemas 
comunes asociados con el uso de  `var`. */




// prmp: "Dame ejercicios para hacer de variables" 

//Ejercicio de cálculo de promedio: 
//Consigna: Escribe un programa que solicite al usuario tres notas y calcule el promedio.
//Luego, muestra el resultado en la consola

let nota1 = parseInt(prompt("ingrese la primer nota"));
let nota2 = parseInt(prompt("ingrese la segunda nota"));
let nota3 = parseInt(prompt("ingrese la tercer nota"));

let promedio = (nota1 + nota2 + nota3) / 3; 
console.log(promedio);

/* Ejercicio de conversión de temperatura: 
Consigna: Escribe un programa que solicite al usuario una temperatura en grados Celsius
y la convierta a grados Fahrenheit. Muestra el resultado en la consola.  */

let celsius = prompt("Ingrese la temperatura en grados Celsius:");

celsius = parseFloat(celsius);

let fahrenheit = celsius * 9/5 + 32; //utilizacion de formula matematica 

console.log("La temperatura en grados Fahrenheit es: " + fahrenheit);
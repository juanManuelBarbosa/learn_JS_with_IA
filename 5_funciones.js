// prompt : "brindame una explicacion teorica de lo que son las funciones en la programacion"

/*respuesta: En programación, una función es un bloque de código que realiza una tarea específica y 
puede ser reutilizado en diferentes partes de un programa. 
Una función toma uno o más valores de entrada, llamados argumentos o parámetros,
y devuelve un valor como resultado. 
 
Las funciones son una parte fundamental de la programación porque nos permiten dividir
 un programa en partes más pequeñas y manejables. Esto nos ayuda a organizar y estructurar 
 nuestro código de manera más eficiente, facilitando su mantenimiento y reutilización. 
 
Una función se define utilizando la palabra clave "function", seguida del nombre de la función
y una lista de parámetros entre paréntesis. A continuación, se especifica el bloque de código 
que se ejecuta cuando la función es llamada. Por ejemplo: */


function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

saludar("Juan"); // Llamada a la función: imprime "Hola, Juan!"

/*En este ejemplo, hemos definido una función llamada "saludar" que toma un parámetro 
llamado "nombre". Cuando llamamos a la función con el argumento "Juan",
se ejecuta el bloque de código dentro de la función y se imprime "Hola, Juan!" en la consola.
 */

/* 
Además de recibir argumentos, una función también puede devolver un valor utilizando 
la palabra clave "return". Por ejemplo: */

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3); // Llamada a la función: devuelve el valor 8
console.log(resultado); // Imprime 8

/*En este caso, la función "sumar" recibe dos parámetros "a" y "b" y devuelve la suma de ambos.
Al llamar a la función con los argumentos 5 y 3, se devuelve el valor 8, 
que se asigna a la variable "resultado" y se imprime en la consola.

//*aclaracion mia* a los parametros se les asigna el valor en el orden en que se declaran, 
en este ejemplo podemos ver que (a) toma el valor del primer dato que le enviamos al llamar la
funcion (5) y (b) toma el segundo(3)

Las funciones son una herramienta poderosa en la programación
ya que nos permiten modularizar y reutilizar el código, mejorar la legibilidad y facilitar
el mantenimiento. Nos permiten dividir un problema en tareas más pequeñas y abordar cada una 
por separado, lo que hace que el desarrollo de software sea más eficiente y escalable.*/

//prompt: "Todos los tipos de funciones en JS "
/*respuesta: En JavaScript, hay varios tipos de funciones que puedes utilizar.
Aquí te menciono los principales: 
 
1. Funciones declarativas: Son las funciones más comunes y se definen 
utilizando la palabra clave "function". Por ejemplo: */

function saludar() {
  console.log("¡Hola!");
}

/*2. Funciones expresivas: Son funciones que se asignan a una variable utilizando una 
expresión de función. Por ejemplo: */

const sumar = function(a, b) {
  return a + b;
};

/*3. Funciones flecha (arrow functions): Son una forma más compacta de escribir funciones,
introducidas en ECMAScript 6. Utilizan la sintaxis de flecha (=>) y no tienen 
su propio valor "this". Por ejemplo: */

const multiplicar = (a, b) => a * b;

/*4. Funciones anónimas: Son funciones que no tienen un nombre definido y se utilizan generalmente
 como argumentos de otras funciones o para crear closures. Por ejemplo */

setTimeout(function() {
  console.log("¡Hola después de 2 segundos!");
}, 2000);

/*5. Funciones autoejecutables (IIFE - Immediately Invoked Function Expressions): 
Son funciones que se ejecutan inmediatamente después de ser definidas. 
Se envuelven entre paréntesis y se invocan con paréntesis adicionales al final. Por ejemplo: */

(function() {
  console.log("¡Esta función se ejecuta de inmediato!");
})();








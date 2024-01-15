//prompt: explicame todo lo relacionado sobre arreglos 
// respuesta: 

// Los arreglos, también conocidos como arrays, son estructuras de datos en JavaScript
//que permiten almacenar y organizar múltiples valores en una sola variable. 
//Cada valor dentro de un arreglo se llama elemento y se accede a ellos mediante un 
//índice numérico.

// Características de los arreglos:
// 1. Almacenamiento ordenado: Los elementos en un arreglo se almacenan en un orden 
//específico, comenzando desde el índice 0 y continuando en orden numérico.

// 2. Tamaño dinámico: Los arreglos en JavaScript pueden cambiar de tamaño dinámicamente,
//lo que significa que puedes agregar o eliminar elementos según sea necesario.

// 3. Tipos de datos mixtos: Los arreglos pueden contener elementos de diferentes 
//tipos de datos, como números, cadenas, booleanos, objetos y otros arreglos.

// Puedes declarar un arreglo utilizando la sintaxis de corchetes [] o utilizando
// el constructor Array(). Aquí tienes ejemplos de ambas formas:

// Sintaxis de corchetes
const arreglo1 = ['valor1', 'valor2', 'valor3'];

// Constructor Array()
const arreglo2 = new Array('valor1', 'valor2', 'valor3');

// Acceso a elementos de un arreglo:
// Puedes acceder a los elementos de un arreglo utilizando su índice numérico.
//El primer elemento tiene un índice de 0, el segundo tiene un índice de 1, 
//y así sucesivamente. Aquí tienes un ejemplo:

const arreglo3 = ['manzana', 'banana', 'naranja'];
console.log(arreglo3[0]); // Output: 'manzana'
console.log(arreglo3[1]); // Output: 'banana'
console.log(arreglo3[2]); // Output: 'naranja'

// Propiedades y métodos de los arreglos:
// Los arreglos en JavaScript tienen varias propiedades y métodos incorporados que 
//puedes utilizar para trabajar con ellos. 


// Propiedades de los arreglos:
// 1. length: Devuelve la cantidad de elementos en un arreglo.

// Métodos de los arreglos (Modificación del arreglo):
// 1. push(elemento1, elemento2, ...): Agrega uno o más elementos al final del arreglo y
// devuelve la nueva longitud del arreglo.
let arraiPush = [1,2,3,4,5];
arraiPush.push(6) // 
console.log(arraiPush) //imprime 1 2 3 4 5 6
// 2. pop(): Elimina el último elemento del arreglo y lo devuelve.
let arraiPop = [1,2,3,4];
let ultimoElemento= arraiPop.pop;
console.log(ultimoElemento) //imprime 4
console.log(arraiPop) // imprime 1,2,3
// 3. unshift(elemento1, elemento2, ...): Agrega uno o más elementos al inicio del arreglo
// y devuelve la nueva longitud del arreglo.
// 4. shift(): Elimina el primer elemento del arreglo y lo devuelve.
// 5. splice(inicio, cantidad, elemento1, elemento2, ...): Permite agregar, 
// eliminar o reemplazar elementos en un arreglo en una posición específica.
// 6. fill(valor, inicio, fin): Rellena todos los elementos del arreglo con un valor 
// específico, desde la posición de inicio hasta la posición de fin (opcional).

// Métodos de los arreglos (Acceso a elementos):
// 1. concat(arreglo1, arreglo2, ...): Combina dos o más arreglos y devuelve un nuevo arreglo.
// 2. slice(inicio, fin): Devuelve una copia superficial de una porción del arreglo, 
// desde la posición de inicio hasta la posición de fin (opcional).
// 3. indexOf(elemento, desde): Devuelve el índice de la primera aparición de un elemento 
// en el arreglo, o -1 si no se encuentra. Puedes especificar una posición de inicio opcional.
// 4. lastIndexOf(elemento, desde): Devuelve el índice de la última aparición de un elemento 
// en el arreglo, o -1 si no se encuentra. Puedes especificar una posición de inicio opcional.

// Métodos de los arreglos (Iteración):
// 1. forEach (funcion(elemento, indice, arreglo)): Ejecuta una función para cada elemento 
// del arreglo.
// 2. map(funcion(elemento, indice, arreglo)): Crea un nuevo arreglo con los resultados 
// de aplicar una función a cada elemento del arreglo.
// 3. filter(funcion(elemento, indice, arreglo)): Crea un nuevo arreglo con todos los 
// elementos que cumplan una condición determinada por una función.
// 4. find(funcion(elemento, indice, arreglo)): Devuelve el primer elemento del arreglo 
// que cumpla una condición determinada por una función.
// 5. findIndex(funcion(elemento, indice, arreglo)): Devuelve el índice del primer elemento 
// del arreglo que cumpla una condición determinada por una función.
// 6. every(funcion(elemento, indice, arreglo)): Comprueba si todos los elementos del 
// arreglo cumplen una condición determinada por una función.
// 7. some(funcion(elemento, indice, arreglo)): Comprueba si al menos un elemento del 
// arreglo cumple una condición determinada por una función.
// 8. reduce(funcion(acumulador, elemento, indice, arreglo), valorInicial): Aplica una 
// función a un acumulador y a cada elemento del arreglo (de izquierda a derecha) para 
// reducirlo a un solo valor.
// 9. reduceRight(funcion(acumulador, elemento, indice, arreglo), valorInicial): Aplica 
// una función a un acumulador y a cada elemento del arreglo (de derecha a izquierda) 
// para reducirlo a un solo valor.

// Métodos de los arreglos (Manipulación del arreglo):
// 1. reverse(): Invierte el orden de los elementos en el arreglo.
// 2. sort(funcion(a, b)): Ordena los elementos del arreglo en su lugar según la 
// función de comparación especificada.

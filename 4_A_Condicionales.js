/* prompt:explicame todas las estructuras de control condicionales que se usan en JS 
respuesta: 

Las estructuras de control condicionales son herramientas en la programación que permiten
ejecutar diferentes bloques de código basados en condiciones específicas. 
Estas estructuras te permiten tomar decisiones en tu programa y ejecutar diferentes
acciones según el resultado de una evaluación lógica. 
 
/*1. Estructura "if": se utiliza para ejecutar un bloque de código si una condición es
 verdadera. Por ejemplo: */

if (condicion) {
  // Código a ejecutar si la condición es verdadera
}


/*2. Estructura "if-else": La estructura "if-else" se utiliza para ejecutar un bloque 
de código si una condición es verdadera, y otro bloque de código si la condición es falsa.
Por ejemplo: */

if (condicion) {
  // Código a ejecutar si la condición es verdadera
} else {
  // Código a ejecutar si la condición es falsa
}

/* Estructura "if-else if-else": La estructura "if-else if-else"
 se utiliza para evaluar múltiples condiciones y ejecutar diferentes bloques de 
 código según el resultado de cada condición. Por ejemplo: */

if (condicion1) {
  // Código a ejecutar si la condición1 es verdadera
} else if (condicion2) {
  // Código a ejecutar si la condicion2 es verdadera
} else {
  // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

/*4. Operador ternario: El operador ternario es una forma abreviada de escribir
una estructura "if-else" en una sola línea. Por ejemplo: */

// condicion ? expresion1 : expresion2;

const edad = 20;
const esMayor = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
console.log(esMayor); // Salida: 'Es mayor de edad'

/*El operador ternario es útil cuando se necesita tomar una decisión simple
 y se desea escribir un código más conciso. Sin embargo, ten en cuenta que su uso excesivo}
o en casos más complejos puede dificultar la legibilidad del código. */
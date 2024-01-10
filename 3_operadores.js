/*prompt: "dame una explicacion detallada de los operadores en Javascript
respuesta:
          Aquí tienes una explicación detallada de los operadores en JavaScript:

1. Operadores Aritméticos:
- Suma (+): Se utiliza para sumar dos valores.
 Por ejemplo:  `let resultado = 5 + 3;`  (resultado sería 8).

- Resta (-): Se utiliza para restar un valor de otro.
 Por ejemplo:  `let resultado = 10 - 4;`  (resultado sería 6).

- Multiplicación (*): Se utiliza para multiplicar dos valores. 
Por ejemplo:  `let resultado = 2 * 6;`  (resultado sería 12).

- División (/): Se utiliza para dividir un valor entre otro. 
Por ejemplo:  `let resultado = 15 / 3;`  (resultado sería 5).

- Módulo (%): Se utiliza para obtener el residuo de una división.
 Por ejemplo:  `let resultado = 10 % 3;`  (resultado sería 1).


2. Operadores de Asignación:
- Asignación (=): Se utiliza para asignar un valor a una variable. Por ejemplo:  
`let nombre = "Juan";` .

- Asignación con Operación (+=, -=, *=, /=): Se utiliza para realizar una operación 
y asignar el resultado a una variable. 
Por ejemplo:  `let numero = 5; numero += 3;`  (numero sería 8).

3. Operadores de Comparación:
   - Igualdad (==): Compara si dos valores son iguales, sin tener en cuenta el tipo de dato. Por ejemplo:  `5 == "5"`  (true).
   - Igualdad Estricta (===): Compara si dos valores son iguales, teniendo en cuenta el tipo de dato. Por ejemplo:  `5 === "5"`  (false).
   - Desigualdad (!=): Compara si dos valores son diferentes, sin tener en cuenta el tipo de dato. Por ejemplo:  `5 != "5"`  (false).
   - Desigualdad Estricta (!==): Compara si dos valores son diferentes, teniendo en cuenta el tipo de dato. Por ejemplo:  `5 !== "5"`  (true).
   - Mayor que (>), Menor que (<), Mayor o igual que (>=), Menor o igual que (<=): Comparan si un valor es mayor, menor, mayor o igual, o menor o igual a otro valor. Por ejemplo:  `5 > 3`  (true).

4. Operadores Lógicos:
   - Y Lógico (&&): Retorna true si ambos operandos son verdaderos. Por ejemplo:  `let resultado = (5 > 3) && (2 < 4);`  (resultado sería true).
   - O Lógico (||): Retorna true si al menos uno de los operandos es verdadero. Por ejemplo:  `let resultado = (5 > 3) || (2 > 4);`  (resultado sería true).
   - Negación Lógica (!): Retorna la negación del operando. Por ejemplo:  `let resultado = !(5 > 3);`  (resultado sería false).

Estos son solo algunos de los operadores más comunes en JavaScript. Los operadores te permiten realizar diferentes tipos de operaciones y comparaciones en tus programas, lo que te brinda flexibilidad y control sobre el flujo de ejecución.*/

//Pedi ejercicios.

/*Ejercicio de operadores aritméticos: 
    Consigna: Escribe un programa que solicite al usuario dos números 
   y realice las siguientes operaciones: suma, resta, multiplicación y división 
   de los números ingresados. Muestra los resultados en la consola.*/

   let num1 = parseInt(prompt("ingrese el primer numero"));
   let num2 = parseInt(prompt("ingrese el segundo numero"));

   let suma = num1 + num2;
   console.log(suma);

   let resta = num1 - num2; 
   console.log(resta)

   let multiplicación = num1 * num2; 
   console.log(multiplicación)

   let divicion = num1 / num2; 
   console.log("divicion");


   /*2. Ejercicio de operadores de comparación: 
   Consigna: Escribe un programa que solicite al usuario dos números y
    determine si el primero es mayor, menor o igual al segundo número.
     Muestra el resultado en la consola.  */

    let numero1 = prompt("Ingrese el primer número:");
    let numero2 = prompt("Ingrese el segundo número:");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (numero1 > numero2) {
    console.log("El primer número es mayor al segundo.");
    } else if (numero1 < numero2) {
    console.log("El primer número es menor al segundo.");
    } else {
    console.log("Los números son iguales.");
    }
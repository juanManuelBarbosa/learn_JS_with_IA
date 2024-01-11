/*prompt: explicame todos los bucles en js 
respuesta: 
Aquí tienes una explicación de los bucles más comunes en JavaScript: 
 
1. Bucle  for : El bucle  for  se utiliza para repetir un bloque de código
 un número específico de veces. Tiene tres partes: la inicialización, la condición y 
la expresión final*/

for (let i = 0; i < 5; i++) {
  console.log(i); // imprime 0,1,2,3,4
}


/* 
2. Bucle "while": El bucle "while" se utiliza cuando no se conoce de antemano
 la cantidad exacta de repeticiones. Se ejecuta mientras una condición sea verdadera.
Por ejemplo: */

//let i = 0;
while (i < 5) {
  console.log(i); //imprime 0,1,2,3,4
  i++;
}

/*3. Bucle "do-while": El bucle "do-while" es similar al bucle "while", 
pero se asegura de que el código se ejecute al menos una vez antes de verificar la condición.
Por ejemplo:*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


//Estos son los bucles más comunes en JavaScript. 
//Cada uno tiene sus propias características y se utilizan en diferentes situaciones
//según las necesidades del programa.

//ejercicios con cada uno: 

//Ejercicio para for : Imprimir los números pares del 1 al 10.

for ( let i = 1 ; i<=10 ; i++){
    if (i % 2 === 0){
        console.log(i); // imprime 2,4,6,8,10
    }
}

//ejercicio para while : //Ejercicio para for : Imprimir los números pares del 1 al
//numero que ingrese el usuario.

let numUsuario =  parseInt(prompt("ingrese un numero entero"));
let n = 1
while (n < numUsuario){
    if (n % 2 !== 0){
        console.log(n) //imprime: 1,3,5,7,9
    } 
    n++ ; //importante recordar incrementar el contador para no entrar en bucle infinito
}


//ejercicio con do while: Ejercicio: Solicitar al usuario un número entre 1 y 10 y 
//repetir la solicitud hasta que se ingrese un número válido.

let numero; 

do{
    numero = parseInt(prompt("ingrese un numero del 1 al 10 por favor"));
} while(isNaN(numero) || numero > 10 || numero < 1);


    

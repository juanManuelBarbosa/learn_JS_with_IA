/*prompt: explicame detalladamente sobre promesas en js 

respuesta: Claro, permíteme explicarte detalladamente sobre las promesas en JavaScript. 
 
En JavaScript, las promesas son objetos que representan el resultado eventual de una 
operación asincrónica. Proporcionan una forma más estructurada y fácil de manejar el 
flujo de control en aplicaciones asincrónicas. 
 
Una promesa puede estar en uno de los tres estados: pendiente, resuelta o rechazada. 
Cuando se crea una promesa, está en estado pendiente, lo que significa que la operación 
asincrónica aún no ha finalizado. Una vez que la operación se completa con éxito, 
la promesa se resuelve y se le asigna un valor. Si la operación asincrónica falla, 
la promesa se rechaza y se le asigna un motivo de error. 
 
Para utilizar una promesa, se utiliza la sintaxis de constructor  new Promise() . 
El constructor de la promesa toma una función con dos parámetros:  resolve  y  reject . 
Estas son funciones que se utilizan para resolver o rechazar la promesa respectivamente. 
 
Aquí tienes un ejemplo básico de cómo se crea y se utiliza una promesa:*/

const miPromesa = new Promise((resolve, reject) => {
  // Simulación de una operación asincrónica
  setTimeout(() => {
    const exito = true; // Cambia a false para simular un error
    if (exito) {
      resolve("¡Operación exitosa!"); // Resuelve la promesa con un valor
    } else {
      reject("¡Hubo un error!"); // Rechaza la promesa con un motivo de error
    }
  }, 2000); // Simula una demora de 2 segundos
});

// Utilizando la promesa
miPromesa
  .then((resultado) => {
    console.log(resultado); // Se ejecuta si la promesa se resuelve exitosamente
  })
  .catch((error) => {
    console.error(error); // Se ejecuta si la promesa es rechazada
  });

//   En este ejemplo, la promesa  miPromesa  se resuelve después de 2 segundos y
//   se imprime "¡Operación exitosa!" en la consola. Si cambias la variable  exito
//   a  false , la promesa se rechazará y se imprimirá "¡Hubo un error!" en la consola.

/*Además de  then()  y  catch() , las promesas también tienen otros métodos útiles, 
como finally()  que se ejecuta siempre, ya sea que la promesa se resuelva o se rechace, 
y Promise.all() y Promise.race() que se utilizan para manejar múltiples promesas a la vez*/

//prompt:dame ejercicios sobre promesas

//ejercicio 1 Crea una promesa que se resuelva después de 5 segundos.

const promesaEjercicio1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let condicion = true;
    if (condicion) {
      resolve("mision cumplida cabo, nos vamos a casa");
    } else {
      reject("oh no skiper la promesa fallo");
    }
  }, 5000);
});

promesaEjercicio1
  .then((res) => {
    console.log(res);
  })

  .catch((err) => {
    console.log(err);
  });

//Ejercicio 2:** Crea una promesa que se rechaza con el mensaje "¡Error!

const promesaEjercicio2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let condicion = False;
    if (condicion) {
      resolve("todo en orden por aca"); //en este caso no se va a ejecutar
    } else {
      reject("apagalo otto, la promesa fallo"); // no, no se va a estabilizar
    }
  }, 2000);
});

promesaEjercicio2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // esto seria lo que se ejecuta e imprime "apagalo otto, la promesa fallo"
  });

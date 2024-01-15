/*Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan 
después de que se complete una operación asíncrona o cuando se cumpla determinada condición. 
En JavaScript, los callbacks son una forma común de manejar operaciones asíncronas, 
como solicitudes de red, lectura/escritura de archivos, temporizadores, entre otros. 
 
La idea principal detrás de los callbacks es que permiten que una función se ejecute 
después de que otra función haya terminado su tarea. Esto es especialmente útil 
en situaciones en las que no se puede esperar una respuesta inmediata o cuando se necesita 
realizar acciones adicionales una vez que se haya completado una operación. 
 
Un ejemplo común de uso de callbacks es con las solicitudes AJAX. 
Puedes pasar una función como un callback para manejar la respuesta del servidor una vez que 
se haya completado la solicitud. Aquí tienes un ejemplo:*/

function hacerSolicitud(url, callback) {
  // Realizar la solicitud AJAX
  // Una vez que se complete la solicitud, llamar al callback con la respuesta
  const respuesta = obtenerRespuestaDelServidor();
  callback(respuesta);
}

function manejarRespuesta(respuesta) {
  // Hacer algo con la respuesta del servidor
  console.log(respuesta);
}

// Llamar a la función hacerSolicitud y pasar la función manejarRespuesta como callback
hacerSolicitud("https://ejemplo.com/api", manejarRespuesta);

/*En este ejemplo, la función  hacerSolicitud  realiza una solicitud AJAX y, 
una vez que se completa, llama al callback pasado como argumento con la respuesta del servidor. 
En este caso, la función  manejarRespuesta  se pasa como callback y se ejecutará con la 
respuesta obtenida. 
 
Los callbacks son una forma común de manejar operaciones asíncronas y permiten escribir 
código más flexible y modular. Sin embargo, pueden llevar a un código anidado y 
complicado cuando se manejan múltiples callbacks. Para evitar esto, se han desarrollado 
técnicas como Promesas y async/await que ofrecen una forma más estructurada y legible 
de manejar operaciones asíncronas en JavaScript. */
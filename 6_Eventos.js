/*prompt: explicame lo mas detallado posible sobre eventos de js.

respuesta: En JavaScript, los eventos son acciones o sucesos que ocurren en una página web y
que pueden ser detectados y manejados por el código JavaScript. 
Los eventos son generados por el usuario o por el navegador en respuesta a ciertas acciones,
como hacer clic en un elemento, mover el mouse, cargar la página, etc.

Cuando se produce un evento, JavaScript puede capturarlo y ejecutar una función específica, 
conocida como "manejador de eventos", que se encarga de realizar alguna acción en respuesta al evento.


Aquí hay algunos conceptos clave relacionados con los eventos en JavaScript:

1. Eventos del navegador: Los navegadores web generan eventos en respuesta a diferentes acciones 
del usuario, como hacer clic en un elemento, mover el mouse, presionar una tecla, etc.

2. Eventos en elementos HTML: Los elementos HTML también pueden generar eventos. Por ejemplo,
un botón puede generar un evento de clic cuando se hace clic en él.

3. EventListeners: Los EventListeners (escuchadores de eventos) son funciones que se pueden adjuntar
a un elemento HTML para "escuchar" cuando ocurre un evento en ese elemento. 
Los EventListeners se agregan utilizando el método  `addEventListener`  y se pueden usar 
para capturar y manejar eventos.


4. Objeto de evento: Cuando se produce un evento, se crea un objeto de evento que contiene 
información sobre el evento, como el tipo de evento, el elemento objetivo, las coordenadas del mouse,
 etc. Este objeto se pasa como argumento a la función del manejador de eventos.

5. Prevenir comportamiento predeterminado: En algunos casos, es posible que desees evitar el 
comportamiento predeterminado de un evento. Por ejemplo, puedes querer evitar que un formulario 
se envíe cuando se presiona la tecla "Enter". Para hacer esto, puedes usar el método 
`preventDefault()`  del objeto de evento.

Aquí hay un ejemplo de cómo agregar un EventListener a un botón en JavaScript:
*/

// Obtener el elemento del botón
const boton = document.getElementById('miBoton');

// Agregar el EventListener para el evento de clic

boton.addEventListener('click', function(evento) {
  // Realizar alguna acción cuando se hace clic en el botón
  console.log('Se hizo clic en el botón');
});

/*En resumen, los eventos en JavaScript son mecanismos que permiten detectar y responder a las
acciones del usuario o del navegador en una página web. Al comprender cómo funcionan los eventos,
puedes hacer que tu código JavaScript interactúe con los usuarios de manera dinámica y receptiva.

prompt: dame una lista de todos los eventos en js separado por secciones:

respuesta: Aquí tienes una lista de los eventos de JavaScript separados por secciones:

Eventos del ratón:
- click: Se activa cuando se hace clic en un elemento.
- dblclick: Se activa cuando se hace doble clic en un elemento.
- mouseover: Se activa cuando el cursor del ratón se mueve sobre un elemento.
- mouseout: Se activa cuando el cursor del ratón sale de un elemento.
- mousedown: Se activa cuando se presiona un botón del ratón sobre un elemento.
- mouseup: Se activa cuando se suelta un botón del ratón sobre un elemento.
- mousemove: Se activa cuando el cursor del ratón se mueve dentro de un elemento.

Eventos del teclado:
- keydown: Se activa cuando se presiona una tecla.
- keyup: Se activa cuando se suelta una tecla.
- keypress: Se activa cuando se presiona y suelta una tecla.

Eventos de formulario:
- submit: Se activa cuando se envía un formulario.
- focus: Se activa cuando un elemento del formulario recibe el foco.
- blur: Se activa cuando un elemento del formulario pierde el foco.
- change: Se activa cuando el valor de un elemento del formulario cambia.

Eventos de carga:
- load: Se activa cuando se carga completamente una página o un elemento.
- unload: Se activa cuando se descarga una página o un elemento.

Eventos de temporizador:
- setTimeout: Se activa después de un período de tiempo especificado.
- setInterval: Se activa repetidamente después de un período de tiempo especificado.

Eventos de arrastrar y soltar:
- dragstart: Se activa cuando se inicia el arrastre de un elemento.
- dragend: Se activa cuando se termina el arrastre de un elemento.
- dragover: Se activa cuando un elemento arrastrado se encuentra sobre otro elemento.
- drop: Se activa cuando se suelta un elemento arrastrado sobre otro elemento.

*/




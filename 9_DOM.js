//promr: "explicame que es el DOM "

/* El DOM (Document Object Model) es una representación estructurada en forma de árbol 
de un documento HTML o XML. Es una interfaz que permite acceder y manipular
los elementos de un documento web.

El DOM organiza los elementos del documento en una estructura jerárquica, 
donde cada elemento se representa como un objeto en el árbol. 
Esto significa que cada etiqueta HTML (como  `<div>` ,  `<p>` ,  `<h1>` , etc.) 
se convierte en un objeto en el árbol del DOM. Además, los atributos y el contenido de 
texto de cada elemento también se representan como propiedades de esos objetos.

El DOM proporciona una interfaz para acceder y manipular estos objetos, 
lo que permite interactuar con los elementos y modificar su contenido, atributos, 
estilos y eventos. Por ejemplo, puedes utilizar el DOM para añadir o eliminar elementos, 
cambiar el texto de un párrafo, modificar el estilo de un elemento o responder a eventos 
como clics de botón.

El DOM está disponible en los navegadores web y se puede acceder utilizando JavaScript.
Los navegadores crean automáticamente una representación del DOM cuando cargan un 
documento web, y esta representación se puede modificar y actualizar 
dinámicamente mediante la manipulación de los objetos del DOM utilizando JavaScript.

En resumen, el DOM es una interfaz que proporciona una representación estructurada 
y manipulable de un documento web, permitiendo acceder y modificar los elementos, 
atributos y contenido del documento utilizando JavaScript.*/

//prompt: como se manipula el DOM 


// Selección de Elementos:
// Para interactuar con elementos específicos, primero, debes seleccionarlos. 
//Puedes hacerlo de varias maneras:

// Por ID:
let elementoPorId = document.getElementById('miId');

// Por Clase:
let elementosPorClase = document.getElementsByClassName('miClase');

// Por Etiqueta:
let elementosPorEtiqueta = document.getElementsByTagName('p');

// Por Selector CSS:
let elementoPorSelector = document.querySelector('.miClase');
let elementosPorSelector = document.querySelectorAll('p');

// Manipulación de Contenido:
// Una vez que has seleccionado un elemento, puedes manipular su contenido de varias maneras:

// Cambiar el Texto:
elementoPorId.textContent = 'Nuevo texto';

// Cambiar el HTML:
elementoPorId.innerHTML = '<strong>Nuevo</strong> contenido';

// Manipulación de Atributos:
// Puedes cambiar o añadir atributos a los elementos:
elementoPorId.setAttribute('atributo', 'nuevoValor');

// Creación de Nuevos Elementos:
// Para añadir nuevos elementos al DOM, primero debes crearlos:
let nuevoElemento = document.createElement('div');

// Añadir Elementos al DOM:
// Una vez creado, puedes añadir el nuevo elemento al DOM:
document.body.appendChild(nuevoElemento);

// Eventos:
// Puedes manipular eventos para hacer que tu página responda a las interacciones del usuario:
elementoPorId.addEventListener('click', function() {
  alert('Haz hecho clic en el elemento');
});
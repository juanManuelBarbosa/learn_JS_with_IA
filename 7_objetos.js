/*prompt: quiero aprender todo lo relacionado a objetos en js ¿que deveria saber ? 
respuesta: Para aprender sobre objetos en JavaScript, hay varios conceptos clave que debes conocer.
Aquí tienes una lista de lo que deberías saber:

1. Sintaxis de objeto: En JavaScript, los objetos se crean utilizando llaves  `{}`  y consisten
en pares clave-valor. La clave es una cadena que actúa como el identificador del valor asociado.

let objeto{
    clave : valor,
    clave2 : valor2
}

2. Propiedades: Las propiedades son los valores asociados a las claves dentro de un objeto. 
Pueden ser de cualquier tipo de datos, como números, cadenas, booleanos, funciones u otros objetos.

let persona {
    nombre : 'juan',
    apellido: 'Barbosa'
}

console.log(persona.nombre) //imprime 'juan'

3. Acceso a propiedades: Puedes acceder a las propiedades de un objeto utilizando la notación de 
punto ( `objeto.propiedad` ) o la notación de corchetes ( `objeto['propiedad']` ).

4. Métodos: Los métodos son funciones que están asociadas a un objeto. Puedes definir métodos como 
propiedades de un objeto y luego invocarlos utilizando la notación de punto.

5. Creación de objetos: Puedes crear objetos de varias formas en JavaScript. 
Puedes utilizar la sintaxis de objeto literal, la palabra clave  `new`  para crear objetos a partir 
de funciones constructoras, o utilizar la sintaxis de clase introducida en versiones más recientes 
// Definición de la función constructora


function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  };
}

// Creación de una nueva instancia del objeto Persona
var miPersona = new Persona("Juan", 27);

// Acceso a las propiedades y métodos del objeto

console.log(miPersona.nombre); // Output: "Juan"
console.log(miPersona.edad); // Output: 30
miPersona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 27 años."

6. Prototipos: JavaScript utiliza un sistema de prototipos en lugar de clases tradicionales. 
Los objetos en JavaScript tienen un enlace interno a un objeto prototipo, que hereda propiedades y
métodos. Puedes utilizar la propiedad  `prototype`  para agregar propiedades
y métodos a un prototipo.

7. Herencia: En JavaScript, puedes lograr la herencia de objetos utilizando prototipos. 
Puedes establecer el prototipo de un objeto utilizando el método  `Object.create()`  
o utilizando la palabra clave  `extends`  en la sintaxis de clase.

8. Palabra clave  `this` : La palabra clave  `this`  se refiere al objeto actual y se utiliza 
para acceder a las propiedades y métodos dentro de un objeto. Su valor depende del contexto en el 
que se utiliza.

9. Métodos estáticos: Los métodos estáticos son métodos que pertenecen a la clase en lugar de las 
instancias individuales de la clase. Puedes definir métodos estáticos utilizando la palabra clave  
`static`  en la sintaxis de clase.

10. Desestructuración de objetos: La desestructuración de objetos es una forma de 
extraer propiedades de un objeto y asignarlas a variables individuales. 
Puedes utilizar la sintaxis de desestructuración para acceder a las propiedades de un objeto 
de manera más concisa.

Estos son solo algunos de los conceptos clave que debes conocer sobre objetos en JavaScript. 
A medida que profundices en el tema, también puedes explorar otros conceptos más avanzados, 
como la composición de objetos, los métodos getter y setter, y el uso de bibliotecas y 
marcos de trabajo para trabajar con objetos en JavaScript.*/


/*Ejercicio: 
Crea un objeto llamado "Libro" que tenga las siguientes propiedades: 
- Título 
- Autor 
- Año de publicación 
- Género 

Luego, crea tres instancias del objeto "Libro" con diferentes valores para cada propiedad.
Finalmente, muestra la información de cada libro en la consola. 
  */

class Libro =  {
    constructor (titulo, autor, añoDePublicacion, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.añoDePublicacion = añoDePublicacion;
        this.genero = genero; 
    }

    mostrarInfo(){
        console.log(`el libro ${this.titulo} del conocido autor ${this.autor} se publico en el año: ${this.añoDePublicacion} y es del genero de ${this.genero}`)
    }
}

const libro1 = new Libro('"1984"', "George Orwell",1949, "Ciencia ficción" );
libro1.mostrarInfo(); 

const libro2 = new Libro("Cien años de soledad" , "Gabriel García Márquez", 1967, "Realismo Magico");
libro2.mostrarInfo();

const libro3 = new Libro("el Gran Gatsby" , "F. Scott Fitzgerald", 1925, "Novela");
libro3.mostrarInfo();

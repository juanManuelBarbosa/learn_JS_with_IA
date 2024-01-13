const display = document.querySelector(".display");
const numeros = document.querySelectorAll(".number");
const igual = document.querySelector(".igual");
const ce = document.querySelector(".CE");
const borrar = document.querySelector(".borrar");    

//para cada numero se crea un evento click que al accionarse ingresa el valor del elemento precionado al valor del display 
numeros.forEach(numero =>{ numero.addEventListener('click', () => display.value += numero.textContent) })

//al precionar igual agarra eñ valor actual de display y lo convierte a una operacion matematica que termina siento mostrada como resultado 
igual.addEventListener('click' , () => {
    if(display.value !== ""){
        display.value = eval(display.value)
    }
    
});

//al precionar CE se elimina todo lo ingresado en el display
ce.addEventListener('click' , () => display.value = "" );

//toma el valor del display y lo actualiza eliminando el ultimo elemento
borrar.addEventListener('click' , () => display.value = display.value.slice(0 , -1) );


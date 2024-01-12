const display = document.querySelector(".display");
const numeros = document.querySelectorAll(".number");
const operadores = document.querySelectorAll(".operator");
const igual = document.querySelector(".igual");

numeros.forEach(numero =>{
    numero.addEventListener('click', () => {
       display.value += numero.textContent
    })
})
operadores.forEach(operador =>{
    operador.addEventListener('click', () => {
       display.value += operador.textContent
    })
})

operadores.forEach(operador =>{
    operador.addEventListener('click', () => {
       display.value += operador.textContent
    })
})



let premio  = Math.round(Math.random() * 100 + 1);
const narrador = document.querySelector(".narrador");
const input = document.querySelector(".input");
const boton = document.querySelector(".boton");
const puntaje = document.querySelector(".puntaje");
var contador = 0;

function accionesBase(){
    input.value="";
    input.focus();
    contador++;
    puntaje.innerHTML = contador ;
}

boton.addEventListener('click', ()=>{

  
    if(input.value > 100 || input.value < 1){
        narrador.textContent = "del 1 al 100, que parte no se entiende?";
        accionesBase();
    }else if (input.value > premio){
        narrador.textContent = "noooo, te pasaste mi amorcito intenta un numero mas bajo";
        accionesBase();
    }else if(input.value < premio){
        narrador.textContent = "uuh nono te quedaste corta, mandale mecha que el numero es mas alto ";
        accionesBase();
    }else{
        narrador.textContent = `bingooo, es justo el numero que estaba pensando! tu puntuacion final es de ${contador} ¿queres jugar otra vez ?`
        accionesBase();
        contador = 0;
    }

});





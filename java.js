const display = document.querySelector("#display"); // busca  en el documento con id display (tu <input> de la calculadora) y lo guarda en  la vatiable display Luego usas display.value para leer/escribir el texto que se ve en la pantalla.
const buttons = document.querySelectorAll("button"); //Selecciona todos los elementos <button> del documento. Devuelve un NodeList (parecido a un arreglo) con todos los botones de la calculadora.

buttons.forEach((btn) =>{ // Recorre cada botón encontrado. btn es la referencia al botón actual en cada iteración.
    btn.addEventListener("click",() =>{ // A cada botón le agrega un escuchador de eventos para el evento "click". O sea, define qué debe pasar cuando ese botón se presiona.
        // //La lógica dentro del clic Dentro de la función de clic hay una serie de condiciones:
        if(btn.id === "="){//Si hiciste clic en el botón cuyo id es "=": Toma lo que haya escrito en la pantalla (display.value), por ejemplo "7+5*2",Lo evalúa como una expresión JavaScript con eval,Y pone el resultado en la pantalla. Ej.: "7+5*2" → 17                      
            display.value = eval(display.value); 
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})
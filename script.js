let intentos = 6;
let lista = ["APPLE","HOUSE", "HAPPY", "LIGHT", "WATER", "MUSIC", "HEART", "BREAD", "PIANO", "TABLE",
"CHAIR", "QUEEN", "SMILE", "FANCY", "GREEN", "LEMON", "KNIFE", "TRUCK", "CLOUD", "FAITH"];

let indice = Math.floor(Math.random() * lista.length)
console.log(indice);

let palabra = lista[indice]
const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");

console.log(palabra);

button.addEventListener("click",intentar);

function intentar(){
    
    const INPUT = document.getElementById("guess-input");
    const inputText = INPUT.value.trim().toUpperCase(); 
    if (inputText.length !== 5) {
        alert("Debes ingresar exactamente 5 letras.");
        return;}

    const ROW = document.createElement("div");
    ROW.class = "row"
    console.log (ROW)

    const INTENTO = leerIntento();

    console.log(INTENTO);
    intentos = intentos - 1;


    if(INTENTO === palabra){
    console.log ("Ganaste");
    terminar("<h1> GANASTE :D </h1>" );
    return 

    }else {
        console.log("analizar intento");
        for (i in palabra){
            const SPAN = document.createElement("span")
            SPAN.className = "letter"
             
            if(palabra[i] === INTENTO[i]){
                console.log(INTENTO[i], "verde")

                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "green";
                console.log(SPAN)

            }
            else if (palabra.includes(INTENTO[i])){
                console.log(INTENTO[i], "amarillo");
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "yellow";
                console.log(SPAN);

            }
            else{
                console.log(INTENTO[i], "gris")
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "gray";
                console.log(SPAN);

            }
            ROW.appendChild(SPAN);

        }
        GRID.appendChild(ROW);

    }
    if (intentos == 0){
        console.log("perdiste")
        terminar("<h1>PERDISTE :v</h1>")

    }
}

function leerIntento(){
let intento = document.getElementById("guess-input");
intento = intento.value;
intento = intento.toUpperCase();
return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById ( "guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guessed");
    contenedor.innerHTML = mensaje;

}
const input = document.getElementById("guess-input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    intentar();
  }
});


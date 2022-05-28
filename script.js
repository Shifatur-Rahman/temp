let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let outputFar = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(outputFar.toFixed(2));
}

function farToCel(){
    let outputCel = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( outputCel.toFixed(2));
}

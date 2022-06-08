//CICLOS / ITERACIONES

//for (let index = 0; index < 10; index++) {
//    console.log(index);    
//}


//let numero = 10
//for (let index = 1; index < 12; index++) {
//    let resultado = numero * index
//    console.log('Resultado: ' + index + ' - ' + resultado);
//}


//for (let index = 0; index < 20; index++) {
//    if(index == 10){
//        break
//    }
//    console.log(index);
//}


function saludar() {
    console.log('Bienvenido A Automotora Solar');
}

// saludar()

// function solicitarnombre() {
//     let nombreingresado = prompt('Ingrasar Nombre')
//     alert('Nombre Ingresado: ' + nombreingresado)
// }

COMPRA 
function sumar(parametroA,parametroB){
    let resultado = parametroA + parametroB
    console.log('resultado es: '+resultado)
    return resultado
}

sumar(26000,46)

function calcular(numeroA,numeroB,operacion) {
    switch (operacion) {
        case '+':
            return sumar(numeroA,numeroB)
            break;
    
        default:
            return 0;
            break;
    }
}

//CALCULADORA!!!

alert

function sumar(){

    var primeraS = parseInt(document.getElementById("cas1").value);
    let SegundaS = parseInt(document.getElementById("cas2").value);

    let combinacion = primeraS + SegundaS
    console.log(primeraS + SegundaS);
    if (combinacion = Number)  { alert ("Su suma es" + [primeraS + SegundaS] )}

}
function restar(){

    let primeraS = parseInt(document.getElementById("cas1").value);
    let SegundaS = parseInt(document.getElementById("cas2").value);

    let combinacion = primeraS - SegundaS
    console.log(primeraS - SegundaS);
    if (combinacion = Number)  { alert ("Su resta es" + [primeraS - SegundaS])}

}

function multiplicar(){

    let primeraS = parseInt(document.getElementById("cas1").value);
    let SegundaS = parseInt(document.getElementById("cas2").value);

    let combinacion = primeraS * SegundaS
    console.log(primeraS * SegundaS);

    if (combinacion = Number)  { alert ("Su multiplicación es" + primeraS * SegundaS)}
}

function dividir(){

    let primeraS = parseInt(document.getElementById("cas1").value);
    let SegundaS = parseInt(document.getElementById("cas2").value);

    let combinacion = primeraS / SegundaS
    console.log(primeraS / SegundaS);

    if (combinacion = Number)  { alert ("Su división es" + primeraS / SegundaS)}


}
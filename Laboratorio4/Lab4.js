const cuadrados = prompt("Digite el número para desplegar la tabla de cuadrados");

function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= cuadrados; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}
document.getElementById("resultados").innerHTML = tabla_cuadrados();

function NumerosAleatorios(min, max) {
    return Math.round(Math.random() * (max - min) + min);
 }
var aleatorio = NumerosAleatorios(1, 50);;
var aleatorio2 = NumerosAleatorios(1, 50);;
var primeraToma = Date.now();
const suma = prompt(aleatorio + " + " + aleatorio2);
var segundaToma = Date.now();
var tiempo = (segundaToma-primeraToma)/1000;

function sumaaleatoria(){
    sumaf = aleatorio + aleatorio2;
    if(suma==sumaf){
        mensaje = "¡Muy Bien! El resultado de la suma es " + sumaf + " y respondiste correctamente en un tiempo de " + tiempo + " segundos.";
        return mensaje;
    }
    else if(suma!=sumaf){
        mensaje = "Tu resultado es incorrecto. El resultado de la suma es " + sumaf + " y respondiste incorrectamente en un tiempo de " + tiempo + " segundos.";
        return mensaje;   
    }
}

document.getElementById("sumadenum").innerHTML = sumaaleatoria();

var arreglonumeros = [1,-2,0,0,4,5,-8,-9,10,11,-1,0,-3,-15,6,9,0,20]
var negativos = 0;
var ceros = 0;
var positivos = 0;
var length = arreglonumeros.length; 
function contador(){
    for (let i = 0; i <= length; i++) {
        if(arreglonumeros[i] < 0) {
            negativos = negativos + 1;
        }
        else if(arreglonumeros[i] == 0) {
            ceros = ceros + 1;
        }
        else if(arreglonumeros[i] > 0) {
            positivos = positivos + 1;
        }
    }
    mensajed = "Tu arreglo posee un total de "+ length + " números de los cuáles " + negativos + " son números negativos, " + ceros + " son ceros, y " + positivos + " son números positivos";
    return mensajed;
}
document.getElementById("arre").innerHTML = "Números del Arreglo: "+ arreglonumeros;
document.getElementById("conta").innerHTML = contador();

var adea1 = [3,5,7,1,2];
var adea2 = [9,5,4,12,11];
var adea3 = [4,8,9,4,7,8,10];
var adea = [adea1,adea2,adea3];
var adep = [];
var adel=adea.length;
var adeptxt = "";
function promedio(){
    for (let i = 0; i < adel; i++) {
        adep[i]=adea[i].reduce((partialSum, a) => partialSum + a, 0)/adea[i].length;
        adep[i]=Math.round(adep[i] * 10) / 10;
        adeptxt += adep[i] + ", ";
        if(i==adel-1){
            adeptxt = adeptxt.slice(0, -2);}
    }
mensaje3="Se tienen un total de " + adel + " arreglos de números dentro del arreglo principal cuyos promedios son: " + adeptxt;
return mensaje3;
}
document.getElementById("promedio").innerHTML = promedio();

var num = 123456789;
function inverso(){
    const numinver = num.toString().split("").reverse().join("");
    mensaje4 = "El número original parametrizado era "+num+" y su versión invertida, número por número, es "+numinver+".";
    return mensaje4;
}
document.getElementById("inverso").innerHTML = inverso();

var n1 =prompt("Digite un número: ");
n1=parseInt(n1);
var op=prompt("Digite un operando de cualquiera de los siguientes: + - * / ** (Si digita un caracter diferente a los 5 anteriores, su operación no se realizará.)");
var n2 =prompt("Digite otro número: ");
n2=parseInt(n2);
var resu6= 0;
function operacion(){
if(op=="+"){
resu6=n1+n2;
}
else if(op=="-"){
    resu6=n1-n2;
    }
else if(op=="*"){
    resu6=n1*n2;
    }
else if(op=="/"){
    resu6=n1/n2;
    }
else if(op=="**"){
    resu6=n1**n2;
    }
else{
    mensaje6="El operando ingresado es incorrecto, reinicia la página para reintentar.";
    return mensaje6;
}
mensaje6="El resultado de la operación "+n1+" "+op+" "+n2+" es igual a: "+resu6+".";
return mensaje6;
}
document.getElementById("ope").innerHTML = operacion();

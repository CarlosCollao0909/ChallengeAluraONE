let textoIngresado = document.querySelector("#textoIngresado");
let textoEncriptado = document.querySelector("#textoEncriptado");


function encriptarTexto(){
    let texto = textoIngresado.value;

    texto = texto.replace(/e/gi, "enter");
    texto = texto.replace(/i/gi, "imes");
    texto = texto.replace(/a/gi, "ai");
    texto = texto.replace(/o/gi, "ober");
    texto = texto.replace(/u/gi, "ufat");

    textoEncriptado.innerHTML = texto;
    textoIngresado.value = "";
    document.querySelector(".btnCopiar").style.visibility = "visible";
    document.querySelector("#textoEncriptado").style.display = "block";
    document.querySelector(".messages").style.display = "none";
}

function desencriptarTexto(){
    let texto = textoEncriptado.value;

    texto = texto.replace(/enter/gi, "e");
    texto = texto.replace(/imes/gi, "i");
    texto = texto.replace(/ai/gi, "a");
    texto = texto.replace(/ober/gi, "o");
    texto = texto.replace(/ufat/gi, "u");

    textoEncriptado.innerHTML = texto;

    textoIngresado.value = "";

    document.querySelector(".btnCopiar").style.visibility = "visible";
    document.querySelector("#textoEncriptado").style.display = "block";
    document.querySelector(".messages").style.display = "none";
}

function copiarTexto(){
    let copia = document.querySelector("#textoEncriptado");
    copia.select();
    navigator.clipboard.writeText(copia.value);
    document.querySelector(".btnCopiar").style.visibility = "hidden";
    document.querySelector("#textoEncriptado").style.display = "none";
    document.querySelector(".messages").style.display = "block";
    textoIngresado.value = "";
}
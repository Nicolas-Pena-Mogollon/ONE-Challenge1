const textArea = document.querySelector(".input-padron");
const botEncriptar = document.querySelector(".encriptar");
const botDesencriptar = document.querySelector(".desencriptar");
const display = document.querySelector(".display");
const format =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validarTexto() {
    let texto = textArea.value;
    let validador = /[áéíóúÁÉÍÓÚñÑ!@#$%^&*()A-Z]/.test(texto);
    if (validador){
        alert("Solo son permitidas letras minúsculas y sin acentos")
        cleanFields();
        return true;
    }
}

function cleanFields() {
    textArea.value = "";
}

function encript() {
    let resultText = textArea.value;
    if (!validarTexto()){
        for (let i= 0; i < format.length; i++)
            resultText = resultText.replaceAll(format[i][0], format[i][1]);
    }
    textArea.value = "";
    changeDisplayContent(resultText);
}

function decript(){
    let resultText = textArea.value;
    if (!validarTexto()){
        for (let i= 0; i < format.length; i++)
            resultText = resultText.replaceAll(format[i][1], format[i][0]);
    }
    textArea.value = "";
    changeDisplayContent(resultText);
}

function changeDisplayContent(content){
    display.removeChild(document.querySelector(".display-text"));
    let newDisplayText = document.createElement("textarea");
    newDisplayText.className = "display-text";
    newDisplayText.textContent = content;
    display.insertBefore(newDisplayText, document.querySelector(".copy"));
}
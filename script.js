const textArea = document.querySelector(".input-padron");
const display = document.querySelector(".display");
const format =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validateText() {
    let text = textArea.value;
    let validator = /[áéíóúÁÉÍÓÚñÑ!@#$%^&*()A-Z]/.test(text);
    if (text == ""){
        return true;
    } else if (validator){
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
    if (!validateText()){
        for (let i= 0; i < format.length; i++)
            resultText = resultText.replaceAll(format[i][0], format[i][1]);
        changeDisplayContent(resultText);
    }
    textArea.value = "";
}

function decript(){
    let resultText = textArea.value;
    if (!validateText()){
        for (let i= 0; i < format.length; i++)
            resultText = resultText.replaceAll(format[i][1], format[i][0]);
        changeDisplayContent(resultText);
    }
    textArea.value = "";
}

function changeDisplayContent(content){
    display.removeChild(document.querySelector(".display-text"));
    let newDisplayText = document.createElement("textarea");
    newDisplayText.className = "display-text";
    newDisplayText.readOnly = true;
    newDisplayText.textContent = content;
    display.insertBefore(newDisplayText, document.querySelector(".copy"));
}

function copyMouseDown() {
    var textArea = document.querySelector(".display-text");
    if (textArea.tagName == "TEXTAREA"){
        textArea.select();
        document.execCommand("copy");
    }
    let copyButton = document.querySelector(".copy");
    copyButton.textContent = "Copiado!";
}

function copyMouseUp() {
    let copyButton = document.querySelector(".copy");
    copyButton.textContent = "Copiar";
}
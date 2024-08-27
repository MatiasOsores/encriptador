// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Obtener elementos del DOM
const inputTexto = document.querySelector("#text");
const resultadoTexto = document.querySelector("#resultado-texto");
const botonEncriptar = document.querySelector("#boton__encriptar");
const botonDesencriptar = document.querySelector("#boton__desencriptar");
const divEncriptador = document.querySelector("#a");

// Evento para encriptar el texto
botonEncriptar.addEventListener("click", function() {
    const texto = inputTexto.value;
    if (texto === texto.toLowerCase() && /^[a-z\s]+$/.test(texto)) { // Verifica que solo haya letras minúsculas y espacios
        const textoEncriptado = encriptarTexto(texto);
        divEncriptador.innerHTML = `
            <p>${textoEncriptado}</p>`;
        resultadoTexto.textContent = textoEncriptado;
    } else {
        alert("El texto debe contener solo letras minúsculas y sin acentos ni caracteres especiales.");
    }
});

// Evento para desencriptar el texto
botonDesencriptar.addEventListener("click", function() {
    const texto = inputTexto.value;
    if (texto === texto.toLowerCase() && /^[a-z\s]+$/.test(texto)) { // Verifica que solo haya letras minúsculas y espacios
        const textoDesencriptado = desencriptarTexto(texto);
        divEncriptador.innerHTML = `
            <p>${textoDesencriptado}</p>
        </div>
    `;
    resultadoTexto.textContent = textoEncriptado;
        resultadoTexto.textContent = textoDesencriptado;
    } else {
        alert("El texto debe contener solo letras minúsculas y sin acentos ni caracteres especiales.");
    }
});



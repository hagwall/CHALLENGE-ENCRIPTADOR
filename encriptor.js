function cifrarTexto(){
    
    let texto = document.getElementById("areaUno").value;
    
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    //document.getElementById("areaUno").value="";
    document.getElementById("areaDos").innerHTML = textoCifrado;

    
    console.log(textoCifrado)
}
//document.getElementById('btn1').onclick = cifrarTexto();

function descifrarTexto(){
    
    let texto = document.getElementById("areaUno").value;
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    //document.getElementById("areaDos").value="";
    document.getElementById("areaDos").innerHTML = textoCifrado;
    console.log(textoCifrado)


}
function btnCopiar(){
    let dato = document.getElementById("areaDos");
    let boton = document.getElementById("btnCopiar");
     navigator.clipboard.writeText(dato.textContent);
     boton.textContent='COPIADO';
}

//cifrarTexto(texto)

//descifrarTexto("hoberlai mufatndober qufatenter tail")*/
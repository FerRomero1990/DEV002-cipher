import cipher from './cipher.js';

document.getElementById("descubrimientoACifrar").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
});
document.getElementById("cifrar").addEventListener("click", function () {
    let texto = document.getElementById("descubrimientoACifrar").value;
    let desplazamiento = document.getElementById("cifrasADesplazar").value;
    document.getElementById("descubrimientoCifrado").value = cipher.encode(texto, desplazamiento);
});
document.getElementById("descifrar").addEventListener("click", function () {
    let texto = document.getElementById("descubrimientoACifrar").value;
    let desplazamiento = document.getElementById("cifrasADesplazar").value;
    console.log(cipher.decode(texto, desplazamiento))
    document.getElementById("descubrimientoCifrado").value = cipher.decode(texto, desplazamiento);
});


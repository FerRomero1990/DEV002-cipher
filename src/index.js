import cipher from './cipher.js';

document.getElementById("descubrimientoACifrar").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
});
document.getElementById("cifrar").addEventListener("click", function () {
    let desplazamiento = document.getElementById("cifrasADesplazar").value;
    let texto = document.getElementById("descubrimientoACifrar").value;
    document.getElementById("descubrimientoCifrado").value = cipher.encode(desplazamiento, texto);
});
document.getElementById("descifrar").addEventListener("click", function () {
    let desplazamiento = document.getElementById("cifrasADesplazar").value;
    let texto = document.getElementById("descubrimientoACifrar").value;
    document.getElementById("descubrimientoCifrado").value = cipher.decode(desplazamiento, texto);
});

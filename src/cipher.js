const cipher = {
    encode:function (texto, desplazamiento) {
        let resultado = ""
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        desplazamiento = (desplazamiento % 26 + 26) % 26;

        //if (texto()){
          //  throw new TypeError('descubrimientoACifrar', cipher.js, 8)
        //}

        if (texto) {
            for (let i = 0; i < texto.length; i++) {
                if (abc.indexOf(texto[i]) != -1) {
                    let posicion = ((abc.indexOf(texto[i]) + desplazamiento) % 26);
                    resultado += abc[posicion];
                }
                else{
                    resultado += texto[i];}
            }
        }
        return resultado;
        //if(this.encode()){
        //    throw new TypeError('Escribe tu descubrimiento', cipher.js, 23)
        //}
    },
    decode:function (texto, desplazamiento) {
        let resultado = ""
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        desplazamiento = (desplazamiento % 26 - 26) % 26;

        //if(texto()){
        //    throw new TypeError('descubrimientoCifrado', cipher.js,30)
        //}

        if (texto) {
            for (let i = 0; i < texto.length; i++) {
                if (abc.indexOf(texto[i]) != -1) {
                    let posicion = ((abc.indexOf(texto[i]) - desplazamiento) % 26);
                    resultado += abc[posicion];
                }
                else{
                    resultado += texto[i];}
            }
        }
        return resultado;
    },
}
export default cipher;

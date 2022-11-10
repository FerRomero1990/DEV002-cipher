const cipher = {
    encode:function (desplazamiento, texto) {

        if (!desplazamiento ){
          throw new TypeError('Escribe tu desplazamiento')
        }
        if (!texto){
            throw new TypeError('Escribe tu descubrimiento')
        }
        
        let resultado = "";
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        desplazamiento = (desplazamiento % 26 + 26) % 26;      

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
    decode:function (desplazamiento, texto) {
        let resultado = "";
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        desplazamiento = (desplazamiento % 26 - 26) % 26;

        if (!desplazamiento ){
            throw new TypeError('Escribe tu desplazamiento')
          }
        if (!texto){
              throw new TypeError('Escribe tu descubrimiento')
          }
      
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

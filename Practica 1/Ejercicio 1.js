function miFuncion(texto){
    let obj = {a:0, e:0, i:0, o:0, u:0};

    texto = texto.toLowerCase();

    for(let i = 0; i < texto.length; i++){
        let letra = texto[i];

        if(obj[letra] !== undefined){
            obj[letra]++;
        }
    }

    return obj;
}

let obj = miFuncion("euforia");
console.log(obj);

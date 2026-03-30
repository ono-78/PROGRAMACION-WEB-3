function miFuncion(cad){
    let invertido = "";

    for(let i = cad.length - 1; i >= 0; i--){
        invertido += cad[i];
    }

    if(cad === invertido){
        return true;
    }else{
        return false;
    }
}

let band = miFuncion("oruro");
console.log(band);

band = miFuncion("hola");
console.log(band);

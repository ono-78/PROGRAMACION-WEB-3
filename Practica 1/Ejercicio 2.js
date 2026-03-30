function miFuncion(cad){
    let invertido = "";

    for(let i = cad.length - 1; i >= 0; i--){
        invertido = invertido + cad[i];
    }

    return invertido;
}

let cad = miFuncion("abcd");
console.log(cad);

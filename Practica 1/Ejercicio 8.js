function ejecutarCallback(callback){
    setTimeout(() => {
        callback();
    }, 2000);
}

function miFuncion(){
    console.log("Se ejecutó el callback");
}

ejecutarCallback(miFuncion);

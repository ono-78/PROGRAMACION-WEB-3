function funcionCallback(callback){
    setTimeout(() => {
        callback("Resultado");
    }, 1000);
}

function convertirAPromesa(){
    return new Promise((resolve) => {
        funcionCallback((res) => {
            resolve(res);
        });
    });
}

convertirAPromesa().then((res) => {
    console.log(res);
});

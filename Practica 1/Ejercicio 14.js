function conCallback(callback){
    let promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola desde promesa");
        }, 1000);
    });

    promesa.then((res) => {
        callback(res);
    });
}

conCallback((mensaje) => {
    console.log(mensaje);
});

function obtenerDatos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}

// Con async/await
async function mostrar(){
    let res = await obtenerDatos();
    console.log(res);
}

mostrar();

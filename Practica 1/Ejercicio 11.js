function paso1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 1");
        }, 1000);
    });
}

function paso2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 2");
        }, 1000);
    });
}

paso1()
.then((res) => {
    console.log(res);
    return paso2();
})
.then((res) => {
    console.log(res);
});

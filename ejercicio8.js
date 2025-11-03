function generarContraseñas(){
    let contraseña="";
    for(let i=0; i<6; i++){
        contraseña+=parseInt(Math.random()*10);
    }
    return contraseña;
}
console.log(generarContraseñas());
function gradosARadianes(grados){
    let radianes=grados*(Math.PI / 180);
    console.log(Math.sin(radianes));
    console.log(Math.cos(radianes));
    return radianes;
}
function radianesAGrados(radianes){
    let grados=radianes*(180/ Math.PI);
    return grados;
}
console.log(gradosARadianes(45));
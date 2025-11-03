let calificaciones= [11, 20, 14, 15, 8, 17, 18];
let notaMaxima= Math.max(...calificaciones);
for(let i=0; i<calificaciones.length; i++){
    calificaciones[i]/=notaMaxima;
}
console.log(calificaciones);
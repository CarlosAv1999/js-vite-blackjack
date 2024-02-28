
export const determinarGanador = (puntosJugadores) =>{
      
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert("nadie gana");
        } else if (puntosMinimos > 21) {
            alert("Computadora gana");
        } else if (puntosComputadora > 21) {
            alert("juagor gana");
        } else {
            alert("computadora gana");
        }

    }, 100);
}
import { pedirCarta } from "./pedir-carta";
import { crearCartaHTML } from "./crear-carta";
import { acumularPuntos } from "./acumular-puntos";
import { determinarGanador } from "./determinar-ganador";

/**
 * Esta funcion controla el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck deck de cartas
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, marcador, divCartasJugador) => {
    if ( !puntosMinimos ) throw new console.error("PuntosMinimos son necesesarios");
    // if ( !deck ) throw new console.error("deck es necesario");
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1, puntosJugadores, marcador) 
        crearCartaHTML(carta, puntosJugadores.length -1, divCartasJugador);

    } while ((puntosMinimos > puntosComputadora) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}
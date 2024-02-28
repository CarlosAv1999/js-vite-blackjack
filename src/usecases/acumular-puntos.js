import { valorCarta } from "./valor-carta";

export const acumularPuntos = (carta,  turno, puntosJugadores, marcador) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    marcador[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
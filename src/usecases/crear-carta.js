
export const crearCartaHTML = (carta, turno, divCartasJugador) => {
    const cartaHTML = document.createElement("img");
    cartaHTML.src = `assets/cartas/${carta}.png`;
    cartaHTML.classList.add("carta");
    divCartasJugador[turno].append(cartaHTML);
};
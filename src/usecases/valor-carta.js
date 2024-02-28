
/**
 * Esta funcion regresa el valor de una carta
 * @param { String} carta 
 * @returns {Number}
 */
export const valorCarta = (carta) => {
    if (!carta) throw new console.error("carta es obligatorio");
    let puntos = 0;
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        puntos = (valor === "A") ? 11 : 10
        : puntos = valor * 1;

}
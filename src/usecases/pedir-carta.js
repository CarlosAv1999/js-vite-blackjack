
/**
 * Esta funcion toma una carta del deck
 * @param { Array<String>} deck 
 * @returns {String}
 */

export const pedirCarta = ( deck ) => {

    if (!deck ) throw new Error("deck es obligatorio y debe tener cartas en el deck");
    
    const carta = deck.pop();
    return carta;
}
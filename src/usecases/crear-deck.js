import _ from 'underscore';

// export const miNombre = 'fernando';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array} 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if ( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
        //deck.push(i +"C");
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }
    deck = _.shuffle( deck );

    return deck;
}

//  export default crearDeck;
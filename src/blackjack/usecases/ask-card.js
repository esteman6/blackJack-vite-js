/**
 * Esta funcion obtiene la ultima carta de la baraja y la retorna, retirandola de la misa
 * @param {Array<string>} deck
 * @returns string Retorna la carta obtenida
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
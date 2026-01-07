/**
 * Esta funcion determina el valor numerico de la carta obtenida
 * @param {string} carta Ejemplo '6C'
 * @returns {number} Retorna valor numerico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
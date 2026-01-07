/**
 * Esta funcion genera el html de la carta obtenida
 * @param {HTMLElement} divCarta Elemento html en el que se creara la imagen de la carta
 * @param {string} carta Ejemplo: '3H'
 */
export const crearCartaHTML = (divCarta, carta) => {

    if( !carta ) throw new Error('La carta es un elemento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCarta.append( imgCarta );
}
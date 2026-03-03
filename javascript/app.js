import { Producto } from "./Producto.js";

//Variables globales
const listProduct = [];
const cards = document.querySelectorAll('.card');

//Obtener los datos del localStorage
function getLocalStorage() {
    return localStorage.getItem('Producto');
}

function jsonParse(value) {
    return JSON.parse(value);
}


//Recorrer las cards
cards.forEach((card, index) => {

    //Boton de cada card
    const btnSave = card.querySelector('.btn-add');

    //Evento para añadir a Whislist
    btnSave.addEventListener('click', ()=> {
        //Declaracion de variables
        const nameProduct = card.querySelector('.name-product').textContent.trim();
        const description = card.querySelector('.description').textContent.trim();
        const price = card.querySelector('.price').textContent.trim();
        const image = document.querySelector('.image').src;

        //Crear objeto y agregar al array
        let producto = new Producto(index + 1, nameProduct, description, price, image);
        listProduct.push(producto);

        

        if(btnSave.textContent === "❤️ En tu Wishlist") {
            btnSave.textContent = "Añadir a Whislist";
            
        } else {

            //Agregar al localStorage
            localStorage.setItem('Producto', JSON.stringify(listProduct));

            //Hoja de estilos para que funcione
            btnSave.textContent = "❤️ En tu Wishlist";
            btnSave.style.marginTop = '10px';
            btnSave.style.backgroundColor = 'var(--dark-green)';
            btnSave.style.padding = '10px 50px 10px 50px';
            btnSave.style.color = 'var(--razzmatazz)';
            btnSave.style.border = 'none';
            btnSave.style.fontWeight = 'bold';
            btnSave.style.fontSize = '13.3333px';
            btnSave.style.fontFamily = 'Arial';
            btnSave.style.borderRadius = '3px';    
        }

        const mano = getLocalStorage();
        console.log('probando: ', mano);
    });
})

window.addEventListener('load', ()=> {
    const mano = getLocalStorage();
    console.log('probando: ', mano);
});
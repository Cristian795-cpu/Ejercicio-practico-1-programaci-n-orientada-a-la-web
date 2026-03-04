import { Producto } from "./Producto.js";

//Variables globales
let listProduct = [];
const cards = document.querySelectorAll('.card');

//Recorrer las cards
cards.forEach((card, index) => {

    //Boton de cada card
    const btnSave = card.querySelector('.btn-add');

    const contador = document.querySelector('.contador');
    contador.innerHTML = `<p>contador: 0</p>`

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

            //nueva lista sin el producto que se va a eliminar
            const lista = listProduct.filter(nodo => nameProduct !== nodo.getNombre);
            listProduct = lista;

            contador.innerHTML = `<p>contador: ${listProduct.length}</p>`;
            btnSave.textContent = "Añadir a Whislist";  
        }else { 
                //Actualizar el contador
                contador.innerHTML = `<p>contador: ${listProduct.length}</p>`;

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

        //Agregar al localStorage
        localStorage.setItem('Producto', JSON.stringify(listProduct));
    });
})

const vaciar = document.querySelector('.delete');

vaciar.addEventListener('click', (e)=> {
    e.preventDefault();
    listProduct = [];
    const contador = document.querySelector('.contador');
    contador.innerHTML = `<p>contador: ${listProduct.length}</p>`

    localStorage.setItem('Producto', JSON.stringify(listProduct));
});
export class Producto {
    constructor(id, nombre, descripcion, precio, urlImage) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.urlImage = urlImage;
    }

    set setId(id) {
        this.id = id;
    }

    get getId() {
        return this.id;
    }

    set setNombre(id) {
        this.nombre = this.nombre;
    }

    get getNombre() {
        return this.nombre;
    }

    set setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setPrecio(precio) {
        this.precio = precio;
    }

    get getPrecio() {
        return this.precio;
    }

    set setUrlImage(urlImage) {
        this.urlImage = urlImage;
    }

    get getUrlImage() {
        return this.urlImage;
    }
}
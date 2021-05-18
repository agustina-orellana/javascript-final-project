let productos = [];
class Clothes {
    constructor(genero, tipo, precio, talle, marca){
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio;
        this.talle = talle;
        this.marca = marca;
    }
};

class Shoes {
    constructor(genero, precio, talle, marca){
        this.genero = genero;
        this.precio = precio;
        this.talle = talle;
        this.marca = marca;
    }
};

let remera = new Clothes('mujer','top', 3500, 'xl', 'nike');
productos.push(remera);

let pantalon = new Clothes('hombre', 'bottom', 4500, 'm', 'adidas');
productos.push(pantalon);

let zapatilla = new Shoes('infantil', 6000, 23, 'reebok');
productos.push(zapatilla);

let sandalias = new Shoes('mujer', 8000, 39, 'sarkany');
productos.push(sandalias);


let saludo = prompt('Hola, por favor dinos tu nombre');
alert('Bienvenido/a ' + saludo + ' a Sport House');



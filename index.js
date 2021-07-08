let carrito = [];
let products = [];


class Clothes {
    constructor( title, genere, type, price, size, brand, img){
        this.title = title;
        this.genere = genere;
        this.type = type;
        this.price = price;
        this.size = size;
        this.brand = brand;
        this.img = img;
    }
};

class Shoes {
    constructor( title, genere, price, size, brand, img){
        this.title = title;
        this.genere = genere;
        this.price = price;
        this.size = size;
        this.brand = brand;
        this.img = img;
    }
};
let buzo = new Clothes('buzo', 'mujer', 'top', 8000, 'l', 'nike', 'https://res.cloudinary.com/dooiy35ve/image/upload/v1619996496/Sport%20House/NI_CJ3115-100-1_ixidnh.jpg' );
products.push(buzo);

let remera = new Clothes('remera', 'mujer', 'top', 3500, 'xl', 'nike', 'https://res.cloudinary.com/dooiy35ve/image/upload/v1619996513/Sport%20House/remera-mujer_laohet.jpg');
products.push(remera);

let pantalon = new Clothes('pantalon', 'hombre', 'bottom', 4500, 'm', 'adidas', 'https://res.cloudinary.com/dooiy35ve/image/upload/v1619996507/Sport%20House/pantalon-h_yopz45.jpg');
products.push(pantalon);

let zapatilla = new Shoes('zapatilla', 'infantil', 6000, 23, 'reebok', 'https://res.cloudinary.com/dooiy35ve/image/upload/v1619996542/Sport%20House/Zapatilla-nikeM_pnwgs5.jpg');
products.push(zapatilla);

let sandalias = new Shoes('sandalia', 'mujer', 8000, 39, 'sarkany', 'https://res.cloudinary.com/dooiy35ve/image/upload/v1619996533/Sport%20House/zapatilla-adidas-ni%C3%B1a_ltgffp.jpg');
products.push(sandalias);

let aux =``;
for(let i = 0; i < products.length; i++){
    aux += `<div class="card col-lg-3" style="margin: 2rem;">
    <img src=${products[i].img}>
    <div class="card-body">
        <h5 class="card-title">${products[i].title} ${products[i].brand}</h5>
        <p class="card-text">$${products[i].price}</p>
        <button type="button" class="btn btn-danger" onclick='addToCart(${JSON.stringify(products[i])})'>
        Añadir al carrito
        </button>
        <button type="button" id="btn1" class="btn btn-dark" onclick='removeItem(${JSON.stringify(products[i])})'>
         Eliminar 
        </button>
        </div>
    </div>
    `; 
    //document.getElementById("card").innerHTML = aux;

    // jquery //
    $("#card").html(aux);

};

let dataMujer = [] ;
$.get('json/datamujer.json', function(res, rejected){
    for(let i = 0; i < res.length; i++){
        dataMujer.push(res[i])
    }

    let auxMujer = ``;
    for(let i = 0; i < dataMujer.length; i++){
        auxMujer += `<div class="card col-lg-3" style="margin: 2rem;">
        <img src=${dataMujer[i].img}>
        <div class="card-body">
            <h5 class="card-title">${dataMujer[i].title} ${dataMujer[i].brand}</h5>
            <p class="card-text">$${dataMujer[i].price}</p>
            <button type="button" class="btn btn-danger" onclick='addToCart(${JSON.stringify(dataMujer[i])})'>
            Añadir al carrito
            </button>
            <button type="button" id="btn1" class="btn btn-dark" onclick='removeItem(${JSON.stringify(dataMujer[i])})'>
            Eliminar 
            </button>
            </div>
        </div>
        `;

        $("#card-women").html(auxMujer);
    }

});
let dataHombre = [] ;
$.get('json/datahombre.json', function(res, rejected){
    for(let i = 0; i < res.length; i++){
        dataHombre.push(res[i])
    }

    let auxHombre = ``;
    for(let i = 0; i < dataHombre.length; i++){
        auxHombre += `<div class="card col-lg-3" style="margin: 2rem;">
        <img src=${dataHombre[i].img}>
        <div class="card-body">
            <h5 class="card-title">${dataHombre[i].title} ${dataHombre[i].brand}</h5>
            <p class="card-text">$${dataHombre[i].price}</p>
            <button type="button" class="btn btn-danger" onclick='addToCart(${JSON.stringify(dataHombre[i])})'>
            Añadir al carrito
            </button>
            <button type="button" id="btn1" class="btn btn-dark" onclick='removeItem(${JSON.stringify(dataHombre[i])})'>
            Eliminar 
            </button>
            </div>
        </div>
        `;

        $("#card-men").html(auxHombre);
    }

});






function addToCart (product){
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito)
    $("#numero").html(`<h5>${carrito.length}</h5>`)

};

function removeItem(product){
    carrito = carrito.filter(item => item.title !== product.title);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

function emptyCart(){
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
 

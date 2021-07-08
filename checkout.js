let valores = JSON.parse(localStorage.getItem("carrito"));
let total = ``;

if (valores !== null) {
    let acc = 0;
    for(let i = 0; i < valores.length ; i++){
        acc = acc + valores[i].price
    }
    total += `<div >
            <li id="subtotal">${acc}</li>
            </div>
    `
}



let aux = ``;
for(let i = 0; i < valores.length ; i++){
        aux += `<div id="compras">
        <li id="list"><b>Producto:</b> ${valores[i].title}  ${valores[i].brand}</li>
        <li><img id="img-card" src=${valores[i].img}></li>
        <li><b>Precio:</b> $ ${valores[i].price}</li>
        <hr/>
        </div>
        `
}

$("#check").html(aux)
$("#total").html(total)
var produkt = [
    {id: 1, name: "Кофе"},
    {id: 2, name: "Чай"},
    {id: 3, name: "Сахар"}
];

let karta = [];

function produkts_disp(){
    let prlist = document.getElementById("produkty");

    produkt.forEach(product => {
        
        let prElement = document.createElement("button");
        prElement.textContent = product.name;
        prElement.onclick = 
        function() {addToCart(product);};

        produkty.appendChild(prElement);
    } )
}
function addToCart(product){
    cart.push(product);
    displayCart();
}

function displayCart(){
    let cartElement = document.getElementById("cart");
    let totarItmElement =document.getElementById("totalItm");

    cartElement.innerHTML = "";

    totarItmElement.textContent = cart.lenght;

    cart.forEach(product => {
       let itemElement
        
    })

}
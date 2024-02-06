const products = [
    {id: 1, name: "Кофе"},
    {id: 2, name: "Чай"},
    {id: 3, name: "Сахар"}
];

let cart = [];

function displayProducts(){
    const productList = document.getElementById("productList");

    products.forEach(product => {
        
        const productElement = document.createElement("button");
        productElement.textContent = product.name;
        productElement.onclick = 
        function() {addToCart(product);};

        productList.appendChild(productElement);
    } );
}
function addToCart(product){
    cart.push(product);
    displayCart();
}

function displayCart(){
    const cartElement = document.getElementById("cart");
    const totalItemsElement =document.getElementById("totalItems");

    cartElement.innerHTML = "";

    totalItemsElement.textContent = cart.lenght;

    cart.forEach(product => {
       const itemElement = document.createElement("li");
       itemElement.textContent = product.name;

       cartElement.appendChild(itemElement);
        
    });

    
}
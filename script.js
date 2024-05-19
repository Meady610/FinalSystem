const products = {
    1: { name: "Максым", description: "Максым красный вкусный.", price: "100с", image: "assets/Maksym.webp" },
    2: { name: "Чалап", description: "Чалап синий вкусный.", price: "100с", image: "assets/Chalap.webp" },
    3: { name: "Бозо", description: "Бозо оранжевое вкусное.", price: "100с", image: "assets/Bozo.webp" },
    4: { name: "Аралаш", description: "Аралаш серый вкусный.", price: "100с", image: "assets/Aralash.webp" },
    5: { name: "Тан", description: "Тан фиолетовый вкусный.", price: "100с", image: "assets/Tan.webp" },
    6: { name: "Жарма", description: "Жарма зеленый вкусный.", price: "100с", image: "assets/Zharma.webp" }
};

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function displayProductInfo(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('productImage').src = product.image;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = product.price;
    } else {
        document.getElementById('productInfo').innerHTML = '<p>Товар не найден.</p>';
    }
}

window.onload = function() {
    const productId = getProductIdFromUrl();
    if (productId) {
        displayProductInfo(productId);
    }
};

const addToCartButton = document.getElementById('tocart');
if (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
        alert('Товар добавлен в корзину!');
    });
}
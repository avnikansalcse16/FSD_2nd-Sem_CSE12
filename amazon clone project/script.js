let cartCount = 0;
let totalPrice = 0;

function addToCart(productName, price) {

    cartCount++;

    totalPrice += price;

    document.getElementById("cartCount").innerHTML =
    cartCount;

    document.getElementById("totalPrice").innerHTML =
    totalPrice;

    let cartItems =
    document.getElementById("cartItems");

    let li =
    document.createElement("li");

    li.innerHTML =
    `
    ${productName} - ₹${price}

    <button class="remove-btn">
        Remove
    </button>
    `;

    li.querySelector("button").onclick = function () {

        li.remove();

        cartCount--;

        totalPrice -= price;

        document.getElementById("cartCount").innerHTML =
        cartCount;

        document.getElementById("totalPrice").innerHTML =
        totalPrice;
    };

    cartItems.appendChild(li);
}

function clearCart() {

    document.getElementById("cartItems").innerHTML = "";

    cartCount = 0;

    totalPrice = 0;

    document.getElementById("cartCount").innerHTML = 0;

    document.getElementById("totalPrice").innerHTML = 0;
}

function searchProduct() {

    let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let cards =
    document.getElementsByClassName("card");

    for(let i = 0; i < cards.length; i++) {

        let productName =
        cards[i]
        .getElementsByTagName("h3")[0];

        let textValue =
        productName.textContent || productName.innerHTML;

        if(textValue.toLowerCase().indexOf(input) > -1) {

            cards[i].style.display = "";

        }

        else {

            cards[i].style.display = "none";
        }
    }
}
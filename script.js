$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

window.addEventListener('scroll', function() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');

searchBtn.onclick = function() {
    document.getElementById("search-form").classList.toggle('active');

    if (document.getElementById("search-form").classList.contains('active')) {
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    } else {
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }

}

cartBtn.onclick = function() {
    document.getElementById("cart").classList.toggle('active');
    if (document.getElementById("cart").classList.contains('active')) {
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    } else {
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}

darkBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");
    } else {
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");
    }
}

let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {

        const target = e.target.getAttribute("data-target");

        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add("active");
        let menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");
        menuSection.querySelector(target).classList.add("show");
    } else {
        return
    }
})

$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        const heartIcon = button.querySelector('i');

        button.addEventListener('click', function() {
            button.classList.toggle('favorited');

            if (button.classList.contains('favorited')) {
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas'); // Solid heart
            } else {
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far'); // Outline heart
            }
        });
    });
});

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener("click", removecartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }
}

function removecartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("dish-details")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("food-img")[0].src;
    addProductToCart(details, price, food - img);
    updatetotal();
}



function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("RS", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
        document.getElementsByClassName("total-price")[0].innerText = "RS" + total;
    }
}
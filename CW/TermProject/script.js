let gameType = "csgo";
let currency = "usd";
let lang = "en";
let minPrice = 0;
let maxPrice = 0;
let cartArray = [];
var cartSizeDiv = document.querySelector("#cart-size");
var mobileCartSpan = document.querySelector("#mobile-cart-size");
var cardDiv = document.querySelector("#cart-grid-div");
var cartTotal = document.querySelector("#cart-total");

const itemArray =
    [
        {
            id: 1,
            game: "csgo",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: 1300,
            img: "assets/itemImages/csgo/bayonet-doppler.png",
        },
        {
            id: 2,
            game: "csgo",
            name: "AWP",
            secondName: "Dragon Lore",
            rarity: "Covert",
            price: 1400,
            img: "assets/itemImages/csgo/dragon-lore.png",
        },
        {
            id: 3,
            game: "csgo",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: 1250,
            img: "assets/itemImages/csgo/howl.png",
        },
        {
            id: 4,
            game: "csgo",
            name: "AWP",
            secondName: "Gungnir",
            rarity: "Covert",
            price: 1900,
            img: "assets/itemImages/csgo/gungnir.png",
        },
        {
            id: 5,
            game: "csgo",
            name: "Butterfly Knife",
            secondName: "Fade",
            rarity: "Covert",
            price: 2000,
            img: "assets/itemImages/csgo/butterfly-fade.png",
        },
        {
            id: 6,
            game: "csgo",
            name: "Butterfly Knife",
            secondName: "Ruby",
            rarity: "Covert",
            price: 131100,
            img: "assets/itemImages/csgo/howl.png",
        },
        {
            id: 7,
            game: "csgo",
            name: "Gloves",
            secondName: "Crimson Web",
            rarity: "Covert",
            price: 3500,
            img: "assets/itemImages/csgo/crimson.png",
        },
        {
            id: 8,
            game: "csgo",
            name: "karambit Knife",
            secondName: "Ruby",
            rarity: "Covert",
            price: 5000,
            img: "assets/itemImages/csgo/karambit-ruby.png",
        },
        {
            id: 9,
            game: "csgo",
            name: "M4A4",
            secondName: "karambit Knife",
            rarity: "Lore",
            price: 2300,
            img: "assets/itemImages/csgo/lore.png",
        },
        {
            id: 10,
            game: "csgo",
            name: "Gloves",
            secondName: "Vice",
            rarity: "Covert",
            price: 6780,
            img: "assets/itemImages/csgo/vice.png",
        },

        {
            id: 11,
            game: "dota2",
            name: "Mirana",
            secondName: "Axia of Metira",
            rarity: "",
            price: 92,
            img: "assets/itemImages/dota2/axia.png",
        },
        {
            id: 12,
            game: "dota2",
            name: "Pudge",
            secondName: "Dragonclaw Hook",
            rarity: "",
            price: 190,
            img: "assets/itemImages/dota2/claw.png",
        },
        {
            id: 13,
            game: "dota2",
            name: "Juggernaut",
            secondName: "Belt of the Bladeform Aesthete",
            rarity: "",
            price: 66,
            img: "assets/itemImages/dota2/blade.png",
        },
        {
            id: 14,
            game: "dota2",
            name: "Juggernaut",
            secondName: "Genuine Kantusa the Script Sword",
            rarity: "",
            price: 78,
            img: "assets/itemImages/dota2/kantusa.png",
        },
        {
            id: 15,
            game: "dota2",
            name: "Anti-Mage",
            secondName: "Hair of the Survivor",
            rarity: "",
            price: 53,
            img: "assets/itemImages/dota2/hair.png",
        },
        {
            id: 16,
            game: "dota2",
            name: "Terrorblade",
            secondName: "Fractal Horns of Inner Abysm",
            rarity: "Covert",
            price: 33,
            img: "assets/itemImages/dota2/fractal.png",
        },


        {
            id: 17,
            game: "tf2",
            name: "",
            secondName: "Mann Co. Supply Crate Key",
            rarity: "",
            price: 1.82,
            img: "assets/itemImages/tf2/key.png",
        },
        {
            id: 18,
            game: "tf2",
            name: "",
            secondName: "Strange Professional Killstreak Kritzkrieg",
            rarity: "",
            price: 390,
            img: "assets/itemImages/tf2/kritz.png",
        },
        {
            id: 19,
            game: "tf2",
            name: "",
            secondName: "Unusual Alakablamicon",
            rarity: "",
            price: 88,
            img: "assets/itemImages/tf2/alaka.png",
        },
        {
            id: 20,
            game: "tf2",
            name: "",
            secondName: "Unusual Vive La France",
            rarity: "",
            price: 45,
            img: "assets/itemImages/tf2/france.png",
        },
        {
            id: 21,
            game: "tf2",
            name: "",
            secondName: "Unusual Lawnmaker",
            rarity: "",
            price: 29,
            img: "assets/itemImages/tf2/lawn.png",
        },


        {
            id: 23,
            game: "rust",
            name: "",
            secondName: "Tempered Mask",
            rarity: "",
            price: 110,
            img: "assets/itemImages/rust/mask.png",
        },
        {
            id: 24,
            game: "rust",
            name: "",
            secondName: "Alien Red",
            rarity: "",
            price: 222,
            img: "assets/itemImages/rust/red.png",
        },
        {
            id: 25,
            game: "rust",
            name: "",
            secondName: "Plate Carrier - Black",
            rarity: "",
            price: 123,
            img: "assets/itemImages/rust/vest.png",
        },
        {
            id: 26,
            game: "rust",
            name: "",
            secondName: "No Mercy Jacket",
            rarity: "",
            price: 33,
            img: "assets/itemImages/rust/jacket.png",
        },
        {
            id: 27,
            game: "rust",
            name: "",
            secondName: "Tempered SAR",
            rarity: "",
            price: 53,
            img: "assets/itemImages/rust/sar.png",
        },
        {
            id: 28,
            game: "rust",
            name: "",
            secondName: "Glory Thompson",
            rarity: "",
            price: 33,
            img: "assets/itemImages/rust/thompson.png",
        },

    ];



function createItems() {
    var div = document.querySelector("#main-col .card-layout");
    div.innerHTML = '';
    itemArray.forEach(item => {
        div.innerHTML = div.innerHTML
            + cardItem(item.img, item.name, item.secondName, item.rarity, item.price, item.id);
    });
}

function filterItemName(type) {
    var div = document.querySelector("#main-col .card-layout");
    div.innerHTML = '';
    itemArray.filter(item => item.game == type)
        .forEach(item => {
            div.innerHTML = div.innerHTML
                + cardItem(item.img, item.name, item.secondName, item.rarity, item.price, item.id);
        });
}

function filterByPrice() {
    if (minPrice < maxPrice) {
        var div = document.querySelector("#main-col .card-layout");
        div.innerHTML = '';
        itemArray.filter(item => item.game == gameType && item.price >= minPrice && item.price <= maxPrice)
            .forEach(item => {
                div.innerHTML = div.innerHTML
                    + cardItem(item.img, item.name, item.secondName, item.rarity, item.price, item.id);
            });
    }
}

function cardItem(img, name, secondName, rarity, price, id) {
    return `
    <div class="item-card">
        <div class="item-container">
            <div class="item-top"></div>
            <div class="image-wrapper">
                <div class="image">
                    <img class="item-img" src="${img}">
                </div>
            </div>
            <div class="item-info-wrapper">
                <div class="item-name-wrapper">
                    <div class="item-name">${name}</div>
                    <div class="item-second-name">${secondName}</div>
                    <div class="item-rarity">${rarity}</div>
                    <div class="item-price"><span>$ </span>${price}</div>
                    <div class="item-id" style="display: none;">${id}</div>
                </div>
            </div>
            <div class="button-wrapper">
            <div class="market-buttons">
                <button class="buy-now-button">Buy Now</button>
                <button id=${id} class="add-cart-button" onclick="addTocart(this)">
                    <img id="button_ic" src="assets/cart.png">
                </button>
            </div>
        </div>
        </div>
    </div>
`
}

function openNav() {
    document.querySelector("#mobile-filter").style.width = "70%";
}

function closeNav() {
    document.querySelector("#mobile-filter").style.width = "0px";
}

function openMobileNav() {
    document.getElementById("mobile-nav-left").style.width = "100%";
}

function closeMobileNav() {
    document.getElementById("mobile-nav-left").style.width = "0";
}

function filterEventListeners() {
    let filterMin = document.querySelector("#main-col #minPrice");//desktop slider min
    let filterMax = document.querySelector("#main-col #maxPrice");
    let filterFrom = document.querySelector("#from");
    let filterTo = document.querySelector("#to");

    let mobilefilMin = document.querySelector("#mobile-filter-inner #minPrice");//mobile slider min
    let mobilefilMax = document.querySelector("#mobile-filter-inner #maxPrice");
    let mobilefilFrom = document.querySelector("#mobileFrom");
    let mobilefilTo = document.querySelector("#mobileTo");

    filterMin.addEventListener('input', function () {
        filterFrom.value = filterMin.value;
        minPrice = filterMin.value;
    }, false);

    filterMax.addEventListener('input', function () {
        filterTo.value = filterMax.value;
        maxPrice = filterMax.value;
    }, false);

    mobilefilMin.addEventListener('input', function () {
        mobilefilFrom.value = mobilefilMin.value;
        minPrice = mobilefilMin.value;
    }, false);

    mobilefilMax.addEventListener('input', function () {
        mobilefilTo.value = mobilefilMax.value;
        maxPrice = mobilefilMax.value;
    }, false);
}

function mobileResetFilter() {
    document.querySelector("#mobile-filter-inner #minPrice").value = 0;//mobile slider min
    document.querySelector("#mobile-filter-inner #maxPrice").value = 0;//mobile slider max
    document.querySelector("#mobileFrom").value = 0;
    document.querySelector("#mobileTo").value = 0;
    filterItemName(gameType);
}

function mainResetFilters() {
    document.querySelector("#main-col #minPrice").value = 0;//desktop slider min
    document.querySelector("#main-col #maxPrice").value = 0;
    document.querySelector("#from").value = 0;
    document.querySelector("#to").value = 0;
    filterItemName(gameType);
}

function initialValues() {
    document.querySelector("#from").value = 0;
    document.querySelector("#to").value = 0;
    document.querySelector("#mobileFrom").value = 0;
    document.querySelector("#mobileTo").value = 0;
    localStorage.setItem("balance", 12500);
}

function chooseGame(type) {
    if (type === 0) {
        gameType = "tf2";
    }
    if (type === 1) {
        gameType = "csgo";
    }
    if (type === 2) {
        gameType = "dota2";
    }
    if (type === 3) {
        gameType = "rust";
    }
    filterItemName(gameType);
}

function searchItem(e) {
    var div = document.querySelector("#main-col .card-layout");
    div.innerHTML = '';
    itemArray.filter(item => item.game == gameType
        && ((item.name.toLowerCase().indexOf(e.value) > -1)
            || (item.secondName.toLowerCase().indexOf(e.value) > -1)
            || item.name.includes(e.value)
            || item.secondName.includes(e.value)))
        .forEach(item => {
            div.innerHTML = div.innerHTML
                + cardItem(item.img, item.name, item.secondName, item.rarity, item.price);
        });
}

function sortTabIcon(sort) {
    let sortedArray = [...itemArray];
    let icon = document.querySelector("#sortPrice");
    var div = document.querySelector("#main-col .card-layout");
    div.innerHTML = '';

    if (sort == "asc") {
        icon.src = "assets/up.png";
        sortedArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } if (sort == "desc") {
        icon.src = "assets/down.png";
        sortedArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    sortedArray.filter(e => e.game == gameType)
        .forEach(item => {
            div.innerHTML = div.innerHTML
                + cardItem(item.img, item.name, item.secondName, item.rarity, item.price);
        });
}

function changeCurrency(cur) {
    let icon = document.querySelector("#currency-button #drop-left-icon");
    if (cur == 0) {
        currency = "eur";
        icon.src = "assets/eur.PNG"
    }
    if (cur == 1) {
        currency = "usd";
        icon.src = "assets/usd.PNG"
    }
    if (cur == 2) {
        currency = "try";
        icon.src = "assets/try.PNG"
    }
}

function changeLang(lang) {
    let icon = document.querySelector("#lang-button #drop-left-icon");
    if (lang == 0) {
        lang = "en";
        icon.src = "assets/flag-en.PNG"
    }
    if (lang == 1) {
        lang = "tr";
        icon.src = "assets/flag-tr.PNG"
    }

}

function modalEvents() {
    var modal = document.getElementById("deskModal");
    var deskCartButton = document.querySelector("#cart-button");
    var mobileCartButton = document.querySelector("#mobile-cart-button");
    var span = document.getElementsByClassName("close")[0];

    mobileCartButton.onclick = function () {
        modal.style.display = "block";
    }

    deskCartButton.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//Item info
function getItem(itemId) {
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].id == parseInt(itemId)) return itemArray[i];
    }
    return null;
}

function checkSameItem(itemId) {
    return cartArray.includes(itemId);
}

//Cart operations
function addTocart(button) {
    var item = getItem(button.id);
    if (!checkSameItem(item.id)) {
        addToLocalStorage(item.id);
        calculateCost(item);
        setTotalCost();
        addCartDiv(item);
        updateCartSize();
    }
}

function removeAll() {
    cardDiv.innerHTML = '';
    cartTotal.innerHTML = 0;
    localStorage.setItem("cartSize", 0);
    localStorage.setItem("totalCost", 0);
    cartSizeDiv.innerHTML = getCartCount();
    cartArray = [];
    localStorage.setItem("cartItemId", JSON.stringify(cartArray));
    getItemsInCart();
}

function cartPurchase() {
    var balance = getBalance();
    var cartSize = getCartCount();
    var cost = getCartCost();
    var parsedBalance;
    var parsedSize;
    var parsedCost;

    if (balance == undefined) return;
    if (cartSize == undefined) return;
    if (cost == undefined) return;
    parsedBalance = parseInt(balance);
    parsedSize = parseInt(cartSize);
    parsedCost = parseInt(cost);

    if (parsedBalance == 0) return;
    if (parsedSize == 0) return;
    if (parsedBalance < parsedCost) return;
    if (parsedBalance >= parsedCost) {
        decreaseBalance(parsedCost);
        setTotalBalance();
        removeAll();
        alert("Thank You For Your Purchase");
    }
}

function removeFromCart(button) {
    var clicked_element = button;
    var count = getCartCount();
    if (count > 0) {
        getLocalIds();
        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i] == parseInt(clicked_element.id)) {
                var item = getItem(cartArray[i]);
                decreaseCost(item.price);
                cartArray = deleteCartArrayItem(cartArray[i])
                updateCartStorage();
                clearCart();
                decreaseCartSize();
                setTotalCost();
                getItemsInCart();

            }
        }
    }
}

function updateCartStorage() {
    localStorage.setItem("cartItemId", JSON.stringify(cartArray));
}

function deleteCartArrayItem(id) {
    return cartArray.filter(f => f !== id)
}

function updateCartSize() {
    let num = localStorage.getItem('cartSize');
    let parsed = parseInt(num);
    if (num == null) {
        localStorage.setItem('cartSize', 1);
        cartSizeDiv.innerHTML = 1;
        mobileCartSpan.innerHTML = 1;
        return;
    }
    localStorage.setItem('cartSize', parsed + 1);
    cartSizeDiv.innerHTML = parsed + 1;
    mobileCartSpan.innerHTML = parsed + 1;
}

function decreaseCartSize() {
    let div = document.querySelector("#cart-size");
    let num = localStorage.getItem('cartSize');
    let parsed = parseInt(num);
    if (num == null) {
        return;
    }
    localStorage.setItem('cartSize', parsed - 1);
    cartSizeDiv.innerHTML = parsed - 1;
    mobileCartSpan.innerHTML = parsed - 1;
}

function decreaseBalance(cost) {
    var balance = getBalance();
    if (balance == 0) {
        return;
    }
    localStorage.setItem("balance", parseFloat(balance) - cost);
}

function clearCart() {
    var cardDiv = document.querySelector("#cart-grid-div");
    cardDiv.innerHTML = '';
}

function addCartDiv(item) {
    var cardDiv = document.querySelector("#cart-grid-div");
    cardDiv.innerHTML += `<div id="desk-cart-item">
                            <div id="desk-item-img-container">
                                <img class="item-img" src="${item.img}">
                            </div>
                            <div id="desk-cart-item-wrapper">
                                <div id="item-info-div" class="item-info">
                                    <div class="item-name">${item.name}</div>
                                    <div class="item-second-name">${item.secondName}</div>
                                    <div class="item-rarity">${item.rarity}</div>
                                </div>
                            </div>
                            <div id="item-price-div" class="price-div">
                                <div class="item-price"><span>$ </span>${item.price}</div>
                            </div>
                            <div id=${item.id} class="delete-button" onclick="removeFromCart(this)">
                                <img class="button_icon" src="assets/delete.svg">
                            </div>
                        </div>`;
}

function getLocalIds() {
    cartArray = JSON.parse(localStorage.getItem("cartItemId")) ?? [];
}

function setCartArray() {
    return JSON.parse(localStorage.getItem("cartItemId")) ?? [];
}

function addToLocalStorage(itemId) {
    if (localStorage.getItem("cartSize") == null) {
        cartArray = JSON.parse(localStorage.getItem("cartItemId")) ?? [];
        cartArray.push(itemId);
        localStorage.setItem("cartItemId", JSON.stringify(cartArray))
    } else {
        cartArray.push(itemId);
        localStorage.setItem("cartItemId", JSON.stringify(cartArray))
    }
}

function getItemsInCart() {
    var count = getCartCount();
    var item;
    if (count > 0) {
        getLocalIds();
        cartArray.forEach(element => {
            item = getItem(element);
            addCartDiv(item);
        });
    }
}

function decreaseCost(price) {
    let sum = localStorage.getItem('totalCost');
    let parsed = parseInt(sum);
    parsed - price > 0 ? localStorage.setItem('totalCost', parsed - price)
        : localStorage.setItem('totalCost', 0);

}

function calculateCost(item) {
    let sum = localStorage.getItem('totalCost');
    let parsed = parseInt(sum);
    if (sum == null) {
        localStorage.setItem('totalCost', item.price);
        return;
    }
    localStorage.setItem('totalCost', parsed + item.price);
}

function getCartCount() {
    return localStorage.getItem('cartSize') == null ? 0 : parseInt(localStorage.getItem('cartSize'));
}

function setCartSize() {
    let div = document.querySelector("#cart-size");
    let num = localStorage.getItem('cartSize');
    if (num == null) {
        div.innerHTML = 0;
        mobileCartSpan.innerHTML = 0;
    } else {
        div.innerHTML = parseInt(num);
        mobileCartSpan.innerHTML = parseInt(num);
    }
}

function getCartCost() {
    return localStorage.getItem('totalCost') == null ? 0 :
        localStorage.getItem('totalCost');
}

function getBalance() {
    return localStorage.getItem('balance') == null ? 0 :
        localStorage.getItem('balance');
}

function setTotalCost() {
    let div = document.querySelector("#cart-total");
    let sum = localStorage.getItem('totalCost');
    if (sum == null) {
        div.innerHTML = sum;
        return;
    }
    div.innerHTML = sum + " $";
    div.style.color = "#4CAF50";
}

function setTotalBalance() {
    let div = document.querySelector("#desk-balance");
    let mobileDiv = document.querySelector("#mobile-balance");
    let sum = localStorage.getItem('balance');
    if (sum == null) {
        div.innerText = 0;
        mobileDiv.innerText = 0;
        return;
    }
    div.innerText = sum;
    mobileDiv.innerText = sum;
}

function init() {
    initialValues();
    filterEventListeners();
    createItems();
    modalEvents();
    setCartSize();
    setTotalCost();
    setTotalBalance();
    getItemsInCart();

}

init();
serviceWork();
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
let usdRate = 18.65;
let euroRate = 19.5;

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
    changeItemsLang();
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
                    <div class="item-price"><span id="cur-mark">$ </span><span id="item-price-span">${price}</span></div>
                    <div class="item-id" style="display: none;">${id}</div>
                </div>
            </div>
            <div class="button-wrapper">
        
                <button id=${id} class="add-cart-button" onclick="addTocart(this)">
                    <img id="button_ic" src="assets/cart.png">
                </button>

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
    localStorage.setItem("balance", 12500.00);
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
        console.log(icon.src)
        sortedArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    sortedArray.filter(e => e.game == gameType)
        .forEach(item => {
            div.innerHTML = div.innerHTML
                + cardItem(item.img, item.name, item.secondName, item.rarity, item.price, item.id);
        });
}

function changeCurrency(cur) {
    let icon = document.querySelector("#currency-button #drop-left-icon");
    let text = document.querySelector("#nav-cur-span");
    let mobileIcon = document.querySelector("#mobile-cur-img");
    let mobileText = document.querySelector("#mobile-cur-span");
    var tempCur;
    let iconPath = "assets/";

    if (cur == 0) {
        currency = "eur";
        tempCur = "EUR";
        iconPath += "eur.PNG";
    }
    if (cur == 1) {
        currency = "usd";
        tempCur = "USD";
        iconPath += "usd.PNG";
    }
    if (cur == 2) {
        currency = "try";
        tempCur = "TRY";
        iconPath += "try.PNG";
    }
    text.innerHTML = tempCur;
    mobileText.innerHTML = tempCur;
    icon.src = iconPath;
    mobileIcon.src = iconPath;
    setStaticStorage("currency", tempCur);
    changeItemCurrencies();
    changeBalanceCur();
    setCurrency();
}

function changeBalanceCur() {
    var cur = getStaticStorage("currency") ?? "USD";
    var balance = getStaticStorage("balance") ?? "0";
    var balanceDiv = document.querySelector("#desk-balance");
    var mobileDiv = document.querySelector("#mobile-balance");
    var currencyMark;
    var factor;
    if (cur == "USD") {
        factor = 1; currencyMark = "$ ";
    }
    if (cur == "EUR") {
        factor = 0.94; currencyMark = "€ ";
    }
    if (cur == "TRY") {
        factor = 18.65; currencyMark = "₺ ";
    }
    balanceDiv.innerHTML = mobileDiv.innerHTML = (balance * factor).toFixed(2);
}

function changeItemCurrencies() {
    var cur = getStaticStorage("currency") ?? "USD";
    var cards = document.querySelectorAll(".item-card");
    var currencyMark;
    var factor;
    var itemId;
    if (cur == "USD") {
        factor = 1; currencyMark = "$ ";
    }
    if (cur == "EUR") {
        factor = 0.94; currencyMark = "€ ";
    }
    if (cur == "TRY") {
        factor = 18.65; currencyMark = "₺ ";
    }
    for (var item of cards) {
        itemId = parseInt(item.querySelector(".add-cart-button").id);
        var itemObj = getItem(itemId);
        item.querySelector("#item-price-span").innerHTML = (itemObj.price * factor).toFixed(2);
        item.querySelector("#cur-mark").innerHTML = currencyMark;
    }

}

function changeLang(lang) {
    let icon = document.querySelector("#lang-button #drop-left-icon");
    let mobile = document.querySelector(" #mobile-lang-img");

    let text = document.querySelector("#nav-lang-span");
    let mobileText = document.querySelector("#mobile-lang-span");

    var tempLang;
    let iconPath = "assets/";
    if (lang == 0) {
        lang = "en";
        tempLang = "EN";
        iconPath += "flag-en.png";
    }
    if (lang == 1) {
        lang = "tr";
        tempLang = "TR";
        iconPath += "flag-tr.png";
    }
    icon.src = iconPath;
    mobile.src = iconPath;
    text.innerHTML = tempLang;
    mobileText.innerHTML = tempLang;
    setStaticStorage("language", tempLang);
    changeItemsLang();
}

function setStaticStorage(key, value) {
    localStorage.setItem(key, value);
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

function depositMoneyModal() {
    var modal = document.getElementById("depositModal");
    var btn = document.getElementById("plus-button");
    var mobileBtn = document.getElementById("mobile-plus-button");
    var span = document.getElementById("deposit-close");

    btn.onclick = function () {
        modal.style.display = "block";
    }

    mobileBtn.onclick = function () {
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

function depositBalance() {
    var balance = parseFloat(getBalance());
    var value = document.querySelector("#input-deposit").value;
    if (value == undefined) return;
    var balValue = parseFloat(value);
    if (balValue > 0) {
        setStaticStorage("balance", (balValue + balance).toFixed(2));
        setTotalBalance();
        alert("Deposit Success");
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
    mobileCartSpan.innerHTML = getCartCount();
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

function getStaticStorage(key) {
    return localStorage.getItem(key);
}

function setLang() {
    let icon = document.querySelector("#lang-button #drop-left-icon");
    let text = document.querySelector("#nav-lang-span");
    var language = getStaticStorage("language");

    if (language == undefined) {
        text.innerHTML = "EN";
        lang = "en";
        icon.src = "assets/flag-en.png"
    }
    if (language == "EN") {
        lang = "en";
        text.innerHTML = "EN";
        icon.src = "assets/flag-en.png"
    }
    if (language == "TR") {
        lang = "tr";
        text.innerHTML = "TR";
        icon.src = "assets/flag-tr.png"
    }
}

function setCurrency() {
    let icon = document.querySelector("#currency-button #drop-left-icon");
    let mobileIcon = document.querySelector("#mobile-cur-img");
    let balanceIcon = document.querySelector("#mobil-balance-cur");
    let deskBalanceIcon = document.querySelector("#desk-balance-cur");
    let text = document.querySelector("#nav-cur-span");
    let mobileText = document.querySelector("#mobile-cur-span");
    var currency = getStaticStorage("currency");

    if (currency == undefined) {
        text.innerHTML = mobileText.innerHTML = "USD";
        icon.src = balanceIcon.src = deskBalanceIcon.src = "assets/usd.PNG"
    }
    if (currency == "EUR") {
        text.innerHTML = mobileText.innerHTML = "EUR";
        icon.src = mobileIcon.src = balanceIcon.src = deskBalanceIcon.src = "assets/eur.PNG"
    }
    if (currency == "USD") {
        text.innerHTML = mobileText.innerHTML = "USD";
        icon.src = mobileIcon.src = balanceIcon.src = deskBalanceIcon.src = "assets/usd.PNG";
    }
    if (currency == "TRY") {
        text.innerHTML = mobileText.innerHTML = "TRY";
        icon.src = mobileIcon.src = balanceIcon.src = deskBalanceIcon.src = "assets/try.PNG"
    }
}

function changeItemsLang() {
    var language = getStaticStorage("language") ?? "EN";
    lang = language.toLowerCase();
    if (lang == "tr") {
        document.querySelector("#filter_text").innerHTML = "Filtrele";
        document.querySelector("#reset-filter").innerHTML = "Sıfırla";
        document.querySelector("#filter-min").innerHTML = "En Düşük Fiyat";
        document.querySelector("#filter-max").innerHTML = "En Yüksek Fiyat";
        document.querySelector("#grid-refresh").innerHTML = "Yenile";
        document.querySelector("#h3").innerHTML = "Oyun Seç";
        document.querySelector("#sort-price").innerHTML = "Fiyata Göre";
        document.querySelector("#asc").innerHTML = "Artan";
        document.querySelector("#desc").innerHTML = "Azalan";
        document.querySelector("#grid-filter").innerHTML = "Filtrele";
        document.querySelector("#nav-profile").innerHTML = "Profil";
        document.querySelector("#nav-withdraw").innerHTML = "Para Çek";
        document.querySelector("#nav-sup").innerHTML = "Destek Al";
        document.querySelector("#nav-out").innerHTML = "Çıkış Yap";
        document.querySelector("#desk-cart-head").innerHTML = "Sepetinizdeki Urunler";
        document.querySelector("#total-span").innerHTML = "Sipariş Toplamı: ";
        document.querySelector("#mobile-search-input").placeholder = "Ürün Ara...";
        document.querySelector("#desk-search").placeholder = "Ürün Ara...";
        document.querySelector("#mobile-profile").innerHTML = "Profil";
        document.querySelector("#mobile-withdraw").innerHTML = "Para Çek";
        document.querySelector("#mobile-sup").innerHTML = "Destek Al";
        document.querySelector("#mobile-out").innerHTML = "Çıkış Yap";
        document.querySelector("#mobile-filter-text").innerHTML = "Filtrele";
        document.querySelector("#mobile-reset").innerHTML = "Sıfırla";
        document.querySelector("#mobile-min").innerHTML = "En Düşük Fiyat";
        document.querySelector("#mobile-max").innerHTML = "En Yüksek Fiyat";
        document.querySelector("#clear-button").innerHTML = "Sepeti Temizle";
        document.querySelector("#purchase-button").innerHTML = "Satın Al";
        document.querySelector("#refill").innerHTML = "Bakiye Tutarı";
        document.querySelector("#deposit").innerHTML = "Para Yükle";
    } else {
        document.querySelector("#filter_text").innerHTML = "Filter";
        document.querySelector("#reset-filter").innerHTML = "Reset";
        document.querySelector("#filter-min").innerHTML = "Minimum Price";
        document.querySelector("#grid-refresh").innerHTML = "Refresh";
        document.querySelector("#h3").innerHTML = "Choose Game";
        document.querySelector("#filter-max").innerHTML = "Maximum Price";
        document.querySelector("#sort-price").innerHTML = "Price";
        document.querySelector("#asc").innerHTML = "Ascending";
        document.querySelector("#desc").innerHTML = "Descending";
        document.querySelector("#grid-filter").innerHTML = "Filter";
        document.querySelector("#nav-profile").innerHTML = "Profile";
        document.querySelector("#nav-withdraw").innerHTML = "Withdraw";
        document.querySelector("#nav-sup").innerHTML = "Support";
        document.querySelector("#nav-out").innerHTML = "Logout";
        document.querySelector("#desk-cart-head").innerHTML = "Items In Cart";
        document.querySelector("#total-span").innerHTML = "Total: ";
        document.querySelector("#mobile-search-input").placeholder = "Search...";
        document.querySelector("#desk-search").placeholder = "Search...";
        document.querySelector("#mobile-profile").innerHTML = "Profile";
        document.querySelector("#mobile-withdraw").innerHTML = "Withdraw";
        document.querySelector("#mobile-sup").innerHTML = "Support";
        document.querySelector("#mobile-out").innerHTML = "Logout";
        document.querySelector("#mobile-filter-text").innerHTML = "Filter";
        document.querySelector("#mobile-reset").innerHTML = "Reset";
        document.querySelector("#mobile-min").innerHTML = "Minimum Price";
        document.querySelector("#mobile-max").innerHTML = "Maximum Price";
        document.querySelector("#clear-button").innerHTML = "Clear All";
        document.querySelector("#purchase-button").innerHTML = "Purchase";
        document.querySelector("#refill").innerHTML = "Refill Balance";
        document.querySelector("#deposit").innerHTML = "Deposit Money";
    }
}


function serviceWork() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then(registration => {
            console.log("sw registered!");
            console.log(registration);
        }).catch(err => {
            console.log("sw failed!");
            console.log(err);
        })
    }
}

function init() {
    setCurrency();
    setLang();
    initialValues();
    filterEventListeners();
    createItems();
    modalEvents();
    setCartSize();
    setTotalCost();
    setTotalBalance();
    getItemsInCart();
    changeItemsLang();
    changeItemCurrencies();
    depositMoneyModal();

}

init();
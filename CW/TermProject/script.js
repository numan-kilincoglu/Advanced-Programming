const itemArray =
    [
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },
        {
            game: "cs:go",
            name: "M9 Bayonet",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1300 $",
            img: "assets/itemImages/bayonet-doppler.png",
        },
        {
            game: "cs:go",
            name: "AWP Dragon Lore",
            secondName: "Doppler",
            rarity: "Covert",
            price: "1400 $",
            img: "assets/itemImages/dragon-lore.png",
        },
        {
            game: "cs:go",
            name: "M4A4",
            secondName: "Howl",
            rarity: "Covert",
            price: "131100 $",
            img: "assets/itemImages/howl.png",
        },

    ];


function createItems() {
    var div = document.querySelector("#main-col .card-layout");
    itemArray.forEach(item => {
        console.log(item.img);
        div.innerHTML = div.innerHTML + `
                <div class="item-card">
                    <div class="item-container">
                        <div class="item-top">FN</div>
                        <div class="image-wrapper">
                            <div class="image">
                                <img class="item-img" src=${item.img}">
                            </div>
                        </div>
                        <div class="item-info-wrapper">
                            <div class="item-name-wrapper">
                                <div class="item-name">${item.name}</div>
                                <div class="item-second-name">${item.secondName}</div>
                                <div class="item-rarity">${item.rarity}</div>
                            </div>
                        </div>
                        <div class="button-wrapper">
                            <div class="market-buttons">
                                <button class="buy-now-button">Buy Now</button>
                                <button class="add-cart-button">
                                    <img id="button_ic" src="assets/cart.png">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    });
}

createItems();
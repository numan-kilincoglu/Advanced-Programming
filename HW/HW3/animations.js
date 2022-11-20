const canvas = document.getElementById("animationLayout");
const context = canvas.getContext("2d");
const height = canvas.height = 200;
const width = canvas.width = 600;
const animationHeight = 100;
const animationWidth = 120;
const step = 3;
const FPS = 20;
let prevTick = 0;
let heroX = 0;
let heroY = 100;
let imageArray = [];
let currentIndex = 0;
let animationLength = 10;
let pause = false;
let stop = false;
const baseURL = 'https://numan-kilincoglu.github.io/Advanced-Programming/HW/HW3/sprites/';

function render() {
    if (!pause && !stop) {
        requestAnimationFrame(render);
        let now = Math.round(FPS * Date.now() / 1000);
        if (now == prevTick) return;
        prevTick = now;
        context.clearRect(0, 0, width, height);
        updateAnimation();
        context.drawImage(imageArray[currentIndex], heroX, heroY, animationWidth, animationHeight);
    }
};

function updateAnimation() {
    currentIndex = ++currentIndex % animationLength;
    heroX += step;
    heroX = heroX + animationWidth / 2 > width ? 0 : heroX;
}


async function loadImages() {
    for (let index = 0; index < animationLength; index++) {
        image = new Image();
        image.src = await getImageBlob(index, image);
        imageArray.push(image)
    }
}

async function getImageBlob(index, image) {
    return fetch(baseURL + index.toString() + '.png')
          .then(response => response.blob())
          .then(imageBlob => image.src = URL.createObjectURL(imageBlob));
}

function start() {
    if (stop && pause) {
        stop = false;
        pause = false;
        currentIndex = 0;
        heroX = 0;
        disableButtons();
        render();
        return;
    }

    if (pause) {
        currentIndex = 0;
        heroX = 0;
        pauseAnimation();
        disableButtons();
        return;
    }

    if (stop) {
        currentIndex = 0;
        heroX = 0;
        stopAnimation();
        disableButtons();
        render();
        return;
    }
    currentIndex = 0;
    heroX = 0;
    disableButtons();
}

function pauseAnimation() {
    pause = !pause;
    document.getElementById("nextButton").disabled = !pause;
    document.getElementById("prevButton").disabled = !pause;
    !pause ? render() : null;
}

function stopAnimation() {
    stop = !stop;
    document.getElementById("nextButton").disabled = !stop;
    document.getElementById("prevButton").disabled = !stop;
}

function previous() {
    if (!document.getElementById("prevButton").disabled) {
        heroX = (heroX - step);
        heroX = heroX <= 0 ? (width - animationWidth / 2) : heroX;
        currentIndex -= 1;
        currentIndex = currentIndex < 0 ? animationLength - 1 : currentIndex;
        context.clearRect(0, 0, width, height);
        context.drawImage(imageArray[currentIndex], heroX, heroY, animationWidth, animationHeight);
    }
}

function next() {
    if (!document.getElementById("nextButton").disabled) {
        heroX = (heroX + step) % width;
        heroX = heroX + animationWidth / 2 > width ? 0 : heroX;
        currentIndex = (currentIndex + 1) % animationLength;
        context.clearRect(0, 0, width, height);
        context.drawImage(imageArray[currentIndex], heroX, heroY, animationWidth, animationHeight);
    }
}

function disableButtons() {
    document.getElementById("nextButton").disabled = true;
    document.getElementById("prevButton").disabled = true;
}

async function init() {
    await loadImages();
    render();
}

init();
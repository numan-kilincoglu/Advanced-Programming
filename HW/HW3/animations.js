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

function getImages() {
    for (let index = 0; index < animationLength; index++) {
        image = new Image();
        image.src = 'https://numan-kilincoglu.github.io/Advanced-Programming/HW/HW3/sprites/' + index.toString() + '.png';
        imageArray.push(image)
    }
}

function start() {
    console.log("burda1");
    if (stop && pause) {
        stop = false;
        pause = false;
        currentIndex = 0;
        heroX = 0;
        disableButtons();
        console.log("burda");
        render();
        return;
    }

    if (pause) {
        currentIndex = 0;
        heroX = 0;
        pauseAnimation();
        disableButtons();
        console.log("burda2");
        return;
    }

    if (stop) {
        currentIndex = 0;
        heroX = 0;
        stopAnimation();
        disableButtons();
        console.log("burda3");
        render();
        return;
    }
    console.log("burda4");
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

getImages();
render();
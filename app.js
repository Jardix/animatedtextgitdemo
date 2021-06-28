function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}




const letters = document.querySelectorAll('.letter');
const intvervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);

const body = document.querySelector('body');
const intervalId2 = setInterval(function () {
    body.style.background = randomRGB();
}, 1000);
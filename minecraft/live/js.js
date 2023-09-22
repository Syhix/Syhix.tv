const text = document.getElementById('time')


function timeCouldown() {
    const now = new Date().getTime();
    const countdownDate = new Date('Oct 15, 2023 : 19:00').getTime();
    const distanceBase = countdownDate - now;

    if (distanceBase < 0) {
        clearInterval(countDownInterval);
    }

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    text.innerHTML = `${days} jours ${hours} heures  ${minutes}: ${seconds}`;
}

const countdownInterval = setInterval(() => {
    timeCouldown()
}, 1000)
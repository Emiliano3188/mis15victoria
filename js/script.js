const targetDate = new Date("Sep 18, 2027 21:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    document.getElementById("minutes").innerHTML =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    document.getElementById("seconds").innerHTML =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

}, 1000);

for (let i = 0; i < 40; i++) {

    const star = document.createElement('div');

    star.classList.add('shine');

    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';

    star.style.animationDelay =
        Math.random() * 5 + 's';

    document.body.appendChild(star);
}
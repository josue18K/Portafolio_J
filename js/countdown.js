document.addEventListener("DOMContentLoaded", function () {
    let countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + 48);

    function updateCountdown() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerText = hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
            document.getElementById("countdown").innerText = "Oferta Finalizada";
        }
    }

    setInterval(updateCountdown, 1000);
});

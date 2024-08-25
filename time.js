function updateCountdown() {
    const targetDate = new Date('2024-11-16T17:00:00'); // Set your target date here
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = (days > 9 ? days : '0' + days) + ':';
    document.getElementById('hours').textContent = (hours > 9 ? hours : '0' + hours) + ':';
    document.getElementById('minutes').textContent = (minutes > 9 ? minutes : '0' + minutes) + ':';
    document.getElementById('seconds').textContent = (seconds > 9 ? seconds : '0' + seconds);

    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').textContent = "ES HOY, ES HOY!";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

function toggleZoom(element) {
    const slides = document.querySelectorAll('.gallery__img');
    slides.forEach((slide) => slide.classList.remove('zoomed'));
    
    element.classList.add('zoomed');
}

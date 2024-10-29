// Countdown Timer
const eventDate = new Date("December 7, 2024 09:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
        <span>${days} Days</span> 
        <span>${hours} Hours</span> 
        <span>${minutes} Minutes</span> 
        <span>${seconds} Seconds</span>
    `;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "The event has started!";
    }
}, 1000);

// Registration Form Submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const message = `Thank you for registering, ${name}! A confirmation has been sent to ${email}.`;
    document.getElementById('registration-message').innerText = message;

    document.getElementById('registration-form').reset();
});

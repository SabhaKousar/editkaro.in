// Email Subscription Form
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (validateEmail(email)) {
        alert('Subscribed successfully!');
        console.log(Subscribed email: ${email});
        // Here, integrate with Google Sheets or backend API.
    } else {
        alert('Please enter a valid email!');
    }
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        console.log(Contact form submitted: Name: ${name}, Email: ${email}, Message: ${message});
        // Send form data to Google Sheets or a backend API.
    } else {
        alert('Please fill in all fields!');
    }
});

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
const video = document.querySelector('video');
const closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
    video.style.display = 'none'; // Hide video
});
// Lightbox for Portfolio Videos
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const video = lightbox.querySelector('video');

lightboxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        video.src = 'path_to_video.mp4';  // Replace with actual video path.
        lightbox.classList.remove('hidden');
        video.play();
    });
});

closeBtn.addEventListener('click', () => {
    video.pause();
    lightbox.classList.add('hidden');
});

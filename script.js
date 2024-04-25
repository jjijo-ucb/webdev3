document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const emailInput = document.getElementById('email');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (localStorage.getItem('email') === emailInput.value) {
            alert('User already exists!');
        } else {
            localStorage.setItem('email', emailInput.value);
            alert('Feedback submitted successfully!');
            feedbackForm.reset();
        }
    });
});

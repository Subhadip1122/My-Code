let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');

// Prevent default form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

// Reset form fields
resetButton.addEventListener('click', function () {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Save input data to localStorage
sendButton.addEventListener('click', function (e) {
    e.preventDefault(); // Optional: prevents form submission if Send is a submit button

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    console.log('Form data saved to localStorage.');
});

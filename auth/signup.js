// show passowrd
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.src = type === 'password' ? '/image/eye.svg' : '/image/eye-closed.svg';
});

//form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const businessName = document.getElementById('businessName').value;
    const password = document.getElementById('password').value;

    if (firstName.length < 2) {
        alert('First name must be at least 2 characters long');
        return;
    }
    if (lastName.length < 2) {
        alert('Last name must be at least 2 characters long');
        return;
    }
    if (email.length < 5) {
        alert('Email must be at least 5 characters long');
        return;
    }
    if (businessName.length < 2) {
        alert('Business name must be at least 2 characters long');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Create an object with the form data
    const signupData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        businessName: businessName,
        password: password
    };

    // Save the object to local storage
    localStorage.setItem('createAccount', JSON.stringify(signupData));
    window.location.href = 'login.html';

});
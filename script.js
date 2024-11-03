const form = document.querySelector('form');
const passError = document.querySelector('#passerror');
const confirmPassError = document.querySelector('#confirm_passerror');
const nameError = document.querySelector('#namerror');
const submitMessage = document.querySelector('#submit_message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    nameError.textContent = '';
    passError.textContent = '';
    confirmPassError.textContent = '';
    submitMessage.textContent = '';

    const formData = new FormData(e.target);
    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password')
    };
    if (!data.username || data.username.length < 3) {
        isValid = false;
        nameError.textContent = data.username ?
            'Username must be at least 3 characters long' :
            'Username is required';
    }
    if (!data.password || data.password.length < 8) {
        isValid = false;
        passError.textContent = data.password ?
            'Password must be at least 8 characters long' :
            'Password is required';
    }
    if (data.password !== data.confirm_password) {
        isValid = false;
        confirmPassError.textContent = 'Passwords do not match';
    }
    if (isValid) {
        form.reset();
        submitMessage.textContent = 'Signup successful!';
    }
});

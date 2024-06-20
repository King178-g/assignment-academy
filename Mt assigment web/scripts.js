function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.getElementById('Register-btn').onclick = function() {
    document.getElementById('Register-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('Register-modal').style.display = 'none';
}

function Register(event) {
    event.preventDefault();
    const Username = document.getElementById('Username').value;
    const Address = document.getElementById('Address').value;
    const Email = document.getElementById('Email').value;
    const Qualification = document.getElementById('Qualification').value;

    
    // Example login check - this should be replaced with a real authentication request
    if (username === 'user' && password === 'pass') {
        alert('Register successful!');
        closeModal();
    } else {
        alert('Invalid credentials, please try again.');
    }
}
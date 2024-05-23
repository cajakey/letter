function toggleDoor() {
    var vault = document.querySelector('.vault-door-outer');
    vault.classList.toggle('opened');

    // Open the modal after a delay if the vault is opened
    if (vault.classList.contains('opened')) {
        setTimeout(function() {
            openModal();
        }, 500); // Adjust the delay as needed
    }
}

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Close the vault door
    var vault = document.querySelector('.vault-door-outer');
    vault.classList.remove('opened');
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('open');
}

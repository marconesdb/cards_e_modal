// script.js
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const modalUrl = this.getAttribute('data-modal');
            fetch(modalUrl)
                .then(response => response.text())
                .then(data => {
                    modalContent.innerHTML = data;
                    modal.style.display = 'block';
                    document.body.classList.add('no-scroll');
                });
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});

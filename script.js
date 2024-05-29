document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modalContent");
    var closeBtn = document.querySelector(".close");
    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            var modalId = card.getAttribute("data-modal");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", modalId, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    modalContent.innerHTML = xhr.responseText;
                    modal.style.display = "block";

                    // Adicionar classe para esconder overflow do body
                    document.body.classList.add("no-scroll");
                }
            };
            xhr.send();
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Remover classe no-scroll após a transição da modal terminar
    modal.addEventListener("transitionend", function(event) {
        if (event.propertyName === "opacity" && modal.style.opacity === "0") {
            document.body.classList.remove("no-scroll");
        }
    });
});

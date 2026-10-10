function showCategory(category) {

    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        if (category === 'all') {
            card.style.display = 'block';
        }
        else if (card.classList.contains(category)) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }

    });
}

function showInfo(title, d1, d2, d3) {

    document.getElementById("title").innerText = title;
    document.getElementById("detail1").innerText = d1;
    document.getElementById("detail2").innerText = d2;
    document.getElementById("detail3").innerText = d3;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
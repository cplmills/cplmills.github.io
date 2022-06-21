function toggleMenu(element, css) {
    document.getElementsByClassName(element)[0].classList.toggle("responsive");
}

function toggleButton() {
    currentHTML = document.querySelector('#menuButton').innerHTML;
    console.log(currentHTML);
    if (currentHTML.includes("🌂 Menu")) {
        document.querySelector('#menuButton a').innerHTML = "&#9730; Menu";
    } else {
        document.querySelector('#menuButton a').innerHTML = "&#127746; Menu";
    }
}

function displayBanner() {
    dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.querySelector('#alert-banner').style.display = "block";
    }
    console.log(dayOfWeek);
}
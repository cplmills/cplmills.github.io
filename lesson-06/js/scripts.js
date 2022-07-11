function toggleMenu() {
    // Controls the menu button on the small view of the site
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function toggleButton() {
    // toggles the icon on the small version of the site from an open umbrella to a closed umbrella and back
    currentHTML = document.querySelector('#menuButton').innerHTML;
    if (currentHTML.includes("🌂 Menu")) {
        document.querySelector('#menuButton a').innerHTML = "&#9730; Menu";
    } else {
        document.querySelector('#menuButton a').innerHTML = "&#127746; Menu";
    }
}

function displayBanner() {
    // Displays the alert-banner on relevent pages ONLY when the day is Saturday
    dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.querySelector('#alert-banner').style.display = "block";
    }
}

function activeLink() {
    // Changes the background color of a link if the link references the active page
    let page = 0;
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            page = i;
        }
    }
    document.links[page].className = 'activeLink';
}

function updateSlider(){
    // displays a numeric value beneath the slide value on teh storm center page form
    tagName = document.querySelector("output");
    value = document.querySelector("#storm_severity").value;
    console.log("tag:" + tagName + ' - value: ' + value);
    tagName.innerHTML = value;
}
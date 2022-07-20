function toggleMenu() {
    // Controls the menu button on the small view of the site
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
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

function lastModified() {
    // Updates the "Last Modified" section on the footer of eadch page
    let date = new Date(document.lastModified);  
    dateString = date.toLocaleString('default', {weekday: 'long'}) + ', ' + date.getDate() + ' ' + date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear();
    document.querySelector("#lastModified").innerHTML = "Last Updated: " + dateString;
}
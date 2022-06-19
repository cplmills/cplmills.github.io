function lastModified() {
    let modifiedDate = document.lastModified;
    document.querySelector("#lastModified").innerHTML = "Last Updated: " + modifiedDate;
}
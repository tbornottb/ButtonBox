function copy(name) {

    //Get Input Element
    var copyDiv = document.getElementById(name);

    //Give the text element focus
    copyDiv.innerText.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.getElementById("lenny").addEventListener("click", function() {
    copy("lenny");
});

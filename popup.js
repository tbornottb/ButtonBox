function copy(name) {

    getElementById("holdtext").innerText = getElementById(name).innerText;
    Copied = getElementById("holdtext").createTextRange();
    Copied.execCommand("Copy");
}

//Add Event Listeners to Button Click
document.getElementById("lenny").addEventListener("click", function() {
    copy("lenny");
});

function copy(name) {

    //Get Input Element
    var copyDiv = document.getElementById(name);

    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.getElementById("lenny").addEventListener("click", function() {
    copy("lenny");
});

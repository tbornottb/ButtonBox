function copy(name) {

    //Get Input Element
    var copyDiv = document.getElementById(name);

    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand("select");

    //Copy Content
    document.execCommand("Copy", false, null);
    
    document.execCommand("unselect");
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lenny").onclick = copy("lenny");
    document.getElementById("disapproval").onclick = copy("disapproval");
});

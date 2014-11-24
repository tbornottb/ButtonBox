function copy(name) {

    //Get Input Element
    var x = document.getElementById(name).textContent;
    document.getElementById("copytext").innerHTML = x;
    
    //Give the text element focus
    var copyDiv = document.getElementById("copytext");
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lenny").onclick = copy("lenny");

});

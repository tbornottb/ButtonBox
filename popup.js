function copy(name) {

    //Get Input Element
    document.getElementById(name).select();

    //Copy Content
    document.execCommand("Copy", false, null);
    
    document.execCommand("unselect");
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lenny").onclick = copy("lenny");
    document.getElementById("disapproval").onclick = copy("disapproval");
});

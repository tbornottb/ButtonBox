function copy(name) {

    //Get Input Element
    var copyDiv = document.getElementById(name);

    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
    
    document.execCommand("unselect");
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    var myStringArray = ["lenny","disapproval"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
        document.getElementById(myStringArray[i]).onclick = copy(myStringArray[i]);
    }
});

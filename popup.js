function copyToClipboard( text ){
                var copyDiv = document.createElement('div');
                copyDiv.contentEditable = true;
                document.body.appendChild(copyDiv);
                copyDiv.innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                document.body.removeChild(copyDiv);
}

document.addEventListener("DOMContentLoaded", function () {
    var buttonList = getElementsByTagName("button");
    for(i = 0;i < buttonList.length; i++)
                {
                   var copytext = buttonList[i].textContent;
                   buttonList[i].onclick = copyToClipboard(copytext);
                }
    
});

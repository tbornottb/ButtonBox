function copyToClipboard(text){
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

document.addEventListener('DOMContentLoaded', function() {
    var btns = document.getElementsByTagName('button')
    for (var i = 0; i < btns.length; i++) { 
       btns[i].addEventListener('click', copyToClipboard(btns[i].textContent));
    }
});

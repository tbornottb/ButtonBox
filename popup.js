function copyToClipboard( button ){
                text = button.textContent;
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
    var btn = document.getElementsByTagName('button')
    // onClick's logic below:
    btn.addEventListener('click', copyToClipboard(this));
});

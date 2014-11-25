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
    //var buttonList = document.getElementsByTagName('button')
    //for(i = 0;i < buttonList.length; i++)
    //{
      // var copytext = buttonList[i].textContent;
      // buttonList[i].onclick = copyToClipboard(copytext);
    //}
    
    var button2 = document.getElementById("disapproval");
    var copytext2 = button2.textContent;
    button2.onclick = copyToClipboard("&#3232;_&#3232;");
    
    var button1 = document.getElementById("lenny");
    var copytext1 = button1.textContent;
    button1.onclick = copyToClipboard("( &#865;&#176; &#860;&#662; &#865;&#176;)");

});

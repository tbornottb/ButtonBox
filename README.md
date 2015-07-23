Button Box
============
This Chrome Extension puts your favorite Unicode emoji (and other snippets that are hard to search for and harder to type) at your fingertips! Just click the icon in your browser, then click the button with the content you want, and it's automatically copied to your clipboard!
###How to install the extension
Download lenny2.png, manifest.json, popup.html, popup.js, and put them all in the same folder. Then go to [chrome://extensions](chrome://extensions), make sure that Developer Mode is checked, choose **Load unpacked extension...**, and then choose the directory that all four files are located in. If **Enable** is selected next to the Button Box entry in the Extensions listing, you should see the icon in your browser and be able to use it immediately!
###How to add/remove buttons
To remove a button, delete it's line from the body of popup.html. To add a new button, insert a new line between the <body> tags of the following format:
```
<button class="myButton" id="_______">_______</button>
```
In the first blank, give the button a name to help you remember which it is. In the second blank, paste the emoji/text you want on the button - this will also be what's copied into your clipboard when you click it. If your content contains unicode characters, you'll need to turn them into ASCII, which you can do [here](http://www.rapidmonkey.com/unicodeconverter). (This is why the pre-existing button text looks like gibberish.)
###Enjoy!

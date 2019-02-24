// ==UserScript==
// @name         Krunker Reticle Changer
// @updateURL    https://github.com/Tehchy/Krunker-Scripts/raw/master/reticle.user.js
// @downloadURL  https://github.com/Tehchy/Krunker-Scripts/raw/master/reticle.user.js
// @version      0.1
// @description  Reticle Changer
// @author       Tehchy
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.addEventListener('load', function() {
    let img = 'https://i.imgur.com/Pp7Awj1.png'; // Chnage to what evber you like
    let hideBoxes = true; // Set to true if youy want to hide the black boxes around the image
    document.getElementById('recticleImg').src = img;
    if (hideBoxes) Array.prototype.slice.call(document.querySelectorAll('.black')).forEach(el => el.style.display = "none");
}, false);
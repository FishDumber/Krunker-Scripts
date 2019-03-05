let replace = [
    // OLD, NEW
    ['weapon_2', 'model'], 
    ['weapon_3', 'model'], 
];
let request = chrome.webRequest.onBeforeRequest;
for (let rep of replace) {
    request.addListener(function(details) {return {redirectUrl:chrome.extension.getURL(rep[1] + ".obj")}}, {urls: ["https://krunker.io/models/weapons/" + rep[0] + ".obj"]}, ["blocking"]);
    request.addListener(function(details) {return {redirectUrl:chrome.extension.getURL(rep[1] + ".png")}}, {urls: ["https://krunker.io/textures/weapons/" + rep[0] + ".png"]}, ["blocking"]);
    request.addListener(function(details) {return {redirectUrl:chrome.extension.getURL(rep[1] + "_ao.png")}}, {urls: ["https://krunker.io/textures/weapons/" + rep[0] + "_ao.png"]}, ["blocking"]);
    request.addListener(function(details) {return {redirectUrl:chrome.extension.getURL(rep[1] + "_e.png")}}, {urls: ["https://krunker.io/textures/weapons/" + rep[0] + "_e.png"]}, ["blocking"]);
}
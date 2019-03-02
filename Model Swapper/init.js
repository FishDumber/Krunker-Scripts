let dir = 'models/weapons/'
let model = 'weapon_2.obj';
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl:chrome.extension.getURL("model.obj")};
}, { urls: ["https://krunker.io/" + dir + model] }, ["blocking"]);
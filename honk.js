const flashesURL = chrome.extension.getURL("flashes");
const hspages = [338,644,651,822,830,833,980,1026,1070,1720];
const flashes = [
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00338/00338_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00644/00644_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00651/00651_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00822/00822_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00830/00830_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00833/00833_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/00980/00980_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/01026/01026_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/01070/01070_bolin.swf",
"https://www.bgreco.net/cdn.mspaintadventures.com/storyfiles/hs2/01720/01720_bolin.swf"
];

var flash;

for (i = 0; i < 10; i++){
	if(window.location.href == "https://www.homestuck.com/story/"+hspages[i] ||
	   window.location.href == "https://www.homestuck.com/story/"+hspages[i]+"?fl=1"){
		flash = flashes[i];
	}
}
//embed
if(flash){
	console.log('Billy Bolin wanna know your location');
	var a = document.getElementsByTagName("embed")[0];
	a.src = flash;
}
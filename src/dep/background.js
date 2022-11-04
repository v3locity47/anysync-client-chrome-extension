console.log("welcome");
// chrome.tabs.executeScript(tabOfInterestId,{
//     frameId: frameIdToInject,
//     file: scriptFileWhichDoesWhatIWantInTheIframe.js
// },function(results){
//     //Handle any results
// });

// chrome.scripting.registerContentScript({
//   matches: ["https://*.nytimes.com/*"],
//   all_frames: true,
//   js: ["contentScript.js"],
// });

// chrome.webNavigation.onCompleted.addListener((tab) => {
//   chrome.scripting.execute(tab.tabId, {
//     file: "contentScript.js",
//   });
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.executeScript(
//     tab,
//     {
//       frameId: "animixplay.to",
//       file: "contentScript.js",
//     },
//     function (results) {
//       //Handle any results
//     }
//   );
// });

//list all frames

// chrome.webNavigation.onCompleted.addListener(function (tab) {
//   chrome.webNavigation.getAllFrames({ tabId: tab.tabId }, function (res) {
//     // I want to use the id tag here to find the frame id I want.
//     console.log(res);
//     for (let idx = 0; idx < res.length; idx++) {
//       console.log(res[idx].frameId);
//     }
//   });
// });

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log(req, sender, sendResponse);
  sendResponse("ACK");
});

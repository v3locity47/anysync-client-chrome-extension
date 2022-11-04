console.log("HA!");
const [videoFrame] = document.querySelectorAll("video");
if (videoFrame) {
  console.log("YES");
  console.log(videoFrame.currentTime);
  videoFrame.onpause = () => {
    const eventOutcomes = { event: "isPause", value: videoFrame.currentTime };
    chrome.runtime.sendMessage(eventOutcomes, (response) => {
      console.log("response");
    });
  };
}
console.log(videoFrame);

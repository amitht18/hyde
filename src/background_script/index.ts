interface Message {
  name: string;
  payload: any;
}


export function BackgroundScript() {
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.name === 'greet') {
      sendResponse('Hello');
    }
    return true;
  })
}

BackgroundScript()
function detectCouponCodeFields(inputFieldRegex) {
  const couponInputField = document.querySelector(inputFieldRegex);

  if (couponInputField) {
    // Send a message to the background script to initiate the test
    browser.runtime.sendMessage({
      action: "testRaceCondition",
      couponInputField,
      tabId: browser.runtime.id,
      couponCodes,
    });
  }
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startTest") {
    detectCouponCodeFields(message.inputFieldRegex);
  }
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "testResults") {
    browser.runtime.sendMessage({
      action: "testResults",
      results: message.results,
    });
  }
});

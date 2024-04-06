function sendConcurrentRequests(tabId, couponInputField, couponCodes) {
  const requests = couponCodes.map((code) => {
    return fetch(`https://example.com/apply-coupon?code=${code}`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      // Analyze the response and check for race conditions or inconsistencies
      return { code, success: data.success, discount: data.discount };
    });
  });

  const results = await Promise.all(requests);

  // Send the results back to the content script for further processing or display
  browser.tabs.sendMessage(tabId, {
    action: "testResults",
    results,
  });
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "testRaceCondition") {
    sendConcurrentRequests(request.tabId, request.couponInputField, request.couponCodes);
  }
});

document.getElementById('test-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const couponCodes = document.getElementById('coupon-codes').value.trim().split('\n');
  const inputFieldRegex = document.getElementById('input-field-regex').value.trim();

  browser.runtime.sendMessage({
    action: "startTest",
    couponCodes,
    inputFieldRegex,
  });
});

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "testResults") {
    displayTestResults(message.results);
  }
});

function displayTestResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.textContent = 'No coupon code input field found.';
    return;
  }

  results.forEach((result) => {
    const resultElement = document.createElement('div');
    resultElement.textContent = `Code: ${result.code}, Success: ${result.success}, Discount: ${result.discount}`;
    resultsContainer.appendChild(resultElement);
  });
}

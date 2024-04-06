Coupon Code Race Finder
=======================
A Firefox extension to aid in finding race conditions in user-defined coupon code handling routines on approved bug bounty hosts.
- This is a WIP in response to https://twitter.com/nullenc0de/status/1770568231507382721
- Don't expect it ever work correctly. Open a PR at the same time you open an issue.
- Donating ETH to `0x05C731E79AC5b04baD3bC273632a5aE19AcF5A9B` will speed up the process of adding new features.

Features
--------
* Allows users to input their own coupon codes and regex patterns for finding input fields.
* Sends concurrent requests to test for race conditions in coupon codes.
* Displays test results in the extension's popup.

How It Works
------------
1. The user inputs coupon codes and an input field regex pattern in the extension's popup.
2. The content script uses the provided regex pattern to detect coupon code input fields on the current webpage.
3. When a coupon code input field is found, the background script sends concurrent requests with the provided coupon codes to test for race conditions.
4. The test results are displayed in the extension's popup.

Installation
------------
1. Clone or download the repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click "This Firefox" in the left sidebar.
4. Click "Load Temporary Add-on...".
5. Select the `manifest.json` file from the cloned or downloaded repository.
6. The extension should now be installed and visible in your browser's toolbar.

Usage
-----
1. Click the extension's icon in the browser's toolbar.
2. Input your coupon codes (one per line) and an input field regex pattern in the provided fields.
3. Click the "Test for Race Conditions" button.
4. The test results will be displayed in the extension's popup.

Compatibility
-------------
The extension has been tested and is compatible with Firefox 124+.


Disclaimer
=======================
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The use of our Software and any associated materials (including but not limited to code, libraries, scripts, and examples) is at your own risk. By using our Software, you understand and agree that you are solely responsible for your actions and the consequences thereof. We expressly disclaim any liability or responsibility for any harm resulting from your use of our Software, and by using our Software, you agree to this disclaimer and our terms of use.

Our Software is intended to be used for legal purposes only. It is your responsibility to stay compliant with all the local, state, and federal laws and regulations applicable to you when using our Software. You agree not to use our Software in an illegal manner or to infringe on the rights of others. You agree that you will not use our Software to commit a crime, or to enable others to commit a crime.

We are not responsible for any harm or damage caused by your use of our Software. You agree to indemnify and hold harmless the authors, maintainers, and contributors of the Software for any and all claims arising from your use of our Software, your violation of this disclaimer, or your violation of any rights of a third party.

If you do not agree with this disclaimer, please do not use our Software. Your use of our Software signifies your agreement with this disclaimer.

This disclaimer is subject to change without notice, and it is your responsibility to review this disclaimer periodically to ensure you are aware of its terms.

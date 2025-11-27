# Page Cleaner for Firefox

![License](https://img.shields.io/github/license/EchoesRealmArrow/firefox-page-cleaner)
[![Mozilla Add-on](https://img.shields.io/badge/Firefox-Add--on-orange.svg)](https://addons.mozilla.org/...) < TODO: Replace with actual add-on link when available >

A simple Firefox extension to temporarily hide unwanted elements on a webpage with a single click. Clean up a cluttered page for better reading or to take clean screenshots.

![Screenshot of the extension in use](https://i.imgur.com/your-screenshot-url.png) < TODO: Add a screenshot URL >

---

## How It Works

1.  **Click the Icon:** Click the Page Cleaner icon in your Firefox toolbar to open the popup.
2.  **Start Cleaning:** Click the "Start Cleaning" button. The popup will close, and your cursor will turn into a crosshair.
3.  **Hide Elements:** As you move your mouse, elements on the page will be highlighted with a red border. Simply click on any element you want to hide (e.g., ads, banners, navigation menus).
4.  **Stop Cleaning:** To stop, simply click the extension icon again and click "Stop Cleaning".
5.  **Restore the Page:** Made a mistake or want to bring everything back? Click the "Reset Page" button in the popup to instantly restore all hidden elements. The page will also reset automatically when you refresh it.

## Features

*   **One-Click Activation:** Instantly enter "cleaning mode" to start hiding elements.
*   **Visual Highlighting:** A clear red outline shows you exactly which element you're about to remove.
*   **Non-Destructive:** Elements are only hidden temporarily. A page refresh or a click of the "Reset" button restores the page to its original state.
*   **Lightweight and Fast:** No unnecessary features or background processes.

## Installation

#### Option 1: From the Firefox Add-on Store (Recommended)

> **[Install Page Cleaner from Mozilla Add-ons](https://addons.mozilla.org/...)** < TODO: Replace with actual add-on link >

#### Option 2: From Source (For Developers)

1.  Clone this repository: `git clone https://github.com/Your-Username/firefox-page-cleaner.git`
2.  Open Firefox and navigate to `about:debugging`.
3.  Click on "This Firefox".
4.  Click the "Load Temporary Add-on..." button.
5.  Navigate to the cloned repository folder and select the `manifest.json` file.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

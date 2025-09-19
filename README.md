# Online Shit Filter

A Tampermonkey userscript that filters out unwanted content from Reddit based on configurable keywords.

## Features

- Filters Reddit posts containing specified keywords
- Case-insensitive keyword matching
- Works on old.reddit.com
- Automatically handles dynamically loaded content
- Auto-updates via Tampermonkey

## Installation

### Method 1: Direct Install (Recommended)
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click this link to install the script: [Install Online Shit Filter](https://raw.githubusercontent.com/MJQ7/online-shit-filter/refs/heads/master/main.js)
3. Tampermonkey will open the installation dialog - click "Install"

### Method 2: Manual Install
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Open the Tampermonkey dashboard
3. Click "Create a new script"
4. Copy and paste the contents of [main.js](main.js) into the editor
5. Save the script (Ctrl+S)

## How It Works

The script monitors Reddit pages for posts containing keywords from a predefined list and removes them from the page. It works by:

- Scanning all post elements on page load
- Monitoring for new posts added dynamically (infinite scroll, etc.)
- Removing posts that contain any of the filtered keywords

## Customization

To modify the keyword list, edit the `keywords` array in the script:

```javascript
const keywords = ['trump', 'jd', 'elon', 'musk', 'white house', 'doge', 'cancer', 'biden', 'charlie kirk', 'kimmel', 'palestine'];
```

Add or remove keywords as desired. Keywords are matched case-insensitively.

## Auto-Updates

This script is configured for automatic updates via Tampermonkey. When a new version is released:

- Tampermonkey will automatically check for updates
- You'll be notified when an update is available
- Updates can be installed with one click

## Compatibility

- **Browser**: Chrome, Firefox, Safari, Edge (with Tampermonkey installed)
- **Reddit**: old.reddit.com only
- **Version**: Tampermonkey 4.0+

## License

This project is open source. Feel free to modify and distribute.

## Contributing

Issues and pull requests are welcome. To suggest new features or report bugs, please use the GitHub issue tracker.

// ==UserScript==
// @name         Online shit filter
// @namespace    https://github.com/MJQ7
// @version      1.1.1
// @updateURL    https://raw.githubusercontent.com/MJQ7/online-shit-filter/master/online-shit-filter.user.js
// @downloadURL  https://raw.githubusercontent.com/MJQ7/online-shit-filter/master/online-shit-filter.user.js
// @connect      github.com
// @description  Removes shit from reddit and others at some point
// @author       Me
// @match        *://old.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define your keywords here. Make sure they are in lowercase for case-insensitive matching.
    const keywords = ['trump', 'jd', 'elon', 'musk', 'white house', 'doge', 'cancer', 'biden', 'charlie kirk', 'kimmel', 'palestine', 'isreal', 
        'senate', 'melania', 'antifa', 'First Amendment'
    ];

    /**
     * Checks if the given text contains any of the keywords.
     * @param {string} text - The text to check.
     * @returns {boolean} - True if any keyword is found, false otherwise.
     */
    function containsKeyword(text) {
        const lowerText = text.toLowerCase();
        return keywords.some(keyword => lowerText.includes(keyword));
    }

    /**
     * Finds all div elements with the class "thing" within the specified root
     * and removes any that contain one or more of the keywords.
     * @param {HTMLElement|Document} root - The root element to search within.
     */
    function removeKeywordThings(root = document) {
        const things = root.querySelectorAll('div.thing');
        things.forEach(div => {
            if (containsKeyword(div.innerText)) {
                div.remove();
            }
        });
    }

    // Run the filter on initial page load.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", removeKeywordThings);
    } else {
        removeKeywordThings();
    }

    // Set up a MutationObserver to catch dynamically added content.
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.matches && node.matches('div.thing')) {
                        if (containsKeyword(node.innerText)) {
                            node.remove();
                        }
                    } else {
                        removeKeywordThings(node);
                    }
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

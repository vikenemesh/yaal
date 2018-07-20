// ==UserScript==
// @name         YouTube Anti-Anti-Lemming
// @namespace    vehacks
// @version      0.2
// @description  Recolor the like bar when you haven't decided yet. Allows you to click away from shitty videos faster.
// @author       vikenemesh
// @match        https://www.youtube.com/*
// @grant        unsafeWindow
// ==/UserScript==

(function _() {
    'use strict';

    if( unsafeWindow.document.readyState != "interactive" ) {
        return unsafeWindow.addEventListener("DOMContentLoaded", _);
    }

    // Check continuously until the likebar is accessible
    // Update: Keep doing it, youtube doesn't actually navigate when you click on something, it's all dynamic
    var interval = unsafeWindow.setInterval(()=>{
        var sentimentBar = unsafeWindow.document.getElementById('sentiment');
        if( sentimentBar ) {
            sentimentBar.setAttribute('activated_', true);
            //unsafeWindow.clearInterval(interval);
            unsafeWindow.console.log("Over'n'out");
        }
    }, 500);
})();

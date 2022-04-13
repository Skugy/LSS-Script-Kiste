// ==UserScript==
// @name         Minimal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Entfernt alles was Unwichtig ist
// @author       Skugy
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @downloadURL  https://github.com/Skugy/LSS-Script-Kiste/raw/main/Minimal.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var mapfeld = document.getElementById( 'map_outer' );
    mapfeld.parentNode.removeChild( mapfeld );
    var chatfeld = document.getElementById( 'chat_outer' );
    chatfeld.parentNode.removeChild( chatfeld );
    var ktw = document.getElementById( 'ktw_no_transports' );
    ktw.parentNode.removeChild( ktw );
    var alli = document.getElementById( 'alliance_no_mission' );
    alli.parentNode.removeChild( alli );

})();

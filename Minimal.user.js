// ==UserScript==
// @name         Minimal
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Entfernt alles was Unwichtig ist
// @author       Skugy
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @exclude      *://www.leitstellenspiel.de/mission*
// @icon         https://icons.duckduckgo.com/ip3/leitstellenspiel.de.ico
// @updateURL    https://github.com/Skugy/LSS-Script-Kiste/raw/main/Minimal.user.js
// @downloadURL  https://github.com/Skugy/LSS-Script-Kiste/raw/main/Minimal.user.js
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

    document.getElementById("radio_panel_body").style.maxHeight = "100%";
    document.getElementById("radio_panel_body").style.height = "100%";

    document.getElementById("building_panel_body").style.maxHeight = "100%";
    document.getElementById("building_panel_body").style.height = "100%";

    document.getElementById("missions-panel-body").style.height = "100%";

})();

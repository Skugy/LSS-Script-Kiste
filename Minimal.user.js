// ==UserScript==
// @name         Minimal Experimental
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Entfernt alles was Unwichtig ist
// @author       Skugy
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @exclude      *://www.leitstellenspiel.de/mission*
// @exclude      https://polizei.leitstellenspiel.de/?mapview=true
// @exclude      https://www.leitstellenspiel.de/?mapview=true
// @icon         https://icons.duckduckgo.com/ip3/leitstellenspiel.de.ico
// @updateURL    https://github.com/Skugy/LSS-Script-Kiste/raw/main/Minimal.user.js
// @downloadURL  https://github.com/Skugy/LSS-Script-Kiste/raw/main/Minimal.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //danke an Crazycake für diesen Abschnitt und die Info wie man ausblendet
    document.getElementById("map").hidden=true;
    document.getElementById("map_outer").hidden=true;
    document.getElementById("chat_outer").hidden=true;

    //Ausblenden der Info anzeige
    document.getElementById("alliance_no_mission").hidden=true;
    document.getElementById("ktw_no_transports").hidden=true;

    // damit das "Wache" Fenster alle Wachen anzeigt ohne scollen zu müssen
    document.getElementById("building_panel_body").style.maxHeight = "100%";

    //vergrößern der Fenster
    document.getElementById("radio_panel_body").style.height = "100%";
    document.getElementById("building_panel_body").style.height = "100%";
    document.getElementById("missions-panel-body").style.height = "100%";

})();

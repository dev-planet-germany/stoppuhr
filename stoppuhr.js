const anzeige = document.getElementById("zeitanzeige");

var gestoppteZeit = 0;
var pausiert = true;
var letzterDurchlauf = new Date();

function start() {
    pausiert = false;
}

function pause() {
    pausiert = true;
}

function reset() {
    pausiert = true;
    gestoppteZeit = 0;
    aktualisiereAnzeige();
}

function aktualisiereZeit() {
    if(pausiert === false) {
        gestoppteZeit += new Date() - letzterDurchlauf;
        aktualisiereAnzeige();
    }

    letzterDurchlauf = new Date();
    setTimeout(aktualisiereZeit, 1);
}

function aktualisiereAnzeige() {
    let millisekunden = gestoppteZeit % 1000;
    let sekunden = Math.floor(gestoppteZeit / 1000) % 60;
    let minuten = Math.floor(gestoppteZeit / 60000) % 60;
    let stunden = Math.floor(gestoppteZeit / 3600000);

    stunden = stunden < 10 ? "0" + stunden : stunden;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    sekunden = sekunden < 10 ? "0" + sekunden : sekunden;
    millisekunden = (millisekunden + "000").slice(0, 3);

    anzeige.innerHTML = stunden + ":" + minuten + ":" + sekunden + "." + millisekunden;
}

aktualisiereZeit();
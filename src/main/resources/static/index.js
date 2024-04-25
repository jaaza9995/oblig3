$(function(){  // kjøres når dokumentet er ferdig lastet
    hentAlleBilletter();
});
function hentAlleBilletter() {
    $.get( "/hentBilletter", function(billetter) {
        formaterBilletter(billetter);
    });
}

function formaterBilletter(billetter){
    let ut = "<select id='valgtFilm' onchange='finnFilm()'>";
    let forrigeFilm = "";
    ut+="<option>Velg film</option>";

    for (const billett of billetter){
        if(billett.film !== forrigeFilm){
            ut+="<option>"+billett.film+"</option>";
        }
        forrigeFilm = billett.film;
    }
    ut+="</select>";
    $("#film").html(ut);
}

function finnFilm(){
    const valgtFilm = $("#valgtFilm").val();
    $.get( "/hentBilletter", function( billetter ) {
        formaterFilmer(billetter, valgtFilm);
    });
}
function formaterFilmer(billetter,valgtFilm){
    let ut = "<select id='valgtFilm'>";
    for(const billett of billetter ){
        if(billett.film === valgtFilm){
            ut+="<option>"+billett.film+"</option>";
        }
    }
    ut+="</select>";
    $("#film").html(ut);
}

function regBillett() {

    const billett = {
        film : $("#valgtFilm").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val(),
    };
    $.post("/lagre", billett, function(){
        hentAlleBilletter();
    });
    $("#valgtFilm").val("");
    $("#antall").val( " ");
    $("#fornavn").val(" ");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}
function hentAlle() {
    $.get( "/hentAlle", function(billetter ) {
        formaterData(billetter);
    });
}


function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th>" +
        "<th>Epost</th><th>Film</th><th>Antall Billetter</th></tr>";
    for (const billett of billetter) {
        ut += "<tr><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefonnr + "</td>" +
            "<td>" + billett.epost + "</td><td>" + billett.film + "</td><td>" + billett.antall + "</td></tr>";
    }
    ut += "</table>";
    $("#billettene").html(ut);
}

function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ.\- ]{2,20}$/;
    const ok = regexp.test(fornavn);
    if (!ok) {
        $("#feilFornavn").text("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        $("#feilFornavn").text("");
        return true;
    }
}
function validerEtternavn(etternavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ.\- ]{2,20}$/;
    const ok = regexp.test(etternavn);
    if (!ok) {
        $("#feilEtternavn").text("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    } else {
        $("#feilEtternavn").text("");
        return true;
    }
}
function validerTelefonnr(telefonnr) {
    const regexp = /^\d{8}$/;
    const ok = regexp.test(telefonnr);
    if (!ok) {
        $("#feilTelefonnr").text("Telefonnr må bestå av 8 tall");
        return false;
    } else {
        $("#feilTelefonnr").text("");
        return true;
    }
}

function validerAntall(antall) {
    const regexp = /^\d+$/;
    const ok = regexp.test(antall);
    if (!ok) {
        $("#feilAntall").text("du må skrive inn antall");
        return false;
    } else {
        $("#feilAntall").text("");
        return true;
    }
}
function validerEpost(epost) {
    const regexp =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok = regexp.test(epost);
    if (!ok) {
        $("#feilEpost").text("Skriv inn riktig epost");
        return false;
    } else {
        $("#feilEpost").text("");
        return true;
    }
}
function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}

package oslomet.webprogrammering;

public class Kinobilletter {
    String film;
    String antall;
    String fornavn;
    String etternavn;
    String velgFilm;
    String epost;
    String telefonnr;

    public Kinobilletter(){

    }


    public Kinobilletter(String film, String antall, String fornavn, String etternavn, String velgFilm, String epost, String telefonnr) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.velgFilm = velgFilm;
        this.epost = epost;
        this.telefonnr = telefonnr;
    }


    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getVelgFilm() {
        return velgFilm;
    }

    public void setVelgFilm(String velgFilm) {
        this.velgFilm = velgFilm;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }


}


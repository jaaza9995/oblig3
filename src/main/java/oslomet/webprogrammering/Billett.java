package oslomet.webprogrammering;

public class Billett {
    String film;
    public Billett(String film) {
        this.film = film;
    }
    public Billett(){
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

}


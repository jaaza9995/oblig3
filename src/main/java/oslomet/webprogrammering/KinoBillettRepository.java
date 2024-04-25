package oslomet.webprogrammering;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;



@Repository
public class KinoBillettRepository {

    @Autowired
    private JdbcTemplate db;
    public void lagreBillett(Kinobilletter innKinoBillett){
        String sql ="INSERT INTO Billett(film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKinoBillett.getFilm(),
                innKinoBillett.getAntall(),
                innKinoBillett.getFornavn(),
                innKinoBillett.getEtternavn(),
                innKinoBillett.getTelefonnr(),
                innKinoBillett.getEpost());
    }

    public List<Kinobilletter> hentAlle(){
        String sql = "SELECT * FROM Billett";
        return db.query(sql, new BeanPropertyRowMapper<>(Kinobilletter.class));
    }
    public void slettAlle(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}



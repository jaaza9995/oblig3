package oslomet.webprogrammering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KundeController {
    @Autowired
    KinoBillettRepository rep;

    public final List<Billett> billettRegister = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagre(Kinobilletter billett){
        rep.lagreBillett(billett);
    }

    @GetMapping("/hentAlle")
    public List<Kinobilletter> hentAlle(){
        return rep.hentAlle();
    }

    public KundeController(){
        Billett film1 = new Billett("film1");
        billettRegister.add(film1);
        Billett film2 = new Billett("film2");
        billettRegister.add(film2);
        Billett film3 = new Billett("film3");
        billettRegister.add(film3);
        Billett film4 = new Billett("film4");
        billettRegister.add(film4);
    }

    @GetMapping("/hentBilletter")
    public List<Billett> hentBilletter (){
        return billettRegister;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }
}

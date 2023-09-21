import Nav from "../../component/Nav/Nav";
import Slide from "../../component/Slide/Slide";
import "./Don.css";

const Don = () => {
  return (
    <div>
      <Nav />
      <Slide />
      <section className="un">
        <h2>Faites un Don via PayPal</h2>
        <p>
          Notre mission est de créer des ponts entre les jeunes et les aînés.
          Nous sommes déterminés à bâtir un avenir où l'âge n'est plus une
          barrière, mais une source d'inspiration et de compréhension mutuelle.
        </p>
        <p>
          Votre soutien est essentiel pour réaliser cette vision. Chaque don,
          qu'il soit petit ou grand, nous rapproche un peu plus de notre
          objectif. Votre contribution nous permettra de continuer à organiser
          des événements intergénérationnels, à développer des programmes
          éducatifs et à créer des espaces d'échange où les jeunes et les aînés
          peuvent se rencontrer, apprendre les uns des autres et tisser des
          liens précieux.
        </p>
        <p>
          <strong>
            Rejoignez-nous dans cette belle aventure intergénérationnelle en
            faisant un don dès aujourd'hui. Votre contribution fera la
            différence et aidera à construire un monde où l'âge est synonyme
            d'opportunité, d'enrichissement et de solidarité.
          </strong>
        </p>
        <p>
          Nous vous remercions chaleureusement pour votre soutien continu à
          l'Association Intergen. Ensemble, nous pouvons créer un avenir
          meilleur pour toutes les générations. Faites un don dès maintenant et
          faites partie de cette belle histoire intergénérationnelle !
        </p>
      </section>

      <section id="deux">
              <img src="public/img/HEADER 1.png" alt="img-don" />
      </section>
              <span />
    </div>
  );
};

export default Don;

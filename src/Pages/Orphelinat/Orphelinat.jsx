import Footer from "../../component/Footer/Footer";
import Form from "../../component/Form/Form";
import Nav from "../../component/Nav/Nav";
import "./Orphelinat.css";

const Orphelinat = () => {
  return (
      <>
    <div>
        <Nav />
        <span />
        <div id="triangle-bleu" />
        <section>
          <h1>Orphelinat</h1>
          <p>
            Bienvenue aux orphelinats, nous sommes ravis de vous inviter à
            rejoindre notre mouvement intergénérationnel pour créer des
            souvenirs durables et construire des liens significatifs. Chez
            Intergen, nous croyons en la puissance de la connexion entre les
            générations pour offrir des opportunités uniques d'apprentissage et
            d'enrichissement.
          </p>
        </section>
        <section>
          <h3>Pourquoi participer</h3>
          <p>
            La participation de vos enfants à nos activités
            intergénérationnelles offre bien plus qu'une simple expérience.
            C'est une opportunité d'explorer, d'apprendre et de grandir aux
            côtés des aînés bienveillants qui partagent leurs connaissances et
            leur expérience. En participant, vos enfants peuvent élargir leurs
            horizons, développer des compétences et créer des amitiés spéciales
            qui dureront toute une vie. <br />
            Nos activités pour les orphelinats sont soigneusement conçues pour
            être engageantes et amusantes.
          </p>
          <p>
            L'inscription à nos activités est simple. Il vous suffit de remplir
            notre formulaire en ligne, où vous pourrez indiquer les préférences
            de participation de vos enfants et en savoir plus sur nos prochains
            événements. Notre équipe se fera un plaisir de vous accueillir et de
            vous fournir toutes les informations dont vous avez besoin pour que
            votre enfant participe.
          </p>
          <em>
            <strong>
              Rejoignez-nous pour construire des ponts entre les générations,
              partager des expériences et créer des liens durables grâce à nos
              activités intergénérationnelles. Ensemble, nous écrivons une
              histoire d'amitié, de compréhension et d'apprentissage mutuel.
            </strong>
          </em>
          <span id="span2" />
        </section>
        <Form/>

        <Footer />
    </div>
      </>
  );
};

export default Orphelinat;

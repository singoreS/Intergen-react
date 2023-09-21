import "./Programmes.css";
import Footer from "../../component/Footer/Footer"
import Nav from "../../component/Nav/Nav"

const Programmes = () => {
  return (
    <div>
      <>
        <Nav />
      <section id="un">
        <article>
          <h1>Nos Programmes Intergénérationnels</h1>
          <p>
            Découvrez nos activités conçues pour rapprocher les générations et
            créer des moments mémorables ensemble. De l'art à la musique, en
            passant par l'apprentissage interactif, nos programmes variés
            offrent une expérience enrichissante pour tous les âges.
          </p>
        </article>

        <article>
          <h2>Explorez nos activités :</h2>
          <hr />
          <h3>Apprendre à cuisiner</h3>
          <p>
            Plongez dans une expérience chaleureuse et savoureuse de partage
            intergénérationnel avec notre activité spéciale "Apprendre à
            Cuisiner Ensemble". Conçue pour réunir les orphelins et les
            personnes âgées, cette activité offre bien plus que la simple
            maîtrise de la cuisine. Elle crée des liens, partage des histoires
            et établit des souvenirs durables.
          </p>
          <p>
            Création de Souvenirs : Les meilleurs souvenirs sont souvent créés
            autour de la table. En cuisinant ensemble, vous partagerez des
            moments de rire, de découverte et de collaboration. Chaque plat que
            vous préparerez deviendra un symbole de votre lien spécial
            intergénérationnel.
          </p>
          <figure>
            <img
              src="public/img/mains-faisant-biscuits-noel.jpg"
              alt="apprendre-à-cuisiner"
            />
          </figure>
        </article>

        <article>
          <h3>Apprendre l'usage d'un ordinateur </h3>
          <p>
            Plongez dans le monde numérique avec notre activité spéciale
            "Découverte Informatique Intergénérationnelle" . Cette expérience
            vise à rapprocher les générations en vous initiant aux merveilles de
            la technologie moderne. Que vous soyez un orphelin curieux ou une
            personne âgée désireuse d'explorer de nouveaux horizons, cette
            activité vous ouvre les portes d'un univers passionnant.
          </p>
          <p>
            Communication Facilitée : Apprenez à utiliser les outils de
            communication numérique pour rester en contact avec vos proches,
            qu'ils soient à proximité ou à distance. De l'échange de courriels à
            la visioconférence, vous découvrirez de nouvelles façons de
            renforcer vos liens familiaux et amicaux.
          </p>
          <figure>
            <img
              src="public/img/pexels-shvets-production-7545266.jpg"
              alt="apprendre-l'-usage-d'un-ordinateur"
            />
          </figure>
        </article>

        <article>
          <h3>Initiatives bénévoles communautaires</h3>
          <p>
            Joignez-vous à nous pour une expérience riche en partage, en
            apprentissage et en connexion au sein de notre atelier
            intergénérationnel "Explorez Ensemble". Cet atelier unique réunit
            les jeunes et les aînés dans un espace d'échange d'idées, de
            connaissances et de souvenirs, créant ainsi des liens précieux qui
            transcendent les générations.
          </p>
          <p>
            Des jeux et des activités ludiques ajoutent une touche compétitive
            amicale à l'atelier. Les équipes intergénérationnelles se forment
            pour des défis amusants, renforçant ainsi l'esprit d'équipe et le
            plaisir de participer ensemble.
          </p>
          <figure>
            <img
              src="public/img/famille-complete-jouant-au-basket-ball.jpg"
              alt="la-tenue-d’un-atelier-intergénérationnel"
            />
          </figure>
        </article>

        <article></article>
        <article></article>
        <article></article>
      </section>

        <Footer/>

      </>
      </div>
  );
};

export default Programmes;

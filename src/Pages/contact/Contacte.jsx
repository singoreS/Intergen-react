import Footer from "../../component/Footer/Footer";
import Form from "../../component/Form/Form";
import Nav from "../../component/Nav/Nav";
import "./Contact.css";

const Contacte = () => {
  return (
    <>
      <Nav />
      {/* <span /> */}
      <section id="un">
        <h1>Contact</h1>
        <p>
          Avez-vous des questions, des suggestions ou souhaitez-vous en savoir
          plus sur notre initiative Intergen ? <br />
          Nous sommes là pour vous aider ! Remplissez le formulaire ci-dessous
          et nous vous contacterons dans les plus brefs délais par mail.
        </p>
        
        <div className="img">
          <img src="public/img/8690678_3969584.svg" alt="img-contact" />
              </div>
              
        <Form/>
      </section>

      <Footer />
    </>
  );
};

export default Contacte;

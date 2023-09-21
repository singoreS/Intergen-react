import "./Form.css"

const Form = () => {
  return (
    <div>
      <form action="#">
        <h2>Inscrivez-vous</h2>
        <label>Nom</label>
        <input type="text" placeholder="Nom" required="" />
        <label>Prénom</label>
        <input type="text" placeholder="Prénom" required="" />
        <label>Email</label>
        <input type="email" placeholder="Votre adresses email" required="" />
        <label>Ville</label>
        <input type="text" placeholder="Votre Ville" required="" />
        <label>Message</label>
        <textarea name="Message" placeholder="Message..." defaultValue={""} />
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default Form;

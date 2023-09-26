import { useForm } from "react-hook-form"
import "./Form.css"
import { useEffect } from "react";

const Form = () => {

  const {
    formState: { errors }, handleSubmit,
    register,
    watch,
} = useForm();

// soumettre du formulaire

const onSubmit = (values) => console.log(values);

// observateur de la saisie
useEffect(() => {
    const observer = watch((values) => console.log(values));

    return () => {
        observer.unsubscribe();
    }
}, [watch]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Inscrivez-vous</h2>
        <label>Nom</label>
        <input type="text" />
        <label>Prénom</label>
        <input type="text" placeholder="Prénom" required="" />
        <label>Email</label>
        <input type="email" placeholder="Votre adresses email" required="" />
        <label>Ville</label>
        <input type="text" placeholder="Votre Ville" required="" />
        <label>Message</label>
        <textarea name="Message" placeholder="Message..." defaultValue={""} />
        <input type="submit" />

        <small>{errors}</small>
      </form>
    </div>
  );
};

export default Form;

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src="public/img/LOGO-INTERGEN3.png" alt="logo" />

      <ul>
        <a href="page1.html">EHPAD</a>
        <a href="page2.html">Orphelinat</a>
        <a href="programmes.html">Programmes</a>
        <a href="contact.html">Contact</a>
        <a href="don.html">Faire un don</a>
      </ul>
    </div>
  );
};

export default Nav;

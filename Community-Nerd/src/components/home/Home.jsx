import "./Home.css";

const Home = () => {
  return (
    <div>
    <div className="main-content">

      <h1>Welcome</h1>
      <span>Voce esta recrutado para entrar no grupo de hackers 🚶</span>
    </div>

    <footer>
      <p>Sobre Nós: Somos uma empresa dedicada à segurança digital e hacking ético.</p>
      <p>Contatos:</p>
      <a target="blank" className="contact-icons" href="https://discord.gg/3kvpyvKV"><i className="fab fa-discord"></i> Discord: Servidor</a>
      <a target="blank" className="contact-icons" href="https://github.com/inGabrielcouto"><i className="fab fa-github"></i> GitHub: inGabrielcouto</a>
      <a target="blank" className="contact-icons" href="https://www.instagram.com/gabriel.couttoo/"><i className="fab fa-instagram"></i> Instagram: Gabira🐐</a>
    </footer>
  </div>
    
  )
}

export default Home
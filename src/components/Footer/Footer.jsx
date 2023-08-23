import styles from "./Footer.module.scss";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = ({ footer }) => {
  const renderLinks = footer.links.map((link) => (
    <li key={link._id}>
      <a href={link.url}>{link.title}</a>
    </li>
  ));

  const renderContato = footer.contato.map((item) => (
    <li key={item._id}>{item.text}</li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.main}>
          <a href="#">
            <span>Minhas Massas</span>
          </a>
          <h3>{footer.text}</h3>
          <ul>
            <li>
              <a href={footer.instagram}>
                <FaInstagramSquare className="icon" />
              </a>
            </li>
            <li>
              <a href={footer.facebook}>
                <FaFacebookSquare className="icon" />
              </a>
            </li>
            <li>
              <a href={footer.linkedin}>
                <FaLinkedin className="icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h2>Links</h2>
          <ul>{renderLinks}</ul>
        </div>

        <div className={styles.contacts}>
          <h2>Contatos</h2>
          <ul>{renderContato}</ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>MINHAS MASSAS - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

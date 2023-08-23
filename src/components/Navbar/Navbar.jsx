import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.scss";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const setNavbarHandler = () => {
      if (window.scrollY >= 600) return setIsNavbarShow(true);
      return setIsNavbarShow(false);
    };

    document.addEventListener("scroll", setNavbarHandler);

    return () => {
      document.removeEventListener("scroll", setNavbarHandler);
    };
  }, []);

  const toggleMenuHandler = () => setIsMenu(!isMenu);

  return (
    <section
      className={`${styles["navbar-wrapper"]} ${isNavbarShow && styles.active}`}
    >
      <div className={styles.navbar}>
        <a href="#">
          <span>Minhas Massas</span>
        </a>

        <nav className={styles.links}>
          <Navlinks toggleMenu={null} />
        </nav>

        <GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandler} />
        <nav className={`${styles.burger} ${isMenu && styles.active}`}>
          <Navlinks toggleMenu={toggleMenuHandler} />
        </nav>
        <div className={`${styles.background} ${isMenu && styles.active}`} />
      </div>
    </section>
  );
};

export default Navbar;

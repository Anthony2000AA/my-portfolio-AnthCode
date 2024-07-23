
import  { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}


export default function Header({isDarkMode, toggleTheme}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`${styles.navbar} ${isDarkMode ? styles.navbarDark : styles.navbarLight} ${isOpen ? styles.navListOpenHeigth:''}` }>
    <button className={styles.menuButton} onClick={toggleMenu}>
      ☰
    </button>
     <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
        <li className={styles.navItem}>
          <Link className={`${styles.navLink} ${isDarkMode ? styles.navLinkDarkMode : styles.navLinkLightMode}`} to="about" smooth={true} duration={500} onClick={toggleMenu}>
            Sobre mi
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.navLink} ${isDarkMode ? styles.navLinkDarkMode : styles.navLinkLightMode}`} to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Habilidades
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={`${styles.navLink} ${isDarkMode ? styles.navLinkDarkMode : styles.navLinkLightMode}`} to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Proyectos
          </Link>
        </li>
      </ul>
      <div className={styles.toggle}>
        <DarkModeSwitch
          style={ {  width:35, height: 35}}
          checked={isDarkMode}
          moonColor='#1F2028'
          sunColor='#1F2028'
          onChange={toggleTheme}
          size={120}
        />
      </div>
  </nav>
  )
}

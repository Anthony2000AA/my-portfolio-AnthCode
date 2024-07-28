import styles from "./Home.module.css"
import Header from '../../components/header/Header'
import { Button } from '@chakra-ui/react'
import { TriangleDownIcon,  DownloadIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin ,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useRef, useEffect } from "react";
import TypewriterComponent from "../../components/typeWriter/TypeWriterComponent";
import { Link } from 'react-scroll';
import Carousel from "../../components/carousel/Carousel";
import Project from "../../components/projects/Project";
import { infoSkills } from "../../utils/Resourse";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Timeline from "../../components/timeline/Timeline";

interface HomeProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}


export default function Home({ isDarkMode, toggleTheme }: HomeProps) {


  const whatsappNumber = '+51971595292'; 
  const message = 'Hola Anthony! Tengo en mente un proyecto, ¿podrías ayudarme?';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



  const handleDownload = () => {
    // Aquí se especifica la ruta al archivo PDF en la carpeta `public`
    const link = document.createElement('a');
    link.href = '/my-cv/CV_Anthony-Avalos-Santos.pdf';
    link.download = 'CV_Anthony-Avalos-Santos.pdf';
    link.click();
  };

  
  const typewriterRef = useRef<any>(null);

  useEffect(() => {
    if (typewriterRef.current) {
   
      typewriterRef.current.start();
    }
  }, [isDarkMode]);

 

  return (
    <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <section className={isDarkMode ? styles.darkMode : styles.lightMode}>
        <div className={styles.containerPrincipale}>
          <div className={`${styles.welcome} ${isDarkMode? styles.welcomeDark : styles.welcomeLight}`}>
            

            <div className={styles.containerWriter}>
                <TypewriterComponent isDarkMode={isDarkMode} />
            </div>

            <h3>Soy Anthony Avalos</h3>

            <div className={styles.description}>
              <p>Desarrollador fullstack, apasionado por crear soluciones de Software innovadoras y eficientes. Explora mis proyectos y habilidades.</p>
            </div>
            <div className={styles.button}>
              <Button rightIcon={<TriangleDownIcon />} colorScheme='teal' variant='outline'>
                 <Link   to="about" smooth={true} duration={500} >
                  Conoceme más
                 </Link>
              </Button>

              
            </div>
          </div>

          <div className={styles.profile}>
            <div className={styles.containerImage}>
              <LazyLoadImage src="/profile/photo.jpg" alt="Anthony Avalos" />
            </div>
            <div className={styles.logos}>
              <a href="mailto:anthony482828@gmail.com" target="_blank" rel="noopener noreferrer" title="Enviar correo a Anthony">
                <FontAwesomeIcon icon={faEnvelope} className= {isDarkMode ? styles.iconDark : styles.iconLigth } />
              </a>
              <a href="https://github.com/Anthony2000AA" target="_blank" rel="noopener noreferrer" title="Visitar Github Anthony2000AA">
                <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } />
              </a>
              <a href="https://www.linkedin.com/in/anthony-avalos-santos-908678279/" target="_blank" rel="noopener noreferrer" title="Visitar Linkedin Anthony">
                <FontAwesomeIcon icon={faLinkedin} className= {isDarkMode ? styles.iconDark : styles.iconLigth } />
              </a>
            </div>
          </div>
        </div>
      </section>



      <section id="about" className={isDarkMode ? styles.darkMode : styles.lightMode}>
        <div className={styles.containerAbout}>
          <div className={styles.photo}>
            <LazyLoadImage src="/profile/student-black.jpeg" alt="Anthony Avalos" />
          </div>
          <div className={`${styles.description} ${isDarkMode ? styles.descriptionDark: styles.descriptionLight}`}>
            <h1>Sobre mí</h1>
            <p>
              Soy Anthony Avalos, un desarrollador fullstack apasionado por la creación de soluciones
              tecnológicas innovadoras y eficientes. Mi entusiasmo por aprender nuevas tecnologías es
              inagotable, y disfruto aplicándolas en proyectos que marquen la diferencia. Actualmente,
              estoy cursando el cuarto año de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC) en Lima, Perú.
              Mi objetivo es continuar creciendo profesionalmente y contribuir al desarrollo de la industria tecnológica con ideas frescas y creativas.
              Tienes una idea de software en mente? ¡Hablemos!
              
            </p>

            <div className={styles.buttonsCVWS}>
              <Button leftIcon={<DownloadIcon />} colorScheme='teal' variant='solid' title="Descargar CV" onClick={handleDownload}>
                CV
              </Button> 
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faWhatsapp} className= {isDarkMode ? styles.iconDark : styles.iconLigth } />
                </a>
            </div>
           
          </div> 
        </div>

      </section>




      <section id="skills" className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <div className={`${styles.containerSkills} ${isDarkMode? styles.skillsDark: styles.skillsLight}`}>
          <h1>Habilidades</h1>
          <Carousel isDarkMode={isDarkMode} resources={infoSkills} modal={false}/>
        </div>
      </section>

      <section id="experience" className={isDarkMode ? styles.darkModeExperience : styles.lightModeExperience}>
      <div className={`${styles.containerExperience} ${isDarkMode? styles.skillsDark: styles.skillsLight}`}>
          <h1>Experiencia laboral</h1>

            <Timeline isDarkMode={isDarkMode} />

        </div>
      </section>



    





      
      <section id="projects" className={isDarkMode ? styles.darkMode : styles.lightMode}>
      
      <div className={`${styles.containerProjects} ${isDarkMode? styles.projectsDark: styles.projectsLight}`}>
        <h1>Proyectos trabajados</h1>
          <Project isDarkMode={isDarkMode}/>
      </div>
      
      </section>



    </div>
  )
}

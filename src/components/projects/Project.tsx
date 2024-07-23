import { Button } from '@chakra-ui/react';
import { infoProjectsFlexiDorm, infoProjectsPython, infoProjectsZeballos } from '../../utils/Resourse';
import ModalAux from '../modal/ModalAux';
import styles from './Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from '../footer/Footer';

interface ProjectProps {
    isDarkMode: boolean;
}

export default function Project({ isDarkMode }: ProjectProps) {
  return (
    <div className={isDarkMode? styles.containerProjectsDark : styles.containerProjectsLight }>
        
        <div className={`${styles.zeballos} `}>

            <div className={`${styles.imageProject} ${styles.image} ` }>
                <img src="/projects-images/zeballos/zeballos.png" alt="" />
            </div>

            <div className={`${styles.description} ${styles.text} ${isDarkMode ? '':styles.contentModeDark}` }>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark}>CommerceZeballos</h2>
                <p>Aplicación web para la gestión de un restaurante, con la finalidad de agilizar los procesos de toma de pedidos, control de inventario y gestión de empleados.</p>
                <div className={styles.tecnologis}>
                    <img className={styles.labelTech} src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular.js" />
                    <img className={styles.labelTech}  src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                    <img className={styles.labelTech} src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="Spring Security" />
                    <img className={styles.labelTech} src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                    
                </div>

                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsZeballos} title={"Screens de la Aplicacion Web"}/>
                    
                    <Button className={styles.buttonAction} title='Visitar repositorio'>
                        <a href="https://github.com/Finanzas-Ingeco-SV82-Grupo-04/CommerceZeballos-Backend" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } /> Back-end
                        </a>
                    </Button>
                    <Button className={styles.buttonAction} title='Visitar repositorio'>
                        <a href="https://github.com/Finanzas-Ingeco-SV82-Grupo-04/CommerceZeballos-Frontend" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } /> Front-end
                        </a>
                    </Button>
                </div>

            </div>

        </div>
        <div className={styles.flexiDorm}>
            
            <div className={styles.description}>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark}>FlexiDorm</h2>
                <p>Aplicación web para la gestión de un restaurante, con la finalidad de agilizar los procesos de toma de pedidos, control de inventario y gestión de empleados.</p>
                <div className={styles.tecnologis}>
                <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular.js" />
                    <img className={styles.labelTech} src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                    <img className={styles.labelTech} src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="Spring Security" />
                    <img className={styles.labelTech} src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                </div>

                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsFlexiDorm} title={"Screens de la Aplicacion Web"}/>
                    <Button className={styles.buttonAction} title='Visitar repositorio'>
                        <a href="https://github.com/FlexDorm/FlexDormSpringBootApplication" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } /> Back-end
                        </a>
                    </Button>
                    <Button className={styles.buttonAction} title='Visitar repositorio'>
                        <a href="https://github.com/FlexDorm/FlexDormWebApplication" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } /> Front-end
                        </a>
                    </Button>
                </div>

            </div>
            <div className={styles.imageProject}>
                <img src="/projects-images/flexidorm-open/projecto-open.png" alt="" />
            </div>

        </div>
        <div className={styles.pythonProyect}>
            <div className={`${styles.imageProject} ${styles.image} ` }>
                <img src="/projects-images/python-project/pantalla-app-python.png" alt="" />
            </div>

            <div className={`${styles.description} ${styles.text}`}>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark }>Python Project</h2>
                <p>Aplicación web para la gestión de un restaurante, con la finalidad de agilizar los procesos de toma de pedidos, control de inventario y gestión de empleados.</p>
                <div className={styles.tecnologis}>
                    <img className={styles.labelTech} src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                </div>
                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsPython} title={"Screens de la Aplicacion Desktop"}/>
                    <Button className={styles.buttonAction} title='Visitar repositorio'>
                        <a href="https://github.com/Anthony2000AA/Host-Friend-DesktopApplication" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className= {isDarkMode ? styles.iconDark : styles.iconLigth } /> Back-end
                        </a>
                    </Button>
                   
                </div>
            </div>

        </div>

        <Footer />
    </div>
    
  )
}

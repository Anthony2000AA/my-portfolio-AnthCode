import { Button } from '@chakra-ui/react';
import { infoProjectsFlexiDorm, infoProjectsPython, infoProjectsZeballos } from '../../utils/Resourse';
import ModalAux from '../modal/ModalAux';
import styles from './Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from '../footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ProjectProps {
    isDarkMode: boolean;
}



export default function Project({ isDarkMode }: ProjectProps) {

    const moreInfoZeballos="La aplicacion permite al administrador gestionar los creditos habilitados para los clientes. Estos pueden realizar consumos y abonos a su cuenta.Tambien, para un rapido proceso de transacciones, hay un apartado de registro de productos, para que el administrador pueda registrar los productos que se venden en la bodega y agregarlos a cada transaccion realizada.";
    const moreInfoFlexiDorm="La aplicacion permite el registro de dos tipos de usuario, personas que desean alquilar habitacion, y universitarios que quieran disponer de ella. Los estudiantes pueden ver sus reservas realizadas y las habitaciones disponibles, y los arrendadores pueden recibir las reservas y ver la informacion del estudiante y sus requerimientos. Tambien, este ultimo puede ver el historial de cada habitacion que puede publicar o eliminar, asi como tambien cambiar la disponibilidad de la habitacion.";
    const moreInfoPython="La aplicacion permite visualizar los centros medicos cercanos a la ubicacion del usuario dependiento de los sintomas que presente (minimo 2). Ademas, se puede visualizar una lista de pacientes que tambien presentaron esos sintomas y en que centro medio se atendieron. El grafico de grafos presente, muestra la ubicacion de los hospitales que atienden los sintomas presentes, y aplicando algoritmos como Ford-Fulkerson, Kruskal, entre otros, muestra la distancia entre ellos, permitiendo al usuario cual le es conveniente.";

    const nameProject1 = "CommerceZeballos";
    const nameProject2 = "FlexiDorm";
    const nameProject3 = "Python Project";

  return (
    <div className={isDarkMode? styles.containerProjectsDark : styles.containerProjectsLight }>
        
        <div className={`${styles.zeballos} `}>

            <div className={`${styles.imageProject} ${styles.image} ` }>
                <LazyLoadImage src="/projects-images/zeballos/zeballos.png" alt="" />
            </div>

            <div className={`${styles.description} ${styles.text} ${isDarkMode ? '':styles.contentModeDark}` }>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark}>CommerceZeballos</h2>
                <p>
                    Aplicacion web para la gestion de creditos de pequeños negocios (bodegas) para clientes frecuentes.
                    Permite ver el detalle de cada transaccion/consumo realizada por el cliente, asi como tambien los
                    intereses generados. Este proyecto posee una aplicacion web front-end y una API backend. Ver  <a className={styles.demo} href="https://test-zeballos.vercel.app/" target="_blank" rel="noopener noreferrer"><b>demo</b></a>.

                </p>
                <div className={styles.tecnologis}>
                    <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular.js" />
                    <LazyLoadImage className={styles.labelTech}  src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                    <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="Spring Security" />
                    <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                    
                </div>

                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsZeballos} title={"Screens de la Aplicacion Web"}  moreInfo= {moreInfoZeballos} nameProject={nameProject1}/>
                    
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
            
            <div className={`${styles.description} ${isDarkMode ? '':styles.contentModeDark}`}>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark}>FlexiDorm</h2>
                <p>
                    Aplicacion web para la gestion de alquileres temporales de habitaciones propocionadas por arrendadores para estudiantes universitarios.
                    Permite realizar reserva de habitaciones aledañas a la universidad. Este proyecto posee una aplicacion web front-end y una  API RESTful en el back-end. Ver  <a className={styles.demo} href="https://flex-dorm-web-application-mu.vercel.app/login" target="_blank" rel="noopener noreferrer"><b>demo</b></a>.
                </p>
                <div className={styles.tecnologis}>
                <LazyLoadImage src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular.js" />
                <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" />
                <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="Spring Security" />
                <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                </div>

                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsFlexiDorm} title={"Screens de la Aplicacion Web"} moreInfo={moreInfoFlexiDorm} nameProject={nameProject2}/>
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
                <LazyLoadImage src="/projects-images/flexidorm-open/projecto-open.png" alt="" />
            </div>

        </div>
        <div className={styles.pythonProyect}>
            <div className={`${styles.imageProject} ${styles.image} ` }>
                <LazyLoadImage src="/projects-images/python-project/pantalla-app-python.png" alt="" />
            </div>

            <div className={`${styles.description} ${styles.text}  ${isDarkMode ? '':styles.contentModeDark}`}>
                <h2 className={isDarkMode ? styles.titleModeLight:styles.titleModeDark }>Hos-Friend</h2>
                <p>Aplicacion de escritorio para el analisis de datos clinicos de pacientes con enfermedades en
                    comun, para elegir mejor opcion a que centro medico acudir tomando en cuenta que diversos
                    factores y algoritmos. Este proyecto fue desarrollado en Python y se utilizo la libreria Tkinter para la interfaz grafica y datasets de pacientes y centros medicos.
                    </p>
                <div className={styles.tecnologis}>
                    <LazyLoadImage className={styles.labelTech} src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                </div>
                <div className={styles.repositories}>
                    <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsPython} title={"Screens de la Aplicacion Desktop"} moreInfo={moreInfoPython} nameProject={nameProject3}/>
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

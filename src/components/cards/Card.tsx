import { Card as ChakraCard, CardHeader, CardBody, Heading,  } from '@chakra-ui/react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    imgsUrl?: string[];
    isDarkMode: boolean;
}


export default function Card( {title, imgsUrl=[], isDarkMode}: CardProps) {
    const imagesUrls: string[] = imgsUrl;


  return (
    <ChakraCard borderRadius={'30px'} backgroundColor={isDarkMode? 'black': 'white'} className={styles.chakracard}>
    <CardHeader className={styles.cardheader}>
      <Heading fontSize='25px' color={isDarkMode? 'white': 'black'}>
        {title}
      </Heading>
    </CardHeader>
    <CardBody className={styles.cardbody}>
      {imagesUrls.map((imgUrl, index) => {
        if (title === "Lenguajes de programación") {
          return <img key={`${title}-${index}`} className={styles.imgProgramming} src={imgUrl} alt={title} />;
        }
        if (title === "Bases de datos" && (index==0|| index==1) && isDarkMode ) {
          return <img key={`${title}-${index}`} className={styles.imgDatabases} src={imgUrl} alt={title} />;
        }
        if (title === "Herramientas" && index==2 && isDarkMode) {
            
          return <img key={`${title}-${index}`} className={styles.imgTools} src={imgUrl} alt={title} />;
        }
        if (title === "Herramientas" && index==2 && !isDarkMode) {
            
            return <img key={`${title}-${index}`} className={styles.imgToolsLight} src={imgUrl} alt={title} />;
        }
        if(title === "Frontend" && index==0 ){
          return <img key={`${title}-${index}`} className={styles.imgFrontend} src={imgUrl} alt={title} />;
        
        }
        return <img key={`${title}-${index}`} className={styles.imgOthers} src={imgUrl} alt={title} />;
      })}
    </CardBody>
  </ChakraCard>
  )
}

import { useEffect, useRef } from "react";
import Card from "../cards/Card";
import styles from "./Carousel.module.css";

interface CarouselProps {
  modal: boolean
    isDarkMode: boolean;
    resources: resourcesData[];
}
interface resourcesData{
    title: string;
    imgUrl: string[];
}

export default function Carousel({isDarkMode, resources, modal}: CarouselProps) {
    
   
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
          const carouselWidth = carouselRef.current.scrollWidth / 2; // La mitad porque se duplican los elementos
          const duration = carouselWidth / 100; // Ajusta 100 para la velocidad
          carouselRef.current.style.animationDuration = `${duration}s`;
        }
      }, [resources.length]);


    return (
        <div className={`${isDarkMode? styles.carouselDark: styles.carouselLight}  ${modal ? styles.modalTrue: ''}`}>
         <div className={styles.carouselInner} ref={carouselRef}>
          
              {!modal && resources.map((card, index) => (
              <div className={styles.carouselCard} key={`original-${index}`}>
                <Card title={card.title} imgsUrl={card.imgUrl} isDarkMode={isDarkMode} />
              </div>
            ))}

            {!modal && resources.map((card, index) => (
              <div className={styles.carouselCard} key={`duplicate-${index}`}>
                <Card title={card.title} imgsUrl={card.imgUrl} isDarkMode={isDarkMode} />
              </div>
            ))}

            {modal && resources[0].imgUrl.map((img, index) => (
              <div className={styles.carouselModal} key={`modal-original-${index}`}>
                <img src={img} alt="" />
              </div>
            ))}

            {modal && resources[0].imgUrl.map((img, index) => (
              <div className={styles.carouselModal} key={`modal-duplicate-${index}`}>
                <img src={img} alt="" />
              </div>
            ))}

      

        </div>
      </div>
  
  )
}

/**
 {resources.map((card, index) => {
                return <div className={styles.carouselCard} key={`original-${index}`}>
                <Card title={card.title} imgsUrl={card.imgUrl} isDarkMode={isDarkMode} />
              </div>
            

          })}
          {resources.map((card, index) => {
            if(card.title != "Proyecto Zeballos" && card.title != "Proyecto FlexiDorm" && card.title != "Proyecto Python"){
                return <div className={styles.carouselCard} key={`original-${index}`}>
                <Card title={card.title} imgsUrl={card.imgUrl} isDarkMode={isDarkMode} />
              </div>
            }

          })}
 */
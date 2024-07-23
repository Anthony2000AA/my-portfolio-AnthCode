import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./TypeWriter.module.css";

interface TypewriterComponentProps {
  isDarkMode: boolean;
}

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({ isDarkMode }) => {
  return (
    <div
      className={isDarkMode ? styles.typewriterDark : styles.typewriterLight}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Bienvenido!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcome!")
            .start();
        }}
        options={{
          loop: true,
          delay: 90,
          cursorClassName: styles.cursor,
        }}
      />
    </div>
  );
}

export default TypewriterComponent;

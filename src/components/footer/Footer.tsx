import styles from './Footer.module.css'; // Asegúrate de tener un archivo de estilos CSS Modules

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Anthony Avalos</p>
      </div>
    </footer>
  )
}

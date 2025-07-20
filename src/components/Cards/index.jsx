import styles from "./cards.module.css";
import Link from "next/link";

export default function Cards({ imagem, nome, deploy, github }) {
  return (
    <div >
      <div className={styles.card_projeto}>
        <img src={imagem} alt="captura de tela do projeto em execução" />
        <div className={styles.container_textual}>
          <h3>{nome}</h3>
          <div className={styles.container_links}>
            <Link className={styles.link} href={deploy} target="_blank">
              Abrir projeto
            </Link>
            <Link
              className={styles.link}
              href={github} target="_blank"
            >
              Código no GitHub
            </Link>
          </div>
        </div>
        <ul type="none">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
}

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
            <Link className={styles.link} href={deploy}>
              Abrir projeto
            </Link>
            <Link
              className={styles.link}
              href={github}
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
      {/* <div className={styles.card_projeto}>
        <Image src={imgprojeto1}></Image>
        <div className={styles.container_textual}>
          <h3>Cafeteria CoffeeJoy</h3>
          <div className={styles.container_links}>
            <Link className={styles.link} href="https://coffee-joy.vercel.app/">
              Abrir projeto
            </Link>
            <Link
              className={styles.link}
              href="https://github.com/victoriapinheiro/coffee-joy"
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
      <div className={styles.card_projeto}>
        <Image src={imgprojeto2}></Image>
        <div className={styles.container_textual}>
          <h3>Rodízio Casinhas</h3>
          <div className={styles.container_links}>
            <Link className={styles.link} href="https://casinhas.vercel.app/">
              Abrir projeto
            </Link>
            <br />
            <Link
              className={styles.link}
              href="https://github.com/victoriapinheiro/casinhas"
            >
              Código no GitHub
            </Link>
          </div>
        </div>
        <ul type="none">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className={styles.card_projeto}>
        <Image src={imgprojeto3}></Image>
        <div className={styles.container_textual}>
          <h3>Salão BeautySalon</h3>
          <div className={styles.container_links}>
            <Link className={styles.link} href="https://beautysalon-9854.vercel.app/">
              Abrir projeto
            </Link>
            <br />
            <Link
              className={styles.link}
              href="https://github.com/victoriapinheiro/beautysalon"
            >
              Código no GitHub
            </Link>
          </div>
        </div>
        <ul type="none">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div> */}
    </div>
  );
}

import styles from "./cards.module.css";
import imgprojeto1 from "@/app/assets/projetos/coffeejoy.jpg";
import imgprojeto2 from "@/app/assets/projetos/casinhas.jpg";
import imgprojeto3 from "@/app/assets/projetos/beautysalon.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Cards() {
  return (
    <div className={styles.container_card_projetos}>
      <div className={styles.card_projeto}>
        <Image src={imgprojeto1}></Image>
        <div className={styles.container_textual}>
          <h3>Cafeteria CoffeeJoy</h3>
          <div className={styles.container_links}>
            <Link className={styles.link} href="https://coffee-joy.vercel.app/">
              Abrir projeto
            </Link>
            <br />
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
      </div>
    </div>
  );
}

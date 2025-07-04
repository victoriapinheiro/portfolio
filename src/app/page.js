'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import icon_wpp from "./assets/icon-whatsapp.png";
import icon_linkedin from "./assets/icon-linkedin.png";
import icon_cv from "./assets/icon-cv.png";
import Tecnologias from "@/components/Tecnologias";
import Cards from "@/components/Cards";

export default function Home() {

  const [tabAtiva, setTabAtiva] = useState('');

  function alterarTabAtiva (idTab) {
    if (tabAtiva !== idTab) {
      setTabAtiva(idTab);
    }
    else {
      setTabAtiva('');
    }
  };

  return (
    <main>
      <section className={styles.secaosobre}>
        <article>
          <Link href="https://wa.me/5521972175706" title="+55 (21) 97217-5706"><Image className={`${styles.iconlink} ${styles.wpplink}`} src={icon_wpp}></Image></Link>
          <Link href="https://www.linkedin.com/in/victoriavivian">
            <Image className={`${styles.iconlink} ${styles.linkedinlink}`} src={icon_linkedin}></Image>
          </Link>
          <Link href="https://drive.google.com/file/d/1vwpzmZbtoa2dTVBdP-TsoL_WDmmktqrU/view?usp=sharing" target="_blank">
            <Image className={`${styles.iconlink} ${styles.cvlink}`} src={icon_cv}></Image>
          </Link>
          <h1>QUEM SOU EU?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna arcu, placerat non dapibus eu, viverra ultrices nunc. Donec tempus varius dui, vel aliquet purus laoreet sed. Praesent laoreet leo et nisi consectetur luctus.</p>
          <div className={styles.avatar}>
            
          </div>
            
        </article>
      </section>
      <section>
        <Tecnologias />
      </section>
      <div className={styles.linebottom}></div>
      <section id="projetos" className={styles.secaoprojetos}>
        <article>
          <h2>PROJETOS</h2>
          <p className={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, neque sit amet placerat volutpat, lacus turpis lacinia mauris, vitae varius risus enim et neque. Sed sed interdum eros, ac.</p>
          <Cards />
          <Link className={styles.secaoprojetosbtn} href="#">Ver mais</Link>
        </article>
      </section>
    </main>
  );
}

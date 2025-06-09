'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import icon_wpp from "./assets/icon-whatsapp.png";
import icon_linkedin from "./assets/icon-linkedin.png";
import icon_cv from "./assets/icon-cv.png";
import Tecnologias from "@/components/Tecnologias";

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
          <Link href="#"><Image className={`${styles.iconlink} ${styles.wpplink}`} src={icon_wpp}></Image></Link>
          <Link href="#">
            <Image className={`${styles.iconlink} ${styles.linkedinlink}`} src={icon_linkedin}></Image>
          </Link>
          <Link href="#">
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
          <div className={styles.projetosdestaquecontainer}>
            <div className={styles.projetosdestaque}>
              <button className={`${styles.btnprojeto1} ${tabAtiva === 'Tab1' && (styles.btnativo)}`} onClick={() => alterarTabAtiva('Tab1')}>
                <div className={styles.bordainferior}></div>
              </button>
              <button className={`${styles.btnprojeto2} ${tabAtiva === 'Tab2' && (styles.btnativo)}`} onClick={() => alterarTabAtiva('Tab2')}></button>
              <button className={`${styles.btnprojeto3} ${tabAtiva === 'Tab3' && (styles.btnativo)}`} onClick={() => alterarTabAtiva('Tab3')}></button>
            </div>
            {tabAtiva === 'Tab1' && (
              <div className={styles.containertab}>
                <div className={styles.containertabcontent}>
                  <h3>Nome do Projeto 1</h3>
                  <p><span>Link do projeto:</span></p>
                  <p><span>Código no GitHub:</span></p>
                  <p><span>Descrição:</span></p>
                  <p><span>Tecnologias utilizadas:</span></p>
                </div>
              </div>
            )}
            {tabAtiva === 'Tab2' && (
              <div className={styles.containertab}>
                <div className={styles.containertabcontent}>
                  <h3>Nome do Projeto 2</h3>
                  <p><span>Link do projeto:</span></p>
                  <p><span>Código no GitHub:</span></p>
                  <p><span>Descrição:</span></p>
                  <p><span>Tecnologias utilizadas:</span></p>
                </div>
              </div>
            )}
            {tabAtiva === 'Tab3' && (
              <div className={styles.containertab}>
               <div className={styles.containertabcontent}>
                  <h3>Nome do Projeto 3</h3>
                  <p><span>Link do projeto:</span></p>
                  <p><span>Código no GitHub:</span></p>
                  <p><span>Descrição:</span></p>
                  <p><span>Tecnologias utilizadas:</span></p>
                </div>
              </div>
            )}
          </div>
          <Link className={styles.secaoprojetosbtn} href="#">Ver mais</Link>
        </article>
      </section>
    </main>
  );
}

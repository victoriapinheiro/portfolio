'use client';
import Link from "next/link";
import styles from "./page.module.css";
import Tecnologias from "@/components/Tecnologias";
import Cards from "@/components/Cards";
import { colecaoProjetos } from "@/app/dados/colecaoprojetos.js";
import Sobre from "@/components/Sobre";


export default function Home() {
  return (
    <main>
      <section>
        <Sobre />
      </section>
      <section>
        <Tecnologias />
      </section>
      <div className={styles.linebottom}></div>
      <section id="projetos" className={styles.secaoprojetos}>
        <article>
          <h2>PROJETOS</h2>
          <p className={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, neque sit amet placerat volutpat, lacus turpis lacinia mauris, vitae varius risus enim et neque. Sed sed interdum eros, ac.</p>
          <div className={styles.container_card_projetos}>
            { colecaoProjetos.map((projeto) => (
            <Cards key={projeto.id} nome={projeto.nome} imagem={projeto.imagem} deploy={projeto.deploy} github={projeto.github} />
          )) }
          </div>
          <Link className={styles.secaoprojetosbtn} href="#">Ver mais</Link>
        </article>
      </section>
    </main>
  );
}

import styles from "./tecnologias.module.css";
import { colecaoTecnologias } from "@/app/dados/colecaotecnologias";

export default function Home() {
  
  const repeticoes = Array.from({ length: 8})

  return (
    <>
      <div className={styles.tecnologias}>
        <div className={styles.scroller__inner}>
          {
            repeticoes.map((_, idx)=> (
              colecaoTecnologias.map((tecnologia) => (
                  <div key={tecnologia.id} className={styles.scroller__item}>
                   <img src={tecnologia.icone} alt={tecnologia.alt} />
                   <figcaption>{tecnologia.nome}</figcaption>
                  </div>
              ))
            ))
          }
        </div>
      </div>
    </>
  );
}
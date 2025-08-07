import styles from "./sobre.module.css";
import Image from "next/image";
import Link from "next/link";
import icon_wpp from "@/app/assets/icon-whatsapp.png";
import icon_linkedin from "@/app/assets/icon-linkedin.png";
import icon_cv from "@/app/assets/icon-cv.png";
import ilustracao from "@/app/assets/IA/download (2).png";
import ilustracao2 from "@/app/assets/IA/download.png";
import profile from "@/app/assets/vicjpg.jpg";
import teste from "@/app/assets/IA/Minimalistic art in warm colors of a woman working….jpeg"

export default function Sobre() {
    return (
        <div className={styles.container_article}>
            <article className={styles.article}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>VICTORIA <span className={styles.cor_destaque}>VIVIAN</span></h1>
                    <p className={styles.descricao}> <span className={styles.cor_destaque}>&lt;/&gt;</span> Desenvolvedora Web</p>
                    <div className={styles.container_link}>
                        <Link href="https://wa.me/5521972175706" title="+55 (21) 97217-5706" target="_blank"><Image className={`${styles.iconlink} ${styles.wpplink}`} src={icon_wpp} alt="Ícone do WhatsApp"></Image></Link>
                        <Link href="https://www.linkedin.com/in/victoriavivian" target="_blank">
                        <Image className={`${styles.iconlink} ${styles.linkedinlink}`} src={icon_linkedin} alt="Ícone do LinkedIn"></Image></Link>
                        <Link href="https://drive.google.com/file/d/1vwpzmZbtoa2dTVBdP-TsoL_WDmmktqrU/view?usp=sharing" target="_blank">
                        <Image className={`${styles.iconlink} ${styles.cvlink}`} src={icon_cv} alt="Ícone de Currículo"></Image></Link>
                    </div>
                </div>
                <Image className={styles.ilustracao2} src={ilustracao2}></Image>
            </article>
            {/* <div className={styles.secaosobre}>
                <article>
                    <Link href="https://wa.me/5521972175706" title="+55 (21) 97217-5706" target="_blank"><Image className={`${styles.iconlink} ${styles.wpplink}`} src={icon_wpp} alt="Ícone do WhatsApp"></Image></Link>
                    <Link href="https://www.linkedin.com/in/victoriavivian" target="_blank">
                    <Image className={`${styles.iconlink} ${styles.linkedinlink}`} src={icon_linkedin} alt="Ícone do LinkedIn"></Image></Link>
                    <Link href="https://drive.google.com/file/d/1vwpzmZbtoa2dTVBdP-TsoL_WDmmktqrU/view?usp=sharing" target="_blank">
                    <Image className={`${styles.iconlink} ${styles.cvlink}`} src={icon_cv} alt="Ícone de Currículo"></Image></Link>
                    <h2>VICTORIA VIVIAN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna arcu, placerat non dapibus eu, viverra ultrices nunc. Donec tempus varius dui, vel aliquet purus laoreet sed. Praesent laoreet leo et nisi consectetur luctus.</p>
                    <div className={styles.avatar}>
                
                    </div>
                
                </article>
            </div> */}
        </div>
    );
}

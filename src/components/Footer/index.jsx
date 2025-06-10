import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import linkedin_icon from "@/app/assets/icon-linkedin-w.png";
import wpp_icon from "@/app/assets/icon-whatsapp-w.png";
import email_icon from "@/app/assets/icon-email-w.png";

export default function Footer() {
    return (
      <footer id="contato">
        <div className={styles.footer}>
          <div className={styles.containerlinks}>
            <Link href="https://www.linkedin.com/in/victoriavivian"><Image src={linkedin_icon}></Image></Link>
            <Link href="#"><Image src={wpp_icon}></Image></Link>
            <Link href="mailto:victoriaviviancp@gmail.com" title="victoriaviviancp@gmail.com"><Image src={email_icon}></Image></Link>
          </div>
          <p>Design criado por <Link className={styles.linkspan} href="#">Taylor Miguel</Link></p>
          <p>Desenvolvido por <Link className={styles.linkspan} href="#">Victoria Vivian</Link></p>
          <Link href="#">&#169; 2025 victoriavivian.com</Link>
        </div>
        <div className={styles.linebottom}></div>
      </footer>
    );
  }
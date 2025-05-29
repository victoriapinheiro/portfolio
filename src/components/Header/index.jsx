import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
      <header className={styles.header}>
        <nav className={styles.menu}>
            <Link href="#">Início</Link>
            <Link href="#projetos">Projetos</Link>
            <Link href="#contato">Contato</Link>
        </nav>
        <div className={styles.linebottom}></div>
      </header>
    );
  }
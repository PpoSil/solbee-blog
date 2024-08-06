import styles from "./header.module.css";
import Link from "next/link";
import "@/app/globalsIcon.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link href="/">SolBi An</Link>
      </div>
      <div className={styles.links}>
        <button className="material-symbols-outlined">web</button>
        <button className="material-symbols-outlined">logo_dev</button>

        <Link href="/contact" className="material-symbols-outlined">
          connect_without_contact
        </Link>
      </div>
    </header>
  );
};

export default Header;

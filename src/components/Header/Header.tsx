import clsx from "clsx";

import styles from "./Header.module.css";
import gstyles from "@/app/global.module.css";

import { IMAGES } from "@/app/constants";

export default function Header() {
  return (
    <header className={clsx(gstyles.min100vh, gstyles.dflex)}>
      <div className={styles.heroContainer}>
        <img className={styles.heroImg} src={IMAGES.profile} alt="" />
        <div className={styles.heroText}>
          <h1>Paul Bernard-Hall</h1>
          <p>JavaScript Developer</p>
          <p>Game and Web</p>
        </div>
      </div>
    </header>
  );
}

import styles from "./Footer.module.css";

import { RiGithubFill } from "@remixicon/react";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <a
        className={styles.footerLink}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/paulb-h"
      >
        <RiGithubFill className={styles.remixicon} />
        GitHub
      </a>

      {/* <a
        className={styles.footerLink}
        href="https://www.linkedin.com/in/paulbernard-hall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill className={styles.linkedinIcon} />
        LinkedIn
      </a> */}
    </footer>
  );
}

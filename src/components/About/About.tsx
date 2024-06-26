import styles from "./About.module.css";

export default function About() {
  return (
    <section>
      <div className={styles.aboutDiv}>
        <p className={styles.aboutText}>
          JavaScript developer of 4 years. Familiar with most aspects of web
          development, currently focused on Game Dev with Phaser, React, and
          TypeScript.
        </p>

        <p className={styles.aboutText}>
          I am most interested in creating RPG's and multi-player experiences.
          Things that are important to me in games are immersive environments,
          clear and easy to navigate interfaces, and combat / progression that
          feels impactful.
        </p>

        <p className={styles.aboutText}>
          I host projects on a Ubuntu Virtual Private Server using NGINX, PM2,
          and recently Docker. I use Cloudflare to help protect my sites, and
          SSL certificates from Certbot.
        </p>
      </div>
    </section>
  );
}

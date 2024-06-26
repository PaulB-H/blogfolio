import styles from "./Projects.module.css";
import gstyles from "@/app/global.module.css";

import { IMAGES } from "@/app/constants";

export default function Projects() {
  return (
    <section>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioCard}>
          <img className={styles.cardImg} src={IMAGES.space} alt="" />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>undefined</h1>
            <p className={styles.cardText}>Current work in progress</p>
            <sub className={styles.cardText}>Phaser.JS, TypeScript</sub>

            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a className={gstyles.strike}>Live Site</a>
              <a className={gstyles.strike}>Code Repo</a>
            </div>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img className={styles.cardImg} src={IMAGES.breakout} alt="" />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>Breakout</h1>
            <p className={styles.cardText}>Made to learn Phaser</p>
            <sub className={styles.cardText}>Phaser.JS, TypeScript</sub>
            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a
                href="https://paulbh.com/breakout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Now
              </a>
              <a
                href="https://github.com/paulb-h/breakout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Repo
              </a>
            </div>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img className={styles.cardImg} src={IMAGES.digitalrain} alt="" />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>digitalrain</h1>
            <p className={styles.cardText}>The effect from The Matrix</p>
            <sub className={styles.cardText}>Canvas, JavaScript</sub>
            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a
                href="https://paulbh.com/digitalrain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href="https://github.com/paulb-h/digitalrain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Repo
              </a>
            </div>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img
            className={styles.cardImg}
            style={{ border: "1px solid gray" }}
            src={IMAGES.designstab}
            alt=""
          />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>Designs by Tabitha</h1>
            <p className={styles.cardText}>An artists portfolio</p>
            <sub className={styles.cardText}>React (NextJS), TypeScript</sub>
            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a
                href="https://designsbytabitha.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href="https://github.com/paulb-h/designsbytabitha-nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Repo
              </a>
            </div>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img className={styles.cardImg} src={IMAGES.flowerpaint} alt="" />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>FlowerPaint</h1>
            <p className={styles.cardText}>A Kid-Pix like game</p>
            <sub className={styles.cardText}>Canvas, JavaScript</sub>
            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a
                href="https://paulbh.com/flowerpaint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href="https://github.com/paulb-h/flowerpaint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Repo
              </a>
            </div>
          </div>
        </div>

        <div className={styles.portfolioCard}>
          <img className={styles.cardImg} src={IMAGES.socketchat} alt="" />
          <div className={styles.cardTextDiv}>
            <h1 className={styles.cardHeader}>Simple Sockets</h1>
            <p className={styles.cardText}>Non-persistent chat server</p>
            <sub className={styles.cardText}>Socket.io, JavaScript</sub>
            <p className={styles.viewDetailsLink}>
              <a href="http://">View Details</a>
            </p>
            <div className={styles.cardLinkDiv}>
              <a
                href="https://paulbh.com/simplesockets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href="https://github.com/paulb-h/simple_sockets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

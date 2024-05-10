import React from "react";
import styles from "./style.module.css";

export default function MoviaTo() {
  return (
    <div className={styles.footerMoviaTo}>
      <div className={styles.titles_of_footer}>
        <h4>MOVIA.TO</h4>
      </div>
      <div className={styles.references_moviato}>
        <div className={styles.about_us}>
          <a href="#">About Us</a>
        </div>
        <div className={styles.our_community}>
          <a href="#">Our Community</a>
        </div>
        <div className={styles.faq}>
          <a href="#">FAQ</a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./style.module.css";
export default function () {
  return (
    <div className={styles.footerHelp}>
      <div className={styles.titles_of_footer}>
        <h4>HELP</h4>
      </div>
      <div className={styles.references_help}>
        <div className={styles.support}>
          <a href="#">Support</a>
        </div>
        <div className={styles.privacy_policy}>
          <a href="#">Privacy Policy</a>
        </div>
        <div className={styles.termsAndConditions}>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}

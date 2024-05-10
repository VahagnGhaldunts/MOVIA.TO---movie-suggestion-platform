import React from "react";
import { BsChatRightText } from "react-icons/bs";
import styles from "./style.module.css";

export default function Letstalk() {
  return (
    <div className={styles.footerLetsTalk}>
      <div className={styles.titles_of_footer}>
        <h4>LET'S TALK.</h4>
      </div>
      <div className={styles.footer_description}>
        <p>We'd be glad to answer {<br />}any questions you may have.</p>
      </div>
      <button className={styles.chatNow}>
        <span className={styles.chatnowicon}>
          <BsChatRightText />
        </span>
        <p>Chat Now</p>
      </button>
    </div>
  );
}

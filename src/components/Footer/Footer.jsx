import React from "react";
import Letstalk from "./letstalk/Letstalk";
import MoviaTo from "./moviato/MoviaTo";
import Help from "./help/Help";
import AppsDownload from "./appsdownload/AppsDownload";
import styles from "./style.module.css";
import RefsAndSocialMedia from "./refs_socialmedia/RefsAndSocialMedia";

export default function footer() {
  return (
    <div className={`main-container ${styles.Footer}`}>
      <div className={styles.footer_top_line}> </div>
      <div className={styles.topsection}>
        <Letstalk />
        <MoviaTo />
        <Help />
        <AppsDownload />
      </div>
      <RefsAndSocialMedia />
    </div>
  );
}

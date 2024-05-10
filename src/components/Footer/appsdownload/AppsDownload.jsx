import React from "react";
import styles from"./style.module.css";
import appstoreImg from "./icons/appstore.png"
import googleplayImg from "./icons/googleplay.png"

export default function AppsDownload() {
  return (
    <div className={styles.footerDownloadApps}>
      <div className={styles.appStore}>
        <button className={styles.btnAppStore}>
          <img
            src={appstoreImg}
            alt=""
          />
        </button>
      </div>
      <div className={styles.googlePlay}>
        <button className={styles.btnGooglePlay}>
          <img
            src={googleplayImg}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

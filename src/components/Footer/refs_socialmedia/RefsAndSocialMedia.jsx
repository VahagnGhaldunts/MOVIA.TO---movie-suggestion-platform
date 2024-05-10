import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import SvgIcon from "../../SvgIcon/SvgIcon";
import styles from "./style.module.css";

export default function RefsAndSocialMedia() {
  return (
    <div className={styles.refs_And_Social_Media_container}>
      <div className={styles.footer_top_line_2}> </div>
      <div className={styles.bottomsection}>
        <div className={styles.socialmedia}>
          <div className={styles.facebookicon}>
            <SvgIcon iconName={"icon_facebook"} />
          </div>
          <div className={styles.instagramicon}>
            <SvgIcon iconName={"icon_instagram"} />
          </div>
          <div className={styles.threadsicon}>
            <SvgIcon iconName={"icon_instaThread"} />
          </div>
          <div className={styles.twittericon}>
            <SvgIcon iconName={"icon_twitter"} />
          </div>
        </div>
        <div className={styles.moviatologo}>
          <p>
            <b>MOVIA.TO</b>
          </p>
        </div>
        <div className={styles.moviatoinfo}>
          <p>
            <span>
              <FaRegCopyright />
            </span>
            All right reserved. 2024 <b>MOVIA.TO</b>
          </p>
        </div>
      </div>
    </div>
  );
}

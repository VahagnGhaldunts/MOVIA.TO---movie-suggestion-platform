import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export default function RecentActivity() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsShrunk(true);
    setTimeout(() => {
      setIsContentVisible(false);
    }, 100);

    setTimeout(() => {
      setIsShrunk(false);
      setIsContentVisible(true);
      navigate("/login");
    }, 1000);
  };

  return (
    <div className={styles.Recentactivity}>
      <div className={styles.section_one_title}>
        <div className={styles.title}>
          <h1>Recent Activity</h1>
        </div>
      </div>
      <div className={styles.section_two_info}>
        <div className={styles.star_road}>
          <img src="./src/components/RecentActivity/icon/star.jpg" alt="star_road" title="Star Road" />
        </div>
        <div className={styles.description}>
          <div className={styles.informatio_for_sign_in}>
            <p>Sign In to See Your Recent Activity</p>
          </div>
          <div className={styles.tracking_journey}>
            <p>
              Keep Track of Your Journey at <span>MOVIA.TO</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section_three_sign_in}>
        <div className={styles.sign_in_button_div}>
          <div onClick={handleClick} className={`${`${styles.sign_in_button} ${styles.container}`} ${isShrunk ? `${styles.shrunk}` : ""}`}>
            <div className={styles.magic_button}>
              <div className={styles.content_anim_wrapper}>
                <button className={styles.button_M}>M</button>
              </div>
            </div>

            {isContentVisible && (
              <div className={styles.sign_btn}>
                <button>Sign In</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

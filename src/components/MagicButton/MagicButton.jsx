import React, { useState } from "react";
import SuggestedMovies from "../SuggestedMovies/SuggestedMovies";
import styles from "./style.module.css";

export default function MagicSuggestIcon() {
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && <SuggestedMovies onSkipClick={() => setOpen(false)} />}
      <div onClick={handleButtonClick} className={styles.magic_button_box}>
        <div className={styles.magic_m_button}>
          <div className={styles.content_wrapper}>
            <p>M</p>
          </div>
        </div>
      </div>
    </>
  );
}

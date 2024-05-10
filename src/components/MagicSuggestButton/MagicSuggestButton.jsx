import React, { useState } from "react";
import styles from "./style.module.css";
import SuggestedMovies from "../SuggestedMovies/SuggestedMovies";

const MagicSuggestButton = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <>
      {openPopup && <SuggestedMovies onSkipClick={togglePopup} />}
      <div className={styles.magic_suggest_button_container}>
        <div className={styles.magic_suggest_glow}>
          <button className={styles.magic_suggest_button} onClick={togglePopup}>
            Magic Suggest
          </button>
        </div>
      </div>
    </>
  );
};

export default MagicSuggestButton;

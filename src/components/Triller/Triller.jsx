import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { API_KEY, BASE_URL } from "../../config/config";
import SvgIcon from "../SvgIcon/SvgIcon";

const Triller = ({ id, type = "movie", onClose }) => {
  const [videoId, setVideoId] = useState("");
  // const [isOpen, setIsOpen] = useState(true); // Используем состояние для отслеживания открытия/закрытия модального окна

  const getTrailer = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`);
      const { results } = await response.json();

      let video = results.find((vd) => vd.type === "Trailer");
      if (video === undefined) {
        video = results.find((vd) => vd.site === "YouTube");
      }
      setVideoId(video.key);
    } catch (error) {}
  };

  useEffect(() => {
    getTrailer();
  }, [id]);

  return (
    <div className={styles.fon_trailer_popup}>
      <div className={styles.trailer_popup}>
        <div className={styles.title_watch}>
          <div className={styles.title_watchTrailer}>
            <h3>Watch Trailer</h3>
          </div>
          <button className={styles.back_from_trailer} onClick={onClose}>
            <SvgIcon iconName={"icon_close"} className={styles.icone_close} width={"24px"} height={"24px"} />
          </button>
        </div>
        <div className={styles.trailer_wrap}>
          <div className={styles.trailer_container}>
            <iframe className={styles.trailer} title={type} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triller;

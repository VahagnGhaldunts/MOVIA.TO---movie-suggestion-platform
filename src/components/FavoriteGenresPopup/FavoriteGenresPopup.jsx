import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../config/config";
import SvgIcon from "../SvgIcon/SvgIcon";

import styles from "./style.module.css";

const FavoriteGenresPopup = ({ onNext, onSkip, setInterests }) => {
  const [genres, setGenres] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const hasSelectedGenre = selectedGenres.length > 0;

  const genresId = [
    "27",
    "35",
    "18",
    "16",
    "36",
    "80",
    "10749",
    "28",
    "14",
    "99",
    "10402",
    "9648",
    "53",
    "12",
    "10765",
  ];

  const getMovieTvDate = async () => {
    try {
      const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
      const { genres } = await response.json();
      setGenres(genres);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const getMovie = async (selectedGenres) => {
    try {
      const response = await fetch(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${selectedGenres.join(", ")}`
      );
      const { results } = await response.json();

      setInterests((prev) => {
        return {
          ...prev,
          genresId: selectedGenres,
          genresMovies: results,
        };
      });
      onNext();
    } catch (error) {
      console.log("error :", error);
    }
  };
  useEffect(() => {
    getMovieTvDate();
  }, []);

  const toggleGenre = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
    } else {
      if (selectedGenres.length < 4) {
        setSelectedGenres([...selectedGenres, id]);
      } else {
        // You can provide some feedback to the user that they can't select more genres
        console.log("Maximum 4 genres can be selected");
        // Or you can handle it in a different way, like displaying a message to the user
      }
    }
  };

  return (
    <div className={styles.favorite_genres_popup_main}>
      <div className={styles.favorite_genres_popup_title_div}>
        <h1 className={styles.favorite_genres_popup_title}>Edit my Interests</h1>
      </div>
      <div className={styles.favorite_genres_popup_question_select_div}>
        <div className={styles.favorite_genres_popup_question_div}>
          <p>Do you have favorite genres? Select them here. </p>
        </div>
        <div className={styles.favorite_genres_popup_select_div}>
          <div className={styles.active_div_popup}></div>
          <div className={styles.not_active_popup}></div>
          <div className={styles.not_active_popup}></div>
        </div>
      </div>
      <div className={styles.favorite_genres_popup_genres_div}>
        {genres &&
          genres
            .filter((genre) => genresId.includes(genre.id.toString()))
            .map((genre) => (
              <button
                key={genre.id}
                onClick={() => toggleGenre(genre.id)}
                className={selectedGenres.includes(genre.id) ? `${styles.isActiveButton}` : ""}
              >
                {genre.name}
              </button>
            ))}
      </div>
      <div className={styles.div_skip_next}>
        <div className={styles.div_skip}>
          <a
            onClick={(e) => {
              e.stopPropagation();
              onSkip();
            }}
          >
            Skip
          </a>
        </div>
        <div
          className={styles.div_next}
          style={{ cursor: hasSelectedGenre ? `${styles.pointer}` : `${styles.default}` }}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              if (hasSelectedGenre) {
                getMovie(selectedGenres);
              }
            }}
            style={{ cursor: hasSelectedGenre ? `${styles.pointer}` : `${styles.default}` }}
            className={hasSelectedGenre ? `${styles.isActiveGenres}` : `${styles.nextt}`}
          >
            Next
          </a>
          <SvgIcon
            iconName={"icon_arrow_right"}
            className={hasSelectedGenre ? `${styles.isActiveIcon}` : `${styles.icon_arrow_right}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteGenresPopup;

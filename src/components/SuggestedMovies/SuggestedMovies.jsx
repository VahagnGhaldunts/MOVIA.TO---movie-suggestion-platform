import React, { useState, useEffect } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./style.module.css";
import Modal from "../Modal";
import axios from "axios";
import { API_KEY, BASE_URL, IMAGE_BASE_URL, POSTER_SIZE_500 } from "../../config/config";
import { useNavigate } from "react-router-dom";

const SuggestedMovies = ({ onSkipClick }) => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}movie/20/recommendations?api_key=${API_KEY}`);
        const recommendedMovies = response.data.results;
        const uniqueMovies = getRandomUniqueMovies(recommendedMovies, 4);
        setMovies(uniqueMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const getRandomUniqueMovies = (movies, count) => {
    const shuffledMovies = movies.sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, count);
  };

  return (
    <Modal>
      <section className={styles.suggestItem}>
        <h2>Suggested Movies</h2>
        <div className={styles.suggestImgItem}>
          {movies.map((movie) => (
            <div className={styles.suggestImgBox} onClick={() => navigate(`/movie/${movie.id}`)}>
              <div className={styles.suggestImgChild}>
                <img src={`${IMAGE_BASE_URL}${POSTER_SIZE_500}${movie.poster_path}`} />
              </div>
              <span>{movie.vote_average.toFixed(1)}</span>
              <p>
                <b>{movie.title}</b>
              </p>
            </div>
          ))}
        </div>
        <div onClick={onSkipClick} className={styles.suggestSkipItem}>
          <p>Skip</p>
        </div>
      </section>
    </Modal>
  );
};

export default SuggestedMovies;

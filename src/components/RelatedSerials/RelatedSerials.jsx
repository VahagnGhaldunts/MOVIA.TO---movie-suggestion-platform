import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SvgIcon from "../SvgIcon/SvgIcon";
import { API_KEY, BACK_SIZE_1280, BASE_URL, IMAGE_BASE_URL } from "../../config/config";

const RelatedMoviesandSerials = ({ id }) => {
  const [data, setData] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const getMovieTvDate = async () => {
    try {
      const response = await fetch(`${BASE_URL}tv/${id}/similar?api_key=${API_KEY}`);
      const { results } = await response.json();
      setData(results);
    } catch (error) {
      console.log("error :", error);
    }
  };
  useEffect(() => {
    getMovieTvDate();
  }, []);

  const toggleSaveItem = (index) => {
    setSavedItems((prevSavedItems) => {
      const newSavedItems = [...prevSavedItems];
      newSavedItems[index] = !newSavedItems[index];
      return newSavedItems;
    });
  };

  const toggleFavoriteItem = (index) => {
    setFavoriteItems((prevFavoriteItems) => {
      const newFavoriteItems = [...prevFavoriteItems];
      newFavoriteItems[index] = !newFavoriteItems[index];
      return newFavoriteItems;
    });
  };

  const CalculateSmile = (rating) => {
    const RatingSmile = [
      "icon_veryUnsatisfiedSmile",
      "icon_unsatisfiedSmile",
      "icon_neutralSmile",
      "icon_satisfiedSmile",
      "icon_verySatisfiedSmile",
    ];

    rating = Math.floor(rating / 2);
    rating = rating === 5 ? RatingSmile.length - 1 : rating;
    return RatingSmile[rating];
  };

  return (
    <>
      <div className={styles.main_div_relatedSerials}>
        <div className={styles.div_popular_title}>
          <div>
            <p style={{ color: "#f5f5f5", fontSize: "var(--m-size)", fontFamily: "var(--font-family)" }}>
              Related Serials
            </p>
          </div>
        </div>
        <div className={styles.main_swipper_popular}>
          <Swiper
            rewind={true}
            modules={[Navigation]}
            slidesPerView={3.8}
            spaceBetween={24}
            navigation={true}
            className={styles.myCartSwiper}
          >
            {data?.map((elem, index) => (
              <SwiperSlide key={index} virtualIndex={index} className={styles.swipp}>
                <div className={styles.itemm_div_popular}>
                  <img src={`${IMAGE_BASE_URL}${BACK_SIZE_1280}${elem.poster_path}`} className={styles.itemm_img_popular} />
                  <div className={styles.div_img_movie_related}></div>
                  <div className={styles.icon_sav} onClick={() => toggleSaveItem(index)}>
                    <SvgIcon iconName={savedItems[index] ? "icon_save_selected" : "icon_save"} />
                  </div>
                  <div className={styles.icon_favorit} onClick={() => toggleFavoriteItem(index)}>
                    <SvgIcon iconName={favoriteItems[index] ? "icon_favorite_selected" : "icon_favorite"} />
                  </div>
                  <div className={styles.div_status_rating}>
                    <SvgIcon iconName={CalculateSmile(elem.vote_average)} className={styles.icon_verySatis} />
                    <p className={styles.related_movie_rating}>{elem.vote_average.toFixed(1)}</p>
                  </div>
                  <div className={styles.div_title_movie_related}>
                    <p>{elem.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedMoviesandSerials;

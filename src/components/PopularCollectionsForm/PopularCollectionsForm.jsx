import React from "react";
import historicalIMG from "./imagesForSlide/historical.jpeg";
import actionIMG from "./imagesForSlide/action.jpeg";
import adventureIMG from "./imagesForSlide/adventure.jpeg";
import animationIMG from "./imagesForSlide/animation.jpeg";
import comedyIMG from "./imagesForSlide/comedy.jpeg";
import crimeIMG from "./imagesForSlide/crime.jpeg";
import documentaryIMG from "./imagesForSlide/documentary.jpeg";
import dramaIMG from "./imagesForSlide/drama.jpeg";
import fantasyIMG from "./imagesForSlide/fantasy.jpeg";
import horrorIMG from "./imagesForSlide/horror.jpeg";
import melodramaIMG from "./imagesForSlide/melodrama.jpeg";
import musicalIMG from "./imagesForSlide/musical.jpeg";
import allPacinoIMG from "./imagesForSlide/allPacinoMovies.jpeg";
import thillerIMG from "./imagesForSlide/thiller.jpeg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./style.module.css";

const PopularCollectionsForm = () => {
  let arr = [
    { countOfMovie: 17, imgUrl: comedyIMG, genre: "Comedy" },
    { countOfMovie: 10, imgUrl: historicalIMG, genre: "Historical Serials" },
    { countOfMovie: 8, imgUrl: allPacinoIMG, genre: "All Pacino Movies" },
    { countOfMovie: 17, imgUrl: musicalIMG, genre: "Musical Serials" },
    { countOfMovie: 5, imgUrl: fantasyIMG, genre: "Fantasy Serials" },
    { countOfMovie: 5, imgUrl: documentaryIMG, genre: "Documentary Serials" },
    { countOfMovie: 20, imgUrl: actionIMG, genre: "Action" },
    { countOfMovie: 7, imgUrl: horrorIMG, genre: "Horror" },
    { countOfMovie: 22, imgUrl: melodramaIMG, genre: "Melodrama" },
    { countOfMovie: 15, imgUrl: crimeIMG, genre: "Crime" },
    { countOfMovie: 3, imgUrl: animationIMG, genre: "Animation" },
    { countOfMovie: 25, imgUrl: thillerIMG, genre: "Thriller" },
    { countOfMovie: 13, imgUrl: dramaIMG, genre: "Drama" },
    { countOfMovie: 15, imgUrl: adventureIMG, genre: "Adventure" },
  ];

  return (
    <>
      <div className={styles.main_div_popular}>
        <div className={styles.div_popular_title}>
          <div>
            <p style={{ color: "#f5f5f5", fontSize: "var(--m-size)", fontFamily: "var(--font-family)" }}>
              Popular Collections
            </p>
          </div>
          <div className={styles.see_all}>{/* <a>SEE ALL</a> */}</div>
        </div>
        <div className={styles.main_swipper_popular}>
          <Swiper
            rewind={true}
            modules={[Navigation]}
            slidesPerView={3.8}
            spaceBetween={24}
            navigation={true}
            className={styles.mySwiper}
          >
            {arr.map((slideContent, index) => (
              <SwiperSlide key={slideContent} virtualIndex={index} className={styles.swip}>
                <div className={styles.item_div_popular}>
                  <img src={slideContent.imgUrl} className={styles.item_img_popular} />
                  <button className={styles.item_button_popular}>{slideContent.countOfMovie} Movies</button>
                  <p className={styles.item_title_popular}>{slideContent.genre}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PopularCollectionsForm;

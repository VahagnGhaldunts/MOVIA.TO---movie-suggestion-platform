import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import user_image from "./user_image.png";
import SvgIcon from "../SvgIcon/SvgIcon";
import { API_KEY, BASE_URL, IMAGE_BASE_URL, POSTER_SIZE_500 } from "../../config/config";
import { useNavigate } from "react-router-dom";

const CommentSection = ({ id }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(null);

  const getMovieTvDate = async () => {
    try {
      const response = await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
      const { results } = await response.json();
      setReviews(results);
      console.log(results);
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    if (id) {
      getMovieTvDate();
    }
  }, [id]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * (80 - 20 + 1)) + 20;
  }
  return (
    <>
      <div className={`main-container ${styles.comment_section_main}`}>
        <div className={styles.comment_section_title_div}>
          <div className={styles.comment_section_title}>
            <p>Comment Section</p>
          </div>
          <div className={styles.comment_section_title_a}>
            <a
              href="#"
              onClick={() => {
                navigate(`/comment/` + id);
              }}
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div className={styles.comments_div}>
          {reviews &&
            reviews.slice(0, 6).map((elm, ind) => {
              return (
                <div className={styles.comment} key={ind}>
                  <div className={styles.author_comment}>
                    <div className={styles.author_comment_img_div}>
                      <img
                        src={
                          elm.author_details.avatar_path != null
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE_500}${elm.author_details.avatar_path}`
                            : user_image
                        }
                        alt=""
                      />
                    </div>
                    <div className={styles.comment_author_name_div}>
                      <p style={{ fontSize: "16px" }}>{elm.author}</p>
                      <p className={styles.comment_author_date}>{elm.updated_at.split("T")[0]}</p>
                    </div>
                  </div>
                  <div className={styles.main_comment_div}>
                    <p>{elm.content.length > 350 ? `${elm.content.slice(1, 350)}...` : elm.content}</p>
                  </div>
                  <div className={styles.div_line}>
                    <div className={styles.div_comment_commentIcon}>
                      <SvgIcon iconName={"icon_message"} className={styles.icon_message} />
                    </div>
                    <div className={styles.div_comment_likeIcon}>
                      <div className={styles.div_comment_like}>
                        <SvgIcon iconName={"icon_like"} className={styles.icon_like} />
                        <p>{generateRandomNumber()}</p>
                      </div>
                      <div className={styles.div_comment_dislike}>
                        <SvgIcon iconName={"icon_dislike"} className={styles.icon_dislike} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={`main-container ${styles.div_button_write_comment}`}>
        <button
          className={styles.button_write_comment}
          onClick={() => {
            navigate(`/comment/` + id);
          }}
        >
          Write a comment
        </button>
      </div>
    </>
  );
};

export default CommentSection;

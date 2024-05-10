import React, { useEffect, useState } from "react";
import { API_KEY, BACK_SIZE_1280, BASE_URL, IMAGE_BASE_URL, POSTER_SIZE_500 } from "../../config/config";
import styles from "./styles.module.css";
import user_image from "../CommentSection/user_image.png";
import { useNavigate } from "react-router-dom";
import SvgIcon from "../SvgIcon/SvgIcon";

const getTime = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hours} h ${minutes} min`;
};

const CommentPage = ({ id }) => {
  const [reviews, setReviews] = useState(null);
  const [replyText, setReplyText] = useState(""); // State to track the value of the reply input field
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [activeReply, setActiveReply] = useState(-1);
  const [commentText, setCommentText] = useState("");

  const handleSendComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        content: commentText,
        author: "Anonymous",
        author_details: { avatar_path: null },
        updated_at: getDate(),
      };
      setReviews([newComment, ...reviews]);
      setCommentText("");
    }
  };

  const handleReplyComment = (commentIndex) => {
    if (replyText.trim() !== "") {
      const newReply = {
        content: replyText,
        author: "Anonymous",
        author_details: { avatar_path: null },
        updated_at: getDate(),
      };
      const updatedReviews = [...reviews];
      updatedReviews[commentIndex].replies = updatedReviews[commentIndex].replies || [];
      updatedReviews[commentIndex].replies.push(newReply);
      setReviews(updatedReviews);
      setReplyText("");
    }
  };

  const getDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return ` ${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    if (id) {
      getReviewsTvDate();
    }
  }, [id]);

  useEffect(() => {
    if (reviews) {
      const numbers = reviews.map(() => generateRandomNumber());
      setRandomNumbers(numbers);
    }
  }, [reviews]);

  const getReviewsTvDate = async () => {
    try {
      const response = await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
      const { results } = await response.json();
      setReviews(results);
      console.log(results);
    } catch (error) {
      console.log("error :", error);
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (80 - 20 + 1)) + 20;
  };

  const navigate = useNavigate();
  const [date, setDate] = useState(null);

  const getMovieTvDate = async () => {
    try {
      const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&page=${1}`);
      const date = await response.json();
      setDate(date);
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    if (id) {
      getMovieTvDate();
    }
  }, [id]);

  if (date === null || reviews === null) {
    return "loading...";
  }

  const toggleReplyInput = (ind) => {
    setActiveReply(ind === activeReply ? -1 : ind);
  };

  return (
    <div className={styles.div_for_position}>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0 10 21 / 0%), rgb(0 10 21 / 86%)), url(${
            IMAGE_BASE_URL + BACK_SIZE_1280 + date.poster_path
          })`,
        }}
        className={styles.banner}
      >
        <div className={styles.main_container}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <SvgIcon iconName={"icon_arrow_left"} width={"24px"} height={"24px"} />
              </li>
              <li>
                <span
                  className={styles.span_to_page}
                  onClick={() => {
                    navigate(`/movie/` + id);
                  }}
                >
                  Back to Movie Page
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <h1>{date.title || date.name}</h1>
            <div className={styles.info}>
              <div className={styles.rating}>
                <p>
                  {date.vote_average?.toFixed(1)} <span>Rating</span>
                </p>
              </div>
              <div className={styles.date}>2011</div>
              <div className={styles.genres}>
                {date?.genres?.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
              <div className={styles.time}>{getTime(date?.runtime)}</div>
            </div>
          </div>
          <div className={styles.comment_select_div}>
            <h1>Comment section</h1>
            <div className={styles.comment_select}>
              <p className={styles.top_reviews}>Top Reviews</p>
              <SvgIcon iconName={"icon_arrow_down"} width={11} height={7} className={styles.icon_arrow_down} />
            </div>
          </div>
          <div className={styles.input_comment_div}>
            <input
              type="text"
              placeholder="Enter your comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div className={styles.input_comment_send_div} onClick={handleSendComment}>
              <SvgIcon iconName={"icon_enter_comments"} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_containerr}>
        <div className={styles.comments_div}>
          {reviews.map((comment, commentIndex) => (
            <div className={styles.comment} key={commentIndex}>
              <div className={styles.author_comment}>
                <div className={styles.author_comment_img_div}>
                  <img
                    src={
                      comment.author_details.avatar_path != null
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE_500}${comment.author_details.avatar_path}`
                        : user_image
                    }
                    alt=""
                  />
                </div>
                <div className={styles.comment_author_name_div}>
                  <p style={{ fontSize: "16px" }}>{comment.author} -</p>
                  <p className={styles.comment_author_date}>{comment.updated_at.split("T")[0]}</p>
                </div>
              </div>
              <div className={styles.main_comment_div}>
                <p>{comment.content}</p>
              </div>
              <div className={styles.div_line}>
                <div className={styles.div_icons_line}>
                  <div className={styles.div_comment_commentIcon} onClick={() => toggleReplyInput(commentIndex)}>
                    <SvgIcon iconName={"icon_message"} className={styles.icon_message} />
                    <p className={styles.reply_title}>Reply</p>
                  </div>
                  <div className={styles.div_comment_likeIcon}>
                    <div className={styles.div_comment_like}>
                      <SvgIcon iconName={"icon_like"} className={styles.icon_like} />
                      <p>{randomNumbers[commentIndex]}</p>
                    </div>
                    <div className={styles.div_comment_dislike}>
                      <SvgIcon iconName={"icon_dislike"} className={styles.icon_dislike} />
                    </div>
                  </div>
                </div>
              </div>
              {activeReply === commentIndex && (
                <div className={`${styles.input_reply_comment_div} ${activeReply === commentIndex ? styles.show : ""}`}>
                  <input
                    type="text"
                    placeholder="Add a reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <div className={styles.input_comment_send_div_reply} onClick={() => handleReplyComment(commentIndex)}>
                    <SvgIcon iconName={"icon_enter_comments"} />
                  </div>
                </div>
              )}
              {activeReply === commentIndex &&
                comment.replies &&
                comment.replies.map((reply, replyIndex) => (
                  <div
                    className={`${styles.reply} ${activeReply === commentIndex ? styles.show : ""}`}
                    key={replyIndex}
                  >
                    <div className={styles.author_comment}>
                      <div className={styles.author_comment_img_div}>
                        <img
                          src={
                            reply.author_details.avatar_path != null
                              ? `${IMAGE_BASE_URL}${POSTER_SIZE_500}${reply.author_details.avatar_path}`
                              : user_image
                          }
                          alt=""
                        />
                      </div>
                      <div className={styles.comment_author_name_div}>
                        <p style={{ fontSize: "16px" }}>{reply.author} -</p>
                        <p className={styles.comment_author_date}>{reply.updated_at}</p>
                      </div>
                    </div>
                    <div className={`${styles.main_comment_div} ${styles.center_align}`}>
                      {" "}
                      {/* Add center-align class */}
                      <p>{reply.content}</p>
                    </div>
                    <div className={styles.div_line}>
                      <div className={styles.div_icons_line}>
                        <div className={styles.div_comment_commentIcon} onClick={() => toggleReplyInput(commentIndex)}>
                          <SvgIcon iconName={"icon_message"} className={styles.icon_message} />
                          <p className={styles.reply_title}>Reply</p>
                        </div>
                        <div className={styles.div_comment_likeIcon}>
                          <div className={styles.div_comment_like}>
                            <SvgIcon iconName={"icon_like"} className={styles.icon_like} />
                            <p>0</p>
                          </div>
                          <div className={styles.div_comment_dislike}>
                            <SvgIcon iconName={"icon_dislike"} className={styles.icon_dislike} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className={styles.div_button_write_comment}>
          <button
            className={styles.button_write_comment}
            onClick={() => {
              navigate(`/comment/` + id);
            }}
          >
            Read All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;

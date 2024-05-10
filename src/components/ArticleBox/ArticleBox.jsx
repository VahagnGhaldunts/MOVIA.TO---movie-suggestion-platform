import React from "react";
import styles from "./style.module.css";
import articleImg from "../../assets/images/articles.webp";
import userImg from "../../assets/images/profile.png";
import SvgIcon from "../SvgIcon/SvgIcon";

const ArticleItem = () => {
  return (
    <article className={styles.article}>
      <div className={styles.articleHead}>
        <img src={articleImg} alt="article" />
        <div className={styles.articleMesTime}>
          <div className={styles.articleIcon}>
            <SvgIcon iconName={"icon_message"} width={21} height={21} />0
          </div>
          <div className={styles.articleIcon}>
            <SvgIcon iconName={"icon_time"} width={20} height={20} />4 min
          </div>
        </div>
      </div>
      <div className={styles.articleBody}>
        <h2>ARTICLE, REVIEWS</h2>
        <p>Best Mystery & Thriller series 2023.</p>
      </div>
      <div className={styles.articleFooter}>
        <h3>Mysteries, and dark atmosphere - here they are, genre gems!</h3>
        <div className={styles.articleNav}>
          <div className={styles.articleUser}>
            <img src={userImg} alt="user" />
            <div>
              <h6>Ralph Finger</h6>
              <p>March 4, 2024</p>
            </div>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </article>
  );
};

const ArticleBox = () => {
  return (
    <section className="mainn-container">
      <div className={styles.articles}>
        <p style={{ color: "#f5f5f5", fontSize: "var(--m-size)", fontFamily: "var(--font-family)" }}>Articles</p>
      </div>
      <div className={styles.articleWrap}>
        {[...Array(3)].map((_) => {
          return <ArticleItem />;
        })}
      </div>
    </section>
  );
};

export default ArticleBox;

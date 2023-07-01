/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import styles from "./home.module.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import slider1 from "../../assets/slider/1.png";
import slider2 from "../../assets/slider/2.png";
import slider3 from "../../assets/slider/3.png";
import { useSelector } from "react-redux";
import SliderComponent from "../../components/Slider/SliderComponent";

import Box from "@material-ui/core/Box";

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
  };

  return (
    <Box>
      <main className={styles.page}>
        <div
          style={{
            width: "92%",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <SliderComponent arrImages={[slider2, slider1, slider3]} />
        </div>
        <section className={styles["page-section"]}>
          <section className={styles["first-section"]}>
            <div className={styles.banner}>
              <div className={styles["banner-body"]}>
                <h2 className={styles["banner-title"]}>
                  {isLanguageEnglish
                    ? "Summer school made easy with F-quiz!+ - now enhanced with AI!"
                    : "Spraw, aby nauka stała się niesamowita"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Save time creating engaging lesson content with our new AI-enhanced F-quiz! creator! Combine with new game experiences and more question types!"
                    : "Quizzly zapewnia angażującą naukę milionom użytkowników"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Zarejestruj się za darmo"}
                  </a>
                </button>
              </div>
              <div className={styles["banner-img"]}>
                <img src={banner1} alt="" className={styles["image"]} />
              </div>
            </div>
            <div className={styles.banner}>
              <div className={styles["banner-body"]}>
                <h2 className={styles["banner-title"]}>
                  {isLanguageEnglish
                    ? "Bring engaging learning to every employee’s fingertips"
                    : "Spraw, aby nauka stała się niesamowita"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "With F-quiz! 360 Engage you can bring to life training your teams will want to complete, all via the K! app. Support self-paced learning, knowledge retention, and collaboration today!"
                    : "Quizzly zapewnia angażującą naukę milionom użytkowników"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Zarejestruj się za darmo"}
                  </a>
                </button>
              </div>
              <div className={styles["banner-img"]}>
                <img src={banner2} alt="" className={styles["image"]} />
              </div>
            </div>
            <div className={styles.banner}>
              <div className={styles["banner-body"]}>
                <h2 className={styles["banner-title"]}>
                  {isLanguageEnglish
                    ? "Empower summer learning with F-quiz! Kids"
                    : "Spraw, aby nauka stała się niesamowita"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Explore new subjects and develop essential math and reading skills while having a blast playing the F-quiz! Kids app, from $2.49/month until June 30th."
                    : "Quizzly zapewnia angażującą naukę milionom użytkowników"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Zarejestruj się za darmo"}
                  </a>
                </button>
              </div>
              <div className={styles["banner-img"]}>
                <img src={banner3} alt="" className={styles["image"]} />
              </div>
            </div>
            <div className={styles.banner}>
              <div className={styles["banner-body"]}>
                <h2 className={styles["banner-title"]}>
                  {isLanguageEnglish
                    ? "Get ready for back-to-school with F-quiz!+ - now enhanced by AI"
                    : "Przeglądaj treść"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Stay on top of your studies using our new F-quiz! question generator enhanced with AI, weekly learning goals, and more study tools, from $6.99/month."
                    : "Przeglądaj treści i dołącz do jednej z największych na świecie społeczności nauczycieli"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Check public quizes"
                      : "Sprawdź publiczne quizy"}
                  </a>
                </button>
              </div>
              <div className={styles["banner-img"]}>
                <img src={banner4} alt="" className={styles["image"]} />
              </div>
            </div>
          </section>
          <section className={styles["second-section"]}>
            <div className={styles["section-background"]}></div>
            <div className={styles.info}>
              <div className={styles["info-body"]}>
                <h2 className={styles["info-title"]}>
                  <img
                    src={icon1}
                    style={{ width: "36px", marginRight: "10px" }}
                  />

                  {isLanguageEnglish ? "F-quiz! at school" : "Quizzly w szkole"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Engaging group and distance learning for teachers and students."
                    : "Angażująca nauka grupowa i na odległość dla nauczycieli i uczniów."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Dowiedz się więcej"} &gt;
                </a>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles["info-body"]}>
                <h2 className={styles["info-title"]}>
                  <img
                    src={icon2}
                    style={{ width: "36px", marginRight: "10px" }}
                  />
                  {isLanguageEnglish ? "F-quiz! at work" : "Quizzly w szkole"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."
                    : "Angażująca nauka grupowa i na odległość dla nauczycieli i uczniów."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Dowiedz się więcej"} &gt;
                </a>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles["info-body"]}>
                <h2 className={styles["info-title"]}>
                  <img
                    src={icon3}
                    style={{ width: "36px", marginRight: "10px" }}
                  />
                  {isLanguageEnglish ? "F-quiz! at home" : "Quizzly w pracy"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Learning Apps and games for family fun or home study"
                    : "Realizuj szkolenia, prezentacje, spotkania i wydarzenia osobiście lub na dowolnej platformie do wideokonferencji."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Dowiedz się więcej"} &gt;
                </a>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles["info-body"]}>
                <h2 className={styles["info-title"]}>
                  <img
                    src={icon4}
                    style={{ width: "36px", marginRight: "10px" }}
                  />
                  {isLanguageEnglish ? "F-quiz! Academy" : "Quizzly w domu"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Explore content and join one of the world’s largest educator communities."
                    : "Gry edukacyjne do rodzinnej zabawy lub nauki w domu."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Dowiedz się więcej"} &gt;
                </a>
              </div>
            </div>
          </section>
          <section className={styles["third-section"]}>
            <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
              {isLanguageEnglish
                ? "How does Quizzly work?"
                : "Jak działa aplikacja?"}
            </h1>
            <div className={styles["card-container"]}>
              <div className={styles.card}>
                <div className={styles["card-video"]}>
                  <div className={styles["video-container"]}>
                    <div className={styles["video-background1"]}></div>
                    <video
                      className={styles["card-video-content"]}
                      src="https://kahoot.com/files/2019/07/kc_1.webm"
                      ref={videoRef1}
                      onMouseEnter={() => handleMouseEnter(videoRef1)}
                      onMouseLeave={() => handleMouseLeave(videoRef1)}
                      loop
                    />
                  </div>
                </div>
                <div className={styles["card-body"]}>
                  <h1>{isLanguageEnglish ? "Create" : "Twórz"}</h1>
                  <p>
                    {isLanguageEnglish
                      ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                      : "Stworzenie quizu na dowolny temat, w dowolnym języku zajmuje tylko kilka minut."}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div class={styles["card-video"]}>
                  <div class={styles["video-container"]}>
                    <div className={styles["video-background2"]}></div>
                    <video
                      className={styles["card-video-content2"]}
                      src="https://kahoot.com/files/2019/07/kc2_2b.webm"
                      ref={videoRef2}
                      onMouseEnter={() => handleMouseEnter(videoRef2)}
                      onMouseLeave={() => handleMouseLeave(videoRef2)}
                      loop
                    />
                  </div>
                </div>
                <div className={styles["card-body"]}>
                  <h1>
                    {isLanguageEnglish
                      ? "Host or share"
                      : "Hostuj albo udostępnij"}
                  </h1>
                  <p>
                    {isLanguageEnglish
                      ? "Host a live game with questions on a big screen or share a game with remote players."
                      : "Przeprowadź grę na żywo z pytaniami na dużym ekranie lub udostępnij gra ze zdalnymi graczami."}
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div class={styles["card-video"]}>
                  <div class={styles["video-container"]}>
                    <div className={styles["video-background3"]}></div>
                    <video
                      className={styles["card-video-content3"]}
                      src="https://kahoot.com/files/2019/07/kc_3.webm"
                      ref={videoRef3}
                      onMouseEnter={() => handleMouseEnter(videoRef3)}
                      onMouseLeave={() => handleMouseLeave(videoRef3)}
                      loop
                    />
                  </div>
                </div>
                <div className={styles["card-body"]}>
                  <h1>{isLanguageEnglish ? "Play" : "Graj"}</h1>
                  <p>
                    {isLanguageEnglish
                      ? "Game on! Join a Fquiz with a PIN provided by the host and answer questions on your device."
                      : "Graj dalej! Dołącz do Fquiz za pomocą kodu PIN dostarczonego przez gospodarza i odpowiadać na pytania na swoim urządzeniu."}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["card-button"]}>
              {isLanguageEnglish
                ? "Play Quizzly to see how it works."
                : "Zagraj w Quizzly, aby zobaczyć, jak to działa."}{" "}
              &nbsp;
              <a href="/">
                {isLanguageEnglish
                  ? "Explore our public quizes"
                  : "Przeglądaj publiczne quizy"}
              </a>
            </div>
          </section>
        </section>
      </main>
    </Box>
  );
}

export default Home;

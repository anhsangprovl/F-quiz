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
                    : "Học hè thật dễ dàng với F-quiz!+ - giờ đây được cải tiến với AI!"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Save time creating engaging lesson content with our new AI-enhanced F-quiz! creator! Combine with new game experiences and more question types!"
                    : "Tiết kiệm thời gian tạo nội dung bài học hấp dẫn với F-quiz mới được tăng cường bởi AI của chúng tôi! người sáng tạo! Kết hợp với trải nghiệm trò chơi mới và nhiều loại câu hỏi hơn!"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Đăng kí miễn phí"}
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
                    : "Mang việc học hấp dẫn đến từng người"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "With F-quiz! 360 Engage you can bring to life training your teams will want to complete, all via the K! app. Support self-paced learning, knowledge retention, and collaboration today!"
                    : "Với F-quiz! 360 Engage bạn có thể đưa vào cuộc sống đào tạo nhóm của bạn sẽ muốn hoàn thành, tất cả thông qua K! ứng dụng. Hỗ trợ học tập theo nhịp độ của bản thân, duy trì kiến ​​thức và cộng tác ngay hôm nay!"}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Đăng kí miễn phí"}
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
                    : "Trao quyền học hè với F-quiz! Trẻ em"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Explore new subjects and develop essential math and reading skills while having a blast playing the F-quiz! Kids app, from $2.49/month until June 30th."
                    : "Khám phá các môn học mới và phát triển các kỹ năng toán học và đọc cần thiết trong khi vui chơi F-quiz! Ứng dụng dành cho trẻ em, từ $2,49/tháng cho đến ngày 30 tháng 6."}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Sign up for free"
                      : "Đăng kí miễn phí"}
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
                    : "Sẵn sàng tựu trường với F-quiz!+ - hiện đã được cải tiến bởi AI"}
                </h2>
                <p className={styles["banner-description"]}>
                  {isLanguageEnglish
                    ? "Stay on top of your studies using our new F-quiz! question generator enhanced with AI, weekly learning goals, and more study tools, from $6.99/month."
                    : "Luôn cập nhật kết quả học tập của bạn bằng cách sử dụng bài kiểm tra F mới của chúng tôi! trình tạo câu hỏi được cải tiến với AI, mục tiêu học tập hàng tuần và nhiều công cụ học tập khác, từ 6,99 đô la/tháng."}
                </p>
                <button className={styles["banner-button"]}>
                  <a href="/">
                    {isLanguageEnglish
                      ? "Check public quizes"
                      : "Kiểm tra quiz công khai"}
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

                  {isLanguageEnglish ? "F-quiz! at school" : "F-quiz! ở trường"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Engaging group and distance learning for teachers and students."
                    : "Học theo nhóm và học từ xa cho giáo viên và học sinh."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
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
                  {isLanguageEnglish
                    ? "F-quiz! at work"
                    : "F-quiz! ở nơi làm việc"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."
                    : "Cung cấp đào tạo, thuyết trình, cuộc họp và sự kiện trực tiếp hoặc trên bất kỳ nền tảng hội nghị truyền hình nào."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
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
                  {isLanguageEnglish ? "F-quiz! at home" : "F-quiz! ở nhà"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Learning Apps and games for family fun or home study"
                    : "Các ứng dụng và trò chơi học tập giúp gia đình giải trí hoặc học tập tại nhà."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
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
                  {isLanguageEnglish ? "F-quiz! Academy" : "Học viện F-quiz!"}
                </h2>
                <p className={styles["info-description"]}>
                  {isLanguageEnglish
                    ? "Explore content and join one of the world’s largest educator communities."
                    : "Khám phá nội dung và tham gia một trong những cộng đồng giáo dục lớn nhất thế giới."}
                </p>
                <a href="/" className={styles["info-link"]}>
                  {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
                </a>
              </div>
            </div>
          </section>
          <section className={styles["third-section"]}>
            <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
              {isLanguageEnglish
                ? "How does Quizzly work?"
                : "Quizzly làm việc như thê nào?"}
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
                  <h1>{isLanguageEnglish ? "Create" : "Tạo"}</h1>
                  <p>
                    {isLanguageEnglish
                      ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                      : "Chỉ mất vài phút để tạo một trò chơi học tập hoặc câu đố vui về bất kỳ chủ đề nào, bằng bất kỳ ngôn ngữ nào."}
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
                      : "Lưu trữ hoặc chia sẻ"}
                  </h1>
                  <p>
                    {isLanguageEnglish
                      ? "Host a live game with questions on a big screen or share a game with remote players."
                      : "Tổ chức một trò chơi trực tiếp với các câu hỏi trên màn hình lớn hoặc chia sẻ trò chơi với những người chơi từ xa."}
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
                  <h1>{isLanguageEnglish ? "Play" : "Chơi"}</h1>
                  <p>
                    {isLanguageEnglish
                      ? "Game on! Join a Fquiz with a PIN provided by the host and answer questions on your device."
                      : "Trò chơi trên! Tham gia Fquiz với mã PIN do người tổ chức cung cấp và trả lời các câu hỏi trên thiết bị của bạn."}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles["card-button"]}>
              {isLanguageEnglish
                ? "Play Quizzly to see how it works."
                : "Tham gia để xem nó hoạt động như thế nào."}{" "}
              &nbsp;
              <a href="/">
                {isLanguageEnglish
                  ? "Explore our public quizes"
                  : "Khám phá các câu hỏi của chúng tôi"}
              </a>
            </div>
          </section>
        </section>
      </main>
    </Box>
  );
}

export default Home;

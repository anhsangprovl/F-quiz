import React, { useEffect, useState } from "react";
import MyQuiz from "./MyQuiz/MyQuiz";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { getTeacherQuizes, createQuiz } from "../../actions/quiz";
import styles from "./myQuizes.module.css";
import { useHistory } from "react-router-dom";

function MyQuizes() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const [quizData, setQuizData] = useState({
    name: "",
    creatorName: `${user?.result.firstName} ${user?.result.lastName}`,
    backgroundImage: "",
    description: "",
    pointsPerQuestion: 1,
    isPublic: true,
    tags: [],
    questionList: [],
  });

  const [isQuizPublic, setIsQuizPublic] = useState(true);

  useEffect(() => {
    dispatch(getTeacherQuizes(user.result._id));
  }, [dispatch]);

  const { quizes } = useSelector((state) => state.quiz);

  const handleQuizSubmit = () => {
    dispatch(createQuiz(quizData, history));
  };

  const handleQuizChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles["quizes-list"]}>
      <div className={styles["quiz-settings"]}>
        <h2>
          <FontAwesomeIcon icon={faSquarePlus} />
          {isLanguageEnglish ? "Create new quiz" : "Tạo bài kiểm tra mới"}
        </h2>
        <div className={styles["quiz-form"]}>
          <div className={styles["option-label"]}>
            <FontAwesomeIcon icon={faTextHeight} width={20} height={20} />
            <label>{isLanguageEnglish ? "Title" : "Tiêu đề"}</label>
          </div>
          <input
            value={quizData.name}
            type="text"
            name="name"
            onChange={handleQuizChange}
          />
          <div className={styles["option-label"]}>
            <FontAwesomeIcon icon={faComment} width={20} height={20} />
            <label>{isLanguageEnglish ? "Description" : "Mô tả"}</label>
          </div>
          <input
            value={quizData.description}
            type="text"
            name="description"
            onChange={handleQuizChange}
          />
          <div className={styles["option-buttons"]}>
            <Button
              variant="primary"
              onClick={() => {
                setIsQuizPublic(true);
                setQuizData({ ...quizData, isPublic: true });
              }}
              className={styles["option-button"]}
            >
              <FontAwesomeIcon icon={faPeopleGroup} width={20} height={20} />
              {isLanguageEnglish ? "Public" : "Công cộng"}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setIsQuizPublic(false);
                setQuizData({ ...quizData, isPublic: false });
              }}
              className={styles["option-button"]}
            >
              <FontAwesomeIcon icon={faLock} width={20} height={20} />
              {isLanguageEnglish ? "Private" : "Riêng tư"}
            </Button>
          </div>
          <Button
            variant="success"
            onClick={handleQuizSubmit}
            className={styles["submit-button"]}
          >
            <FontAwesomeIcon icon={faPaperPlane} width={20} height={20} />
            {isLanguageEnglish ? "Create " : "Tạo"}
          </Button>
        </div>
      </div>
      {quizes.map((quiz) => (
        <MyQuiz key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
}

export default MyQuizes;

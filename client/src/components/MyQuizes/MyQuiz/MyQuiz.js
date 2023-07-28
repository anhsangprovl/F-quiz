import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarTimes,
  faCircleQuestion,
  faPerson,
  faPlay,
  faCommentDots,
  faTrash,
  faTags,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import styles from "./myQuiz.module.css";
import { deleteQuiz } from "../../../actions/quiz";
import { createGame } from "../../../actions/game";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { createLeaderboard } from "../../../actions/leaderboard";

function MyQuiz({ quiz }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);
  const openQuizPage = (e) => {
    history.push(`/myquizes/${quiz._id}`);
  };

  const addGame = async () => {
    let gameData = {
      quizId: quiz._id,
      isLive: true,
      pin: String(Math.floor(Math.random() * 9000) + 1000),
    };
    const newGame = await dispatch(createGame(gameData, history));
    let leaderboardData = { gameId: newGame._id, playerResultList: [] };

    const newLeaderboard = await dispatch(createLeaderboard(leaderboardData));
    socket.emit("init-game", newGame, newLeaderboard);
  };

  return (
    <div className={styles["quiz-card"]}>
      <div className={styles["image-container"]}>
        <h3 className={styles["quiz-creator"]}>{quiz.creatorName}</h3>
        <h3 className={styles["quiz-date"]}>
          {moment(quiz.dateCreated).fromNow()}
        </h3>
        <div
          className={styles["quiz-image"]}
          style={{ backgroundImage: "url('" + quiz.backgroundImage + "')" }}
        ></div>
        <h3 className={styles["quiz-question-number"]}>
          {isLanguageEnglish ? "Questions:" : "Pytania:"}{" "}
          {quiz.numberOfQuestions}
        </h3>
      </div>
      <div className={styles["card-body"]}>
        <div>
          <h4 className={styles["quiz-tags"]}>
            {quiz.tags.map((tag) => `#${tag} `)}
          </h4>
          <div className={styles["card-buttons"]}>
            <Button variant="success" onClick={addGame}>
              <FontAwesomeIcon icon={faPlay} />
              {isLanguageEnglish ? "Start a game" : "Bắt đầu game"}
            </Button>
            <Button variant="info" onClick={openQuizPage}>
              <FontAwesomeIcon icon={faPenToSquare} width={28} height={20} />
            </Button>
            <Button
              variant="success"
              onClick={() => dispatch(deleteQuiz(quiz._id))}
            >
              <DeleteIcon fontSize="small" />
              {isLanguageEnglish ? "" : ""}
            </Button>
          </div>
        </div>
        <h2 className={styles["quiz-title"]}>{quiz.name}</h2>
        <p className={styles["quiz-description"]}>{quiz.description}</p>
      </div>
    </div>
  );
}

export default MyQuiz;

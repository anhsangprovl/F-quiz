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
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import styles from "./myQuiz.module.css";
import { deleteQuiz } from "../../../actions/quiz";
import { createGame } from "../../../actions/game";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
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
        <p className={styles["quiz-creator"]}>
          <FontAwesomeIcon icon={faPerson} width={20} height={20} />
          {quiz.creatorName}
        </p>
        <p className={styles["quiz-date"]}>
          <FontAwesomeIcon icon={faCalendarTimes} width={20} height={20} />
          {moment(quiz.dateCreated).fromNow()}
        </p>

        <div
          className={styles["quiz-image"]}
          style={{ backgroundImage: "url('" + quiz.backgroundImage + "')" }}
        ></div>
        <p className={styles["quiz-question-number"]}>
          <FontAwesomeIcon icon={faCircleQuestion} width={20} height={20} />
          {isLanguageEnglish ? "Questions:" : "Pytania:"}{" "}
          {quiz.numberOfQuestions}
        </p>
      </div>
      <div className={styles["card-body"]}>
        <div>
          <h4 className={styles["quiz-tags"]}>
            <FontAwesomeIcon icon={faTags} width={20} height={20} />
            {quiz.tags.map((tag) => `#${tag} `)}
          </h4>
          <div className={styles["card-buttons"]}>
            <Button variant="success" onClick={addGame}>
              <FontAwesomeIcon icon={faPlay} />
              {isLanguageEnglish ? "Start a game" : "Rozpocznij grę"}
            </Button>
            <button onClick={openQuizPage}>
              <FontAwesomeIcon icon={faCommentDots} width={20} height={20} />
            </button>
            <Button
              variant="success"
              onClick={() => dispatch(deleteQuiz(quiz._id))}
            >
              <FontAwesomeIcon icon={faTrash} width={20} height={20} />
              {isLanguageEnglish ? "Delete" : "Usuń"}
            </Button>
          </div>
        </div>
        {/* <h2 className={styles["quiz-title"]}>Title: {quiz.name}</h2>
        <p className={styles["quiz-description"]}>Des: {quiz.description}</p> */}
      </div>
    </div>
  );
}

export default MyQuiz;

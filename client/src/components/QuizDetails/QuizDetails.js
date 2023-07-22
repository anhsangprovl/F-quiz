import React, { useEffect, useState, useRef } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core/';
import QuestionListItem from '../QuizCreator/QuestionListItem/QuestionListItem';
import styles from './Question/question.module.css';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import Quiz from '../Quizes/Quiz/Quiz';
import Question from './Question/Question';
import CommentSection from './CommentSection/CommentSection';
import { getQuiz, getQuizesBySearch } from '../../actions/quiz';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import DnsIcon from '@material-ui/icons/Dns';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import defaultQuestionImage from '../../assets/defaultQuestionImage.svg';

const Post = () => {
  const { quiz, quizes, isLoading } = useSelector((state) => state.quiz);
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  const [checked, setChecked] = useState(undefined);
  const [correctCount, setCorrectCount] = useState(0);
  const [doQuiz, setDoQuiz] = useState(true);
  const form1 = useRef();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  useEffect(() => {
    if (quiz) {
      dispatch(
        getQuizesBySearch({ search: 'none', tags: quiz?.tags.join(',') })
      );
    }
  }, [quiz]);

  if (!quiz) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var count = 0;
    const data = new FormData(form1.current);
    for (const [key, value] of data) {
      if (value === 'true') {
        count++;
      }
    }
    setCorrectCount(count);
    setDoQuiz(false);
  };
  const onOptionsChange = (e) => {
    console.log(e.target.value);
  };

  const handleDoQuizAgain = () => {
    setDoQuiz(true);
  };

  const handleReview = () => {
    setDoQuiz(true);
  };
  console.log(quiz.questionList);

  const recommendedQuizes = quizes.filter(({ _id }) => _id !== quiz._id);

  return (
    <Paper
      style={{
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: '#F1F6F9',
      }}
      elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.typography}>
            <DnsIcon fontSize="large" color="primary" />
            {'     '}
            {quiz.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
            className={classes.typography}>
            <LocalOfferIcon color="primary" fontSize="large" />
            {'            '}
            {quiz.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            className={classes.typography}>
            <DescriptionIcon color="primary" fontSize="large" />
            {'       '}
            <span>{quiz.description}</span>
          </Typography>
          <Typography variant="h6" className={classes.typography}>
            <PersonIcon color="primary" fontSize="large" />{' '}
            {isLanguageEnglish ? 'Created by: ' : 'Twórca: '}
            {quiz.creatorName}
          </Typography>
          <Typography variant="body1" className={classes.typography}>
            <TimelapseIcon color="primary" fontSize="large" />
            {'  '}
            {moment(quiz.dateCreated).fromNow()}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={quiz.backgroundImage} alt="" />
        </div>
      </div>
      {quiz.questionList.length > 0 && doQuiz === true && (
        <div className={classes.questionList}>
          <form ref={form1} onSubmit={handleSubmit}>
            <div>
              <Typography gutterBottom variant="h5">
                {isLanguageEnglish ? 'Question list' : 'Lista pytań:'}
              </Typography>
              <Divider />
              {quiz.questionList.map((question) => (
                <div className={styles['quiz-card']}>
                  <div className={classes.cardBody}>
                    <h4>
                      <span>{question.questionIndex}&nbsp; </span>
                      {question.questionType}
                    </h4>

                    {/* <QuestionListItem
                      key={question.questionIndex}
                      number={question.questionIndex}
                      type={question.questionType}
                      image={question.backgroundImage}
                    /> */}
                    {question.backgroundImage.length === 0 ? (
                      <img
                        src={defaultQuestionImage}
                        alt=""
                        width={250}
                        height={150}
                      />
                    ) : (
                      <img
                        src={question.backgroundImage}
                        alt=""
                        width={250}
                        height={150}
                      />
                    )}
                  </div>

                  <div className={styles['card-body']}>
                    <h2 className={styles['quiz-description']}>
                      {question.question}
                    </h2>
                    <div className={styles['answer']}>
                      <ul className={styles['demo']} key={question?._id}>
                        {question.answerList.map((q, i) => (
                          <li key={i}>
                            <input
                              type="radio"
                              value={q.isCorrect}
                              name={`${question.questionIndex}-options`}
                              id={`${question.questionIndex}-q${i}-option`}
                              onChange={onOptionsChange}
                            />

                            <label
                              className={styles['text-primary']}
                              htmlFor={`${question.questionIndex}-q${i}-option`}>
                              {q.body}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit">
                submit
              </Button>
            </div>
          </form>
        </div>
      )}
      {doQuiz === false && (
        <>
          <h3 className={classes.result}>
            Result: {correctCount}/{quiz.questionList.length}
          </h3>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDoQuizAgain}>
            Try Again
          </Button>
        </>
      )}

      <CommentSection quiz={quiz} />
      {/* {recommendedQuizes.length > 0 && (
        <div>
          <Typography gutterBottom variant="h5">
            {isLanguageEnglish
              ? "You might also like:"
              : "Możesz również polubić:"}
          </Typography>
          <Divider />
          {recommendedQuizes.map((quiz) => (
            <Quiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
      )} */}
    </Paper>
  );
};

export default Post;

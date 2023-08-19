import React, {FC, useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';
import Question from './components/Question';
import Answer from './components/Answer';
import Result from './components/Result';

import {questions} from '../utils/data.json';

const TIME = 20;

const GameScreen: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(TIME);
  const [isShowResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const checkAnswer = useCallback(
    (userAnswer: string) => {
      if (question.correctAnswer === userAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion === questions.length - 1) {
        setShowResult(true);
        setRemainingTime(0);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setRemainingTime(TIME);
      }
    },
    [currentQuestion, question, score],
  );

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setRemainingTime(TIME);
  };

  const answerTimeProgress = (remainingTime / TIME) * 100;

  useEffect(() => {
    if (remainingTime > 0 && !isShowResult) {
      const timeOut = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    } else {
      checkAnswer('');
    }
  }, [remainingTime, isShowResult, checkAnswer]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Header
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          progress={answerTimeProgress}
        />
      </View>

      <View style={styles.questionBox}>
        <Question questionContent={question.content} />
      </View>

      <View style={styles.answerBox}>
        <Answer answers={question.answers} checkAnswer={checkAnswer} />
      </View>

      <Result
        isVisible={isShowResult}
        score={score}
        numberQuestions={questions.length}
        restartGame={restartGame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: 'black',
  },
  header: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    borderBottomWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 0,
    
   
    
  },
  answerBox: {
    height: 240,
    padding: 10,
    paddingTop: 7,
  },
});

export default GameScreen;
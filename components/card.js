import React from "react";
import styles from "@/styles/Home.module.css";

const Card = ({ next, question }) => {
  return (
    <div className={styles.card}>
      <div className={styles.question}>{question.content}</div>
      <div className={styles.answers}>
        {question.answers.map((answer) => (
          <div onClick={() => next(answer.id)} className={styles.answer} key={answer.id}>{answer.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;

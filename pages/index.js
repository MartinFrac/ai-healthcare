import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Diagrams from "@/components/diagrams";
import Header from "@/components/header";

export default function Home() {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
    // fetch("/api/model", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     exp: 1.8,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const saveAnswer = (id) => {
    setAnswers((prev) => [
      ...prev,
      {
        questionID: currentQuestion,
        answerID: id,
      },
    ]);
  };

  const nextQuestion = (id) => {
    if (answers.length == currentQuestion + 1) return;
    saveAnswer(id);
    if (questions.length - 1 <= currentQuestion) return;
    setCurrentQuestion((old) => old + 1);
  };

  const Content = () => {
    let output = (
      <div className={styles.start}>
        <div className={styles.start__text}>Start your journey with us</div>
        <div onClick={() => setStart(true)} className={styles.start__button}>
          Start
        </div>
      </div>
    );
    if (start) {
      output = (
        <Card next={nextQuestion} question={questions[currentQuestion]} />
      );
    }
    return output;
  };

  if (questions.length == 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>AI healthcare</title>
        <meta name="description" content="AI healtcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Content></Content>
      </main>
      <Diagrams />
      <Footer />
    </>
  );
}

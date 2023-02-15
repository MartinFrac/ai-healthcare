import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json()) 
      .then(data => setQuestions(data))
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    console.log(answers);
  }, [answers])

  const saveAnswer = (id) => {
    setAnswers((prev) => [
      ...prev,
      {
        questionID: currentQuestion,
        answerID: id
      }
    ])
  }

  const nextQuestion = (id) => {
    if (answers.length == currentQuestion+1) return;
    saveAnswer(id);
    if (questions.length - 1 <= currentQuestion) return;
    setCurrentQuestion((old) => old + 1);
  }

  const Content = () => {
    let output = 
    <div className={styles.start}>
      <div className={styles.start__text}>Start your journey with us</div>
      <div onClick={() => setStart(true)} className={styles.start__button}>Start</div>
    </div>;
    if (start) {
      output = <Card next={nextQuestion} question={questions[currentQuestion]}/>;
    }
    return output;
  }

  if (questions.length == 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>AI healthcare</title>
        <meta name="description" content="AI healtcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__left}>
            AI healthcare
          </div>
          <div className={styles.header__right}>
            About us
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Content></Content>
      </main>
      <div className={styles.diagrams}>
        <Image src="/../public/hipaa.png" alt="no diagrams" width={400} height={200}/>
        <Image src="/../public/hitech.png" alt="no diagrams" width={350} height={200}/>
        <Image src="/../public/gdpr.png" alt="no diagrams" width={300} height={200}/>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__left}>
            <div>
              AI healthcare
            </div>
            <div className={styles.copyright}>
              © Group 22 | 2023 | Privacy
            </div>
          </div>
          <div className={styles.footer__right}>
            <div>
              <h3>Risk</h3>
              <ul>
                <li>risk1</li>
                <li>risk2</li>
              </ul>
            </div>
            <div>
              <h3>Risk</h3>
              <ul>
                <li>risk1</li>
                <li>risk2</li>
              </ul>
            </div>
            <div>
              <h3>Risk</h3>
              <ul>
                <li>risk1</li>
                <li>risk2</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

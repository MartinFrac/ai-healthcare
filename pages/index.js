import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Diagrams from "@/components/Diagrams";
import Header from "@/components/Header";
import SearchableList from "@/components/searchableList";
import ChosenList from "@/components/ChosenList";
import Card from "@/components/Card";

export default function Home() {
  const [start, setStart] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [chosenSymptoms, setChosenSymptoms] = useState([]);
  const [response, setResponse] = useState("");
  useEffect(() => {
    fetch("/api/symptoms")
      .then((res) => res.json())
      .then((data) => setSymptoms(data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = async () => {
    fetch("/api/model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: chosenSymptoms,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((error) => console.log(error));
  };

  const Content = () => {
    if (response) {
      return (
        <Card>
          <div style={{ width: '300px' }}>{response}</div>
        </Card>
      );
    }
    if (start) {
      return (
        <div className={styles.cards}>
          <Card>
            <SearchableList
              items={symptoms}
              setChosenSymptoms={setChosenSymptoms}
            />
          </Card>
          <Card>
            <ChosenList items={chosenSymptoms} submit={onSubmit} />
          </Card>
        </div>
      );
    }
    return (
      <div className={styles.start}>
        <div className={styles.start__text}>The Earlier The Better</div>
        Immediate diagnosis
        <div onClick={() => setStart(true)} className={styles.start__button}>
          Start
        </div>
      </div>
    );
  };

  if (symptoms.length == 0) {
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

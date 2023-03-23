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
  const [nhsNumber, setNhsNumber] = useState("");
  useEffect(() => {
    fetch("/api/symptoms")
      .then((res) => res.json())
      .then((data) => setSymptoms(data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = async () => {
    console.log(chosenSymptoms);
    if (chosenSymptoms.length < 5) return;
    fetch("/api/model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: chosenSymptoms,
        nhsNumber: nhsNumber
      }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((error) => console.log(error));
  };

  const reset = () => {
    setChosenSymptoms([]);
    setResponse("");
    setStart(false);
  };

  const Content = (props) => {
    if (response) {
      return (
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div style={{ width: "500px" }}>
              {response.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div
              onClick={reset}
              style={{
                background: "white",
                color: "black",
                textAlign: "center",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            >
              Reset
            </div>
          </div>
        </Card>
      );
    }
    if (start) {
      return (
        <div className={styles.cards}>
          <Card>
            <SearchableList
              items={symptoms}
              chosenSymptoms={chosenSymptoms}
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
        <div className={styles.nhs}>
          Your NHS number
          <input
            type="text"
            value={nhsNumber}
            onChange={(e) => setNhsNumber(e.target.value)}
          />
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
      <main className={styles.main}>{Content()}</main>
      <div className={styles.disclaimer}>Disclaimer</div>
      <Diagrams />
      <Footer />
    </>
  );
}

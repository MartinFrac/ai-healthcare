import React from "react";

const ChosenList = ({ items, submit }) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    marginTop: "1rem",
  };

  return (
    <div>
      Chosen Symptoms:
      <div style={styles}>
        <ul>
          {items.slice(0, 7).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {items.slice(7, 14).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {items.slice(14, 21).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div onClick={submit} style={{ marginTop: '1rem', background: 'white', color: 'black', textAlign: 'center', borderRadius: '1rem', cursor: 'pointer' }}>
        Submit
      </div>
    </div>
  );
};

export default ChosenList;

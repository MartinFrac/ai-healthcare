import React from "react";

const ChosenList = ({ items }) => {
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
    </div>
  );
};

export default ChosenList;

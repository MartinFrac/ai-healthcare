import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";

function SearchableList({ items, setChosenSymptoms }) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const query = event.target.value;
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setQuery(query);
    setFilteredItems(filteredItems);
  };

  const handleClick = (item) => {
    setChosenSymptoms(prev => [
      ...prev,
      item
    ])
  }

  return (
    <div className={styles.card__content}>
      Select your symptoms:
      <input type="text" value={query} onChange={handleSearch} />
      <ul>
        {filteredItems.slice(0,4).map((item, index) => (
          <li className={styles.propositions} onClick={() => handleClick(item)} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
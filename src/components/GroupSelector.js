import React, { useState } from "react";

const GroupSelector = ({ onGroupSelect }) => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGroupSelect({ male: maleCount, female: femaleCount });
  };

  return (
    <div style={styles.container}>
      <h3>👥 Select Your Group</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>Number of Males:</label>
          <input
            type="number"
            min="0"
            value={maleCount}
            onChange={(e) => setMaleCount(Number(e.target.value))}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Number of Females:</label>
          <input
            type="number"
            min="0"
            value={femaleCount}
            onChange={(e) => setFemaleCount(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Next</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
    maxWidth: "400px",
    margin: "20px auto",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    padding: "10px 20px",
    background: "#ff5a5f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default GroupSelector;

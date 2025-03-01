# google-sheets-clone
Assignment 1: Web Application Mimicking Google Sheets
import React, { useState } from "react";
import "./App.css";

const ROWS = 10;
const COLS = 5;

const App = () => {
  const [data, setData] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(""))
  );

  const handleChange = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <div className="container">
      <h1>Google Sheets Clone</h1>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

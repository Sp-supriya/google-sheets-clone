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

  const calculateFormula = (formula) => {
    try {
      return eval(formula.replace(/([A-Z]+)(\d+)/g, (_, col, row) => {
        const colIndex = col.charCodeAt(0) - 65;
        const rowIndex = parseInt(row, 10) - 1;
        return data[rowIndex]?.[colIndex] || 0;
      }));
    } catch {
      return "ERROR";
    }
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
                    value={cell.startsWith("=") ? calculateFormula(cell.slice(1)) : cell}
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

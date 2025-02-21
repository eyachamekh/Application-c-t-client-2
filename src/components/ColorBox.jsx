import { useState } from "react";
import PropTypes from "prop-types"; 

const ColorBox = ({ initialColor, colorOptions }) => {
  const [bgColor, setBgColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setBgColor(colorOptions[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: bgColor,
          margin: "20px auto",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      />
      <button
        onClick={changeColor}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        Changer de couleur
      </button>
    </div>
  );
};
// Définition des prop-types
ColorBox.propTypes = {
  initialColor: PropTypes.string.isRequired, // initialColor doit être une chaîne de caractères
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired, // colorOptions doit être un tableau de chaînes
};
export default ColorBox;
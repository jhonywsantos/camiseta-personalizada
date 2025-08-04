import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((x) => x + x).join("");
  }
  if (hex.length !== 6) return "Inválido";
  const num = parseInt(hex, 16);
  return `rgb(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255})`;
}

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [hex, setHex] = useState(snap.color || "#ffffff");

  // Atualiza cor ao mover o cursor do input color
  const handleColorChange = (e) => {
    const value = e.target.value;
    setHex(value);
    state.color = value;
  };

  // Atualiza cor ao digitar manualmente
  const handleHexInputChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith("#")) value = "#" + value;
    // Validação básica para hexadecimal
    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
      setHex(value);
      if (value.length === 7) state.color = value;
    }
  };

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
      <div style={{ margin: "20px 0" }}>
        <label htmlFor="color-input" style={{ marginRight: "10px" }}>
          Selecione uma cor:
        </label>
        <input
          id="color-input"
          type="color"
          value={hex}
          onChange={handleColorChange}
          style={{
            width: "40px",
            height: "40px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        />
        <input
          type="text"
          value={hex}
          onChange={handleHexInputChange}
          maxLength={7}
          style={{
            width: "90px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
          placeholder="#ffffff"
        />
        <span>
          <strong>RGB:</strong> {hexToRgb(hex)}
        </span>
      </div>
    </div>
  );
};

export default ColorPicker;

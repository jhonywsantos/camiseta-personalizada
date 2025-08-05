import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [hex, setHex] = useState(snap.color || "#ffffff");

  // Sincroniza as mudanças entre os componentes
  useEffect(() => {
    setHex(snap.color);
  }, [snap.color]);

  const handleColorChange = (e) => {
    const value = e.target.value;
    setHex(value);
    state.color = value;
  };

  const handleHexInputChange = (e) => {
    let value = e.target.value;
    
    // Garante que comece com #
    if (!value.startsWith("#") && value.length > 0) {
      value = "#" + value;
    }
    
    // Validação do formato HEX
    if (/^#([0-9A-Fa-f]{0,6})?$/.test(value)) {
      setHex(value.toLowerCase());
      
      // Aplica a cor apenas quando estiver completa
      if (value.length === 7) {
        state.color = value.toLowerCase();
      }
    }
  };

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => {
          state.color = color.hex;
          setHex(color.hex);
        }}
      />
      
      <div className="mt-4 space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Selecione uma cor:
        </label>
        
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={hex}
            onChange={handleColorChange}
            className="w-10 h-10 cursor-pointer rounded border border-gray-300"
          />
          
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              #
            </span>
            <input
              type="text"
              value={hex.replace('#', '')}
              onChange={handleHexInputChange}
              maxLength={6}
              className="block w-24 pl-7 rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

import React from "react";

interface ColorOption {
  id: string;
  name: string;
  color: string;
  textColor: string;
}

const colorOptions: ColorOption[] = [
  { id: "brown", name: "Brown", color: "#6F4E37", textColor: "white" },
  { id: "tan", name: "Tan", color: "#D2B48C", textColor: "black" },
  { id: "cream", name: "Cream", color: "#FFFDD0", textColor: "black" },
  { id: "black", name: "Black", color: "#000000", textColor: "white" },
  { id: "red", name: "Red", color: "#B22222", textColor: "white" },
  { id: "orange", name: "Orange", color: "#FF8C00", textColor: "black" },
  { id: "green", name: "Green", color: "#2E8B57", textColor: "white" },
  { id: "blue", name: "Blue", color: "#4682B4", textColor: "white" },
  { id: "purple", name: "Purple", color: "#9b87f5", textColor: "white" },
  { id: "gold", name: "Gold", color: "#D4AF37", textColor: "black" },
  { id: "silver", name: "Silver", color: "#C0C0C0", textColor: "black" },
  { id: "white", name: "White", color: "#FFFFFF", textColor: "black" },
];

export function ColorPalette() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {colorOptions.map((option) => (
        <div key={option.id} className="flex flex-col items-center">
          <label 
            htmlFor={`color-${option.id}`}
            className="cursor-pointer flex flex-col items-center"
          >
            <div 
              className="h-12 w-12 rounded-full mb-1 flex items-center justify-center border border-gray-200"
              style={{ backgroundColor: option.color, color: option.textColor }}
            ></div>
            <div className="flex items-center space-x-1.5">
              <span className="text-sm">{option.name}</span>
              <input 
                type="checkbox" 
                id={`color-${option.id}`} 
                name="preferredColors" 
                value={option.id} 
                className="h-4 w-4 accent-brand-purple"
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}


import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface LogoStyleProps {
  id: string;
  name: string;
  imgSrc: string;
  description: string;
}

const logoStyles: LogoStyleProps[] = [
  {
    id: "modern",
    name: "Modern",
    imgSrc: "/placeholder.svg",
    description: "Clean, minimalist design with contemporary elements"
  },
  {
    id: "classic",
    name: "Classic",
    imgSrc: "/placeholder.svg",
    description: "Timeless designs with traditional elements"
  },
  {
    id: "emblem",
    name: "Emblem",
    imgSrc: "/placeholder.svg",
    description: "Badge or seal-type logo with contained elements"
  },
  {
    id: "minimal",
    name: "Minimal",
    imgSrc: "/placeholder.svg",
    description: "Extremely simplified design with essential elements only"
  }
];

export function LogoStyles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {logoStyles.map((style) => (
        <Card key={style.id} className="overflow-hidden border border-gray-200">
          <CardContent className="p-0">
            <label 
              htmlFor={style.id} 
              className="cursor-pointer block"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img 
                  src={style.imgSrc} 
                  alt={style.name} 
                  className="h-24 w-auto object-contain" 
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{style.name}</h3>
                  <input 
                    type="radio" 
                    id={style.id} 
                    name="logoStyle" 
                    value={style.id} 
                    className="h-4 w-4 accent-brand-purple"
                  />
                </div>
                <p className="text-sm text-gray-500">{style.description}</p>
              </div>
            </label>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

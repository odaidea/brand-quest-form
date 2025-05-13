
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface PreviousLogoProps {
  id: string;
  name: string;
  imgSrc: string;
}

// This would be replaced with actual previous logos
const previousLogos: PreviousLogoProps[] = [
  {
    id: "logo1",
    name: "Previous Logo 1",
    imgSrc: "/placeholder.svg"
  },
  {
    id: "logo2",
    name: "Previous Logo 2",
    imgSrc: "/placeholder.svg"
  }
];

export function PreviousLogos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {previousLogos.map((logo) => (
        <Card key={logo.id} className="overflow-hidden border border-gray-200">
          <CardContent className="p-4">
            <div className="mb-4 bg-gray-100 p-4 flex items-center justify-center rounded-md">
              <img 
                src={logo.imgSrc} 
                alt={logo.name} 
                className="h-32 w-auto object-contain" 
              />
            </div>
            <h3 className="font-medium mb-2">{logo.name}</h3>
            <div className="space-y-4 mt-2">
              <div>
                <label htmlFor={`retain-${logo.id}`} className="flex items-center space-x-2 text-sm">
                  <input 
                    type="checkbox" 
                    id={`retain-${logo.id}`} 
                    name={`retain-${logo.id}`} 
                    className="h-4 w-4 accent-brand-purple" 
                  />
                  <span>Retain elements from this logo</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

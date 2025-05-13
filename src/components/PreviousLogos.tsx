
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Palette, Type, PenTool } from "lucide-react";

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
            <div className="space-y-2 mt-4">
              <p className="text-sm font-medium mb-2">Elements to retain:</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`style-${logo.id}`}
                    name={`retain-${logo.id}-style`}
                    className="h-4 w-4 accent-brand-purple" 
                  />
                  <Label 
                    htmlFor={`style-${logo.id}`}
                    className="flex items-center text-sm font-normal"
                  >
                    <PenTool className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>Design Style</span>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`color-${logo.id}`}
                    name={`retain-${logo.id}-color`}
                    className="h-4 w-4 accent-brand-purple" 
                  />
                  <Label 
                    htmlFor={`color-${logo.id}`}
                    className="flex items-center text-sm font-normal"
                  >
                    <Palette className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>Color Palette</span>
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={`typography-${logo.id}`}
                    name={`retain-${logo.id}-typography`}
                    className="h-4 w-4 accent-brand-purple" 
                  />
                  <Label 
                    htmlFor={`typography-${logo.id}`}
                    className="flex items-center text-sm font-normal"
                  >
                    <Type className="h-4 w-4 mr-1.5 text-gray-500" />
                    <span>Typography</span>
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

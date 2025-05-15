
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Palette, Type, PenTool, Layout, BrainCircuit, Hash, XSquare, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
    <div className="space-y-10">
      {previousLogos.map((logo) => (
        <Card key={logo.id} className="overflow-hidden border border-gray-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-gray-100 p-6 flex items-center justify-center rounded-md mb-3">
                  <img 
                    src={logo.imgSrc} 
                    alt={logo.name} 
                    className="h-40 w-auto object-contain" 
                  />
                </div>
                <h3 className="font-medium text-lg text-center">{logo.name}</h3>
              </div>
              
              <div className="w-full md:w-2/3 space-y-6">
                {/* Question 1: Company/Brand Name */}
                <div>
                  <Label htmlFor={`company-name-${logo.id}`} className="text-sm font-medium">
                    1. What was the company or brand name for this logo?
                  </Label>
                  <Input 
                    id={`company-name-${logo.id}`}
                    name={`company-name-${logo.id}`}
                    placeholder="Enter company or brand name"
                    className="mt-1"
                  />
                </div>
                
                {/* Question 2: Overall Impression */}
                <div>
                  <Label htmlFor={`impression-${logo.id}`} className="text-sm font-medium">
                    2. What was your overall impression of this logo?
                  </Label>
                  <Textarea 
                    id={`impression-${logo.id}`}
                    name={`impression-${logo.id}`}
                    placeholder="Describe your impression of this logo"
                    className="mt-1"
                  />
                </div>
                
                {/* Question 3: Elements Liked */}
                <div>
                  <p className="text-sm font-medium mb-2">
                    3. What elements did you like in this logo (if any)?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {[
                      { id: "font", label: "Font", icon: <Type className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "colors", label: "Colors", icon: <Palette className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "symbol", label: "Symbol/Icon", icon: <Hash className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "layout", label: "Layout", icon: <Layout className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "concept", label: "Concept/Idea", icon: <BrainCircuit className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "nothing", label: "Nothing at all", icon: <XSquare className="h-4 w-4 mr-1.5 text-gray-500" /> }
                    ].map(item => (
                      <div key={`${logo.id}-like-${item.id}`} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${logo.id}-like-${item.id}`}
                          name={`${logo.id}-like-${item.id}`}
                        />
                        <Label 
                          htmlFor={`${logo.id}-like-${item.id}`}
                          className="flex items-center text-sm font-normal"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-2">
                    <Label htmlFor={`${logo.id}-like-other`} className="text-sm font-normal">Other:</Label>
                    <Input 
                      id={`${logo.id}-like-other`}
                      name={`${logo.id}-like-other`}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                {/* Question 4: What Didn't Work */}
                <div>
                  <Label htmlFor={`didnt-work-${logo.id}`} className="text-sm font-medium">
                    4. What didn't work or feel right for you in this design?
                  </Label>
                  <Textarea 
                    id={`didnt-work-${logo.id}`}
                    name={`didnt-work-${logo.id}`}
                    placeholder="Describe what didn't work for you"
                    className="mt-1"
                  />
                </div>
                
                {/* Question 5: Others' Feedback */}
                <div>
                  <Label htmlFor={`others-feedback-${logo.id}`} className="text-sm font-medium">
                    5. Did anyone else give you feedback on this logo? What did they say?
                  </Label>
                  <Textarea 
                    id={`others-feedback-${logo.id}`}
                    name={`others-feedback-${logo.id}`}
                    placeholder="Enter feedback from others"
                    className="mt-1"
                  />
                </div>
                
                {/* Question 6: Retain Elements */}
                <div>
                  <p className="text-sm font-medium mb-2">
                    6. Would you like us to retain any part of this design for future versions?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {[
                      { id: "style", label: "Design Style", icon: <PenTool className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "color", label: "Color Palette", icon: <Palette className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "typography", label: "Typography", icon: <Type className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "symbol", label: "Symbol", icon: <Hash className="h-4 w-4 mr-1.5 text-gray-500" /> },
                      { id: "fresh", label: "No, start fresh", icon: <XSquare className="h-4 w-4 mr-1.5 text-gray-500" /> }
                    ].map(item => (
                      <div key={`${logo.id}-retain-${item.id}`} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`${logo.id}-retain-${item.id}`}
                          name={`${logo.id}-retain-${item.id}`}
                        />
                        <Label 
                          htmlFor={`${logo.id}-retain-${item.id}`}
                          className="flex items-center text-sm font-normal"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-2">
                    <Label htmlFor={`${logo.id}-retain-other`} className="text-sm font-normal">Other:</Label>
                    <Input 
                      id={`${logo.id}-retain-other`}
                      name={`${logo.id}-retain-other`}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

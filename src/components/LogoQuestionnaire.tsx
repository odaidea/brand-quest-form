import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LogoStyles } from "./LogoStyles";
import { ColorPalette } from "./ColorPalette";
import { PreviousLogos } from "./PreviousLogos";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send, ChevronDown, ChevronUp, Check } from "lucide-react";

// Define service tiers with their descriptions and pricing
const SERVICE_TIERS = [
  {
    id: "logo-only",
    name: "Logo Only Package",
    description: "Professional logo design in all requested file formats",
    price: 500
  },
  {
    id: "logo-marketing",
    name: "Logo + Marketing Items",
    description: "Logo design plus selected marketing materials like business cards, letterhead, and social media assets",
    price: 1200
  },
  {
    id: "brand-identity",
    name: "Complete Brand Identity",
    description: "Comprehensive brand identity system including logo, style guide, marketing materials, and brand strategy documentation",
    price: 2500
  }
];

export function LogoQuestionnaire() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("company");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Company & Vision
    businessName: "",
    industry: "",
    businessDescription: "",
    logoMessage: "",
    targetAudience: "",

    // Section 2: Design Preferences
    conceptDescription: "",
    logoStyle: "",
    logoType: "",
    colorPreferences: [] as string[],
    logoInspiration: "",

    // Section 3: History and Feedback
    previousLogoFeedback: "",
    partnerFeedback: "",
    retainElements: [] as string[],

    // Section 4: Practical Use
    logoUseLocations: [] as string[],
    fileFormats: [] as string[],

    // Section 5: Budget & Timeline
    serviceTier: "",
    deadline: "",
    termsAgreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const array = prev[name as keyof typeof prev] as string[];
      
      if (checked) {
        return { ...prev, [name]: [...array, value] };
      } else {
        return { ...prev, [name]: array.filter(item => item !== value) };
      }
    });
  };

  const handleBooleanChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file attachments - in a real app, you'd process these files
    console.log("File selected:", e.target.files);
    toast({
      title: "File attached",
      description: "Your concept image has been attached.",
    });
  };

  const nextTab = (current: string) => {
    const tabs = ["company", "design", "history", "practical", "budget"];
    const currentIndex = tabs.indexOf(current);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
      window.scrollTo(0, 0);
    }
  };

  const prevTab = (current: string) => {
    const tabs = ["company", "design", "history", "practical", "budget"];
    const currentIndex = tabs.indexOf(current);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real application, you would send this data to your email service
      console.log("Form data to be sent:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Questionnaire submitted!",
        description: "Thank you for your submission. We will review your requirements.",
      });
      
      // Would typically redirect or clear form here
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your questionnaire. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get the selected service tier details
  const selectedTier = SERVICE_TIERS.find(tier => tier.id === formData.serviceTier);

  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Logo Design Questionnaire</h1>
        <p className="text-gray-600">
          Help us understand your brand better so we can create the perfect logo for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="practical">Usage</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
          </TabsList>

          {/* Section 1: Company & Vision */}
          <TabsContent value="company">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Company & Vision</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name*</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Your company name"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry/Niche*</Label>
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="E.g. Coffee Shop, Tech Startup, Healthcare"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="businessDescription">What does your business do?*</Label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    placeholder="Briefly describe your products/services and what sets you apart"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="logoMessage">What message should the logo communicate?*</Label>
                  <Textarea
                    id="logoMessage"
                    name="logoMessage"
                    placeholder="E.g. Reliability, Innovation, Luxury"
                    value={formData.logoMessage}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="targetAudience">Who is your target audience?*</Label>
                  <Textarea
                    id="targetAudience"
                    name="targetAudience"
                    placeholder="Age range, demographics, interests, etc."
                    value={formData.targetAudience}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button 
                    type="button" 
                    onClick={() => nextTab("company")}
                    className="bg-brand-purple hover:bg-brand-darkPurple"
                  >
                    Next
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Section 2: Design Preferences */}
          <TabsContent value="design">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Design Preferences</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="conceptDescription">Do you have a specific concept in mind?</Label>
                  <Textarea
                    id="conceptDescription"
                    name="conceptDescription"
                    placeholder="Describe any concepts or ideas you already have"
                    value={formData.conceptDescription}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <div className="mt-2">
                    <Label 
                      htmlFor="conceptImage" 
                      className="flex items-center cursor-pointer p-2 border border-dashed rounded-md border-gray-300 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <span>Attach concept image (optional)</span>
                    </Label>
                    <Input
                      id="conceptImage"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">Preferred Style</Label>
                  <LogoStyles />
                </div>

                <div>
                  <Label htmlFor="logoType">Do you want text only, icon only, or a combination?*</Label>
                  <Select 
                    name="logoType"
                    value={formData.logoType} 
                    onValueChange={(value) => handleSelectChange("logoType", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select logo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-only">Text Only (Wordmark)</SelectItem>
                      <SelectItem value="icon-only">Icon Only</SelectItem>
                      <SelectItem value="combination">Combination (Text & Icon)</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-3 block">Colors you like (select multiple)</Label>
                  <div className="mt-1">
                    <ColorPalette />
                  </div>
                </div>

                <div>
                  <Label htmlFor="logoInspiration">Logos you admire (and why)</Label>
                  <Textarea
                    id="logoInspiration"
                    name="logoInspiration"
                    placeholder="List examples of logos you like and explain why they appeal to you"
                    value={formData.logoInspiration}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => prevTab("design")}
                  >
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => nextTab("design")}
                    className="bg-brand-purple hover:bg-brand-darkPurple"
                  >
                    Next
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Section 3: History and Feedback */}
          <TabsContent value="history">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Previous Logos & Feedback</h2>
              <div className="space-y-6">
                <div className="mb-6">
                  <Label className="mb-3 block">Previous Logos</Label>
                  <PreviousLogos />
                </div>

                <div>
                  <Label htmlFor="previousLogoFeedback">What didn't you like about previous logos?</Label>
                  <Textarea
                    id="previousLogoFeedback"
                    name="previousLogoFeedback"
                    placeholder="Specific aspects you disliked about previous designs"
                    value={formData.previousLogoFeedback}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="partnerFeedback">What feedback did your partners give?</Label>
                  <Textarea
                    id="partnerFeedback"
                    name="partnerFeedback"
                    placeholder="Feedback from partners, team members, stakeholders, etc."
                    value={formData.partnerFeedback}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => prevTab("history")}
                  >
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => nextTab("history")}
                    className="bg-brand-purple hover:bg-brand-darkPurple"
                  >
                    Next
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Section 4: Practical Use */}
          <TabsContent value="practical">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Practical Usage</h2>
              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Where will the logo be used?* (select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {["Website", "Social Media", "Business Cards", "Signage", 
                      "Packaging", "Merchandise", "Print Ads", "Digital Ads"]
                      .map(location => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`location-${location}`}
                            checked={formData.logoUseLocations.includes(location)}
                            onCheckedChange={(checked) => {
                              handleCheckboxChange("logoUseLocations", location, checked === true);
                            }}
                          />
                          <Label 
                            htmlFor={`location-${location}`}
                            className="text-sm font-normal"
                          >
                            {location}
                          </Label>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">File formats needed* (select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {["PNG", "JPG", "SVG", "PDF", "AI", "EPS", "PSD"]
                      .map(format => (
                        <div key={format} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`format-${format}`}
                            checked={formData.fileFormats.includes(format)}
                            onCheckedChange={(checked) => {
                              handleCheckboxChange("fileFormats", format, checked === true);
                            }}
                          />
                          <Label 
                            htmlFor={`format-${format}`}
                            className="text-sm font-normal"
                          >
                            {format}
                          </Label>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => prevTab("practical")}
                  >
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => nextTab("practical")}
                    className="bg-brand-purple hover:bg-brand-darkPurple"
                  >
                    Next
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Section 5: Budget & Timeline */}
          <TabsContent value="budget">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Budget & Timeline</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="serviceTier" className="text-base font-medium mb-3 block">
                    Service Package*
                  </Label>
                  <RadioGroup 
                    value={formData.serviceTier}
                    onValueChange={(value) => handleSelectChange("serviceTier", value)}
                    className="grid gap-4 pt-2"
                  >
                    {SERVICE_TIERS.map((tier) => (
                      <div key={tier.id} className={`flex flex-col p-4 border rounded-lg transition-all ${formData.serviceTier === tier.id ? "border-brand-purple bg-brand-lightPurple/10" : "border-gray-200"}`}>
                        <div className="flex items-start">
                          <div className="flex items-center h-5 mt-1">
                            <RadioGroupItem value={tier.id} id={tier.id} />
                          </div>
                          <div className="ml-3 text-sm">
                            <Label htmlFor={tier.id} className="font-medium text-lg cursor-pointer">
                              {tier.name}
                              <span className="ml-2 text-brand-purple font-bold">${tier.price}</span>
                            </Label>
                            <p className="text-gray-500 mt-1">{tier.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="deadline">Deadline for Final Logo*</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="pt-4 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-3">Design Engagement Terms</h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p>
                        To begin your logo design project, we will first align on expectations and the overall creative direction. 
                        As someone already familiar with the quality and standard of my work, you can expect a collaborative process 
                        designed to ensure a result that meets your vision.
                      </p>
                      <p>
                        You will receive up to five rounds of revisions, allowing room for refinement and feedback at each stage of the design process.
                      </p>
                      <p>
                        To initiate the project, a 50% advance payment will be required. This serves as a mutual commitment to the process and 
                        ensures dedicated time and focus on your project. Please note that no draft designs can be shared before this initial payment is received.
                      </p>
                      <div className="flex items-center space-x-2 pt-3">
                        <Checkbox 
                          id="termsAgreement"
                          checked={formData.termsAgreement}
                          onCheckedChange={(checked) => {
                            handleBooleanChange("termsAgreement", checked === true);
                          }}
                          required
                        />
                        <Label 
                          htmlFor="termsAgreement"
                          className="text-sm font-medium"
                        >
                          I agree to these design engagement terms*
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => prevTab("budget")}
                    >
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-brand-purple hover:bg-brand-darkPurple"
                      disabled={loading || !formData.termsAgreement}
                    >
                      {loading ? "Submitting..." : "Submit Questionnaire"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
}

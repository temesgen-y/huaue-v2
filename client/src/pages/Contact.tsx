import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Building, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { telegramBot } from "../../../telegram/telegramBot";

interface ContactForm {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification via Telegram bot
      await telegramBot.sendContactFormNotification(formData);

      toast({
        title: "Message Sent Successfully",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Industrial Zone", "Kombolcha", "Ethiopia"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["++251 933 551 2345", "Fax: +251 91 123 4567"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@huayueplastics.com", "sales@huayueplastics.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl corporate-gray max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or partnership
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="corporate-gray">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.796794516847!2d39.7299197!3d11.080794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16477602dbf9ad9b%3A0xcfbc25bc4fad07eb!2sKombolcha%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1625097600000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Huayue Plastics Location - Kombolcha, Ethiopia"
                  data-testid="location-map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="mt-2"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="mt-2"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="mt-2"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger
                      className="mt-2"
                      data-testid="select-subject"
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="quote">Request Quote</SelectItem>
                      <SelectItem value="products">
                        Product Information
                      </SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunity
                      </SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Please describe your inquiry in detail..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="mt-2"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Global Presence Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Production Plant</h3>
                  <p className="text-gray-600">Kombolicha Industrial Zone</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Distribution Center</h3>
                  <p className="text-gray-600">Addis Ababa Hub</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                  <p className="text-gray-700">Response within 24 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                  <p className="text-gray-700">Dedicated account manager assignment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                  <p className="text-gray-700">Custom quote preparation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                  <p className="text-gray-700">Technical consultation available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4 corporate-blue">
              Sales Inquiries
            </h3>
            <p className="corporate-gray mb-4">
              For product information and pricing
            </p>
            <p className="font-semibold">sales@huayueplastics.com</p>
            <p className="corporate-gray">+251 933 551 2345</p>
          </Card>

          <Card className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4 corporate-blue">
              Technical Support
            </h3>
            <p className="corporate-gray mb-4">
              For technical assistance and guidance
            </p>
            <p className="font-semibold">support@huayueplastics.com</p>
            <p className="corporate-gray">+251 91 123 4567</p>
          </Card>

          <Card className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4 corporate-blue">
              Partnership
            </h3>
            <p className="corporate-gray mb-4">
              For business partnerships and collaborations
            </p>
            <p className="font-semibold">partners@huayueplastics.com</p>
            <p className="corporate-gray">+251 933 551 2345</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

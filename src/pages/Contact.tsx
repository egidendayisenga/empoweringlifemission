import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoChild3 from "@/assets/photo-child-3.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kigali, Rwanda", "KG 123 Street, Gasabo District"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+250 123 456 789", "+250 987 654 321"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elm-rwanda.org", "contact@elm-rwanda.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${photoChild3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-background/90">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-8 pb-6 text-center">
                  <info.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our programs, want to volunteer, or interested in partnering with us? Fill out the
                form and we'll get back to you as soon as possible.
              </p>

              <Card className="border-none shadow-xl">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our doors are always open. Drop by our office in Kigali or schedule an appointment to meet with our
                team.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.58077978903!2d29.999485!3d-1.9536328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe732ffb8e42e7f12!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1647284920000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ELM Office Location"
                />
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Stay Connected</h3>
                  <p className="text-muted-foreground mb-4">
                    Follow us on social media to stay updated on our programs, events, and impact stories from the
                    communities we serve.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;

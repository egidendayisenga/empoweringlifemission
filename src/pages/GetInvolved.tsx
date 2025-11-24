import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Users, Handshake, Building, Heart, Clock, CheckCircle, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoChild5 from "@/assets/photo-child-5.jpg";

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  const opportunities = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers making a difference in communities",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate on programs and initiatives that create lasting impact",
    },
    {
      icon: Building,
      title: "Corporate Partnership",
      description: "Engage your organization in meaningful community development",
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our programs through financial contributions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${photoChild5})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-4 animate-fade-in">Get Involved</h1>
          <p className="text-xl text-background/90">Join us in creating positive change in communities</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ways to Make a Difference</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you have time, skills, or resources to share, there are many ways to support our mission and
              contribute to community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <opportunity.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{opportunity.title}</h3>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Volunteer Registration</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to express your interest in volunteering with ELM
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+250 123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest *</Label>
                  <Input
                    id="interest"
                    placeholder="e.g., Education, Health, Community Outreach"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your skills, experience, and why you want to volunteer with us..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We welcome partnerships with organizations, businesses, and institutions that share our vision for
              community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Corporate Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Engage your employees in community service, sponsor programs, or provide in-kind support for our
                  initiatives.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us at: <span className="text-primary font-medium">partnerships@elm-rwanda.org</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Institutional Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Partner with us on research, program development, or capacity building initiatives that strengthen
                  our collective impact.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us at: <span className="text-primary font-medium">partnerships@elm-rwanda.org</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-muted-foreground">Find the perfect way to contribute your skills and time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Teaching Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">Support our education programs by helping students with homework and tutoring.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Time: 4-8 hours/week
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Skills: Teaching, patience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Health Educator</h3>
                <p className="text-sm text-muted-foreground mb-4">Help deliver health education workshops in communities.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Time: Flexible schedule
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Skills: Healthcare background
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Skills Trainer</h3>
                <p className="text-sm text-muted-foreground mb-4">Teach vocational skills like tailoring, carpentry, or business.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Time: 6-12 hours/week
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Skills: Vocational expertise
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Event Coordinator</h3>
                <p className="text-sm text-muted-foreground mb-4">Help organize community events and fundraising activities.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Time: Project-based
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Skills: Organization, planning
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Mentor</h3>
                <p className="text-sm text-muted-foreground mb-4">Provide one-on-one mentorship for youth and program participants.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Time: 2-4 hours/week
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Skills: Listening, guidance
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Handshake className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Administrative Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Assist with office tasks, data entry, and program coordination.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Time: Flexible hours
                  </p>
                  <p className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                    Skills: Computer literacy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GetInvolved;

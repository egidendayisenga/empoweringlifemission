import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Heart, GraduationCap, Users, CheckCircle, TrendingUp, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoChild6 from "@/assets/photo-child-6.jpg";

const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  const amounts = [25, 50, 100, 250, 500];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "$50 provides school supplies for one student for a year",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "$100 covers health screenings for 10 community members",
    },
    {
      icon: Users,
      title: "Skills Training",
      description: "$250 sponsors vocational training for one person",
    },
    {
      icon: CheckCircle,
      title: "General Support",
      description: "Your donation supports all our programs where need is greatest",
    },
  ];

  const handleDonate = () => {
    toast({
      title: "Thank You!",
      description: `Your ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${selectedAmount} will make a real difference.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${photoChild6})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-4 animate-fade-in">Make a Donation</h1>
          <p className="text-xl text-background/90">Every contribution creates lasting change in communities</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Your Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your generous donation directly supports our programs and helps us continue empowering communities across
              Rwanda. See how your contribution makes a difference:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6 pb-6 text-center">
                  <area.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Donation</h2>
                <p className="text-muted-foreground">Select a donation amount and frequency</p>
              </div>

              <div className="flex justify-center gap-4 mb-8">
                <Button
                  variant={donationType === "one-time" ? "default" : "outline"}
                  onClick={() => setDonationType("one-time")}
                  className={donationType === "one-time" ? "bg-primary text-primary-foreground" : ""}
                >
                  One-Time
                </Button>
                <Button
                  variant={donationType === "monthly" ? "default" : "outline"}
                  onClick={() => setDonationType("monthly")}
                  className={donationType === "monthly" ? "bg-primary text-primary-foreground" : ""}
                >
                  Monthly
                </Button>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => setSelectedAmount(amount)}
                    className={`h-20 text-lg font-semibold ${
                      selectedAmount === amount ? "bg-primary text-primary-foreground border-primary" : ""
                    }`}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center">
                <p className="text-2xl font-bold text-foreground mb-2">
                  {donationType === "monthly" ? "Monthly Donation" : "One-Time Donation"}
                </p>
                <p className="text-4xl font-bold text-primary">${selectedAmount}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    100% of your donation goes directly to our programs and community initiatives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    All donations are tax-deductible and you'll receive a receipt for your records
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    Regular updates on how your contribution is making an impact in communities
                  </p>
                </div>
              </div>

              <Button
                onClick={handleDonate}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
              >
                Donate ${selectedAmount} {donationType === "monthly" ? "Monthly" : "Now"}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure payment processing. Your information is protected and encrypted.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Other Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Bank Transfer</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer to donate via bank transfer? Contact us for our banking details.
                </p>
                <p className="text-sm text-primary font-medium">finance@elm-rwanda.org</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">In-Kind Donations</h3>
                <p className="text-muted-foreground mb-4">
                  We also accept donations of supplies, equipment, and services. Get in touch to learn more.
                </p>
                <p className="text-sm text-primary font-medium">donations@elm-rwanda.org</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Donate to ELM?</h2>
            <p className="text-lg text-muted-foreground">Your trust matters to us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">100% Direct Impact</h3>
                <p className="text-muted-foreground">Every dollar goes directly to programs. Administrative costs covered by grants.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Full Transparency</h3>
                <p className="text-muted-foreground">Detailed reports on how your donation is used, published quarterly.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Proven Results</h3>
                <p className="text-muted-foreground">92% program completion rate with measurable community outcomes.</p>
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

export default Donate;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Users, Target, CheckCircle, TrendingUp, Stethoscope, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoIndoor from "@/assets/photo-indoor.jpg";
import photoGroup2 from "@/assets/photo-group-2.jpg";
import photoChild4 from "@/assets/photo-child-4.jpg";

const CommunityHealth = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${photoIndoor})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30">
            <Heart className="w-5 h-5 text-secondary mr-2" />
            <span className="text-sm font-semibold text-secondary">Health Program</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            Community Health Support
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Ensuring access to quality healthcare and promoting wellness in every community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Support This Program
                <Heart className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="bg-background/90 backdrop-blur-md border-2 hover:bg-background font-semibold px-8 hover:scale-105 transition-all">
                Volunteer With Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Program Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Community Health Support program provides essential healthcare services to underserved communities across Rwanda. We focus on preventive care, health education, and ensuring access to medical services for families who cannot afford them.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From regular health screenings and vaccinations to maternal health support and emergency medical assistance, we work to improve the overall health and wellbeing of communities.
              </p>
              <p className="text-lg text-muted-foreground">
                Since our inception, we've conducted over 10,000 health screenings, provided vaccinations to thousands of children, and established health education programs reaching entire communities.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={photoGroup2} alt="Health program" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-4xl font-bold text-secondary mb-2">10,000+</p>
                <p className="text-muted-foreground">Health Screenings Conducted</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
                <p className="text-muted-foreground">Families Receiving Care</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-4xl font-bold text-secondary mb-2">25+</p>
                <p className="text-muted-foreground">Health Workers Trained</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Health Services We Provide</h2>
            <p className="text-lg text-muted-foreground">Comprehensive healthcare for communities in need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Regular Health Screenings</h3>
                    <p className="text-muted-foreground">Free health checkups, blood pressure monitoring, diabetes screening, and general wellness assessments.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Vaccination Programs</h3>
                    <p className="text-muted-foreground">Immunization drives ensuring children and adults receive essential vaccines to prevent diseases.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Maternal & Child Health</h3>
                    <p className="text-muted-foreground">Prenatal care, safe delivery support, postnatal checkups, and child nutrition programs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Health Education Workshops</h3>
                    <p className="text-muted-foreground">Community workshops on hygiene, nutrition, disease prevention, and healthy living practices.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Emergency Medical Support</h3>
                    <p className="text-muted-foreground">Financial assistance for emergency medical treatments and hospital care for families in crisis.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Medicine Distribution</h3>
                    <p className="text-muted-foreground">Providing essential medications and medical supplies to those who cannot afford them.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Impact Stories</h2>
            <p className="text-lg text-muted-foreground">Lives saved and communities transformed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoChild4} alt="Health impact" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">A Mother's Gratitude</h3>
                <p className="text-muted-foreground mb-4">
                  When Esperance was pregnant with her third child, complications arose that she couldn't afford to treat. Our maternal health program provided the care she needed, ensuring a safe delivery.
                </p>
                <p className="text-secondary font-semibold">
                  "ELM saved both my life and my baby's life. I will forever be grateful."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoGroup2} alt="Community health" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Community-Wide Transformation</h3>
                <p className="text-muted-foreground mb-4">
                  In Nyarugenge, our health education workshops and regular screenings have reduced preventable diseases by 60%. The community now has the knowledge and resources to maintain good health.
                </p>
                <p className="text-secondary font-semibold">
                  "Our village is healthier and stronger thanks to ELM's continuous support and education."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Support Community Health</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your contribution saves lives. $30 can provide essential medications for a family. $100 covers health screenings for 20 people. $500 funds a health education workshop. Every donation makes healthcare accessible to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="font-semibold px-10 hover:scale-105 transition-all">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CommunityHealth;

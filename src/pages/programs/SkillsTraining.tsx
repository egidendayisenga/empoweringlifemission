import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, CheckCircle, Briefcase, DollarSign, Heart, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoGroup2 from "@/assets/photo-group-2.jpg";
import photoChild5 from "@/assets/photo-child-5.jpg";
import photoChild6 from "@/assets/photo-child-6.jpg";

const SkillsTraining = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${photoGroup2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
            <TrendingUp className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">Skills Development Program</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            Skills Training for Women & Youth
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Building sustainable livelihoods through vocational training and entrepreneurship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
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
                Our Skills Training program empowers women and youth with practical vocational skills and entrepreneurship training, enabling them to create sustainable livelihoods and achieve economic independence.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We offer comprehensive training in tailoring, handicrafts, agriculture, digital skills, and small business management. Each program is designed to meet market demands and create real employment opportunities.
              </p>
              <p className="text-lg text-muted-foreground">
                With an 85% employment rate among our graduates and over 800 individuals trained, we're breaking the cycle of poverty through skills and opportunity.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={photoChild5} alt="Skills training" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">800+</p>
                <p className="text-muted-foreground">Individuals Trained</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-4xl font-bold text-secondary mb-2">85%</p>
                <p className="text-muted-foreground">Employment Rate</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-muted-foreground">Businesses Started</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Training Programs We Offer</h2>
            <p className="text-lg text-muted-foreground">Market-relevant skills for sustainable employment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Tailoring & Fashion Design</h3>
                    <p className="text-muted-foreground">6-month intensive training in garment making, pattern design, and fashion entrepreneurship with starter kits provided.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Handicrafts & Artisan Skills</h3>
                    <p className="text-muted-foreground">Training in basket weaving, jewelry making, pottery, and other crafts with market linkages to sell products.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Agricultural Training</h3>
                    <p className="text-muted-foreground">Modern farming techniques, crop management, livestock rearing, and agribusiness development.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Digital Skills & Technology</h3>
                    <p className="text-muted-foreground">Computer literacy, digital marketing, social media management, and online business skills.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Entrepreneurship Training</h3>
                    <p className="text-muted-foreground">Business planning, financial management, marketing, and customer service for aspiring entrepreneurs.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Microfinance & Business Support</h3>
                    <p className="text-muted-foreground">Access to small business loans, mentorship, and ongoing support for program graduates.</p>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">From training to thriving businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoChild6} alt="Success story" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Grace's Tailoring Business</h3>
                <p className="text-muted-foreground mb-4">
                  After completing our 6-month tailoring program, Grace started her own business. Today, she employs three other women and supports her family comfortably through her earnings.
                </p>
                <p className="text-primary font-semibold">
                  "ELM didn't just teach me to sew, they taught me to dream big and turn those dreams into reality."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoGroup2} alt="Group success" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">A Cooperative of Success</h3>
                <p className="text-muted-foreground mb-4">
                  Fifteen women from our handicrafts program formed a cooperative, pooling their skills and resources. They now export their products internationally and have become role models in their community.
                </p>
                <p className="text-primary font-semibold">
                  "Together, we're stronger. ELM gave us skills, but we built something amazing as a team."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Invest in Economic Empowerment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your support creates opportunities. $150 covers training materials for one person. $500 provides a full course with starter tools. $2,000 establishes a microfinance fund for graduates. Every donation creates sustainable livelihoods and transforms communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Make a Donation
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

export default SkillsTraining;

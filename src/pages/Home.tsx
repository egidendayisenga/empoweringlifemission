import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, GraduationCap, HandHeart, TrendingUp, Building, Quote, CheckCircle, ArrowRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import photoChild1 from "@/assets/photo-child-1.jpg";
import photoChild2 from "@/assets/photo-child-2.jpg";
import photoGroup1 from "@/assets/photo-group-1.jpg";
import photoGroup2 from "@/assets/photo-group-2.jpg";
import photoChild3 from "@/assets/photo-child-3.jpg";
import photoChild4 from "@/assets/photo-child-4.jpg";
import photoIndoor from "@/assets/photo-indoor.jpg";

const Home = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  const isStatsVisible = useIntersectionObserver(statsRef, { threshold: 0.3 });
  
  const count1 = useCountUp(50, 2000, isStatsVisible);
  const count2 = useCountUp(30, 2000, isStatsVisible);
  const count3 = useCountUp(100, 2000, isStatsVisible);
  const count4 = useCountUp(15, 2000, isStatsVisible);

  const stats = [
    { icon: Users, value: count1, label: "Families Supported", suffix: "+" },
    { icon: GraduationCap, value: count2, label: "Students Educated", suffix: "+" },
    { icon: Heart, value: count3, label: "Lives Impacted", suffix: "+" },
    { icon: Building, value: count4, label: "Programs Launched", suffix: "+" },
  ];

  const programs = [
    {
      title: "Education Empowerment",
      description: "Providing quality education and learning resources to underserved communities.",
      image: photoChild2,
      icon: GraduationCap,
      link: "/programs/education",
    },
    {
      title: "Community Health",
      description: "Healthcare access, nutrition programs, and health education initiatives.",
      image: photoIndoor,
      icon: Heart,
      link: "/programs/health",
    },
    {
      title: "Skills Training",
      description: "Vocational training for women and youth to build sustainable livelihoods.",
      image: photoGroup2,
      icon: TrendingUp,
      link: "/programs/skills",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const images = [photoChild2, "https://images.pexels.com/photos/14456851/pexels-photo-14456851.jpeg", "https://images.pexels.com/photos/18559733/pexels-photo-18559733.jpeg","https://images.pexels.com/photos/29439475/pexels-photo-29439475.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out ${currentImage === idx ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-36 mt-5">
      <div className="inline-flex items-center mb-6 px-8 py-3 bg-primary/25 backdrop-blur-md rounded-full border border-primary/40 animate-fade-in space-x-2">
        <Heart className="w-5 h-5 text-primary" />
        <p className="text-sm font-semibold text-primary tracking-wider">Making a Difference Since 2020</p>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-background mb-10 animate-slide-up leading-tight relative overflow-hidden">
        Empowering Communities,
        <br />
        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in relative z-10">
          Transforming Lives
        </span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shine pointer-events-none"></span>
      </h1>
      
      <p className="text-xl md:text-2xl lg:text-3xl text-background/95 mb-14 max-w-4xl mx-auto font-medium leading-relaxed animate-slide-up tracking-wide">
        Building hope and creating lasting change through education, health, and community development in Rwanda
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in">
        <Link to="/donate">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-lg rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,199,0,0.4)] hover:scale-110 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Donate Now</span>
            <Heart className="ml-3 relative z-10 group-hover:animate-pulse" size={22} />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Button>
        </Link>
        <Link to="/programs">
          <Button
            size="lg"
            variant="outline"
            className="bg-background/90 backdrop-blur-md border-2 border-background hover:bg-background text-foreground font-bold px-12 py-6 text-lg rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View Our Programs</span>
            <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform" size={22} />
            <span className="absolute inset-0 bg-gradient-to-r from-background to-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Button>
        </Link>
      </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in">
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-background/20">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-sm text-background/90 font-medium">Families Supported</p>
            </div>
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-background/20">
              <p className="text-4xl font-bold text-secondary mb-2">2,500+</p>
              <p className="text-sm text-background/90 font-medium">Students Educated</p>
            </div>
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-background/20">
              <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-sm text-background/90 font-medium">Lives Impacted</p>
            </div>
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-background/20">
              <p className="text-4xl font-bold text-secondary mb-2">15+</p>
              <p className="text-sm text-background/90 font-medium">Active Programs</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-background/50 rounded-full" />
          </div>
        </div>
      </section>

<section className="py-20 px-4 relative bg-gradient-to-br from-primary/5 to-secondary/5">
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16 animate-slide-up">
      <h2 className="text-4xl font-bold text-foreground mb-4">Who We Are</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Empowering Life Mission (ELM) is a dedicated NGO committed to creating sustainable change in Rwandan
        communities through comprehensive development programs that address education, health, and economic
        empowerment.
      </p>
    </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{stats.map((stat, index) => (
  <Card key={index} className="text-center border-none shadow-lg animate-scale-in hover:scale-105 transition-transform duration-300 bg-background/80 backdrop-blur-sm">
    <CardContent className="pt-8 pb-6">
      <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <p className="text-4xl font-bold text-foreground mb-2">
        {stat.value.toLocaleString()}{stat.suffix}
      </p>
      <p className="text-muted-foreground">{stat.label}</p>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

<section className="py-20 px-4 relative bg-background">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-4">Our Programs</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Comprehensive initiatives designed to empower communities and create lasting positive impact
      </p>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
                <div className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-110" style={{ backgroundImage: `url(${program.image})` }} />
                <CardContent className="p-6">
                  <program.icon className="w-10 h-10 text-primary mb-4 animate-pulse" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link to={program.link}>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold group">
                      Learn More <ArrowRight className="ml-1 inline-block group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 px-4 relative overflow-hidden">
<div 
  className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
  style={{ backgroundImage: `url(${photoGroup2})` }}
/>
  <div className="absolute inset-0 bg-white opacity-15" />
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <HandHeart className="w-16 h-16 mx-auto mb-6 text-primary" />
    <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">Make a Difference Today</h2>
    <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
      Your support helps us continue our mission to empower communities and transform lives. Every contribution
      makes a real impact.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
      <Link to="/donate">
        <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform text-primary-foreground font-semibold px-8">
          Donate Now
        </Button>
      </Link>
      <Link to="/get-involved">
        <Button size="lg" variant="outline" className="font-semibold px-8 hover:scale-105 transition-transform">
          Volunteer With Us
        </Button>
      </Link>
    </div>
  </div>
</section>

<section className="py-20 px-4 relative bg-background">
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-4">Voices from Our Community</h2>
      <p className="text-lg text-muted-foreground">Real stories of transformation and hope</p>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4 animate-pulse" />
                <p className="text-muted-foreground mb-6 italic">
                  "ELM's education program changed my daughter's life. She's now in university studying medicine and dreams of serving our community."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Marie K.</p>
                    <p className="text-sm text-muted-foreground">Parent, Kigali</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-secondary mb-4 animate-pulse" />
                <p className="text-muted-foreground mb-6 italic">
                  "The skills training program gave me confidence and a sustainable income. I now support my family through my tailoring business."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Grace M.</p>
                    <p className="text-sm text-muted-foreground">Vocational Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4 animate-pulse" />
                <p className="text-muted-foreground mb-6 italic">
                  "Thanks to ELM's health programs, our community now has access to regular medical care and health education. Lives are being saved."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jean Paul R.</p>
                    <p className="text-sm text-muted-foreground">Community Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${photoGroup1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ELM?</h2>
            <p className="text-lg text-muted-foreground">Our commitment to transparent, effective community development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center hover:animate-bounce">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">100% Transparency</h3>
                <p className="text-muted-foreground">Every donation is tracked and reported with full accountability</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center hover:animate-bounce">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community-Led</h3>
                <p className="text-muted-foreground">Programs designed with and for the communities we serve</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center hover:animate-bounce">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Measurable Impact</h3>
                <p className="text-muted-foreground">Regular monitoring and evaluation of all our initiatives</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-scale-in">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center hover:animate-bounce">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sustainable Solutions</h3>
                <p className="text-muted-foreground">Building long-term capacity, not short-term fixes</p>
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

export default Home;

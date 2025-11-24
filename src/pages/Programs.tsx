import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Utensils, MessageCircle, TrendingUp, Target, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroPrograms from "@/assets/hero-programs.jpg";
import heroEducation from "@/assets/hero-education.jpg";
import programHealth from "@/assets/program-health.jpg";
import programFood from "@/assets/program-food.jpg";
import heroVolunteer from "@/assets/hero-volunteer.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Education Empowerment",
      description:
        "Providing access to quality education through school supplies, scholarships, tutoring programs, and learning centers. We believe education is the foundation for breaking the cycle of poverty.",
      icon: GraduationCap,
      image: heroEducation,
      impact: "2,500+ students supported annually",
    },
    {
      title: "Community Health Support",
      description:
        "Delivering essential healthcare services including health screenings, vaccinations, maternal health support, and health education workshops to improve community wellbeing.",
      icon: Heart,
      image: programHealth,
      impact: "10,000+ health screenings conducted",
    },
    {
      title: "Skills Training for Women & Youth",
      description:
        "Vocational training programs in tailoring, crafts, agriculture, and entrepreneurship to build sustainable livelihoods and economic independence.",
      icon: TrendingUp,
      image: heroPrograms,
      impact: "800+ individuals trained in vocational skills",
    },
    {
      title: "Food & Basic Needs Assistance",
      description:
        "Emergency food distribution, nutrition programs for children, and support for families facing food insecurity to ensure basic needs are met.",
      icon: Utensils,
      image: programFood,
      impact: "5,000+ families receiving regular support",
    },
    {
      title: "Community Outreach & Counseling",
      description:
        "Mental health support, family counseling, conflict resolution, and community building activities to strengthen social bonds and emotional wellbeing.",
      icon: MessageCircle,
      image: heroVolunteer,
      impact: "1,200+ counseling sessions provided",
    },
    {
      title: "Youth Leadership Development",
      description:
        "Mentorship programs, leadership training, and youth clubs to develop the next generation of community leaders and change-makers.",
      icon: Users,
      image: heroEducation,
      impact: "500+ youth participating in leadership programs",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPrograms})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-4 animate-fade-in">Our Programs</h1>
          <p className="text-xl text-background/90">
            Comprehensive initiatives creating lasting change in communities
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Creating Impact Through Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our programs are designed to address the multifaceted challenges facing communities in Rwanda. Each
              initiative is developed in partnership with local communities to ensure sustainable, culturally
              appropriate solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }}>
                  <div className="h-full bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                    <program.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="bg-primary/10 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-primary">{program.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Program Approach</h2>
          <div className="space-y-6 text-lg text-muted-foreground text-left">
            <p>
              All ELM programs follow a community-centered approach. We work closely with local leaders, families, and
              beneficiaries to identify needs, design interventions, and implement solutions that are sustainable and
              culturally appropriate.
            </p>
            <p>
              Our programs are interconnected, recognizing that addressing education without considering health and
              economic factors would be incomplete. This holistic approach ensures comprehensive support for community
              development.
            </p>
            <p>
              We measure impact through regular monitoring and evaluation, adjusting our programs based on feedback and
              results to ensure we're achieving meaningful, lasting change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Program Success Metrics</h2>
            <p className="text-lg text-muted-foreground">Measuring our impact through data and stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg text-center bg-background">
              <CardContent className="pt-8 pb-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-4xl font-bold text-primary mb-2">92%</p>
                <p className="text-sm font-semibold text-foreground mb-2">Program Completion Rate</p>
                <p className="text-xs text-muted-foreground">Participants complete their full program journey</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center bg-background">
              <CardContent className="pt-8 pb-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="text-4xl font-bold text-secondary mb-2">85%</p>
                <p className="text-sm font-semibold text-foreground mb-2">Employment Rate</p>
                <p className="text-xs text-muted-foreground">Skills training graduates find sustainable work</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center bg-background">
              <CardContent className="pt-8 pb-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm font-semibold text-foreground mb-2">Satisfaction Rate</p>
                <p className="text-xs text-muted-foreground">Beneficiaries report positive program experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Program Activities</h2>
            <p className="text-lg text-muted-foreground">Join us in our upcoming community initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Back-to-School Drive</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        February 2024
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Gasabo District
                      </span>
                    </div>
                    <p className="text-muted-foreground">Distributing school supplies and uniforms to 500 students from vulnerable families.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Community Health Fair</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        March 2024
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Kicukiro District
                      </span>
                    </div>
                    <p className="text-muted-foreground">Free health screenings, vaccinations, and health education workshops for 1,000 community members.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Women's Skills Workshop</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        April 2024
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Multiple Locations
                      </span>
                    </div>
                    <p className="text-muted-foreground">3-month intensive training in tailoring, handicrafts, and entrepreneurship for 150 women.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Youth Leadership Summit</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        May 2024
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Kigali
                      </span>
                    </div>
                    <p className="text-muted-foreground">Three-day leadership training and mentorship program for 200 young community leaders.</p>
                  </div>
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

export default Programs;

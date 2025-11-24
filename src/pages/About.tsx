import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Globe, Shield, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoGroup1 from "@/assets/photo-group-1.jpg";
import photoIndoor from "@/assets/photo-indoor.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and care for every individual we serve",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We operate with transparency and accountability in all our actions",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in our programs and services",
    },
    {
      icon: Eye,
      title: "Empowerment",
      description: "We believe in building capacity and enabling self-sufficiency",
    },
  ];

  const timeline = [
    { year: "2018", event: "ELM founded with first education program" },
    { year: "2019", event: "Launched community health initiatives" },
    { year: "2020", event: "Expanded to skills training for women" },
    { year: "2021", event: "Reached milestone of 5,000 beneficiaries" },
    { year: "2022", event: "Launched food security programs" },
    { year: "2023", event: "Opened community resource centers" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${photoGroup1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl text-background/90">Building stronger communities through sustainable development</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground text-left">
              <p>
                Empowering Life Mission (ELM) was founded in 2018 with a simple yet powerful vision: to create lasting
                change in Rwandan communities by addressing the root causes of poverty and inequality.
              </p>
              <p>
                What began as a small education initiative has grown into a comprehensive development organization
                serving thousands of families across Rwanda. We work directly with communities to identify their needs
                and develop sustainable solutions that empower people to build better futures for themselves and their
                families.
              </p>
              <p>
                Today, ELM operates multiple programs focused on education, health, skills training, and community
                development. Our approach is holistic, recognizing that true empowerment requires addressing multiple
                dimensions of wellbeing simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-ngo-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To empower vulnerable communities in Rwanda through sustainable education, health, and economic
                  development programs that foster dignity, self-reliance, and lasting positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  A Rwanda where every community has access to quality education, healthcare, and economic
                  opportunities, enabling all individuals to reach their full potential and contribute to national
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our growth and impact</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 bg-background rounded-2xl p-6 shadow-md animate-fade-in"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {item.year}
                </div>
                <p className="text-lg text-foreground font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Dedicated professionals committed to community empowerment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="w-12 h-12 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Sarah Uwera</h3>
                <p className="text-primary font-semibold mb-3">Executive Director</p>
                <p className="text-sm text-muted-foreground">15+ years in community development and public health initiatives across Rwanda</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Globe className="w-12 h-12 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Emmanuel Nkusi</h3>
                <p className="text-secondary font-semibold mb-3">Programs Director</p>
                <p className="text-sm text-muted-foreground">Expert in sustainable development with international NGO experience</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Shield className="w-12 h-12 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Grace Mukamana</h3>
                <p className="text-primary font-semibold mb-3">Finance & Operations Director</p>
                <p className="text-sm text-muted-foreground">Ensuring transparency and accountability in all our financial operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground">How we create sustainable impact in communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Community Assessment</h3>
                    <p className="text-muted-foreground">We start by listening to communities to understand their unique needs, challenges, and aspirations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Collaborative Design</h3>
                    <p className="text-muted-foreground">Programs are co-created with community members to ensure cultural relevance and local ownership.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Implementation</h3>
                    <p className="text-muted-foreground">We work alongside communities, providing resources, training, and support throughout the process.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Monitor & Adapt</h3>
                    <p className="text-muted-foreground">Continuous evaluation and feedback loops ensure programs remain effective and responsive to community needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Partnerships</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We collaborate with local and international organizations, government agencies, and community groups to maximize our impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ministry of Health", icon: Heart },
              { name: "Education Board", icon: Target },
              { name: "UN Development", icon: Globe },
              { name: "Local Partners", icon: Users },
            ].map((partner, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <partner.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{partner.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;

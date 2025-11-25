import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Target, CheckCircle, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import photoChild2 from "@/assets/photo-child-2.jpg";
import photoChild3 from "@/assets/photo-child-3.jpg";
import photoGroup1 from "@/assets/photo-group-1.jpg";

const EducationEmpowerment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${photoChild2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
            <GraduationCap className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">Education Program</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            Education Empowerment
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Breaking the cycle of poverty through quality education and learning opportunities
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
                Our Education Empowerment program is designed to provide comprehensive educational support to children and youth from underserved communities. We believe that education is the cornerstone of breaking the cycle of poverty and creating lasting change.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Through scholarships, school supplies, tutoring programs, and learning centers, we ensure that every child has access to quality education regardless of their family's economic situation.
              </p>
              <p className="text-lg text-muted-foreground">
                Since 2020, we've supported over 2,500 students annually, with a 95% school retention rate and significant improvements in academic performance.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={photoChild3} alt="Education program" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
                <p className="text-muted-foreground">Students Supported Annually</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-4xl font-bold text-secondary mb-2">95%</p>
                <p className="text-muted-foreground">School Retention Rate</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">40%</p>
                <p className="text-muted-foreground">Academic Performance Improvement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Provide</h2>
            <p className="text-lg text-muted-foreground">Comprehensive educational support services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">School Supplies & Uniforms</h3>
                    <p className="text-muted-foreground">Complete sets of school supplies, textbooks, uniforms, and learning materials for students in need.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Scholarship Programs</h3>
                    <p className="text-muted-foreground">Full and partial scholarships covering tuition, fees, and exam costs for deserving students.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">After-School Tutoring</h3>
                    <p className="text-muted-foreground">Free tutoring sessions in math, science, languages, and other subjects to improve academic performance.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Learning Centers</h3>
                    <p className="text-muted-foreground">Community learning centers with libraries, computers, and safe study spaces for students.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Mentorship Programs</h3>
                    <p className="text-muted-foreground">One-on-one mentoring connecting students with role models and educational guidance.</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Parent Engagement</h3>
                    <p className="text-muted-foreground">Workshops and support for parents to help them support their children's education.</p>
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
            <p className="text-lg text-muted-foreground">Real transformations through education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoGroup1} alt="Success story" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Marie's Journey to University</h3>
                <p className="text-muted-foreground mb-4">
                  Marie joined our program at age 12, struggling in school and facing the possibility of dropping out. Through our scholarship program, tutoring support, and mentorship, she not only completed secondary school but earned a place at university.
                </p>
                <p className="text-primary font-semibold">
                  "ELM gave me hope when I had none. Now I'm studying to become a teacher to help others like me."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img src={photoChild2} alt="Success story" className="w-full h-64 object-cover rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">A Whole Community Transformed</h3>
                <p className="text-muted-foreground mb-4">
                  In Gasabo District, our learning center has become a hub of educational excellence. What started with 50 students now serves 300, with exam pass rates improving from 60% to 92% in just three years.
                </p>
                <p className="text-primary font-semibold">
                  "The learning center changed our community. Children who were falling behind are now among the top performers."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Support Education Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your donation can change a child's life. For just $50, you can provide a full year of school supplies. For $200, you can cover a semester's tuition. Every contribution makes education accessible.
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

export default EducationEmpowerment;

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ELM
            </h3>
            <p className="text-background/80 text-sm mb-4">
              Empowering communities through education, health, and sustainable development programs in Rwanda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-background/80 hover:text-primary transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-background/80 hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs/education" className="text-background/80 hover:text-primary transition-colors">
                  Education Empowerment
                </Link>
              </li>
              <li>
                <Link to="/programs/health" className="text-background/80 hover:text-primary transition-colors">
                  Community Health
                </Link>
              </li>
              <li>
                <Link to="/programs/skills" className="text-background/80 hover:text-primary transition-colors">
                  Skills Training
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-background/80 hover:text-primary transition-colors">
                  View All Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-background/80">Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+250788782553" className="text-background/80 hover:text-primary transition-colors">
                  +250 788 782 553
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@elm-rwanda.org"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  info@elm-rwanda.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Empowering Life Mission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

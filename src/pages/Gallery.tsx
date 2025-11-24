import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import photoChild1 from "@/assets/photo-child-1.jpg";
import photoChild2 from "@/assets/photo-child-2.jpg";
import photoChild3 from "@/assets/photo-child-3.jpg";
import photoChild4 from "@/assets/photo-child-4.jpg";
import photoChild5 from "@/assets/photo-child-5.jpg";
import photoChild6 from "@/assets/photo-child-6.jpg";
import photoGroup1 from "@/assets/photo-group-1.jpg";
import photoGroup2 from "@/assets/photo-group-2.jpg";
import photoIndoor from "@/assets/photo-indoor.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: photoChild1, alt: "Child empowerment program", category: "Education" },
    { src: photoChild2, alt: "Student in education program", category: "Education" },
    { src: photoChild3, alt: "Youth in community program", category: "Community" },
    { src: photoChild4, alt: "Education initiative", category: "Education" },
    { src: photoGroup1, alt: "Community gathering and support", category: "Community" },
    { src: photoGroup2, alt: "Group activities and learning", category: "Community" },
    { src: photoIndoor, alt: "Indoor learning session", category: "Education" },
    { src: photoChild5, alt: "Child development program", category: "Education" },
    { src: photoChild6, alt: "Youth empowerment", category: "Community" },
    { src: "https://images.pexels.com/photos/14456851/pexels-photo-14456851.jpeg", alt: "External community photo 1", category: "Community" },
    { src: "https://images.pexels.com/photos/18559733/pexels-photo-18559733.jpeg", alt: "External community photo 2", category: "Community" },
    { src: "https://images.pexels.com/photos/29439475/pexels-photo-29439475.jpeg", alt: "External community photo 3", category: "Community" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${photoGroup1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-background mb-6 animate-fade-in">
            Our Impact Gallery
          </h1>
          <p className="text-xl md:text-2xl text-background/95 animate-slide-up">
            Witness the transformation and joy we bring to communities across Rwanda
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real moments capturing the lives we've touched and the communities we've empowered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-background font-semibold text-lg">{image.alt}</p>
                    <p className="text-background/80 text-sm mt-1">{image.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;

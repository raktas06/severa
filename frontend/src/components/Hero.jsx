import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Leaf, TrendingUp, Calculator } from 'lucide-react';

export const Hero = () => {
  const features = [
    { icon: <Leaf className="w-5 h-5" />, text: 'ESG Raporlama' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Finans Danışmanlığı' },
    { icon: <Calculator className="w-5 h-5" />, text: 'Muhasebe Çözümleri' },
  ];

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tight">
              SEVERA
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              ESG Raporlama,
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              Finans ve Muhasebe Danışmanlığı
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
            ESG raporlama, sürdürülebilir finans analizi ve kapsamlı muhasebe çözümlerinde uzman danışmanlık hizmetleri ile işletmenizi sorumlu bir şekilde ileriye taşıyoruz.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-5 py-3 bg-background/60 backdrop-blur-sm rounded-full border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary icon-bounce">{feature.icon}</div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-elegant btn-hover-lift group"
              onClick={handleConsultationClick}
            >
              ESG ve Finans Danışmanlığı Alın
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-muted transition-all"
              onClick={handleExploreClick}
            >
              Uzmanlığımızı Keşfedin
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

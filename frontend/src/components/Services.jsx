import React from 'react';
import { Leaf, TrendingUp, Calculator, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: 'ESG Raporlama',
      description: 'Çevresel, sosyal ve yönetişim performansınızı ölçün ve raporlayın.',
      features: [
        'Sürdürülebilirlik raporları',
        'Karbon ayak izi analizi',
        'ESG risk değerlendirmesi',
        'Paydaş engagement stratejileri'
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Finans Danışmanlığı',
      description: 'Sürdürülebilir finans stratejileri ile işinizi büyütün.',
      features: [
        'Finansal planlama ve analiz',
        'Yatırım danışmanlığı',
        'Risk yönetimi',
        'Sürdürülebilir finansman'
      ]
    },
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'Muhasebe Çözümleri',
      description: 'Kapsamlı muhasebe hizmetleri ile mali işlerinizi yönetin.',
      features: [
        'Genel muhasebe hizmetleri',
        'Mali raporlama',
        'Vergi danışmanlığı',
        'Denetim desteği'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, kapsamlı danışmanlık hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card bg-background p-8 rounded-2xl border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Detaylı Bilgi
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

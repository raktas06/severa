import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Vizyonumuz',
      description: 'Sürdürülebilir iş uygulamalarında lider bir danışmanlık firması olmak.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Misyonumuz',
      description: 'İşletmelere ESG raporlama ve finansal danışmanlıkta en yüksek kalitede hizmet sunmak.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Değerlerimiz',
      description: 'Dürüstlük, şeffaflık ve müşteri odaklılık ilkelerimizin temelidir.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Başarımız',
      description: '100+ mutlu müşteri ve sürdürülebilir iş modellerine katkı.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Hakkımızda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SEVERA, sürdürülebilir iş uygulamaları ve finansal danışmanlık konusunda uzmanlaşmış bir danışmanlık firmasıdır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="feature-card bg-background p-6 rounded-xl border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

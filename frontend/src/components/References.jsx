import React from 'react';
import { Star } from 'lucide-react';

export const References = () => {
  const references = [
    {
      company: 'TechCorp A.Ş.',
      logo: 'https://via.placeholder.com/150x60/f46925/ffffff?text=TechCorp',
      testimonial: 'SEVERA ile çalışmak, ESG raporlama süreçlerimizi kolaylaştırdı ve sürdürülebilirlik hedeflerimize ulaşmamızda büyük destek oldular.',
      author: 'Ahmet Yılmaz',
      position: 'CEO',
      rating: 5
    },
    {
      company: 'GreenEnergy Ltd.',
      logo: 'https://via.placeholder.com/150x60/2EB67D/ffffff?text=GreenEnergy',
      testimonial: 'Finansal danışmanlık hizmetleri sayesinde sürdürülebilir yatırımlarımızı optimize ettik. Profesyonel ve güvenilir bir ekip.',
      author: 'Ayşe Demir',
      position: 'CFO',
      rating: 5
    },
    {
      company: 'EcoRetail',
      logo: 'https://via.placeholder.com/150x60/f46925/ffffff?text=EcoRetail',
      testimonial: 'Muhasebe ve mali raporlama süreçlerimizde SEVERA\'nın uzmanlığı bize zaman kazandırdı ve doğru kararlar almamızı sağladı.',
      author: 'Mehmet Kaya',
      position: 'Genel Müdür',
      rating: 5
    },
    {
      company: 'Sustainable Foods',
      logo: 'https://via.placeholder.com/150x60/2EB67D/ffffff?text=SustainableFoods',
      testimonial: 'ESG raporlama konusunda aldığımız danışmanlık, paydaşlarımızla olan ilişkilerimizi güçlendirdi ve markamıza değer kattı.',
      author: 'Zeynep Öztürk',
      position: 'Sürdürülebilirlik Direktörü',
      rating: 5
    }
  ];

  const partners = [
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner1',
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner2',
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner3',
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner4',
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner5',
    'https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Partner6'
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Müşteri Referansları
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimizin başarı hikayeleri bizim en büyük motivasyonumuz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {references.map((ref, index) => (
            <div
              key={index}
              className="feature-card bg-gradient-subtle p-8 rounded-2xl border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <img src={ref.logo} alt={ref.company} className="h-8 object-contain" />
                <div className="flex items-center space-x-1">
                  {[...Array(ref.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-foreground mb-6 italic">
                "{ref.testimonial}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{ref.author}</p>
                <p className="text-sm text-muted-foreground">{ref.position}, {ref.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            İş Ortaklarımız
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-muted rounded-lg transition-transform hover:scale-105"
              >
                <img src={partner} alt={`Partner ${index + 1}`} className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

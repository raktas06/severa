import React from 'react';
import { Linkedin } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: 'Dr. Ayşe Demir',
      role: 'Kurucu & ESG Uzmanı',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '15+ yıl ESG raporlama deneyimi'
    },
    {
      name: 'Mehmet Yılmaz',
      role: 'Finans Direktörü',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Sürdürülebilir finans stratejileri uzmanı'
    },
    {
      name: 'Zeynep Kaya',
      role: 'Muhasebe Müdürü',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: '10+ yıl muhasebe ve mali raporlama'
    },
    {
      name: 'Can Öztürk',
      role: 'Danışman',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'Kurumsal sürdürülebilirlik danışmanı'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Ekibimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alanında uzman, deneyimli profesyonellerden oluşan ekibimizle tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="feature-card bg-background rounded-2xl overflow-hidden border border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <button className="text-primary hover:text-primary-hover transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

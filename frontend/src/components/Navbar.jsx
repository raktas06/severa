import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('TR');

  const navItems = [
    { label: 'Ana Sayfa', href: '#home', icon: '🏠' },
    { label: 'Hakkımızda', href: '#about', icon: '📋' },
    { label: 'Hizmetler', href: '#services', icon: '🏢' },
    { label: 'Ekip', href: '#team', icon: '👥' },
    { label: 'Referanslar', href: '#references', icon: '🎯' },
    { label: 'İletişim', href: '#contact', icon: '📞' },
  ];

  const handleLanguageToggle = () => {
    const newLang = language === 'TR' ? 'EN' : 'TR';
    setLanguage(newLang);
    alert(`Dil değiştirildi: ${newLang}\n\nÇok dilli destek yakında eklenecek!`);
  };

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors">
            SEVERA
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <Button variant="default" size="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Ücretsiz Danışmanlık
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-all"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
              <Button variant="default" size="default" className="w-full bg-gradient-primary">
                Ücretsiz Danışmanlık
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

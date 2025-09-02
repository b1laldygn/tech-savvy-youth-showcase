import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, Moon, Sun, Linkedin, Github, ExternalLink } from 'lucide-react';

const translations = {
  tr: {
    title: "Bilal Efe Doyğun",
    subtitle: "Genç Teknoloji Uzmanı",
    intro: "Merhaba! Ben siber güvenlik, Raspberry Pi projeleri ve yenilenebilir enerji teknolojileri konularında deneyimli bir gencim.",
    cybersecurity: {
      title: "Siber Güvenlik",
      description: "Ağ güvenliği, penetrasyon testleri ve güvenlik açığı analizi konularında 3 yıllık deneyim. Etik hackerlik ve güvenlik protokolleri geliştirme alanında uzmanlaşıyorum."
    },
    raspberrypi: {
      title: "Raspberry Pi Projeleri",
      description: "IoT sistemleri, ev otomasyonu ve robotik projeler geliştiriyorum. Sensör entegrasyonu, GPIO programlama ve Linux sistem yönetimi konularında deneyimliyim."
    },
    renewable: {
      title: "Yenilenebilir Enerji",
      description: "Güneş paneli sistemleri, rüzgar enerjisi ve enerji depolama çözümleri üzerinde çalışıyorum. Sürdürülebilir teknoloji projeleri geliştirmekten tutkuluyum."
    },
    projects: "Projelerim",
    contact: "İletişim",
    languageButton: "English",
    contactSection: {
      title: "Benimle İletişime Geçin",
      description: "Projelerim ve deneyimlerim hakkında daha fazla bilgi için sosyal medya hesaplarıma göz atabilirsiniz.",
      linkedin: "LinkedIn Profilim",
      github: "GitHub Hesabım"
    }
  },
  en: {
    title: "Bilal Efe Doyğun",
    subtitle: "Young Technology Expert",
    intro: "Hello! I'm a young person with experience in cybersecurity, Raspberry Pi projects, and renewable energy technologies.",
    cybersecurity: {
      title: "Cybersecurity",
      description: "3 years of experience in network security, penetration testing, and vulnerability analysis. Specializing in ethical hacking and security protocol development."
    },
    raspberrypi: {
      title: "Raspberry Pi Projects",
      description: "I develop IoT systems, home automation, and robotics projects. Experienced in sensor integration, GPIO programming, and Linux system management."
    },
    renewable: {
      title: "Renewable Energy",
      description: "Working on solar panel systems, wind energy, and energy storage solutions. Passionate about developing sustainable technology projects."
    },
    projects: "My Projects",
    contact: "Contact",
    languageButton: "Türkçe",
    contactSection: {
      title: "Get in Touch",
      description: "Check out my social media profiles for more information about my projects and experience.",
      linkedin: "LinkedIn Profile",
      github: "GitHub Account"
    }
  }
};

const Index = () => {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [isDark, setIsDark] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const t = translations[language];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleContact = () => {
    setShowContact(prev => !prev);
  };

  // Create falling leaves elements
  const fallingLeaves = Array.from({ length: 7 }, (_, i) => (
    <div key={i} className={`falling-leaves leaf-${i + 1}`} />
  ));

  return (
    <div className="min-h-screen relative bg-background overflow-hidden transition-colors duration-300">
      {/* Falling Leaves Background */}
      {fallingLeaves}
      
      {/* Language Toggle Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          onClick={toggleLanguage}
          variant="secondary"
          size="sm"
          className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all duration-300"
        >
          <Globe className="w-4 h-4 mr-2" />
          {t.languageButton}
        </Button>
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute bottom-6 left-6 z-10">
        <Button
          onClick={toggleTheme}
          variant="secondary"
          size="sm"
          className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all duration-300"
        >
          {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
          {isDark ? 'Açık Tema' : 'Koyu Tema'}
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <Card className="bg-card/90 backdrop-blur-md shadow-glow border border-primary/20 rounded-2xl p-8 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
              {t.intro}
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Cybersecurity */}
            <Card className="bg-gradient-tech/10 border-tech-primary/30 p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-tech-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-primary mb-2">{t.cybersecurity.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{t.cybersecurity.description}</p>
            </Card>

            {/* Raspberry Pi */}
            <Card className="bg-gradient-nature/10 border-nature-primary/30 p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-nature-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-nature-primary mb-2">{t.raspberrypi.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{t.raspberrypi.description}</p>
            </Card>

            {/* Renewable Energy */}
            <Card className="bg-gradient-hero/10 border-primary/30 p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{t.renewable.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{t.renewable.description}</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-white font-semibold px-8 py-3 shadow-glow"
            >
              {t.projects}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-3"
              onClick={toggleContact}
            >
              {t.contact}
            </Button>
          </div>

          {/* Contact Section */}
          {showContact && (
            <div className="mt-8 animate-fade-in">
              <Card className="bg-secondary/50 border-primary/20 p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {t.contactSection.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.contactSection.description}
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/bilalefedoygun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-4 hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/30 hover:border-blue-500/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Linkedin className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {t.contactSection.linkedin}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Card>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/bilalefedoygun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-4 hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-to-r from-gray-700/10 to-gray-800/10 border-gray-700/30 hover:border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center">
                            <Github className="w-5 h-5 text-white dark:text-gray-800" />
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {t.contactSection.github}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-800 dark:text-gray-200 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Card>
                  </a>
                </div>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Index;
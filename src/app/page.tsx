import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactCTA />
    </main>
  );
}
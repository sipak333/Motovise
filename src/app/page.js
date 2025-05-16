import Category from './components/category-section';
import HeroSection from './components/hero-section';
import { getPageContent } from './lib/wordpress';

export default async function HomePage() {
  const page = await getPageContent('/'); 

  return (
    <>
      <HeroSection />
      <Category />
    </>
  );
}

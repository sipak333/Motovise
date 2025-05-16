import Article from './components/article';
import Category from './components/category-section';
import Featured from './components/featured-section';
import HeroSection from './components/hero-section';
import Newsletter from './components/newsletter';
import Recentnews from './components/recent-news';
import TrendingNews from './components/trending-section';
import { getPageContent } from './lib/wordpress';

export default async function HomePage() {
  const page = await getPageContent('/'); 

  return (
    <>
      <HeroSection />
      <Category />
      <TrendingNews />
      <Featured />
      <Recentnews />
      <Article />
      <Newsletter />
    </>
  );
}

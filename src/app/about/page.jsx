import { getPageContent } from '@/app/lib/wordpress';

export default async function AboutPage() {
  // Use the page slug or path as defined in WordPress. Example: '/about' or 'about'
  const page = await getPageContent('about');

  if (!page) return <p>About page not found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}

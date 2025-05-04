import { getPageContent } from './lib/wordpress';

export default async function HomePage() {
  const page = await getPageContent('/'); // or 'home'

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
}

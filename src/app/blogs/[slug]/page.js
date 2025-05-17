import Image from 'next/image';
import { getPostBySlug } from '../../lib/wordpress';

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="w-full h-[400px] relative my-4 rounded-md overflow-hidden">
            <Image
              src={post.featuredImage?.node?.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority // optional, if you want to preload it
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
          <p>This is the sidebar content. You can add widgets, links, or related posts here.</p>
        </aside>
      </section>

    </>
    
  );
}

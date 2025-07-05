import Image from 'next/image';
import { getCategoryBySlug } from '../../../lib/wordpress';  // Ensure correct import path
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  // Await params to resolve its properties properly
  const { slug } = await params;
  const placeholderImage = '/images/placeholder.png';
  const imageUrl = post.featuredImage?.node?.sourceUrl || placeholderImage;
  try {
    // Fetch category data based on the slug
    const category = await getCategoryBySlug(slug);

    // Check if category data exists before rendering
    if (!category) {
      return <div className="text-center">Category not found</div>;
    }

    return (
      <>
        <section className='breadcrumb w-full text-center bg-[#EBEEF3] py-[60px] rounded-md'>
          <h1 className="text-4xl font-bold">{category.name}</h1>
          {category.description && (
            <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: category.description }} />
          )}
        </section>

        <section className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            {/* Posts List */}
            <div className="mt-8">
              <div className="space-y-4 mt-4">
                {category.posts?.nodes?.map((post) => (
                  <div key={post.slug} className="flex flex-col bg-white p-4 rounded-md border border-gray-500">
                    {post.featuredImage?.node?.sourceUrl && (
                      <div className="w-full h-[200px] relative mb-4 rounded-md overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>

                    <Link href={`/blogs/${post.slug}`} className="mt-2 text-gray-900 hover:underline">
                      Read more
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-md mt-8">
            <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
            <p>This is the sidebar content. You can add widgets, links, or related posts here.</p>
          </aside>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching category:", error);
    return <div className="text-center text-red-500">Failed to load category data. Please try again later.</div>;
  }
}

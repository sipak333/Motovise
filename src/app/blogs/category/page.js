import { getCategory } from '../../lib/wordpress';
import Link from 'next/link';

export default async function CategoriesPage() {
  const categories = await getCategory();

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">All Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/blogs${category.uri}`} className="block p-4 border rounded hover:shadow">
                {category.categoryImage && (
                  <img
                    src={category.categoryImage}
                    alt={category.name}
                    className="mb-2 w-full h-40 object-cover rounded"
                  />
                )}
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="text-sm text-gray-600">{category.count} posts</p>
              
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

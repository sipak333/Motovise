import { getAllPosts, getCategory } from '../lib/wordpress';
import BlogCard from '../components/blog-card';
import PageHeader from '../components/PageHeader';

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const categories = await getCategory();

  return (
    <>
      <PageHeader
        title="Our Blog"
        breadcrumbs={[
          { label: 'Blogs' } // No href since it's the current page
        ]}
      />

      <section className="container mx-auto px-4 py-8">
        {/* Category Navigation */}
        <nav className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.uri}
              className="text-blue-600 hover:underline font-medium"
            >
              {cat.name}
            </a>
          ))}
        </nav>

        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-6">All Posts</h1>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 grid-cols-1">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

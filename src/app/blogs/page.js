import { getAllPosts,getCategory } from '../lib/wordpress';
import BlogCard from '../components/blog-card';

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const categories = await getCategory();


  return (
    <div>
      <nav className="flex gap-6">
      {categories.map(cat => (
        <a key={cat.id} href={cat.uri}>
          {cat.name}
        </a>
      ))}
      </nav>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="grid gap-6">
      
      </div>
    </div>
  );
}

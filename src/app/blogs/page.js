import { getAllPosts } from '../lib/wordpress';
import BlogCard from '../components/blog-card';

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

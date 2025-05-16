import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="p-4 border rounded-md">
      {post.featuredImage?.node?.sourceUrl && (
        <img src={post.featuredImage.node.sourceUrl} alt="" className="mb-4" />
      )}
      <h2 className="text-xl font-semibold">
        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className="text-sm mt-2" />
    </div>
  );
}

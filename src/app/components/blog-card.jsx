import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="blog_card--container mx-auto w-full">
      <div className="blog_card flex gap-6 rounded-md border p-4 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Thumbnail */}
        <div className="blog_card--thumbnail w-[350px] h-[220px] flex-shrink-0">
          {post.featuredImage?.node?.sourceUrl && (
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>

        {/* Content */}
        <div className="blog_card--content flex-1 mt-4">
          {/* Author Info */}
          <div className="blog_card--author flex items-center space-x-2 mb-1">
            <img
              src="/images/author-thumbnail.jpg"
              alt="Author"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span className="text-black text-sm leading-snug">
              {post.author?.node?.name || 'Unknown Author'}
            </span>
          </div>

          {/* Date */}
          <div className="blog_card--date my-4">
            <span className="text-gray-400 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h4 className="blog_card--title text-lg font-semibold mb-2 leading-tight">
            <Link href={`/blogs/${post.slug}`}>
              {post.title}
            </Link>
          </h4>

          {/* Excerpt */}
          <div
            className="blog_card--excerpt text-gray-500 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      </div>
    </div>
  );
}

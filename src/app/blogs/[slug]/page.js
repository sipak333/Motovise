import Image from 'next/image';
import { getPostBySlug } from '../../lib/wordpress';

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-bold">{post.title}</h1>
        {/* Useing Next.js Image component for optimization */}
        <Image
        src={post.featuredImage?.node?.sourceUrl}
        alt={post.title}  
        width={400}
        height={200}
        className="my-4 object-cover"
        layout="responsive"
      />
      {/*       <img src={post.featuredImage?.node?.sourceUrl} alt="" className="my-4" /> before optimize */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

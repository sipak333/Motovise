"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "../lib/wordpress"; // your API function
import Link from "next/link";

export default function Recentnews() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getAllPosts();
            setPosts(data.slice(0, 4)); // 1 featured + 3 recent
        };
        fetchPosts();
    }, []);

    const featuredPost = posts[0];
    const otherPosts = posts.slice(1, 4);

    return (
        <section className="mt-20">
            <div className="flex gap-6 flex-col lg:flex-row">
                {/* Recent News Section */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-6">
                        <h2 className="text-[24px] md:text-[28px] font-semibold">Recent News</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Featured Card */}
                        
                        {featuredPost && (
                            <Link
                                href={`/blogs/${featuredPost.slug}`}
                                className="card card--feature w-full lg:w-1/2 relative rounded-md overflow-hidden"
                                style={{
                                    backgroundImage: `url('${featuredPost.featuredImage?.node?.sourceUrl || "/images/placeholder.png"}')`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="card__content bg-gradient-to-t from-[#f2f2f2] to-transparent absolute bottom-0 w-full p-4">
                                    <span className="card__author text-[#262626]">
                                        {featuredPost.author?.node?.name || "Unknown Author"} -{" "}
                                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <h3 className="card__title text-black">{featuredPost.title}</h3>
                                </div>
                            </Link>
                        )}

                        {/* 3 More Recent Posts */}
                        <div className="flex flex-col lg:w-1/2 bg-[#EBEEF3] rounded-md justify-center p-4">
                            {otherPosts.map((post, index) => (
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="trend_card flex flex-col lg:flex-row gap-4 mb-3 items-center"
                                    key={post.id || index}
                                >
                                    <div className="trend_card--thumbnail w-[70px] h-[70px] flex-shrink-0">
                                        <img
                                            src={post.featuredImage?.node?.sourceUrl || "/images/placeholder.png"}
                                            className="w-full h-full object-cover rounded-md"
                                            alt={post.title}
                                        />
                                    </div>
                                    <div className="trend_card--content">
                                        <span className="text-gray-400 text-sm block mb-1">
                                            {post.author?.node?.name || "Unknown Author"} -{" "}
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <h4 className="text-md leading-tight">{post.title}</h4>
                                    </div>
                                </Link>
                            ))}
                            <Link
                                href="/news"
                                className="bg-[#B8C2CE] text-[#ffffff] w-fit sm:w-[100px] m-auto text-center px-3 py-2 rounded-md block mb-2"
                            >
                                More &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Club Ranking Section (static for now) */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-6">
                        <h2 className="text-[24px] md:text-[28px] font-semibold">Club Ranking</h2>
                    </div>
                    <div className="overflow-x-auto bg-[#EBEEF3] rounded-md p-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Rank</th>
                                    <th className="px-4 py-2 text-left">Club</th>
                                    <th className="px-4 py-2 text-left">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(8)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-1">{i + 1}</td>
                                        <td className="px-4 py-1">Club {String.fromCharCode(65 + i)}</td>
                                        <td className="px-4 py-1">{150 - i * 10}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

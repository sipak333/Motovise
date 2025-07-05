"use client";

import { useEffect, useRef, useState } from "react";
import { getAllPosts } from "../lib/wordpress";
import Link from "next/link";

export default function Article() {
    const [allPosts, setAllPosts] = useState([]);
    const sliderRef = useRef(null);

    // Fisher–Yates shuffle function
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getAllPosts();
            const shuffled = shuffleArray([...posts]); // Copy to avoid mutation
            setAllPosts(shuffled);
        };
        fetchPosts();
    }, []);

    const scroll = (direction) => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollAmount = container.offsetWidth / 1.5;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-[80px]">
            <h2 className="text-[24px] md:text-[28px] font-semibold mb-6">Article</h2>

            <div className="relative">
                <div
                    ref={sliderRef}
                    className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
                >
                    {allPosts.slice(0, 10).map((item, index) => (
                        <div className="trend_card max-w-sm flex-shrink-0 w-[300px]" key={item.id || index}>
                            <div className="trend_card--thumbnail">
                                <img
                                    src={item.featuredImage?.node?.sourceUrl || "/images/placeholder.png"}
                                    className="w-full h-48 object-cover rounded-md"
                                    alt={item.title || "Article Thumbnail"}
                                />
                            </div>
                            <div className="trend_card--content mt-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img 
                                        src={item.author?.node?.avatar?.url || "/images/author-thumbnail.jpg"} 
                                        alt={item.author?.node?.name || "Author"} 
                                        className="w-[40px] h-[40px] rounded-full object-cover"
                                    />
                                    <span className="text-black text-sm leading-snug">
                                        {item.author?.node?.name || "Unknown Author"}
                                    </span>
                                </div>
                                <div className="my-4">
                                    <span className="text-gray-400 text-sm leading-snug">
                                        {new Date(item.date).toLocaleDateString("en-US", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold mb-1 leading-tight">
                                    <Link href={`/blogs/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {item.excerpt?.replace(/<[^>]*>/g, "") || "No summary available."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 justify-center lg:justify-start items-center mt-8">
                    <button
                        onClick={() => scroll("left")}
                        className="arrow-left bg-[#BAB8B8] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="arrow-right bg-[#262626] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}

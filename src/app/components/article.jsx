export default function Article() {
    return (
        <>
            <section className="py-[80px]">
                {/* Left Column: Trending News */}
                    <h2 className="text-[24px] md:text-[28px] font-semibold mb-6">Article</h2>
                <div className=" flex gap-8">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div className="trend_card " key={index}>
                            <div className="trend_card--thumbnail ">
                                <img
                                    src="/images/MahindraEV-BE3.png"
                                    className="w-full h-full object-cover rounded-md"
                                    alt="Thumbnail"
                                />
                            </div>
                            <div className="trend_card--content mt-4">
                                <div className="flex items-center space-x-2 mb-1">
                                <img 
                                    src="/images/author-thumbnail.jpg" 
                                    alt="Author Thumbnail" 
                                    className="w-[40px] h-[40px] rounded-full object-cover"
                                />
                                <span className="text-black text-sm leading-snug">
                                    Hello
                                </span>
                                </div>
                                <div className="my-4">
                                    <span className="text-gray-400 text-sm leading-snug ">
                                    Author - 03 June 2023
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold mb-1 leading-tight">
                                    Mahindra & Mahindra unit launches two new SUVs
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start items-center mt-8">
                        <div className="arrow-left bg-[#BAB8B8] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl cursor-pointer">
                            &larr;
                        </div>
                        <div className="arrow-right bg-[#262626] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl cursor-pointer">
                            &rarr;
                        </div>
                    </div>

            </section>
        </>
    );
}

export default function Recentnews() {
    return (
        <>
           <section className="mt-20">
                <div className="flex gap-6 flex-col lg:flex-row">
                    {/* Recent News Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6">
                            <h2 className="text-[24px] md:text-[28px] font-semibold">Recent News</h2>
                        </div>                        
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Featured Card */}
                            <div
                                className="card card--feature w-1/2  relative rounded-md overflow-hidden "
                                style={{
                                backgroundImage: "url('/images/air-ventilator.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                }}
                            >
                                <div className="card__content bg-gradient-to-t from-[#f2f2f2] to-transparent absolute bottom-0 w-full p-4">
                                    <span className="card__author text-[#262626]">Race98 - 03 June 2023</span>
                                    <h3 className="card__title text-black">
                                        Ethiopian runners took the top four spots.
                                    </h3>
                                   
                                </div>
                            </div>

                            <div className="flex flex-col lg:w-1/2 bg-[#EBEEF3] rounded-md justify-center p-4">
                                {[1, 2, 3].map((_, index) => (
                                <div className="trend_card flex flex-col lg:flex-row gap-4 mb-3 items-center" key={index}>
                                       <div className="trend_card--thumbnail w-[70px] h-[70px] flex-shrink-0">
                                            <img
                                                src="/images/MahindraEV-BE3.png"
                                                className="w-full h-full object-cover rounded-md"
                                                alt="Thumbnail"
                                            />
                                        </div>
                                        <div className="trend_card--content">
                                        <span className="text-gray-400 text-sm block mb-1">Author - 03 June 2023</span>
                                        <h4 className="text-md leading-tight">Mahindra & Mahindra unit launches two new SUVs</h4>
                                    </div>
                                </div>
                                ))}
                                {/* Added More -> CTA */}
                                <a href="#" className="bg-[#B8C2CE] text-[#ffffff] w-fit sm:w-[100px] m-auto text-center px-3 py-2 rounded-md block mb-2">More &rarr;</a>
                            </div>
                        </div>
                    </div>

                    {/* Club Ranking Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6">
                            <h2 className="text-[24px] md:text-[28px] font-semibold">Club Ranking</h2>
                        </div>    
                        <div className="overflow-x-auto bg-[#EBEEF3] rounded-md p-4">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="">
                                        <th className="px-4 py-2 text-left">Rank</th>
                                        <th className="px-4 py-2 text-left">Club</th>
                                        <th className="px-4 py-2 text-left">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-1">1</td>
                                        <td className="px-4 py-1">Club A</td>
                                        <td className="px-4 py-1">150</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">2</td>
                                        <td className="px-4 py-1">Club B</td>
                                        <td className="px-4 py-1">140</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">3</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">4</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">5</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">6</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">7</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-1">8</td>
                                        <td className="px-4 py-1">Club C</td>
                                        <td className="px-4 py-1">130</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

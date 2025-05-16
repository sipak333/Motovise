export default function TrendingNews(){
    return (
        <>
        <section className="bg-[#EBEEF3] rounded-md flex flex-col md:flex-row gap-4">
            {/* Left Column: Trending News */}
            <div className="px-4 py-6 md:py-10 md:px-8 md:basis-1/2 w-full">
                <h2 className="text-[24px] md:text-[28px] font-semibold mb-6">Trending News</h2>

                {[1, 2, 3].map((_, index) => (
                <div className="trend_card flex flex-col lg:flex-row gap-4 mb-6" key={index}>
                    <div className="trend_card--thumbnail w-full lg:w-[334px]">
                        <img src="/images/MahindraEV-BE3.png" className="w-full h-auto object-cover" alt="Thumbnail" />
                    </div>
                    <div className="trend_card--content">
                    <span className="text-gray-400 text-sm block mb-1">Author - 03 June 2023</span>
                    <h4 className="text-lg font-semibold mb-1">Mahindra & Mahindra unit launches two new SUVs</h4>
                    <p className="text-gray-400 text-sm">NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Right Column: Banner */}
            <div
                className="md:basis-1/2 w-full rounded-md py-10 px-6 relative flex flex-col justify-end"
                style={{
                backgroundImage: "url('/images/painting.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
                <span className="text-white rounded-md border px-5 py-2 inline-block mb-4 w-fit z-10 relative">
                Body Paint
                </span>
                <h4 className="text-2xl md:text-4xl uppercase text-white font-bold z-10 relative">
                Flawless Finish: Expert Car Body Painting
                </h4>
            </div>
        </section>

        </>
    )
}
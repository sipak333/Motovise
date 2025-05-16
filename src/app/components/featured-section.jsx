export default function Featured(){
    return (
        <>
        <section>
            <div
                className="rounded-md flex flex-col gap-4 relative p-6 sm:p-10 md:p-[36px] mt-20 h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
                style={{
                    backgroundImage: "url('/images/modified-jeep.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                {/* Top Tag */}
                <div className="relative z-10 w-fit">
                    <span className="text-white rounded-md border border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                    Modification
                    </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 inset-x-0 z-10 px-6 sm:px-10 md:px-[36px] pb-6 sm:pb-8">
                    <span className="text-gray-300 text-sm sm:text-base block">
                        Author France-Presse - 04 June 2023
                    </span>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl uppercase text-white font-bold mt-2 max-w-xl">
                        Customized Jeep Upgrades for Adventure and Performance
                    </h4>
                    <p className="text-gray-100 mt-2 max-w-xl text-sm sm:text-base">
                        Transform your Jeep with expert custom upgrades for unmatched performance, durability, and style. From lift kits to performance tires and custom interiors, we tailor each upgrade to elevate your off-road ...
                    </p>
                </div>

               

            </div>
                 <div className="flex gap-4 justify-center lg:justify-end items-center mt-8">
                        <div className="arrow-left bg-[#BAB8B8] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl cursor-pointer">
                            &larr;
                        </div>
                        <div className="pageNum active bg-[#262626] text-white px-3 py-1 rounded-full">1</div>
                        <div className="pageNum  bg-[#BAB8B8] text-white px-3 py-1 rounded-full">2</div>
                        <div className="pageNum  bg-[#BAB8B8] text-white px-3 py-1 rounded-full">3</div>
                        <div className="pageNum  bg-[#BAB8B8] text-white px-3 py-1 rounded-full">4</div>
                        <div className="arrow-right bg-[#262626] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition text-2xl cursor-pointer">
                            &rarr;
                        </div>
                    </div>
                    </section>
        </>
    )
}
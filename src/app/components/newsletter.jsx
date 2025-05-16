export default function Newsletter(){
    return(
        <>
           <section className="bg-[#EBEEF3] relativepy-12 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 rounded-md">
                {/* Left Content */}
                <div className="flex flex-col items-start w-full lg:w-1/2 pl-12">
                    <h4 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent mb-6">
                    Newsletter Subscription
                    </h4>
                    <form className="flex w-full max-w-md">
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className="border border-[#262626] focus:border-[#262626] focus:outline-none w-full p-3 pr-[30px] rounded-md"
                        />
                        <button
                        type="submit"
                        className="bg-[#262626] text-white px-6 rounded-r-md hover:bg-[#1a1a1a] transition ml-[-20px] text-2xl"
                        >
                        &rarr;
                        </button>
                    </form>
                </div>

                {/* Right Images */}
                <div className="w-full lg:w-1/2 relative h-[300px]">
                    {/* Spring behind */}
                    <img
                    src="/images/spring.svg"
                    alt="Spring"
                    className="absolute top-[-20px] left-30  h-auto z-0"
                    />
                    {/* Car in front */}
                    <img
                    src="/images/red-car.png"
                    alt="Red Car"
                    className="absolute bottom-[-80px] right-0  h-auto z-10"
                    />
                </div>
                </section>

        </>
    )
}
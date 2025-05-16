export default function HeroSection  ()  {
    return(
        <>
        <section className="hero flex flex-col lg:flex-row justify-between gap-8">
            {/* Hero Content */}
            <div className="hero__content flex-1">
              <h1 className="hero__title text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase max-w-full lg:max-w-[800px] bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                Built for <br />Speed, Styled <br />for Show
              </h1>

              {/* Car Image */}
              <img
                className="hero__image -mt-8 sm:-mt-10 md:-mt-14 lg:-mt-20 max-w-full h-auto"
                src="/images/ford-mustang.png"
                alt="ford-mustang"
              />

              {/* Description and Link */}
              <div className="w-full lg:w-96 lg:ml-[400px] mt-4">
                <p className="hero__description mb-4 lg:mb-8 text-base sm:text-lg">
                  This custom car mod is where raw performance meets head-turning design. Every inch is tailored for speed, precision, and unique flair ...
                </p>
                <a
                  href="#"
                  className="hero__link inline-block bg-[#262626] rounded-md text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 mb-8"
                >
                  Continue Reading
                </a>
              </div>
            </div>

            {/* Hero Cards */}
            <div className="hero__cards space-y-4 lg:space-y-0">
            {/* Today Tag (Outside flex) */}
            <span className="tag bg-[#E1E8F0] text-[#9ea4ac] w-fit sm:w-[100px] text-center px-3 py-2 rounded-md block mb-2">
              Today
            </span>

            {/* Card List */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Card 1 */}
              <div
                className="card card--feature w-full sm:w-[270px] h-[230px] relative rounded-md overflow-hidden"
                style={{
                  backgroundImage: "url('/images/air-ventilator.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="card__content bg-gradient-to-t from-[#f2f2f2]/100 to-transparent absolute bottom-0 w-full p-4">
                  <span className="card__author text-[#262626]">Race98 - 03 June 2023</span>
                  <h3 className="card__title text-black">
                    Ethiopian runners took the top four spots.
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="card card--feature w-full sm:w-[270px] h-[230px] relative rounded-md overflow-hidden"
                style={{
                  backgroundImage: "url('/images/formula-one.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="card__content bg-gradient-to-t from-[#f2f2f2]/100 to-transparent absolute bottom-0 w-full p-4">
                  <span className="card__author text-[#262626]">Ayush - 03 June 2023</span>
                  <h3 className="card__title text-black">
                    IndyCar Detroit: Dixon quickest in second practice
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}
export default function HeroSection  ()  {
    return(
        <>
              <section className="hero flex justify-between">
        <div className="hero__content">
          <h1 className="hero__title text-7xl font-extrabold uppercase w-[800px] bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">Built for <br />Speed, Styled <br />for Show</h1>
          <img className="hero__image mt-[-40px]" src="/images/ford-mustang.png" alt="ford-mustang" />
          <div className='w-96 ml-[400px]'>
            <p className="hero__description mb-8">
              This custom car mod is where raw performance meets head-turning design. Every inch is tailored for speed, precision, and unique flair ...
              continue reading
            </p>
            <a className="hero__link bg-[#262626] rounded text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 mb-8">
              Continue Reading
            </a>
          </div>
        </div>

        <div className="hero__cards flex flex-col gap-4">
          <span className='tag bg-[#E1E8F0] text-[#9ea4ac] w-[100px] text-center px-2 py-2 rounded'>Today</span>
          <div
            className="card card--feature w-[270px] h-[230px] relative rounded"
            style={{
              backgroundImage: "url('/images/air-ventilator.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          <div className="card__content bg-gradient-to-t from-[#f2f2f2]/100 to-transparent  absolute bottom-0 w-full p-4">
              <span className="card__author text-[#262626]">Race98 - 03 June 2023</span>
              <h3 className="card__title text-black">Ethiopian runners took the top four spots.</h3>
            </div>
          </div>

          <div
            className="card card--feature  w-[270px] h-[230px] relative rounded"
            style={{
              backgroundImage: "url('/images/formula-one.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          <div className="card__content bg-gradient-to-t  from-[#f2f2f2]/100 to-transparent  absolute bottom-0 w-full p-4">
              <span className="card__author text-[#262626]">Ayush - 03 June 2023</span>
              <h3 className="card__title text-black">IndyCar Detroit: Dixon quickest in second practice</h3>
            </div>
          </div>
        
        </div>
      </section>
        </>
    );
}
import React, { useState, useRef } from "react";
import Image from "next/image";
import mascot from "../../../../public/assests/images/mascot1.png";
import arrow from "../../../../public/assests/images/aboutusLogo.png";
import Lvideo from "../../../../public/assests/images/Lvideo.png";
import sec3bg from "../../../../public/assests/images/sec3bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
  const cards = [
    {
      id: 1,
      title: "AERIS",
      content: "gUARDIANS OF ENGINEERING AND FLIGHT",
      image: { mascot },
    },
    {
      id: 2,
      title: "TERRANOVA",
      content: "ARCHITECTS OF DESIGN AND INNOVATION",
      image: { mascot },
    },
    {
      id: 3,
      title: "VOLTARIS",
      content: "MASTERS OF CODE AND MACHINE",
      image: { mascot },
    },
    {
      id: 4,
      title: "INFERNIX",
      content: "STRATEGISTS OF GAMING AND FINANCE",
      image: { mascot },
    },
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show next 2 cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  // Show previous 2 cards
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + cards.length) % cards.length
    );
  };

  const swiperRef = useRef(null);

  // Move to the next slide
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  // Move to the previous slide
  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };
  return (
    <div>
      <section
        className="bg-cover bg-center h-[50vh] sm:h-[120vh] w-full bg-no-repeat"
        style={{ backgroundImage: "url('/assests/images/Homepage.png')" }}
      >
        <div className="flex justify-between px-[5%] 2xl:pt-[0%] xl:pt-[5%] lg:pt-[8%] md:pt-[7%] sm:pt-[7%] pt-[27%]">
          <div className="flex flex-col mt-[9%] w-[20%] sm:w-[50%] ">
            <div className="text-white bg-gradient-to-r from-green-500 to-green-500/0 text-base sm:text-xl sm:w-[290px] w-[220px] xl:[200px] py-[2%] m rounded-full text-center">
              TECHFEST IIT ROPAR
            </div>
            <div className="leading-[60px] sm:leading-[100px] text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[45px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px]    font-normal font-[Impact] leading-[231.75px]">
              ADVITIYA,25
            </div>
          </div>
          <div className="2xl:w-[460px] xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] w-[150px] sm:mr-[12%] lg:mr-[1%] xl:mr-[12%] -mr-[3%]  ">
            <div className="aspect-[420/590]">
              <Image
                src={mascot}
                alt="../"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#121720] px-[13%] py-[10%]"
        style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-5">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            ABOUT US
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            ADVITIYA,24
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-roboto text-base 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-white font-medium leading-loose text-center">
          Welcome to Zeitgeist, the most anticipated and biggest techno-cultural
          fest in North India that showcases myriad events, workshops and talk
          series and is ornamented by the presence of various big names from
          different industries such as- Diljit Dosanjh, Anubhav Singh Bassi, the
          local Trian band, Vishal-Shekhar, Zakir Khan, Sonam Bajwa etc.
        </div>
      </section>

      <section
        className="bg-[#121720] px-[13%] py-[5%]"
        // style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-1 pb-10">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            OUR VIDEO
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            LATEST VIDEO
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white bg-green-500 h-20 w-12 rounded-l-full"></div>
          <Image src={Lvideo} alt="..." className="mx-4" />
          <div className="text-white bg-green-500 h-20 w-12 rounded-r-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="py-7 text-[#3BE174] font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-base">
            THEME
          </span>
          <div className=" w-[80vw] sm:w-[90vw] sm:px-5 font-roboto text-base 2xl:text-2xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-white font-medium leading-loose text-center">
            Teleport to the 27th Edition of Techfest and celebrate the interplay
            between Magic, Science & Technology. Step into the realm of wonders
            where the frontiers of imagination are translated into real-world
            possibilities. From ancient mysticism to cutting-edge innovations,
            explore the endless spectrum of creativity and ingenuity. Get ready
            for a Techno-Mystical extravaganza and embark on a miraculous
            journey of discovery into the unknown!
          </div>
        </div>
      </section>

      <section className="bg-[#121720]">
        <Image src={sec3bg} className="pt-10" alt="Decoration" />
      </section>

      <section className="bg-[#091418] p-[10%]">
        <div className="flex flex-col sm:flex-row md:justify-between items-center ">
          <div className="flex flex-col w-[50%] items-center sm:items-start  sm:w-[50%]  pt-[10%] sm:p-[5%]">
            <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base text-base">
              Our Competitions
            </span>
            <span className="pb-8  text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
              Competitions
            </span>
            <div className="flex">
              <div
                className="text-white bg-green-500 h-20 w-10 rounded-l-full"
                onClick={goPrev}
              ></div>
              <div
                className="text-white bg-green-500 h-20 w-10 rounded-r-full ml-20 "
                onClick={goNext}
              ></div>
            </div>
          </div>
          <div></div>
          <div className="w-auto max-w-4xl mx-auto p-4">
            {/* Swiper Component */}
            <Swiper
              ref={swiperRef} // Attach ref to Swiper
              spaceBetween={15}
              slidesPerView={1}
              pagination={{ clickable: true }} // Enable pagination
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              className="mySwiper"
            >
              {cards &&
                cards.map((card) => {
                  return (
                    <SwiperSlide>
                      <div
                        key={card.id}
                        className="flex flex-col justify-around items-center w-[300px] px-4 py-4 bg-[#131b23] rounded-2xl border-white"
                      >
                        <div className="bg-gradient-radial from-[3131b23] to-[#36362f]">
                          <Image
                            src={mascot}
                            className="w-[240px]"
                            alt="Decoration"
                          />
                        </div>
                        <h3 className="text-3xl font-semibold text-white  ">
                          {card.title}
                        </h3>
                        <div className="h-[0.1] w-[100%] bg-white my-2"></div>
                        <p className="text-xl text-white text-center my-3 w-full">
                          {card.content}
                        </p>
                        <div className="bg-[#40EC7B] h-2 w-[70%] rounded-t-xl"></div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-[#091418] px-[13%]  pb-[10%]">
        <div className="flex flex-col justify-center items-center py-10">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            Our Highlights
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            Highlights
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-roboto text-lg 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl text-white font-medium leading-loose text-center">
          Welcome to Zeitgeist, the most anticipated and biggest techno-cultural
          fest in North India that showcases myriad events, workshops and talk
          series and is ornamented by the presence of various big names from
          different industries such as- Diljit Dosanjh, Anubhav Singh Bassi, the
          local Trian band, Vishal-Shekhar, Zakir Khan, Sonam Bajwa etc.
        </div>
      </section>
    </div>
  );
}

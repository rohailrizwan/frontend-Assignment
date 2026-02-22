import React from 'react';
import arrowRight from '../assets/images/arrowRight.png'
import Container from './container';
import defaultBg from "../assets/images/buttonbg.png";

function Hero() {
  return (
    <div className="w-full h-screen herobg relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full md:w-[50%] h-full bg-black/50"></div>

      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="flex flex-col gap-5 pt-16 relative w-full md:w-[50%]">

            <p className="text-white md:text-white/80 font-medium font-inter text-[13px] tracking-[3px] uppercase m-0">
              Khawaja Yanni
            </p>

            <h1 className="text-white text-[50px] md:text-[68px] leading-15 md:leading-[70px]   font-playfair font-medium m-0 ">
              The new<br />era of luxury
            </h1>

            <p className="text-white/80 text-[15px]  font-inter font-normal m-0 md:max-w-[400px] max-w-[270px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
            </p>

            <div className="mt-2">
              <button
                className={`relative flex items-center justify-center gap-2 rounded-[16px] font-semibold text-white overflow-hidden`}
                style={{
                  backgroundImage: `url(${defaultBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

                <div className={`relative flex items-center gap-2  justify-between px-4 w-[280px] h-[50px] md:w-[300px] md:h-[55px]`}>
                  <span className='font-inter text-[15px] md:text-[17px] font-medium'>{"Book reservation now"}</span>
                  <img src={arrowRight} alt="button image" className="w-[26px] h-[19px] object-contain" />
                </div>
              </button>
            </div>

          </div>
        </Container>

        <div className="absolute bottom-6 right-5 md:right-[52%]  flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#fff]" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>

    </div>
  );
}

export default Hero;
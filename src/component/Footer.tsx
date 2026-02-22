import React from 'react'
import tiktok from '../assets/images/tiktok.svg'
import instagram from '../assets/images/insta.svg'
import snapchat from '../assets/images/snap.png'
import X from '../assets/images/twitter.svg'
import logo from '../assets/images/logo.png'
import Container from './container'
import googleplay from '../assets/images/googleplay.png'
import appstore from '../assets/images/appstore.png'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master.png'
import maskgroup from '../assets/images/MaskGroup.png'

function Footer() {
  return (
    <div className="w-full lg:bg-[linear-gradient(97deg,#1E240E_0%,#0F1500_100%)] bg-[#0F1500]">
      <Container>

        <div className="block lg:hidden pt-10 pb-6">
          <img src={logo} alt="The Groves" className="h-[55px] object-contain" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between pt-6 lg:pt-12 pb-8 lg:pb-12 gap-6">
          <h2 className="text-white text-[36px] lg:text-[50px] font-playfair font-light leading-tight">
            Join us for an <br /> unforgettable experience
          </h2>

          <div className="flex flex-col items-start gap-4 md:pt-2">
            <p className="text-white text-[13px] uppercase font-inter tracking-[2px] font-light">
              Download The Groves App
            </p>
            <div className="flex gap-3">
              <img src={appstore} alt="App Store" className="h-[50px] w-[148px] object-contain" />
              <img src={googleplay} alt="Google Play" className="h-[50px] w-[168px] object-contain" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 md:py-10">
          <div>
            <p className="text-white text-[13px] uppercase font-inter tracking-[2px] font-light mb-4">
              Location
            </p>
            <p className="text-white/80 font-inter font-light text-[15px] leading-relaxed">
              Al-Hizam Park<br />
              Al-Semairi, Yanbu Al Bahr 46455<br />
              Riyadh Saudi Arabia
            </p>
          </div>

          <div>
            <p className="text-white text-[13px] uppercase font-inter tracking-[2px] font-light mb-4">
              Working Hours
            </p>
            <p className="text-white/80 font-inter font-light text-[15px] leading-relaxed mb-4">
              Sun until Thurs: 4:00PM<br />
              Fri & Sat: 2:30PM
            </p>
            <p className="text-white/80 font-inter font-light text-[15px] leading-relaxed">
              Gates Close at:<br />
              Sat until Wed: 12:00AM<br />
              Thu & Fri: 12:30AM
            </p>
          </div>

          <div>
            <p className="text-white text-[13px] uppercase font-inter tracking-[2px] font-light mb-4">
              Guest Service Call
            </p>
            <p className="text-white/80 font-inter font-light text-[15px] leading-relaxed mb-4">
              cc@thegroves-sa.com<br />
              920001672
            </p>
            <p className="text-white/80 font-inter font-light text-[15px] leading-relaxed">
              +9665566631309
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between py-8">

          <img src={logo} alt="The Groves" className="hidden md:block h-[65px] w-[286px] object-contain" />

          <div className="flex items-center gap-6">
            <img src={tiktok} alt="TikTok" className="w-[26px] h-[30px] object-contain" />
            <img src={instagram} alt="Instagram" className="w-[26px] h-[30px] object-contain" />
            <img src={X} alt="X" className="w-[26px] h-[30px] object-contain" />
            <img src={snapchat} alt="Snapchat" className="w-[26px] h-[30px] object-contain" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 pb-10 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/80 text-[15px]">
              ©2023 The Groves for Entertainment
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img src={visa} alt="Visa" className="h-[14px] w-[43px] object-contain" />
            <img src={mastercard} alt="Mastercard" className="h-[31px] w-[31px] object-contain" />
            <img src={maskgroup} alt="AmEx" className="h-[26px] w-[26px] object-contain" />
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Footer
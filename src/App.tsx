import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import arrowRight from './assets/images/arrowRight.png'
import bgimage from './assets/images/bgimage1.png'
import video1 from './assets/images/video.svg'
import Container from './component/container'
import defaultBg from "./assets/images/buttonbg.png";
import slider1 from "./assets/images/sliderimage1.png"
import slider2 from "./assets/images/sliderimage2.png"
import slider3 from "./assets/images/sliderimage3.png"
import slider4 from "./assets/images/slider4.png"
import card1 from "./assets/images/card1.png"
import card2 from "./assets/images/card2.png"
import card3 from "./assets/images/card3.png"
import card4 from "./assets/images/card4.png"
import map from "./assets/images/map.png"
import event from './assets/images/events.png'
import experience from './assets/images/experience.png'
import Footer from './component/Footer'


const Cards = [
  {
    id: 1,
    name: "Vida Vera",
    price: "100 SR PER GUEST",
    image: card1,
  },
  {
    id: 2,
    name: "Zama Zulu",
    price: "100 SR PER GUEST",
    image: card2,
  },
  {
    id: 3,
    name: "Khawaja Yanni",
    price: "100 SR PER GUEST",
    image: card3,
  },
  {
    id: 4,
    name: "Yamagata",
    price: "100 SR PER GUEST",
    image: card4,
  },
];

function App() {
  return (
    <div className='h-screen relative'>
      <Navbar />
      <Hero />

      <div className="pt-16  min-h-screen lg:bg-[linear-gradient(97deg,#283606_0%,#0F1500_100%)] bg-[linear-gradient(180deg,#283606_0%,#0F1500_100%)] border-b-[0.5px] border-white/20">
        {/* 1 */}
        <div className='mb-20'>
          <Container>
            <div className="text-center md:max-w-[770px] mx-auto mb-8">
              <h2
                className="text-white  font-medium mb-3 font-playfair text-[36px] md:text-[50px]"
              >
                Mall Of: Endless Possibilities
              </h2>
              <p className="text-white/80 text-[15px] md:text-[16px] font-inter  leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>


            <div className="w-full max-w-[350px] md:max-w-[904px] h-[193px] md:h-[502px] mx-auto mb-6 relative overflow-hidden">
              <img
                src={bgimage}
                alt="Mall Video Thumbnail"
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img src={video1} alt="Play" className="w-[29px] h-[29px] object-contain relative left-[3px]" />
                </button>
              </div>
            </div>

            <div className="relative rounded-[25px] p-[25px] md:max-w-[904px] h-[336px] md:h-[235px] mx-auto overflow-hidden bg-[#2d3914] md:bg-[linear-gradient(100deg,#2d3914_0%,#1a220c_100%)]" >
              <div className="hidden md:block absolute inset-0 backdrop-blur-[30px]"></div>

              <div className="relative z-10 flex flex-col md:flex-row justify-start md:justify-between md:items-center h-full">

                <div className='flex flex-col gap-2'>
                  <p className="text-white/80 text-xs tracking-widest uppercase mb-2">
                    25 SR / GUEST
                  </p>

                  <h3 className="text-white text-[25px] md:text-[30px] font-medium font-playfair mb-2">
                    Get your General Access Ticket
                  </h3>

                  <p className="text-white/80  md:text-[15px] max-w-[610px] leading-relaxed font-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text e
                  </p>
                </div>

                <div className=" absolute bottom-2 justify-center items-center right-2 md:static md:bottom-auto md:right-auto mt-6 md:mt-0">
                  <img
                    src={arrowRight}
                    alt="Arrow"
                    className="w-[32px] md:w-[40px] h-auto opacity-[0.49]"
                  />
                </div>

              </div>
            </div>


          </Container>

        </div>

        {/* 2 */}

        <Container>
          <div className="mb-12">
            <h2 className="text-white leading-tight  font-medium  font-playfair text-[36px] sm:text-[50px] mb-8" >
              Book General Access ticket and <br /> enjoy the attractions for free
            </h2>

            <button
              className={`relative flex items-center justify-center gap-2 rounded-[16px] font-semibold text-white overflow-hidden`}
              style={{
                backgroundImage: `url(${defaultBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div className={`relative flex items-center gap-2  justify-between px-4 w-[300px] h-[55px]`}>
                <span className='font-inter text-[17px] font-medium'>Book General Access Ticket</span>
                <img src={arrowRight} alt="button image" className="w-[26px] h-[19px] object-contain" />
              </div>
            </button>

          </div>
        </Container>


        <div className="w-full overflow-hidden mb-20">

          <div className="flex items-start md:items-center gap-8 w-fit  ms-5  lg:ms-[30px] xl:ms-[80px]">

            <div className="shrink-0">
              <div className="w-[215px] h-[294px] md:w-[385px] md:h-[526px] rounded-[30px] overflow-hidden">
                <img src={slider1} alt="Little Krazy" className="w-full h-full object-cover" />
              </div>
              <p className="text-white text-[25px] lg:text-[30px] mt-2 text-center font-playfair font-light">
                Little Krazy
              </p>
            </div>


            <div className="shrink-0">
              <div className="w-[215px] h-[294px] md:w-[228px] md:h-[322px] rounded-[30px] overflow-hidden">
                <img src={slider2} alt="Hawanim Groves City" className="w-full h-full object-cover" />
              </div>
              <p className="text-white text-[25px] lg:text-[30px] mt-2 text-center font-playfair font-light">
                Hawanim <br /> Groves City
              </p>
            </div>


            <div className="shrink-0">
              <div className="w-[215px] h-[294px] md:w-[385px] md:h-[526px] rounded-[30px] overflow-hidden">
                <img src={slider3} alt="Picnic Market" className="w-full h-full object-cover" />
              </div>
              <p className="text-white text-[25px] lg:text-[30px] mt-2 text-center font-playfair font-light">
                Picnic Market
              </p>
            </div>

            <div className="shrink-0">
              <div className="w-[215px] h-[294px] md:w-[291px] md:h-[402px] rounded-[30px] overflow-hidden">
                <img src={slider4} alt="Lucaworld" className="w-full h-full object-cover" />
              </div>
              <p className="text-white text-[25px] lg:text-[30px] mt-2 text-center font-playfair font-light">
                Lucaworld
              </p>
            </div>

          </div>

        </div>

        {/* 3 */}

        <div className="w-full pb-20 md:pb-30  overflow-hidden">
          <Container>
            <div className="md:max-w-[770px] mx-auto mb-10 sm:mb-20">
              <h2
                className="text-white text-left sm:text-center w-[300px] sm:w-full  font-medium mb-3 font-playfair text-[36px] sm:text-[50px]"
              >
                Experience the Finest Cuisine
              </h2>
              <p className="text-white/80 hidden text-center sm:block text-[15px]  leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Cards?.map((item) => (
                <div key={item.id} className="rounded-[38px] h-[320px] sm:h-[450px]  overflow-hidden bg-[#2d3914] p-4">

                  <div className="w-full h-[200px] sm:h-[304px] rounded-t-[32px] overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3 sm:px-4 pb-0 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-[25px] sm:text-[30px] font-playfair font-medium">
                        {item.name}
                      </h3>

                      <span className="inline-block font-inter mt-2 text-[8px] sm:text-[13px] bg-[#AD8749] text-white/80 px-4 py-1 rounded-full" style={{ wordSpacing: "2px" }}>
                        {item.price}
                      </span>
                    </div>

                    <div>
                      <img
                        src={arrowRight}
                        alt="Arrow"
                        className="w-[32px] md:w-[40px] h-auto text-white opacity-[52]"
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </Container>

        </div>


        <div className="w-full pb-20 md:pb-10  overflow-hidden">
          <div className="flex items-start md:items-center gap-8 w-fit ms-6 sm:ms-10  md:ms-[80px]">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

              <div className="md:col-span-4 flex flex-col gap-6 mb-10 md:mb-0 w-full md:max-w-[268px]">
                <h2 className="text-white font-playfair font-medium text-[36px] md:[50px] leading-tight">
                  Curate your <br /> experience <br /> as you like
                </h2>

                <button
                  className="relative flex items-center justify-between gap-2 px-6 w-[306px] h-[51px] md:w-[230px] md:h-[55px] rounded-[16px] font-semibold text-white overflow-hidden"
                  style={{
                    backgroundImage: `url(${defaultBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="font-inter text-[17px] font-medium">
                    <span className="md:hidden">
                      Book General Access Ticket
                    </span>
                    <span className="hidden md:inline">
                      Book Tickets
                    </span>
                  </span>
                  <img src={arrowRight} alt="arrow" className="w-[26px] h-[19px] object-contain" />
                </button>
              </div>

              <div className="md:col-span-8 flex items-center gap-4 md:gap-6  md:overflow-hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >

                <div className="flex-shrink-0">
                  <div
                    className="overflow-hidden w-[215px] h-[294px] md:w-[228px] md:h-[322px] rounded-[30px]"
                  >
                    <img src={slider2} alt="Restaurants" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white text-[25px] md:text-[30px] mt-3  text-center font-playfair font-light">
                    Resturants
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div
                    className="overflow-hidden w-[215px] h-[294px] md:w-[385px] md:h-[526px] rounded-[30px]"
                  >
                    <img src={experience} alt="Experiences" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white text-[25px] md:text-[30px] mt-3  text-center font-playfair font-light">
                    Experiences
                  </p>
                </div>

                {/* Card 3 — Events, bleeds off right */}
                <div
                  className="flex-shrink-0 md:mr-[-80px]"
                >
                  <div
                    className="overflow-hidden w-[215px] h-[294px] md:w-[291px] md:h-[402px] rounded-[30px]">
                    <img src={event} alt="Events" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white text-[25px] md:text-[30px] mt-3  text-center font-playfair font-light">
                    Events
                  </p>
                </div>

              </div>


            </div>
          </div>
        </div>


        <div className='pb-20 md:pb-10'>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

              <div className="flex items-center justify-center order-2 md:order-1">
                <img
                  src={map}
                  alt="Groves Map"
                  className="w-full h-[275px] w-[300px] md:h-[553px] md:max-w-[600px] object-cover"
                />
              </div>


              <div className="flex flex-col gap-4 order-1 md:order-2">
                <p
                  className="text-white/80 text-[13px] font-inter uppercase tracking-[2.6px] font-medium"
                >
                  Experience The Groves
                </p>

                <h2
                  className="text-white font-playfair font-medium text-[36px] md:text-[50px] leading-tight" >
                  Find your place
                </h2>

                <p className="text-white/80  text-[15px] leading-relaxed max-w-[400px] mb-4 mb:mb-8">
                  Our interactive map will show you the way to the shops and restaurants that you want to see.
                </p>



                <button
                  className={`relative flex items-center justify-center gap-2 w-[232px] h-[55px] rounded-[16px] font-semibold text-white overflow-hidden`}
                  style={{
                    backgroundImage: `url(${defaultBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >

                  <div className={`relative flex items-center gap-2  justify-between px-4 w-full `}>
                    <span className='font-inter text-[17px] font-medium'>Open the Map</span>
                    <img src={arrowRight} alt="button image" className="w-[26px] h-[19px] object-contain" />
                  </div>
                </button>
              </div>

            </div>
          </Container>
        </div>


      </div>


      <Footer />


    </div>
  )
}

export default App

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image1">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl p-4 font-semibold">
                    Explore a diverse range of residential properties to <br />find
                    the perfect place to call home
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image2">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl px-5 font-semibold">
                    Experience luxury living, urban charm, and countryside <br />
                    serenity with our curated selection of properties
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image3">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h2 className="mb-4 text-4xl p-4 font-semibold">
                    Start your journey towards homeownership with our <br />
                    comprehensive listings and expert guidance
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden p-12 text-center h-[400px] bg-image4">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white p-4">
                  <h2 className="mb-4 text-4xl p-4 font-semibold">
                    Search, discover, and fall in love with homes that <br /> reflect
                    your lifestyle and aspirations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

/* eslint-disable @next/next/no-img-element */
"use client";

import { CarouselPhotos, EnvisagePhotos, GuestPhotos } from "@/data/gallery/photos";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../team/style.css";

export default function GalleryPage() {
  return (
    <>
      <title>Gallery - Envisage 23</title>
      <div className="all">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper rounded-lg py-10 sm:shadow-2xl lg:rounded-xl"
          >
            {CarouselPhotos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="relative h-[260px] sm:h-[600px]">
                  <img
                    src={photo.src}
                    alt={`Carousel pic ${photo.id}`}
                    width={1600}
                    height={400}
                    className="rounded-lg object-cover lg:rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {
            // Guest Photos
          }
          <div className="mb-10 mt-20">
            <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
              Guest
            </h2>
          </div>
          <SlideshowLightbox
            showThumbnails="true"
            className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4"
          >
            {GuestPhotos.map((photo) => (
              <img
                key={photo.id}
                className="w-full rounded drop-shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:drop-shadow-xl"
                src={photo.src}
                alt={`Guest Pic ${photo.id}`}
              />
            ))}
          </SlideshowLightbox>
          {
            // Envisage Photos
          }
          <div className="mb-10 mt-20">
            <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
              Envisage
            </h2>
          </div>
          <SlideshowLightbox
            showThumbnails="true"
            className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4"
          >
            {EnvisagePhotos.map((photo) => (
              <img
                key={photo.id}
                className="w-full rounded drop-shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:drop-shadow-xl"
                src={photo.src}
                alt={`Guest Pic ${photo.id}`}
              />
            ))}
          </SlideshowLightbox>
        </div>
      </div>
    </>
  );
}

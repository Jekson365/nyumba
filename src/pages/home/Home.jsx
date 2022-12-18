import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './home.scss'


import './styles/main.scss'
import { Listing } from "./Listing";
import { Categories } from "./Categories";
import { Stats } from "./Stats";
import { Blog } from "./Blog";
import { Contact } from "./Contact";

export const Home = () => {
  const sliderItems = [
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62fa753fa2df0f89f6ebeea2_ralph-ravi-kayden-2d4lAQAlbDA-unsplash.webp",
      title: "Beautiful properties that inspires you"
    },
    {
      id: 2,
      img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62fa753fa2df0f2528ebeea3_webaliser-_TPTXZd9mOo-unsplash.webp",
      title: "Luxury Affordable Houses"
    },
    {
      id: 3,
      img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62fa753d5cce77dce55cc9ec_john-fornander-Id7u0EkTjBE-unsplash.webp",
      title: "Find Your Dream Home"
    },
  ]
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper swiper-cover"
      >
        {sliderItems.map((each) => {
          return (
            <SwiperSlide
              key={each.id}
              className='slider-item swiper-slide d-flex
              align-items-center justify-content-center text-center'
              style={{ "backgroundImage": `url('${each.img}')` }}
            >
              <h1>{each.title}</h1>
              <div className="overlay"></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Listing />
      <Stats/>
      <Categories/>
      <Blog/>
      <Contact/>
    </>
  )
}

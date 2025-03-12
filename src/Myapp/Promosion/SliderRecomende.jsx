import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import { Card } from "react-bootstrap";
import LightGallery from 'lightgallery/react';
import { Config, Urlimage} from '../../Config/connection';
import numeral from 'numeral';
import ViewRecomend from './ViewRecomend';
function SliderRecomende() {
  const api = Config.urlApi;
  const img = Urlimage.url;

  const [show, setShow] = useState(false);
  const [itemRecomende, setItemRecomende] = useState([]);

  const fetchRecomende = async () => {
    try {
      const response = await fetch(api + 'recd/limit/'+20);
      const jsonData = await response.json();
      setItemRecomende(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => {
    fetchRecomende();
  }, [])

  const [data, setData] = useState({})
  const ViewRecom = (data) => {
    setData(data)
    setShow(true)
  }

  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '@1.00': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '@1.50': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <LightGallery>
      {itemRecomende.slice(0, 25).map((item, index) => (
        <a key={index} href='javascript:;'
        data-pinterest-text="Pin it2"
        data-tweet-text="lightGallery slide  2"
        className="gallery__item" data-src={`${img}pos/${item.recd_image}`} data-sub-html={`<h3>${numeral(item.price_sale * item.qty_baht).format('0,00')} ₭</h3> <p className="fs-16px">${item.recomennde_name}</p>`}>
          <SwiperSlide className='rounded' onClick={() => ViewRecom(item)} role='button'>
            <Card>
              <Card.Img variant="top" src={`${img}pos/${item.recd_image}`} className="custom-card-img" />
              <Card.Body className='py-1 px-1 text-left'>
                <Card.Title className='line-clamp-1'>{item.recomennde_name}</Card.Title>
                <Card.Text className='mt-0 fs-14px  line-clamp-1'>{item.recd_remark}</Card.Text>
                <div className="product-price text-orange text-end">{numeral(item.price_sale * item.qty_baht).format('0,00')} ₭</div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </a>
      ))}
      </LightGallery>
    </Swiper>
     <ViewRecomend show={show} handleClose={()=>setShow(false)} data={data} />
     </>
  );
}


export default SliderRecomende;

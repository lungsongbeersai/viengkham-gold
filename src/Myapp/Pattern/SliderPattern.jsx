import React,{useState,useEffect,useRef} from 'react'
import { Config,Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Card} from "react-bootstrap";
function SliderPattern({colum}) {
  const api = Config.urlApi;
  const img = Urlimage.url;
  

  const [valuepat, setValuepat] = useState({
      type_id_fk: '',
      title_id_fk: '',
      option_id_fk: ''
  })
  const [itemPattern, setItemPattern] = useState([]);
  const fetchPattern = async () => {
      try {
          const response = await axios.post(`${api}pattern/`, valuepat);
          setItemPattern(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  
  useEffect(() => {
      fetchPattern();
  }, []);


  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: colum,
        spaceBetween: 5,
      },
    }}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="mySwiper"
      >
      {itemPattern.slice(0, 25).map((item, index) => (
        <>
        <SwiperSlide  className='rounded'>
        <Card>
        <Card.Img variant="top" src={`${img}pattern/${item.pattern_img}`} className="custom-card-img" />
         <Card.Body className='py-1 px-1'>
           <Card.Title className='fs-15px line-clamp-1'>{item.pattern_name}</Card.Title>
           <Card.Text className='mt-1 line-clamp-1'>{item.pattern_remart}</Card.Text>
           <div className="product-price text-end text-orange">{numeral(item.pattern_pirce).format('0,00')}  ₭</div> 
         </Card.Body>
       </Card>
        </SwiperSlide>
      </>
      ))}
 <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

    </Swiper>
  );
}


export default SliderPattern
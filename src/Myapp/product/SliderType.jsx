import React, {useRef, useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Config, Urlimage } from '../../Config/connection';
import { Link,useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function SliderType() {

    const api = Config.urlApi;
    const img = Urlimage.url;

    const [itemTiles, setItemTiles] = useState([]);
    const fetchTile = async () => {
        try {
            const response = await fetch(api + 'posd/group');
            const jsonData = await response.json();
            setItemTiles(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const navigate = useNavigate();
    const handleLink=(id)=>{
      navigate(`/pdc?p=${id}`);
    }

    useEffect(() => {
        fetchTile();
    }, []);
    return (
        // <Carousel
        //     responsive={responsive}
        //     additionalTransfrom={0}
        //     arrows
        //     autoPlay
        //     autoPlaySpeed={3000} // Adjusted autoPlaySpeed
        //     centerMode={false}
        //     className=""
        //     containerclassName="container-with-dots"
        //     dotListclassName=""
        //     draggable
        //     focusOnSelect={false}
        //     infinite
        //     itemclassName=""
        //     keyBoardControl
        //     minimumTouchDrag={80}
        //     pauseOnHover
        //     renderArrowsWhenDisabled={false}
        //     renderButtonGroupOutside={false}
        //     renderDotsOutside={false}
        //     rewind={false}
        //     rewindWithAnimation={false}
        //     rtl={false}
        //     shouldResetAutoplay
        //     showDots={false}
        //     sliderclassName=""
        //     slidesToSlide={1}
        //     swipeable
        // >
        //     {itemTiles.map((item, index) => (
        //         <div className='group ms-2 me-2 '>
        //         <div className='border-danger shadow-primary rounded-lg flex-grow cursor-pointer flex-col items-center justify-center border-2   '>
        //             <Link className="h-full w-full " to={'/pdc?p='+item.tile_uuid}>
        //                 <div className="flex flex-col items-center justify-center">
        //                   <div className=" h-28 w-28">
        //                     <img className="h-full w-full object-contain "
        //                       src={`${img}title/${item.title_image}`} alt="" />
        //                   </div>
        //                   <div>
        //                     <p
        //                       className="group-hover:text-primary line-clamp-1 mt-2 text-sm font-semibold text-gray-900 group-hover:underline">
        //                       {item.tile_name}
        //                     </p>
        //                   </div>
        //                 </div>
        //               </Link>
        //         </div>
        //         </div>
        //     ))}
        // </Carousel>


        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {itemTiles.map((item, index) => (
        <SwiperSlide onClick={()=>handleLink(item.tile_uuid)} className='rounded-lg'>
            <div className='border-danger shadow-primary rounded-lg flex-grow cursor-pointer flex-col items-center justify-center border-2   '>
            <div className="flex flex-col items-center justify-center">
            <div className="h-20 w-20">
            <img className="h-full w-full object-contain" src={`${img}title/${item.title_image}`} alt="" />
            </div>
            </div>
            <p className="group-hover:text-primary line-clamp-1 text-sm "> {item.tile_name} </p>
            </div>
        </SwiperSlide>
    ))}
      </Swiper>
    )
}

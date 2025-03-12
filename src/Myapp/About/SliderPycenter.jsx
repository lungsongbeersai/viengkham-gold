import React,{useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Config, Urlimage } from '../../Config/connection';
import { Pagination } from 'swiper/modules';
function SliderPycenter({colum}) {
    const api = Config.urlApi;
    const img = Urlimage.url;
const [itemPycenter, setItemPycenter] = useState([]);

const getPycenter = () => {
    fetch(`${api}pcenter`)
        .then((res) => res.json())
        .then((data) => setItemPycenter(data));

}
useEffect(() => {
    getPycenter();
}, []);
    return (
        <>
        {itemPycenter.length >0 && (
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: colum,
                        spaceBetween: 15,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {itemPycenter.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full max-w-xs text-center">
                            <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                                src={`${img}slider/${item.pcenter_image}`} alt="" />
                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700">{item.pcenter_name}</h3>
                                <span className="mt-1 font-medium text-gray-600">{item.description}</span>
                            </div>
                        </div>
                    </SwiperSlide>)
                )}
            </Swiper>
            )}
        </>
    )
}

export default SliderPycenter
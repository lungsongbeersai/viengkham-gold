import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './../../style.css'
// import required modules
import { Pagination } from 'swiper/modules';
import { Config, Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import ViewRecomend from './ViewRecomend';
function ShowTypeRecomende() {
    const api = Config.urlApi;
    const img = Urlimage.url;

    const [itemRecomende, setItemRecomende] = useState([]);
    const fetchRecomende = async () => {
        try {
            const response = await fetch(api + 'recd/g-recom');
            const jsonData = await response.json();
            setItemRecomende(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchRecomende();
    }, [])

  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleView = (item) => {
    setShow(true);
    setData(item)
  }

    return (
        <>
            {itemRecomende.map((item, index) => (
                <div className="mx-auto mt-4 w-full px-1 sm:w-full sm:px-2 xl:max-w-7xl xl:px-2">
                    <div className="flex flex-col justify-center sm:justify-between md:flex-row md:items-center">
                        <div>
                            <h1 className="text-base font-bold md:text-2xl">{item.tile_name}</h1>
                        </div>
                        <div className="hidden justify-center md:flex md:flex-row md:space-x-4 md:text-sm">
                            <Link to={`/rtd?id=${item.title_id_fk}`}  className="cursor-pointer text-red"><i className="fa-solid fa-angles-right"/> ເບີ່ງເພີ່ມເຕີມ...</Link>
                        </div>
                    </div>
                    <div className="nk-swiper-container">
                        <div className="nk-new-swiper">
                            <div className="swiper-wrapper">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={10}
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
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                    },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {item.recommended.slice(0, 20).map((val, key) => (
                                        <SwiperSlide key={key} onClick={() => handleView(val)} role='button'>
                                            <div className="xl:flex-shrink xl:flex-grow-0 xl:overflow-hidden border rounded">
                                                <div className="relative overflow-hidden">
                                                    <div className="absolute left-0 top-2 bg-gold text-xs font-bold uppercase text-white/90 sm:text-sm">
                                                        <span className="p-1">{val.qty_baht} {val.option_name}</span>
                                                    </div>
                                                    <div className="mx-auto w-full bg-no-repeat md:w-full rounded">
                                                            <img className="h-full w-full object-cover text-xs md:h-full md:w-full" src={`${img}pos/${val.recd_image}`} alt="" />
                                                    </div>
                                                </div>
                                                <div className="mt-1 space-y-1 px-2 text-left">
                                                    <div className="product-name line-clamp-1 text-sm text-gray-700 ">
                                                    <p>{val.recomennde_name}</p>
                                                    </div>
                                                    <div className='text-end'>
                                                        <span className="text-sm font-extrabold sm:text-lg">{numeral(val.price_sale).format('0,00')} ₭</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <ViewRecomend 
            show={show}
            handleClose={() => setShow(false)}
            data={data}
            />
        </>
    )
}

export default ShowTypeRecomende
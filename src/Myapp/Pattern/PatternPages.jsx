import React, { useState, useEffect } from 'react'
import DataPattern from './DataPattern';
import { useTitle } from '../../Config/select-option'
import { Link, useNavigate } from 'react-router-dom';
import SliderRecomende from '../Promosion/SliderRecomende';
import { Config, Urlimage } from '../../Config/connection';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function PatternPages() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const itemTile = useTitle();

  const [typeId, setTypeId] = useState('');
  const typeFilter = (id) => {
    setTypeId((prevId) => (prevId === id ? '' : id))
  }


  const [itemPromotion, setItemPromotion] = useState([]);
  const fetchPormotion = async () => {
    try {
      const response = await fetch(api + 'promotion/limit/' + 5);
      const jsonData = await response.json();
      setItemPromotion(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const navigate = useNavigate();
  const handleLink = (id) => {
    navigate(`/pdc?p=${id}`);
  }

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    fetchPormotion()
  }, [])


  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // Re-parse the SDK if it's already loaded
    } else {
      // Dynamically load the SDK
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.FB.XFBML.parse(); // Parse the XFBML after loading the SDK
      };
      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <div className="mx-auto w-full py-3 px-4 text-sm md:px-6 xl:max-w-7xl xl:px-4">
        <div id="nav-link-top">
          <div className="py-3 text-sm">
            <span className="text-blue-700 hover:underline">
              <Link to={'/'}>ໜ້າຫຼັກ</Link>
            </span>
            <span className='px-3'>
              <i className="fas fa-chevron-right text-xs" />
            </span>
            <span>ລວດລາຍ ຮູບແບບຜະລິດຕະພັນ</span>
          </div>
        </div>
        {/* Filter Small Device button - Start */}
        <div className="block p-1 md:hidden">
          <div className="inline-flex w-full items-center space-x-2">
            <div
              onClick={toggleFilter}
              className="bg-gold inline-block w-20 cursor-pointer rounded py-2 text-center text-xs font-semibold text-gray-50"
            >
              <span>ກັ່ນຕອງ</span>
              <span>
                <i className="fas fa-chevron-down" />
              </span>
            </div>
          </div>
        </div>
        {/* Filter Small Device button - End */}
        <div className="mt-2 flex flex-col space-x-0 text-sm md:flex-row md:space-x-4">
          {/* Filter Section - Start */}
          {/* <div className="nk-open-sidebar absoulute fixed left-0 top-0 z-[199] h-screen w-[300px] -translate-x-full transform space-y-3 overflow-y-auto overflow-x-hidden border border-gray-400 bg-white px-3 pb-16 shadow-xl duration-500 md:relative md:z-0 md:block md:h-full md:w-1/4 md:translate-x-0 md:py-4"></div> */}
          <div  className={`nk-open-sidebar absoulute fixed left-0 top-0 z-[199] h-screen w-[300px]  transform space-y-3 overflow-y-auto overflow-x-hidden border border-gray-400 bg-white px-3 pb-16 shadow-xl duration-500 md:relative md:z-0 md:block md:h-full md:w-1/4 md:translate-x-0 md:py-4 ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`} >
            <div className="hover:text-primary block p-2 text-right text-lg md:hidden" onClick={toggleFilter} >
              <div className="bg-gold inline-block w-20 cursor-pointer space-x-2 rounded py-2 text-center text-xs font-semibold text-gray-50">
                <span>
                  <i className="fas fa-check" />
                </span>
                <span>ປິດອອກ</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Delivery - Start */}
              <div id="hippingFilter" className="space-y-2">
                <p className="font-semibold">ປະເພດສິນຄ້າ:</p>
                {itemTile.map((val, key) =>

                  <div key={val.tile_uuid} className="flex items-center">
                    <input
                      type="radio"
                      name="radio"
                      onChange={() => typeFilter(val.tile_uuid)}
                      className="nk-checkbox-input"
                      checked={typeId === val.tile_uuid ? 'checked' : ''}
                    />
                    <label className="nk-checkbox-label">
                      <i className="fa-solid fa-angle-right" /> {val.tile_name}
                    </label>
                  </div>


                )}

              </div>

            </div>
            {/* Border Separator - Start*/}
            <div className="w-full border-b border-gray-400 py-2" />

            <div className="w-full">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100064645995670"
                data-tabs="timeline"
                data-width="280"
                data-height="400"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
              </div>
            </div>
            {/* Tags - End */}
            {/* Top Rated Products - Start */}
            <div className="block space-y-5 border border-gray-400 bg-white p-3 md:hidden lg:block">
              <div className="flex items-center justify-between">
                <span className="font-semibold">ປະເພດສິນຄ້າ</span>
                <span className="cursor-pointer text-xs text-blue-700 underline" />
              </div>
              {itemTile.map((val, key) =>
                <div className="flex flex-row space-x-4 text-xs">
                  <div className="w-2/12" role='button' onClick={() => handleLink(val.tile_uuid)}>
                    <img className="h-10 w-10 object-contain"
                      src={`${img}title/${val.title_image}`} alt="" />
                  </div>
                  <div className="w-6/12">
                    <Link className="space-y-1 lg:block" to={'/pdc?p=' + val.tile_uuid}>
                      <p className='fs-16px'>{val.tile_name}</p>
                      <div>{val.title_detail}</div>
                    </Link>
                  </div>
                </div>

              )}

            </div>
          </div>
          <DataPattern type={typeId} />

        </div>
        {/* Recommendation */}

      </div>
      <div id="" className=' p-2 bg-vkg'>
        <div className="mx-auto mt-3 w-full sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
          <div className="h-96">
            <div className="md:flex md:flex-row">
              <div className="mr-7 hidden h-96 cursor-pointer lg:block lg:w-3/12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {itemPromotion.map((item, index) => (
                    <SwiperSlide>
                      <img className="h-full w-full object-fill"  src={`${img}promotion/${item.pro_image}`} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mx-auto sm:w-full lg:w-9/12 xl:max-w-7xl">
                <div className="flex flex-row justify-between">
                  <h1 className="ont-bold md:text-2xl text-white">ຄໍາແນະນໍາຂອງພວກເຮົາ</h1>
                  <Link to={'/recomend'} className="cursor-pointer hover:underline fs-16px text-white">
                    ເບີ່ງທັງໝົດ...
                    <span className='ms-2'>
                      <i className="fas fa-caret-right" />
                    </span>
                  </Link>
                </div>
                {/* Our Recommendation - Start */}
                <div className="nk-swiper-container">
                  <div className=" nk-recommends-swiper">
                    <div className="swiper-wrapper">
                      <SliderRecomende />
                    </div>
                  </div>

                </div>
                {/* Our Recommendation - End */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PatternPages
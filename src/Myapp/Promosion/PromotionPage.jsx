import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SliderType from '../product/SliderType'
// import axios from 'axios';
// import numeral from 'numeral';

import Card from 'react-bootstrap/Card';
import { Config, Urlimage } from '../../Config/connection';
import LightGallery from 'lightgallery/react';
function PromotionPage() {

  const api = Config.urlApi;
  const img = Urlimage.url;

  const [isloading, setIsLoading] = useState(true);
  const [itemPromotion, setItemPromotion] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const fetchPormotion = async () => {
    try {
      const response = await fetch(api + 'promotion/');
      const jsonData = await response.json();
      setItemPromotion(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false)
    }
  }

  const Showmore = () => {
    setLimit(limit + 12); // Increase the limit by 12 each time
  };

  useEffect(() => {
    fetchPormotion();
  }, [])
  return (
    <>
      <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
        <div className=" text-sm">
          <span className="text-blue-700 hover:underline">
            <Link to={'/'}>ໝ້າຫຼັກ</Link>
          </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <span>ໂປຣໂມຊັ່ນ</span>
        </div>

        <div className="mx-auto mt-2 w-full px-4 text-base sm:w-full">
          <div className="nk-swiper-container">
            <div className="swiper nk-categ-swiper">
              <SliderType />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full px-4 sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
          <div id="sponsoredItems">
            <div className="mt-7 space-y-1">
              <h1 className="text-sm font-semibold sm:text-2xl">ໂປຣໂມຊັ່ນ</h1>
              {isloading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ):(
                
             
              <LightGallery>
                {itemPromotion.slice(0, 1).map((val, index) =>
                  <a href='javascript:;'
                    data-pinterest-text="Pin it2"
                    data-tweet-text="lightGallery slide  2"
                    className="gallery__item" data-src={`${img}promotion/${val.pro_image}`} data-sub-html={val.promotion_title}>
                    <img src={`${img}promotion/${val.pro_image}`} alt="" />
                  </a>
                )}
              </LightGallery>
               )}
            </div>
          </div>
        </div>


        <div className="mx-auto mt-8 px-4 mt-1 sm:px-6 xl:max-w-7xl xl:px-2">
          <div className="row flex h-full w-full flex-wrap" >
            {itemPromotion.slice(1, limit).map((val, index) =>
              <>
                <div key={index} className={`px-2 col-6  ${itemPromotion.length > 3 ? 'col-sm-4' : 'col-sm-6'}`}>
                  <LightGallery>
                    <a href='javascript:;' className="gallery__item" data-src={`${img}promotion/${val.pro_image}`} data-sub-html={val.promotion_title}  >
                      <Card>
                        <Card.Img variant="top" className='h-50 w-full' src={`${img}promotion/${val.pro_image}`} />
                        <Card.Body>
                          <Card.Title>{val.promotion_title}</Card.Title>
                          <Card.Text>
                            {val.promotion_detail}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </LightGallery>
                </div>
              </>
            )}
          </div>
        </div>
        {itemPromotion.length > limit && (
          <div className="border rounded-pill text-center p-2" role='buttom'> <a href="javascript:;" onClick={() => Showmore(12)} className='text-red'>ສະແດງເພີ່ມເຕີ່ມ....</a> </div>
        )}
      </div>
    </>
  )
}

export default PromotionPage
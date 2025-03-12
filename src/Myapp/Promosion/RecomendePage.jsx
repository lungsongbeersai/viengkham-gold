import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTitle, useTypesOtion } from '../../Config/select-option';
import { Card, Row, Col } from 'react-bootstrap';
import { Config, Urlimage } from '../../Config/connection';
// import SliderPattern from './SliderPattern';
import SliderPattern from '../Pattern/SliderPattern';
import numeral from 'numeral';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ViewRecomend from './ViewRecomend';
function RecomendePage() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const itemOption = useTypesOtion();
  const itemTiles = useTitle();


  const [dataFilter, setDataFilter] = useState([])
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemRecomende, setItemRecomende] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchRecomende = async () => {
    try {
      const response = await fetch(api + 'recd/');
      const jsonData = await response.json();
      setItemRecomende(jsonData);
      setDataFilter(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemRecomende.slice(indexOfFirstItem, indexOfLastItem);

  // ==================
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemRecomende.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState('')
  const handleFilter = (event) => {
    setActive(event)
    setItemRecomende(dataFilter.filter(n => n.title_id_fk.toLowerCase().includes(event)))
  }

  const [itemPromotion, setItemPromotion] = useState([]);
  const fetchPormotion = async () => {
    try {
      const response = await fetch(api + 'promotion/limit/'+5);
      const jsonData = await response.json();
      setItemPromotion(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleView = (item) => {
    setShow(true);
    setData(item)
  }

  useEffect(() => {
    fetchPormotion()
    fetchRecomende();
  }, [])
  return (
    <>
      <div id="newArrival">
        <div className="mx-auto w-full py-3 px-4 text-sm sm:px-6 md:px-8 lg:px-12 xl:max-w-7xl xl:px-0 fs-15px">
          <span className="text-blue-700 hover:underline">
            <Link to={'/'}>ໜ້າຫຼັກ</Link>
          </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <span>ສິນຄ້າແນະນຳ</span>
        </div>

        <div className="mx-auto mt-1 w-full px-2 sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
          <div className="flex flex-col justify-center sm:justify-between md:flex-row md:items-center">
            <h4 className="text-base font-bold uppercase fs-18px"> ລາຍການສິນຄ້າແນະນຳ</h4>
            <div className="hidden justify-center md:flex md:flex-row md:space-x-4 md:text-sm" >
              <div onClick={() => handleFilter('')} className={`${active ? 'hover:text-primary' : 'new-active'}  cursor-pointer`} >
                ທັງໝົດ
              </div>
              {itemTiles.map((rols, index) => (
                <div onClick={() => handleFilter(rols.tile_uuid)} className={`${active === rols.tile_uuid ? 'new-active' : 'hover:text-primary'} cursor-pointer`}>{rols.tile_name}</div>
              ))}
            </div>
          </div>
          <div className="nk-swiper-container">
            <div className="px-2 nk-new-swiper">
              <div className="swiper-wrapper">
                <Row>
                  {currentItems.map((item, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} className='px-1 mb-1'>
                      <Card className='group  flex-grow xl:flex-shrink xl:flex-grow-0 xl:overflow-hidden'>
                        <div className=" overflow-hidden">
                          <div className="absolute left-0 top-2 bg-orange text-xs font-bold uppercase text-white/90 sm:text-sm">
                            <span className="p-1">{item.qty_baht + ' ' + item.option_name}</span>
                          </div>
                          <div className="mx-auto w-full bg-no-repeat md:w-full">
                            <Card.Img variant="top" role='button' onClick={() => handleView(item)} className='h-full w-full object-cover text-xs md:h-full md:w-full'
                              src={`${img}pos/${item.recd_image}`} />
                          </div>
                          <Card.Body>
                            <div className="product-name line-clamp-1 cursor-pointer text-sm text-gray-700 hover:underline">
                              <a href="javascript:void(0)">
                                <p>{item.recomennde_name}</p>
                              </a>
                            </div>
                            <div>
                              <a className="flex items-center justify-between text-xs" href="javascript:void(0)"  >
                                <span className="text-primary">
                                  <span className="font-semibold text-gray-700">{item.tile_name}</span>
                                </span>
                                <span className="text-red-600 hover:underline">({item.qty_baht + ' ' + item.option_name})</span>
                              </a>
                            </div>
                            <span className="text-sm font-extrabold sm:text-lg">
                              {numeral(item.price_sale * item.qty_baht).format('0,00')} ₭
                            </span>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-row items-center justify-center py-7">
          <span className="px-3"><a href="javascript:void(0)" className={`${currentPage === 1 && 'disabled'}`} onClick={() => setCurrentPage(currentPage - 1)}><i className="fas fa-chevron-left"></i></a ></span>
          <span className="space-x-3">
            {pageNumbers.map(number => (
              <a className={`rounded px-2 py-1 ${currentPage === number ? 'bg-orange text-gray-50' : 'hover:bg-primary-300 hover:text-gray-50'}`} href="javascript:void(0)" onClick={() => setCurrentPage(number)}>{number}</a>
            ))}
          </span>
          <span className="hover:text-primary-800 px-3" ><a href="javascript:void(0)" className={`${currentPage === pageNumbers.length && 'disabled'}`} onClick={() => setCurrentPage(currentPage + 1)}><i className="fas fa-chevron-right"></i></a ></span>
        </div>
      </div>
      {/* Recommendation */}
      <div id="UpSell" className='bg-vkg py-1'>
        <div className="mx-auto mt-12 w-full sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
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
                  {itemPromotion.slice(0, 10).map((item, index) => (
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-fill"
                        src={`${img}promotion/${item.pro_image}`}
                        alt=""
                      /> 
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="mx-auto sm:w-full lg:w-9/12 xl:max-w-7xl">
                <div className="flex flex-row justify-between">
                  <h1 className="ont-bold text-white md:text-2xl">ລວດລາຍ ພະລິດຕະພັນ ຮ້ານຄຳ ນາງວຽງຄຳ</h1>
                  <Link to={'/pattern'} className="cursor-pointer hover:underline text-white">
                    ເບີ່ງທັງໝົດ..
                    <span className='px-2'>
                      <i className="fas fa-caret-right" />
                    </span>
                  </Link>
                </div>
                <div className="nk-swiper-container">
                  <div className=" nk-recommends-swiper">
                    <SliderPattern colum={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ViewRecomend show={show} handleClose={()=>setShow(false)} data={data} />
    </>
  )
}

export default RecomendePage
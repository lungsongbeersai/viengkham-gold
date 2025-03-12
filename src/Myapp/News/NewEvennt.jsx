import './app.min.css'
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Config, Urlimage } from '../../Config/connection';
import Loading from '../../Layout/Loading';
import moment from 'moment/moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function NewEvennt() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const [itemNew, setItemNew] = useState([]);
  const [isloading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const fetchNewEvent = async () => {
    try {
      const response = await fetch(api + 'news/');
      const jsonData = await response.json();
      setItemNew(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false)
    }
  }

  const [itemTiles, setItemTiles] = useState([]);
  const fetchTile = async () => {
    try {
      const response = await fetch(api + 'tileps/');
      const jsonData = await response.json();
      setItemTiles(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const [itemPromotion, setItemPromotion] = useState([]);
  // const limit = 50;
  // const fetchPormotion = async () => {
  //   try {
  //     const response = await fetch(api + 'promotion/');
  //     const jsonData = await response.json();
  //     setItemPromotion(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }


  useEffect(() => {
    fetchTile();
    fetchNewEvent();
    // fetchPormotion();
  })

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(itemNew.length / itemsPerPage)));
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const displayedItems = itemNew.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,          // Enable autoplay
  //   autoplaySpeed: 3000,
  // };


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
          <span>ລາຍການສິນຄ້າທັງໝົດ</span>
        </div>
        <div className="content  mt-1">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-9">
                {isloading === true ? (
                  <div className="text-center">
                    <Loading
                      size="large"
                      text="ກຳລັງໂຫລດ..."
                      textColor="#f12424" // Set the image source here
                    />
                  </div>
                ) : (
                  <>
                    <div className="post-list  row">
                      {displayedItems.map((item, index) => (
                        <div className="post-li col-sm-6">
                          <div className="post-content  border">
                            <div className="post-image mb-1">
                              {item.img_list.length > 1 ? (
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                  {item.img_list.map((val, key) => (
                                    <SwiperSlide>
                                      <div className="post-image-cover w-100" style={{ backgroundImage: `url(${img}potstnew/${val.img_list})` }} />
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              ) : (
                                item.img_list.map((val, key) =>
                                <div className="post-image-cover w-100" style={{ backgroundImage: `url(${img}potstnew/${val.img_list})` }} />
                              ))}
                            </div>
                            <div className="post-info  px-2">
                              <h4 className="post-title ">
                                <Link to={'/nd?v=' + btoa(item.event_id)}>{item.titleName}</Link>
                              </h4>
                              <div className="post-by">
                                Date <span className="divider">|</span> {moment(item.newDate).format('DD /MM /YYYY')}
                              </div>
                              <div className="post-desc w-100">
                                <div className="text-new">
                                  <span dangerouslySetInnerHTML={{ __html: item.newText }}></span>
                                </div>
                              </div>
                              <div className="read-btn-container">
                                <Link to={'/nd?v=' + btoa(item.event_id)} className="read-btn fs-15px text-red px-2">ອ່ານເພີ່ມເຕີມ.. <i className="fa fa-angle-double-right"></i></Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>


                    <div className="section-container">
                      <div className="pagination-container">

                        <ul className="pagination justify-content-center">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" href="javascript:;" onClick={handlePrevPage}>Prev</a>
                          </li>
                          {[...Array(Math.ceil(itemNew.length / itemsPerPage)).keys()].map(pageNumber => (
                            <li key={pageNumber + 1} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                              <a className="page-link" href="javascript:;" onClick={() => handlePageClick(pageNumber + 1)}>{pageNumber + 1}</a>
                            </li>
                          ))}
                          <li className={`page-item ${currentPage === Math.ceil(itemNew.length / itemsPerPage) ? 'disabled' : ''}`}>
                            <a className="page-link" href="javascript:;" onClick={handleNextPage}>Next</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

              </div>
              <div className="col-lg-3 ">
                <div className='sticky top-24 xl:top-5'>
                  <div className="section-container">
                    <div className="input-group sidebar-search">
                      <input type="text"
                        className="form-control" placeholder="Search Our Stories..." />
                      <button className="btn btn-dark" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                  <div className="section-container">
                    <h4 className="section-title fs-16px">
                      <span>ຂາວສານ ສາລະນາຮູ້</span>
                    </h4>
                    <ul className="sidebar-recent-post">
                      {itemNew.slice(0, 10).map((item, index) => (
                        <li key={index}>
                          <div className="info">
                            <h4 className="title fs-18px"><Link to={'/nd?v=' + btoa(item.event_id)}>{item.titleName}</Link></h4>
                            <div className="date">{moment(item.newDate).format('DD/MM/YYYY')}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className="section-container">
                    <h4 className="section-title fs-16px">
                      <span>ປະເພດພະລິດຕະພັນ</span>
                    </h4>
                    <ul className="sidebar-list pt-1">
                      {itemTiles.map((row, index) => (
                        <li key={index} className='fs-15px'><Link to={'/pdc?p' + row.tile_uuid}><i className="fa-solid fa-angle-right" /> {row.tile_name} ({row.qty_stock})</Link></li>
                      ))}
                    </ul>
                  </div>

                  <div className="section-container">
                    <h4 className="section-title">
                      <span>Follow Us</span>
                    </h4>
                    <ul className="sidebar-social-list">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default NewEvennt
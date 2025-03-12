import React, { useState, useEffect } from 'react';
import { Config, Urlimage } from '../../Config/connection';
import { Link, useLocation } from 'react-router-dom';
import SliderType from '../product/SliderType'
import axios from 'axios';
import numeral from 'numeral';
import ViewProduct from './ViewProduct';
import SliderRecomende from '../Promosion/SliderRecomende';
import Loading from '../../Layout/Loading';
function ProductCartory() {
  const api = Config.urlApi;
  const img = Urlimage.url;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartId = searchParams.get('p');

  // const [itemTiles, setItemTiles] = useState([]);
  // const fetchTile = async () => {
  //   try {
  //     const response = await fetch(api + 'posd/group');
  //     const jsonData = await response.json();
  //     setItemTiles(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  const [loading, setLoading] = useState(true);
  const [itemProduct, setItemProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // const [dataFilter, setDataFilter] = useState([]);
  const fetchProduct = async () => {
    setLoading(true)
    try {
      const response = await axios.get(api + 'posd/type/'+cartId);
      setItemProduct(response.data);
      setDataFilter(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  };

  // const handleFilter = (event) => {
  //   setItemProduct(dataFilter.filter(n => n.option_name.toLowerCase().includes(event)))
  // }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = itemProduct.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(itemProduct.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
// =====================


const [itemPromotion, setItemPromotion] = useState([]);
const fetchPormotion = async () => {
    try {
        const response = await fetch(api + 'promotion/limit/'+1);
        const jsonData = await response.json();
        setItemPromotion(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const [titleName, setTitleName] = useState('dd');
useEffect(() => {
  if (itemProduct.length > 0 && cartId) {
      const foundItem = itemProduct.find(item => item.tiles_id_fk === cartId);
      if (foundItem) {
          setTitleName(foundItem.tile_name); 
      }
  }
}, [itemProduct, cartId,titleName]);

  useEffect(() => {
    fetchProduct();
    // fetchTile();
    fetchPormotion();
    
  }, [cartId])





  const [show, setShow] = useState(false);
  const [data, setData] = useState({})
  const veiewProduct = (data) => {
    setData(data)
    setShow(true)
  }
  return (
    <>
      <div className="mx-auto w-full py-3 px-2 text-sm md:px-6 xl:max-w-7xl xl:px-4">
        <div id="nav-link-top">
          <div className="py-3 text-sm">
            <span className="text-blue-700 hover:underline">
              <a href="/">ໜ້າຫຼັກ</a>
            </span>
            <span className='px-2'>
              <i className="fas fa-chevron-right text-xs" />
            </span>
            <span>
              <Link to={'/product'}>ລາຍການສິນຄ້າ</Link>
                </span>
            <span className='px-2'>
              <i className="fas fa-chevron-right text-xs" />
            </span>
            <span>{titleName} </span>
          </div>
        </div>
        <div id="shop-grid-left">
          <div className="mt-2 flex flex-col space-x-0 text-sm">
            <div className="w-full space-y-3 sm:ml-0">
              {/* List of Categories */}
              <div className="hidden border border-gray-400 bg-white p-1 px-3 sm:block">
                <p className="font-semibold">ປະເພດສິນຄ້າ</p>
                <div className="nk-swiper-container mt-1">
                  <SliderType />
                </div>
                {/* Categories - End */}
              </div>
              <div className="w-full border border-gray-400 bg-white">
                <div className="flex items-center justify-between p-3">

                  <div className="flex flex-row items-center space-x-2">
                    <span className="hidden font-semibold sm:block">Sort By:</span>
                    <span>
                      <select className="focus:border-primary-500 focus:ring-primary-500 w-40 rounded border bg-gray-200 py-1 px-2 outline-none"  >
                        <option>ແນະນຳ / Featured</option>
                        <option>ມາໃໝ່ / New Arrivals</option>
                        <option>ສິນຄ້າຂາຍດີທີ່ສຸດ / Best Sellers</option>
                        <option>ລາຄາ: ສູງ-ຕໍ່າ / High - Low</option>
                        <option>ລາຄາ: ຕໍ່າ-ສູງ / Low - High</option>
                      </select>
                    </span>
                  </div>
                  
                </div>
                {/* Border Separator - Start */}
                <div className="w-full border-b border-gray-400 " />
                {loading ? (
                  <div className='text-center p-5'>
                    <Loading size="large"
                      text="ກຳລັງໂຫລດ..."
                      textColor="#f12424" />
                  </div>
                ) : (
                  <div className="my-1 grid grid-cols-2 gap-y-8 gap-x-2.5 px-2 sm:grid-cols-6 md:grid-cols-6 lg:gap-x-4 xl:grid-cols-6" >
                    {currentProducts.map((item, index) => (

                      <div className="group rounded border border-gold pb-0 lg:pb-1">
                        <div className="relative w-full cursor-pointer"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)} >
                          <img className="mx-auto my-auto h-full w-full object-contain text-xs rounded"
                            src={`${img}${item.file_image !== '' ? 'pos/' + item.file_image : 'title/' + item.title_image}`} alt="" />
                          <div
                            className={`bg-primary/30 absolute inset-0 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} >
                            <div className="my-auto mx-auto flex h-full w-full flex-col items-center justify-center space-y-3 px-3">
                              <div className="flex flex-row items-center justify-center space-x-2 px-2 text-center">

                                <div className="hover:bg-danger h-10 w-10 bg-white p-2 hover:text-gray-50" >
                                  <i className="far fa-heart" />
                                </div>
                                <div className="hover:bg-danger h-10 w-10 bg-white p-2 hover:text-gray-50" onClick={() => veiewProduct(item)} >
                                  <i className="fa-regular fa-eye" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='p-1'>
                          <div className="xs:text-sm text-left text-xs">
                            <div className="space-y-1">
                              <div className="mt-2">
                                <h5 className="line-clamp-1 cursor-pointer font-normal text-gold hover:underline">
                                  <a href="javascript:void(0);" className='text-dark'>
                                    {item.tile_name + ' ' + item.qty_baht + ' ' + item.option_name} 
                                  </a>
                                </h5>
                              </div>
                              <div className="font-semibold text-end">
                                <span className="text-lg text-gray-900">{numeral(item.price_sale * item.grams).format('0,00')} ₭</span>
                              </div>
                              <div>
                                <a
                                  className="flex items-center justify-between"
                                  href="javascript:void(0);"
                                >
                                  <span className="text-yellow-400">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </span>
                                  <span className="text-xs text-blue-700 hover:underline">
                                    (5)
                                  </span>
                                </a>
                              </div>
                              <div>
                                <p className='line-clamp-1'>
                                  {item.porduct_detail}
                                </p>
                              </div>
                              {/* <div className="py-1 ">
                              <a href="cart.html" >
                                <span className="btn btn-bg-slide bg-gold btn-full rounded-pill text-white text-center">
                                  ເພີ່ມໃສ່ກະຕ່າ
                                </span>
                              </a>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>
                )}
              </div>


              {/* Pagination - Start */}
              <div className="flex flex-row items-center justify-center py-7">
                <span className={`px-3 ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-danger'}`}>
                  <a href="javascript:;" onClick={prevPage} className={`${currentPage === 1 ? '' : 'text-red'}`}>
                    <i className="fas fa-chevron-left" />
                  </a>
                </span>

                <span className="space-x-3 text-red">
                  {[...Array(Math.ceil(itemProduct.length / itemsPerPage))].map((_, index) => (
                    <a
                      key={index}
                      href="javascript:;"
                      onClick={() => setCurrentPage(index + 1)}
                      className={`${currentPage === index + 1 ? 'bg-danger text-gray-50' : 'hover:bg-primary-300 hover:text-gray-50'
                        } rounded px-2 py-1`}
                    >
                      {index + 1}
                    </a>
                  ))}
                </span>
                <span className={`px-3 ${currentPage === Math.ceil(itemProduct.length / itemsPerPage) ? 'cursor-not-allowed text-gray-400' : 'text-danger'}`}>
                  <a href="javascript:;" onClick={nextPage} className={`${currentPage === Math.ceil(itemProduct.length / itemsPerPage) ? '' : 'text-red'}`}>
                    <i className="fas fa-chevron-right" />
                  </a>
                </span>

              </div>
              {/* Pagination - End */}

              <ViewProduct
                show={show}
                handleClose={() => setShow(false)}
                data={data}
              />

            </div>
          </div>
        </div>
        {/* Recommendation */}

      </div>

      <div className="mx-auto px-4 mt-2 p-3  w-full bg-vkg  md:block">
        <div className="h-96">
          <div className="md:flex md:flex-row">
            <div className="mr-7 hidden h-96 cursor-pointer lg:block lg:w-3/12">
            {itemPromotion.map((item)=>(
              <img
                className="h-full w-full object-fill"
                src={`${img}promotion/${item.pro_image}`}
                alt=""
              />
            ))}
            </div>
            <div className="mx-auto sm:w-full lg:w-9/12 xl:max-w-7xl">
              <div className="flex flex-row justify-between">
                <h1 className="ont-bold md:text-2xl">ສິນຄ້າແນະນໍາຂອງພວກເຮົາ </h1>
                <Link to={'/recomend'} className="cursor-pointer hover:underline text-white fs-16px">
                  ເບີ່ງທັງໝົດ
                  <span className='px-1'>...
                    <i className="fas fa-caret-right" />
                  </span>
                </Link>
              </div>
              <div className="nk-swiper-container">
                <div className=" nk-recommends-swiper">
                  <SliderRecomende />
                </div>
                <div className="nk-pagination">
                  <div className="nk-swiper-bought-pag" />
                </div>
              </div>
              {/* Our Recommendation - End */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCartory
import React, { useState, useEffect } from 'react'
import SliderType from '../product/SliderType'
import { Config, Urlimage } from '../../Config/connection';
import axios from 'axios';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { useTitle, useTypesOtion } from '../../Config/select-option';
import SliderRecomende from '../Promosion/SliderRecomende';
import Loading from '../../Layout/Loading';
function ProductList() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const itemTiles = useTitle();
  const itemoPtion = useTypesOtion();

  const [values, setValues] = useState({
    tiles_id_fk: '',
    option_id_fk: '',
    tiles_idfk: '',
  });
  const [loading, setLoading] = useState(true);
  const [itemProduct, setItemProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataFilter, setDataFilter] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const itemsPerPage = 10;
  const [selectedFilters, setSelectedFilters] = useState([]);
  const fetchProduct = async () => {
    // setLoading(true)
    try {
      const response = await axios.post(api + 'posd/', values);
      setItemProduct(response.data);
      setDataFilter(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  };
  const filteredProducts = itemProduct.filter(product =>
    selectedFilters.length === 0 || selectedFilters.includes(product.tiles_id_fk)
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);



  const handleFilter = (tileUuid) => {
    const newSelectedTiles = selectedTiles.includes(tileUuid)
      ? selectedTiles.filter((id) => id !== tileUuid) // Remove if already selected
      : [...selectedTiles, tileUuid]; // Add if not selected

    setSelectedTiles(newSelectedTiles);
    filterProducts(newSelectedTiles); // Filter products based on the selected filters
  };

  const filterProducts = (filters) => {
    if (filters.length === 0) {
      setItemProduct(dataFilter);
    } else {
      const filteredData = dataFilter.filter((product) =>
        filters.includes(product.tiles_id_fk) // Adjust the field to match your product data
      );
      setItemProduct(filteredData);
    }
  };
  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  useEffect(() => {
    fetchProduct();
  },[currentPage])
  return (
    <>
      <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
        <div >
          <div className="py-3 text-sm">
            <span className="text-blue-700 hover:underline">
              <Link to={'/'}>ໝ້າຫຼັກ</Link>
            </span>
            <span className='px-2'>
              <i className="fas fa-chevron-right text-xs" />
            </span>
            <span>ລາຍການສິນຄ້າທັງໝົດ</span>
          </div>
        </div>
        <div id="shop-grid-left" className='mt-1'>
          <div className="block border border-gray-400 bg-white p-0 md:hidden">
            <div className="inline-flex w-full items-center space-x-2">
              <span className="font-semibold">Apply:</span>
              <div className="bg-primary-600 inline-block w-20 cursor-pointer rounded py-2 text-center text-xs font-semibold text-gray-50" >
                <span>Filters</span>
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
          {/* Filter Small Device button - End */}
          <div className="mt-2 flex flex-col space-x-0 text-sm md:flex-row md:space-x-4">
            {/* Filter Section - Start */}
            <div className="nk-open-sidebar absoulute fixed left-0 top-0 z-[199] h-screen w-[300px] -translate-x-full transform space-y-3 overflow-y-auto overflow-x-hidden border border-gray-400 bg-white px-3 pb-16 shadow-xl duration-500 md:relative md:z-0 md:block md:h-full md:w-1/4 md:translate-x-0 md:py-4" >
              <div className="hover:text-primary block p-2 text-right text-lg md:hidden"
                data-close-sidebar="#product-filter"  >
                <div className="bg-primary-600 inline-block w-20 cursor-pointer space-x-2 rounded py-2 text-center text-xs font-semibold text-gray-50">
                  <span>
                    <i className="fas fa-check" />
                  </span>
                  <span>Done</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Filter By </span>
                <span className="cursor-pointer text-xs text-blue-700 underline">
                  Clear All
                </span>
              </div>
              <div className="space-y-4">
                {/* Delivery - Start */}
                <div id="hippingFilter" className="space-y-2">
                  <p className="font-semibold">ລາຍການປະເພດສິນຄ້າ:</p>
                  {itemTiles.map((item, key) => (
                    <div className="flex items-center">
                      <input type="checkbox" onChange={() => handleFilter(item.tile_uuid)} checked={selectedTiles.includes(item.tile_uuid)} className="nk-checkbox-input" />
                      <label htmlFor="freeShippingId" className="nk-checkbox-label">
                        {item.tile_name}
                      </label>
                    </div>
                  ))}
                </div>
                <div id="brandFilter" className="space-y-2">
                  <p className="font-semibold">ນ້ຳໜັກ:</p>
                  <div className="flex items-center">
                    <input type="radio" className="nk-checkbox-input" name='option' value={'1'} />
                    <label htmlFor="brandZara" className="nk-checkbox-label"> All</label>
                  </div>
                  {itemoPtion.map((item, key) => (
                    <div key={key} className="flex items-center">
                      <input type="radio" className="nk-checkbox-input" name='option' value={item.option_id} />
                      <label htmlFor="brandZara" className="nk-checkbox-label"> {item.option_name}</label>
                    </div>
                  ))}
                </div>

              </div>
              {/* Border Separator - Start*/}
              <div className="w-full border-b border-gray-400 py-2" />
              {/* Border Separator - End*/}
              {/* Tags - Start */}
              <div className="my-3 space-y-3 border border-gray-400 bg-white p-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Tags</span>
                  <span className="cursor-pointer text-xs text-blue-700 underline" />
                </div>
                <div className="flex flex-row flex-wrap space-x-2 text-xs">
                  <div className="py-2">
                    <a className="search-tags" href="#">

                      NEW ARRIVALS
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      SOCIAL
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      BOOKS
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      TECH
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      NIKE
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      APPLE
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      IPHONE
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      SAMSUNG
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      CAMERA
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      LAPTOPS
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      DESKTOP
                    </a>
                  </div>
                  <div className="py-2">
                    <a className="search-tags" href="#">
                      X DELL
                    </a>
                  </div>
                </div>
              </div>
              {/* Tags - End */}
              {/* Top Rated Products - Start */}
              <div className="block space-y-5 border border-gray-400 bg-white p-3 md:hidden lg:block">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Top Rated Products</span>
                  <span className="cursor-pointer text-xs text-blue-700 underline" />
                </div>
                <div className="flex flex-row space-x-4 text-xs">
                  <div className="w-2/12">
                    <img
                      className="h-10 w-10 object-contain"
                      src="assets/img/products/fashion/shoes/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-6/12">
                    <a className="space-y-1 lg:block" href="javascript:void(0)">
                      <p>Nike Air Force</p>
                      <p className="font-semibold">$149.99</p>
                    </a>
                  </div>
                  <div className="w-4/12">
                    <a className="space-y-1" href="javascript:void(0)">
                      <div className="flex flex-row space-x-2 text-right lg:flex-col">
                        <p className="text-yellow-400">
                          <i className="fas fa-star" />
                        </p>
                        <p className="text-xs text-blue-700 hover:underline">
                          (8928)
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 text-xs">
                  <div className="w-2/12">
                    <img
                      className="h-10 w-10 object-contain"
                      src="assets/img/products/fashion/shoes/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-6/12">
                    <a className="space-y-1 lg:block" href="javascript:void(0)">
                      <p>Pure red Nike Air Force</p>
                      <p className="font-semibold">$169.99</p>
                    </a>
                  </div>
                  <div className="lg:w-4/12">
                    <a className="space-y-1" href="#">
                      <div className="flex flex-row space-x-2 text-right lg:flex-col">
                        <p className="text-yellow-400">
                          <i className="fas fa-star" />
                        </p>
                        <p className="text-xs text-blue-700 hover:underline">
                          (5628)
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 text-xs">
                  <div className="w-2/12">
                    <img
                      className="h-10 w-10 object-contain"
                      src="assets/img/products/fashion/men/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-6/12">
                    <a className="space-y-1 lg:block" href="#">
                      <p>Men's Clothing</p>
                      <p className="font-semibold">$49.99</p>
                    </a>
                  </div>
                  <div className="lg:w-4/12">
                    <a className="space-y-1" href="#">
                      <div className="flex flex-row space-x-2 text-right lg:flex-col">
                        <p className="text-yellow-400">
                          <i className="fas fa-star" />
                        </p>
                        <p className="text-xs text-blue-700 hover:underline">
                          (1974)
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Top Rated Products - End */}
              <div
                className="block px-4 py-6 md:hidden"
                data-close-sidebar="#product-filter"
              >
                <div className="nk-mob-close">
                  <i className="fas fa-times" /> Close
                </div>
              </div>
            </div>
            <div className="w-full space-y-3 sm:ml-0 md:w-3/4">
              {/* List of Categories */}
              <div className="hidden border border-gray-400 bg-white p-2 sm:block">
                <p className="font-semibold fs-18px">ປະເພດສິນຄ້າ</p>
                {/* Categories - Start */}
                <div className="nk-swiper-container mt-1">
                  <SliderType />
                </div>
                {/* Categories - End */}
              </div>
              <div className="border border-gray-400 bg-white">
                <div className="flex items-center justify-between p-3">
                  <div className="flex flex-row items-center space-x-0 sm:space-x-2">
                    <span className="hidden font-semibold sm:block">Sort By:</span>
                    <span>
                      <select
                        className="focus:border-primary-500 focus:ring-primary-500 w-40 rounded border bg-gray-200 py-1 px-2 outline-none"
                        id="sort-by"
                      >
                        <option>ແນະນຳ / Featured</option>
                        <option>ມາໃໝ່ / New Arrivals</option>
                        <option>ສິນຄ້າຂາຍດີທີ່ສຸດ / Best Sellers</option>
                        <option>ລາຄາ: ສູງ-ຕໍ່າ / High - Low</option>
                        <option>ລາຄາ: ຕໍ່າ-ສູງ / Low - High</option>
                      </select>
                    </span>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <span className="hidden font-semibold sm:block">View By:</span>
                    <div>
                      <a href="/product">
                        <span
                          id="gridView"
                          className="resultGridView  cursor-pointer rounded border border-gray-400  py-1 px-2"
                        >
                          <i className="fas fa-columns" />
                        </span>
                      </a>
                    </div>
                    <div>
                      <a href="javascript:void(0)">
                        <span
                          id="listView"
                          className="resultListView text-primary-800 cursor-pointer rounded border border-gray-400 bg-gray-200  py-1 px-2"
                        >
                          <i className="fas fa-list" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Border Separator */}
                <div className="w-full border-b border-gray-400" />
                {/* Border Separator */}
                <div>
                  {loading ? (
                    <div className='text-center p-5'>
                      <Loading size="large"
                        text="ກຳລັງໂຫລດ..."
                        textColor="#f12424" />
                    </div>
                  ) : (
                    <div className="my-5 grid grid-flow-row grid-cols-2 grid-rows-1 gap-x-2.5 gap-y-0 px-3 sm:grid-cols-1 sm:gap-y-5">
                      {/* List Item 1 - Start */}
                      {currentProducts.map((item, index) => (
                        <div className="group flex flex-col space-x-0 py-3 sm:flex-row sm:space-x-6">
                          <div className="relative mx-auto w-full sm:h-52 sm:w-2/6 lg:w-1/4">
                            <img
                              className="h-full w-full object-contain"
                              src={`${img}${item.file_image !== '' ? 'pos/' + item.file_image : 'title/' + item.title_image}`}
                              alt=""
                            />

                          </div>
                          <div className="w-full space-y-1 sm:w-4/6 sm:space-y-2 lg:w-3/4">
                            <a href="javascript:void(0)">
                              <span className="line-clamp-1 cursor-pointer text-sm text-blue-900 hover:underline">
                                {item.tile_name + ' ' + item.qty_baht + ' ' + item.option_name}
                              </span>
                            </a>
                            <div className="font-semibold">
                              <span className="price-value text-lg text-gray-900">
                                {numeral(item.price_sale * item.grams).format('0,00.00')} ₭
                              </span>
                            </div>
                            <div className="block">
                              <a
                                className="flex items-center justify-between"
                                href="javascript:void(0)"
                              >
                                <span className="text-yellow-300">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </span>

                              </a>
                            </div>

                            <div className="text-xs font-semibold text-green-500">
                              <p>{item.grams} g / {numeral(item.price_sale).format('0,0.000')} ₭</p>
                            </div>
                            <div className="">
                              <p>
                                {item.porduct_detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  )}
                </div>
              </div>
              {/* Pagination */}
              <div className="flex flex-row items-center justify-center py-7">
                <span className={`px-3 ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-danger'}`}>
                  <a href="javascript:;" onClick={prevPage} className={`text-red`}>
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
            </div>
            {/* List Items Section - End */}
          </div>
        </div>
        {/* Recommendation */}
        <div id="UpSell">
          <div className="mx-auto mt-12 w-full sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
            <div className="h-96">
              <div className="md:flex md:flex-row">
                <div className="mr-7 hidden h-96 cursor-pointer lg:block lg:w-3/12">
                  <img
                    className="h-full w-full object-fill"
                    src="assets/img/svg/LenovoLap.html"
                    alt=""
                  />
                </div>
                <div className="mx-auto sm:w-full lg:w-9/12 xl:max-w-7xl">
                  <div className="flex flex-row justify-between">
                    <h1 className="ont-bold md:text-2xl">ສິນຄ້າແນະນໍາຂອງພວກເຮົາ</h1>
                    <Link to={'/recomend'} className="cursor-pointer hover:underline text-red">
                      ເບີ່ງທັງໝົດ
                      <span>
                        <i className="fas fa-caret-right" />
                      </span>
                    </Link>
                  </div>
                  {/* Our Recommendation - Start */}
                  <div className="nk-swiper-container">
                    <div className=" nk-recommends-swiper">
                      <SliderRecomende />
                    </div>
                  </div>
                  {/* Our Recommendation - End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductList
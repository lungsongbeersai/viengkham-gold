import React, { useState, useEffect } from 'react'
import SliderType from '../product/SliderType'
import { Config, Urlimage } from '../../Config/connection';
import axios from 'axios';
import numeral from 'numeral';
import ViewProduct from './ViewProduct';
import { Link } from 'react-router-dom';
import { useTitle } from '../../Config/select-option';
import SliderRecomende from '../Promosion/SliderRecomende';
import Loading from '../../Layout/Loading';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function ProductGrid() {
    const api = Config.urlApi;
    const img = Urlimage.url;
    const itemTiles = useTitle();

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
    const itemsPerPage = 18;
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


    const [itemWeight, setItemWeight] = useState([]);
    const fetchWeight = async () => {
        try {
            const response = await fetch(api + 'posd/groupby');
            const jsonData = await response.json();
            setItemWeight(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const [itemPromotion, setItemPromotion] = useState([]);
    const fetchPormotion = async () => {
        try {
            const response = await fetch(api + 'promotion/limit/'+10);
            const jsonData = await response.json();
            setItemPromotion(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    // ====================================

    const [datasch, setDatasch] = useState({
        typeId: '',
    })
    const [itemPrice, setItemPrice] = useState([]);
    const fecthDataPrice = async () => {
        try {
            const response = await axios.post(api + 'price/', datasch);
            setItemPrice(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [itemoPtion, setItemoPtion] = useState([]);
    const fetchOption = async () => {
      try {
        const response = await fetch(api + 'type/option');
        const jsonData = await response.json();
        setItemoPtion(jsonData);
      } catch (error) {
        setItemoPtion([])
      }
    }
// ==================

const [itemRecomende, setItemRecomende] = useState([]);
  const fetchRecomende = async () => {
    try {
      const response = await fetch(api + 'recd/limit/'+10);
      const jsonData = await response.json();
      setItemRecomende(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


    useEffect(() => {
        fetchOption();
        fetchProduct();
        fetchPormotion();
        fetchWeight();
        fecthDataPrice();
        fetchRecomende();
    }, [currentPage])
    // =========================\\


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
    // ===========

    const [ck, setCk] = useState({
        baht: '',
        option: ''
    })
    const handleFilterWeigth = (qty_baht, option_id_fk) => {
        setCk({
            baht: qty_baht,
            option: option_id_fk
        })
        if (qty_baht === '' && option_id_fk === '') {
            setItemProduct(dataFilter);
        } else {
            setItemProduct(
                itemProduct.filter(n =>
                    n.option_id_fk.toLowerCase() === option_id_fk.toLowerCase() && n.qty_baht === qty_baht
                )
            );
        }
    }


    const filteredProducts = itemProduct.filter(product =>
        selectedFilters.length === 0 || selectedFilters.includes(product.tiles_id_fk)
    );
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

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
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const veiewProduct = (data) => {
        setData(data)
        setShow(true)
    }
    // =======================   

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <>
            {/* Fixed Bottom Mobile Menu - End */}
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

                <div id="" className='mt-1'>
                    <div className="block  bg-white  md:hidden">
                        <div className="inline-flex w-full items-center space-x-2">
                            {/* <span className="font-semibold">Apply:</span> */}
                            <div onClick={toggleFilter}
                                className="bg-primary-600 inline-block w-20 cursor-pointer rounded py-2 text-center text-xs font-semibold text-gray-50"
                            >
                                <span>Filters</span>
                                <span>
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Filter Small Device button - End */}
                    <div className="mt-1 flex flex-col space-x-0 text-sm md:flex-row md:space-x-4 ">
                        <div  className={`nk-open-sidebar absoulute fixed left-0 top-0 z-[199] h-screen w-[300px]  transform space-y-3 overflow-y-auto overflow-x-hidden border border-gray-400 bg-white px-3 pb-16 shadow-xl duration-500 md:relative md:z-0 md:block md:h-full md:w-1/4 md:translate-x-0 md:py-4 ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`} >
                            <div className="hover:text-primary block p-2 text-right text-lg md:hidden" onClick={toggleFilter}  >
                                <div className="bg-primary-600 inline-block w-20 cursor-pointer space-x-2 rounded py-2 text-center text-xs font-semibold text-gray-50">
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                    <span>Done</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {/* Delivery - Start */}
                                <div id="hippingFilter" className="space-y-2">
                                    <p className="font-semibold fs-18px">ປະເພດສິນຄ້າ:</p>
                                    {itemTiles.map((item, key) => (
                                        <div className="flex items-center">
                                            <input type="checkbox" onChange={() => handleFilter(item.tile_uuid)} checked={selectedTiles.includes(item.tile_uuid)} className="nk-checkbox-input" />
                                            <label htmlFor="freeShippingId" className="nk-checkbox-label">
                                                {item.tile_name}
                                            </label>
                                        </div>
                                    ))}

                                </div>
                                {/* Categories - End */}
                                {/* Brands - Start */}
                                <div id="brandFilter" className="space-y-2">
                                    <p className="font-semibold">ນ້ຳໜັກ:</p>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="nk-checkbox-input" />
                                        <label htmlFor="brandZara" className="nk-checkbox-label"> ບາດ</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="nk-checkbox-input" />
                                        <label htmlFor="brandHM" className="nk-checkbox-label"> ສະຫຼຶງ </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="nk-checkbox-input" />
                                        <label htmlFor="brandNike" className="nk-checkbox-label">ຫຸນ</label>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    {itemPrice.map((item, index) => (
                                        <>
                                            <p className="font-semibold text-red mt-2"><u>{index+1}. ລາຄາ: {item.typeName}</u> </p>
                                            {(item.type_id_fk === 2 ? itemoPtion.slice(0, 1) : itemoPtion).map((vals, key) =>
                                                <p>
                                                    <span className="hover:text-primary-800 cursor-pointer">
                                                        ລາຄາ 1 {vals.option_name} = {numeral(item.price_sale * vals.grams).format('0,00')} ₭
                                                    </span>
                                                </p>
                                            )}
                                        </>
                                    ))}

                                </div>
                                {/* Prices - End */}
                                {/* Reviews - Start */}
                                <div id="reviewFilter" className="space-y-2 md:text-xs">
                                    <p className="font-semibold">ຄວາມຄິດເຫັນຂອງລູກຄ້າ:</p>
                                    <div className="flex items-center">
                                        <input id="fiveStarId"
                                            aria-describedby="fiveStarId"
                                            type="checkbox"
                                            className="nk-checkbox-input" />
                                        <label htmlFor="fiveStarId" className="nk-checkbox-label">
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span>&nbsp; 5</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="fourStarId"
                                            aria-describedby="fourStarId"
                                            type="checkbox"
                                            className="nk-checkbox-input"
                                        />
                                        <label htmlFor="fourStarId" className="nk-checkbox-label">
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span>&nbsp; 4</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="threeStarId"
                                            aria-describedby="threeStarId"
                                            type="checkbox"
                                            className="nk-checkbox-input"
                                        />
                                        <label htmlFor="threeStarId" className="nk-checkbox-label">
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span>&nbsp; 3</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="twoStarId"
                                            aria-describedby="twoStarId"
                                            type="checkbox"
                                            className="nk-checkbox-input"
                                        />
                                        <label htmlFor="twoStarId" className="nk-checkbox-label">
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span>&nbsp; 2</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="oneStarId"
                                            aria-describedby="oneStarId"
                                            type="checkbox"
                                            className="nk-checkbox-input"
                                        />
                                        <label htmlFor="oneStarId" className="nk-checkbox-label">
                                            <span className="text-yellow-400">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span className="text-gray-300">
                                                <i className="fas fa-star" />
                                            </span>
                                            <span>&nbsp; 1</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Reviews - End */}
                                {/* Year of Manufacture - Start */}
                            </div>
                            {/* Border Separator - Start*/}
                            <div className="w-full border-b border-gray-400 py-2" />
                            {/* Border Separator - End*/}
                            {/* Tags - Start */}
                            <div className="my-3 space-y-3 border border-gray-400 bg-white p-3">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">ລາຍການນ້ຳໜັກທອງຄຳ</span>
                                    <span className="cursor-pointer text-xs text-blue-700 underline" />
                                </div>
                                <div className="flex flex-row flex-wrap space-x-2 text-xs">
                                    <div className="py-2">
                                        <a className={`search-tags ${ck.baht === '' && ck.option === '' && 'bg-success text-white'}`} href='javascript:;' onClick={() => handleFilterWeigth('', '')} > ທັງໝົດ </a>
                                    </div>
                                    {itemWeight.map((vals, key) => (
                                        <div key={key} className="py-2">
                                            <a  className={`search-tags ${ck.baht === vals.qty_baht && ck.option === vals.option_id_fk ? 'bg-success text-white' : ''}`} href='javascript:;' onClick={() => handleFilterWeigth(vals.qty_baht, vals.option_id_fk)} >
                                                {vals.qty_baht + ' ' + vals.option_name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Tags - End */}
                            {/* Top Rated Products - Start */}
                            <div className="block space-y-5 border border-gray-400 bg-white p-3 md:hidden lg:block">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">ສິນຄ້າແນະນຳ</span>
                                    <span className="cursor-pointer text-xs text-blue-700 underline" />
                                </div>
                            {itemRecomende.map((item,index)=>(

                                <div className="flex flex-row space-x-4 text-xs">
                                    <div className="w-2/12">
                                        <img
                                            className="h-10 w-10 object-contain"
                                            src={`${img}pos/${item.recd_image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-6/12">
                                        <a className="space-y-1 lg:block text-dark" href="javascript:;">
                                            <div>{item.recomennde_name}</div>
                                            <p className="font-semibold">{numeral(item.price_sale * item.qty_baht).format('0,00')} ₭</p>
                                        </a>
                                    </div>
                                    <div className="w-4/12">
                                        <a className="space-y-1" href="javascript:;">
                                            <div className="flex flex-row space-x-2 text-right lg:flex-col">
                                                <p className="text-xs text-blue-700 hover:underline">
                                                   {item.qty_baht} {item.option_name}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
))}
                            </div>
                        </div>
                        {/* Filter Section - End */}
                        <div className="w-full space-y-3 sm:ml-0 md:w-3/4">
                            <div className="hidden border border-gray-400 bg-white p-3 sm:block">
                                <p className="font-semibold">ປະເພດສິນຄ້າ</p>
                                <div className="nk-swiper-container mt-1">
                                    <SliderType />
                                </div>
                                {/* Categories - End */}
                            </div>
                            <div className="w-full border border-gray-400 bg-white">
                                <div className="flex items-center justify-between p-3">
                                    <div className="flex flex-row items-center space-x-2">
                                        <span className="hidden font-semibold sm:block">ຈັດຮຽງຕາມ / Sort By:</span>
                                        <span>
                                            <select className="focus:border-primary-600 focus:ring-primary-600 w-40 rounded border bg-gray-200 py-1 px-2 outline-none" >
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
                                            <a href="javascript:void(0)">
                                                <span id="gridView" className="resultGridView text-primary-800 cursor-pointer rounded border border-gray-400 bg-gray-200 py-1 px-2" >
                                                    <i className="fas fa-columns" />
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <Link to="/pslist">
                                                <span id="listView" className="resultListView cursor-pointer rounded border border-gray-400 bg-gray-200 bg-opacity-0 py-1 px-2" >
                                                    <i className="fas fa-list" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Border Separator - Start */}
                                <div className="w-full border-b border-gray-400" />
                                <div>
                                    {loading ? (
                                        <div className='text-center p-5'>
                                            <Loading size="large"
                                                text="ກຳລັງໂຫລດ..."
                                                textColor="#f12424" />
                                        </div>
                                    ) : (
                                        <div className="my-2 grid grid-cols-2 gap-y-8 gap-x-2.5 px-2 sm:grid-cols-3 md:grid-cols-3 lg:gap-x-3 xl:grid-cols-4" >
                                            {currentProducts.map((item, index) => (
                                                <div className="group  rounded border border-gold pb-0 lg:pb-1 ">
                                                    <div className="relative w-full cursor-pointer"
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        onMouseLeave={() => setHoveredIndex(null)} >
                                                        <img
                                                            className="mx-auto my-auto h-full w-full object-contain text-xs rounded"
                                                            src={`${img}${item.file_image !== '' ? 'pos/' + item.file_image : 'title/' + item.title_image}`}
                                                            alt=""
                                                        />
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
                                                                        <a href="javascript:;" className='text-dark'>
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
                                                                        href="javascript:;#customers-rating-reviews"
                                                                    >
                                                                        <span className="text-yellow-400">
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                            <i className="fas fa-star" />
                                                                        </span>
                                                                        <span className="text-xs text-blue-700 hover:underline">
                                                                            (12)
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
                            </div>

                            {/* Pagination - Start */}
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
                            <ViewProduct
                                show={show}
                                handleClose={() => setShow(false)}
                                data={data}
                            />
                        </div>
                    </div>
                </div>
                {/* Recommendation */}
                <div id="UpSell">
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
                                        <h1 className="ont-bold md:text-2xl">ສິນຄ້າແນະນໍາຂອງພວກເຮົາ</h1>
                                        <Link to={'/recomend'} className="cursor-pointer hover:underline text-red">
                                            ເບີ່ງທັງໝົດ
                                            <span>
                                                <i className="fas fa-caret-right" />
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Our Recommendation - Start */}
                                    <div className="nk-swiper-container mt-1">
                                        <div className="nk-recommends-swiper">
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
              
            </div>
        </>

    )
}

export default ProductGrid
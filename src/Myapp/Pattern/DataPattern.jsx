import React, { useState, useEffect } from 'react'
import { Config, Urlimage } from '../../Config/connection';
import axios from 'axios';
import numeral from 'numeral';
import LightGallery from 'lightgallery/react';
import Loading from '../../Layout/Loading';
function DataPattern({ type }) {
    const api = Config.urlApi;
    const img = Urlimage.url;

    const valuepat = ({
        type_id_fk: '',
        title_id_fk: type,
        option_id_fk: ''
    })
    const [loading, setLoading] = useState(true);
    const [itemPattern, setItemPattern] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const fetchPattern = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${api}pattern/`, valuepat);
            setItemPattern(response.data);
            console.log(valuepat)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setLoading(false)
        }
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(itemPattern.length / itemsPerPage)));
    };
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const displayedItems = itemPattern.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



    useEffect(() => {
        fetchPattern();
    }, [type]);
    return (
        <>
            <div className="w-full space-y-3 sm:ml-0 md:w-3/4">
                {loading ? (
                    <div className='text-center p-5'>
                        <Loading size="large"
                            text="ກຳລັງໂຫລດ..."
                            textColor="#f12424" />
                    </div>
                ) : (
                    <>
                        <div className="w-full bg-white">
                            <div>
                                {
                                    displayedItems.length >0 ?(
                                <div className="my-2 grid grid-cols-2 gap-y-8 gap-x-2.5 px-1 sm:grid-cols-3 md:grid-cols-3 lg:gap-x-5 xl:grid-cols-4" >
                                    {
                                    displayedItems.map((item, index) => (
                                        <div key={index} className="group rounded border border-gray-400 pb-0 lg:pb-3">
                                            <div className="relative w-full cursor-pointer lg:h-[16.25rem]">
                                                <LightGallery>
                                                    <a href='javascript:;'
                                                        data-pinterest-text="Pin it2"
                                                        data-tweet-text="lightGallery slide  2"
                                                        className="gallery__item" data-src={`${img}pattern/${item.pattern_img}`} data-sub-html={`<h3>${numeral(item.pattern_pirce).format('0,00')} ₭</h3> <p className="fs-16px">${item.pattern_name}</p>`}>
                                                        <img
                                                            className="mx-auto my-auto h-full w-full object-contain text-xs"
                                                            src={`${img}pattern/${item.pattern_img}`}
                                                            alt={item.pattern_name} />
                                                    </a>
                                                </LightGallery>
                                            </div>
                                            <div className='px-2'>
                                                <div className="xs:text-sm text-left text-xs">
                                                    <div className="space-y-1">
                                                        <div className="mt-2">
                                                            <h6 className="line-clamp-1 cursor-pointer font-normal text-dark hover:underline">
                                                                {item.pattern_name}
                                                            </h6>
                                                        </div>
                                                        <div className="font-semibold text-end">
                                                            <span className="text-md text-red">{numeral(item.pattern_pirce).format('0,00')}  ₭</span>
                                                        </div>
                                                        <div className='font-semibold'>
                                                            <p> {item.pattern_remart} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                </div>
                                ):(<>
                                    <div className="p-5 mt-4 text-center justify-center">
                                       <img src="./assets/img/icon/search-gold.jpg" className='' alt="" />
                                       <p className='text-red fs-16px'>!ບໍ່ພົບລວດລາຍຕາມປະເພດສິນຄ້ານີ້..</p>
                                    </div>
                                    </>)}
                            </div>
                        </div>
                        {/* Pagination - Start */}
                        <div className="flex flex-row items-center justify-center py-7">
                            <span className={`${currentPage === 1 ? 'cursor-not-allowed text-gray-300' : 'hover:text-primary-800'} px-3`}>
                                <a href="javascript:;" onClick={handlePrevPage} className={currentPage === 1 ? 'disabled' : ''}>
                                    <i className="fas fa-chevron-left" />
                                </a>
                            </span>

                            {/* Page numbers */}
                            <span className="space-x-3">
                                {Array.from({ length: Math.ceil(itemPattern.length / itemsPerPage) }).map((_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                        <a
                                            key={pageNumber}
                                            className={` ${currentPage === pageNumber ? 'bg-orange text-gray-50' : 'hover:bg-orange-200 hover:text-gray-50'
                                                } rounded px-2 py-1`}
                                            href="javascript:;"
                                            onClick={() => handlePageClick(pageNumber)}
                                        >
                                            {pageNumber}
                                        </a>
                                    );
                                })}
                            </span>

                            {/* Next button */}
                            <span className={`${currentPage === Math.ceil(itemPattern.length / itemsPerPage) ? 'cursor-not-allowed text-gray-300' : 'hover:text-primary-800'} px-3`}>
                                <a href="javascript:;" onClick={handleNextPage} className={currentPage === Math.ceil(itemPattern.length / itemsPerPage) ? 'disabled' : ''}>
                                    <i className="fas fa-chevron-right" />
                                </a>
                            </span>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default DataPattern
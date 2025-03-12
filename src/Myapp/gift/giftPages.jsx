import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { Config, Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import Loading from '../../Layout/Loading';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function GiftPages() {
    const api = Config.urlApi;
    const img = Urlimage.url;

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    const [isloading, setIsLoading] = useState(true);
    const [itemGift, setItemGift] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 20;
    const fetchGift = async () => {
        // setIsLoading(true)
        try {
            const response = await fetch(api + 'gift/');
            const jsonData = await response.json();
            setItemGift(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchGift();
    }, [])


    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const totalPages = Math.ceil(itemGift.length / limit);
    const paginatedItems = itemGift.slice((currentPage - 1) * limit, currentPage * limit);


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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [images,setImages]=useState('')
    const [tileName,setTileName]=useState('')
    const viewPhoto=(data)=>{
        setShow(true)
        setTileName(data.gift_name)
        setImages(`${img}gift/${data.gift_img}`)
    }
    return (
        <div className="mx-auto w-full py-2 px-4 text-sm md:px-6 xl:max-w-7xl xl:px-4">
            <div id="nav-link-top">
                <div className="py-3 fs-18px">
                    <span className="text-blue-700 hover:underline">
                        <Link to={'/'}>ໜ້າຫຼັກ</Link>
                    </span>
                    <span className='px-3'>
                        <i className="fas fa-chevron-right text-xs" />
                    </span>
                    <span>ຂອງຂວັນຫລືການສະສົມແຕ້ມ</span>
                </div>
            </div>


            <div id="" className='mt-1'>
                {/* <div className="block  bg-white  md:hidden">
                    <div className="inline-flex w-full items-center space-x-2">
                        <div onClick={toggleFilter} className="bg-primary-600 inline-block w-20 cursor-pointer rounded py-2 text-center text-xs font-semibold text-gray-50"  >
                            <span>Filters</span>
                            <span>
                                <i className="fas fa-chevron-down" />
                            </span>
                        </div>
                    </div>
                </div> */}
                <div className="mt-1 flex flex-col space-x-0 text-sm md:flex-row md:space-x-4 ">
                    <div className={`nk-open-sidebar absoulute fixed left-0 top-0 z-[199] h-screen w-[300px]  transform space-y-3 overflow-y-auto overflow-x-hidden  border border-gray-400 bg-white px-3 pb-16 shadow-xl duration-500 md:relative md:z-0 md:block md:h-full md:w-1/4 md:translate-x-0 md:py-4 ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`} >
                        {/* <div className="hover:text-primary block p-2 text-right text-lg md:hidden" onClick={toggleFilter}  >
                            <div className="bg-primary-600 inline-block w-20 cursor-pointer space-x-2 rounded py-2 text-center text-xs font-semibold text-gray-50">
                                <span>
                                    <i className="fas fa-check" />
                                </span>
                                <span>Done</span>
                            </div>
                        </div> */}

                        <div className="my-0 space-y-0">
                            {/* <div className="flex items-center justify-between">
                                <span className="font-semibold">ລາຍການນ້ຳໜັກທອງຄຳ</span>
                                <span className="cursor-pointer text-xs text-blue-700 underline" />
                            </div> */}
                            <div className="flex flex-row flex-wrap space-x-0 text-xs">
                                <div className="w-full">
                                    <div
                                        className="fb-page"
                                        data-href="https://www.facebook.com/profile.php?id=100064645995670"
                                        data-tabs="timeline"
                                        data-width="280"
                                        data-height="600"
                                        data-small-header="false"
                                        data-adapt-container-width="true"
                                        data-hide-cover="false"
                                        data-show-facepile="true">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full space-y-3 sm:ml-0 md:w-3/4">
                        <div className="w-full rounded  bg-white">
                            {isloading === false ? (
                                <>
                                    <div className="items-center justify-between p-0">
                                        <Row>
                                            {paginatedItems.map((val, index) => (
                                                <Col key={index} lg='3' md='3' sm='4' xs='6' className=" mb-2 px-2">
                                                    <Card style={{ width: '100%' }}>
                                                        <Card.Img variant="top" role='button' onClick={()=>viewPhoto(val)} src={`${img}gift/${val.gift_img}`} />
                                                        <Card.Body>
                                                            <Card.Title className='fs-15px line-clamp-1'>{val.gift_name}</Card.Title>
                                                            <Card.Text className='fs-12px line-clamp-1'>{val.gift_text}</Card.Text>
                                                            <Card.Title className='fs-18px text-right'>{numeral(val.gift_price).format('0,00')} kip</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>


                                    </div>

                                    <div className="flex flex-row items-center justify-center py-7 mt-4">
                                        <Pagination>
                                            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                                            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                            {[...Array(totalPages)].map((_, index) => {
                                                const page = index + 1;
                                                return (
                                                    <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)} >
                                                        {page}
                                                    </Pagination.Item>
                                                );
                                            })}

                                            <Pagination.Next
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            />
                                            <Pagination.Last
                                                onClick={() => handlePageChange(totalPages)}
                                                disabled={currentPage === totalPages} />
                                        </Pagination>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt-12">
                                    <Loading size="large"
                                        text="ກຳລັງໂຫລດ..."
                                        textColor="#f12424" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Body className='p-0 '>
                        <div className='rounded container-view '>
                            <div className='view-top-right' ><a href="javscript:;" onClick={handleClose}><i className="fa-solid fa-circle-xmark text-red fs-20px" /></a> </div>
                            <img src={images} className='rounded' alt="" />
                            <div className="centered text-dark">{tileName}</div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default GiftPages
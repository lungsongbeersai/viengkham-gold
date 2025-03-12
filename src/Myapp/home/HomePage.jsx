import React, { useState, useEffect } from 'react'
import Slaiders from '../../Layout/Slaiders'
import SliderType from '../product/SliderType'
import { Config, Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ViewProduct from '../product/ViewProduct';
import { LineChart } from './chartPrice';
import SliderPattern from '../Pattern/SliderPattern';
import ShowTypeRecomende from '../Promosion/ShowTypeRecomende';
import SliderPycenter from '../About/SliderPycenter';
export default function HomePage() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const [datasch, setDatasch] = useState({
    typeId: '',
  })

  const [itemData, setItemData] = useState([]);
  const fecthData = async () => {
    try {
      const response = await axios.post(api + 'price/', datasch);
      setItemData(response.data);
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


  useEffect(() => {
    fecthData();
    fetchOption();
    // fetchTile();
  }, [])

  const [itemPromotion, setItemPromotion] = useState([]);
  const fetchPormotion = async () => {
    try {
      const response = await fetch(api + 'promotion/');
      const jsonData = await response.json();
      setItemPromotion(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchPormotion()
  })
  return (
    <>
      <div className='nk-content' >
        <Slaiders />
        <div id="trending-items" className="section-container pt-2 mb-2">
          <div className="px-1 section">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-6 mb-2">
                <div className="panel border-prices border border-danger border-top-0">
                  <div className="panel-heading bg-viengkham text-center border-b-0 py-1">
                    <h4 className="panel-title fs-14px wrapper">
                      <div className="bg">ລາຄາຄຳປະຈຳວັນ </div>
                      <div className="fg">ລາຄາຄຳປະຈຳວັນ </div>
                    </h4>
                  </div>
                  <div className="">
                    <LineChart />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 mb-1">
                {itemData.map((item, index) =>
                  <div className="panel panel-inverse border-prices mb-1 border border-danger border-top-0 " key={index}>
                    <div className="panel-heading bg-viengkham text-center border-b-0 py-1">
                      <h4 className="panel-title wrapper fs-16px">
                        <div className="bg"> ລາຄາ {item.typeName} ວັນນີ້ </div>
                        <div className="fg"> ລາຄາ {item.typeName} ວັນນີ້ </div>

                      </h4>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table className='table  text-nowrap'>
                          <tbody className='fs-18px '>
                            {(item.type_id_fk === 2 ? itemoPtion.slice(0, 1) :
                              itemoPtion).map((val, key) =>
                                <tr key={key}>
                                  <td className='text-end'>ລາຄາ 1 {val.option_name}:</td>
                                  <td><i className="fa-solid fa-arrow-up-short-wide fs-4 text-red " /> : <strong >{numeral(item.price_sale * val.grams).format('0,00')}</strong> ₭</td>
                                  <td><i className="fa-solid fa-arrow-down-wide-short fs-4 text-green" /> : <strong >{numeral(item.price_buy * val.grams).format('0,00')}</strong>  ₭</td>
                                </tr>
                              )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
            <div className="text-center pt-0">
              <Link to={'/price'} className="text-red fs-16px"><i className="fa fa-arrow-right "></i> ລາຄາຄຳຍ້ອນຫລັງ</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto  w-full p-3 pt-1 text-base sm:w-full bg-red" style={{
          backgroundImage: `url(./assets/img/banners/poster-banner.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="nk-swiper-container">
            <div className="swiper nk-categ-swiper">
              <SliderType />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 w-full sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
          <div className="row sm:px-6 xl:max-w-7xl xl:px-2">
            {itemPromotion.slice(0, 3).map((row, key) => (
              <div key={key} className='col-sm-4 px-1 rounded'>
                <div className="relative h-full w-full">
                  <div className="h-full w-full">
                    <img className="h-full w-full object-cover rounded" src={`${img}promotion/${row.pro_image}`} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <ShowTypeRecomende />

      {/* ================== 2323  ========================== */}

      {/* <div className="mx-auto mt-2 w-full px-4 sm:w-full sm:px-6 xl:max-w-7xl xl:px-2 mb-3 md:block bg-vkg"> */}
      <div className='mx-auto px-4 mt-2 p-3  w-full bg-vkg  md:block'>
        <div className="my-3">
          <div className="flex flex-row justify-between text-base">
            <h1 className="font-bold xl:text-2xl">ລວດລາຍ ຮູບແບບຜະລິດຕະພັນ ປະຈຳຮ້ານ</h1>
            <h6 className="cursor-pointer hover:underline text-white">
              <Link to={'/pattern'} className='text-white'>  ເບີ່ງທັງໝົດ. <span><i className="fas fa-caret-right"></i></span> </Link>
            </h6>
          </div>
          <p className="text-sm text-white">ສຳຫຼວດຄໍເລັກຊັນຂອງຜູ້ຂາຍດີທີ່ສຸດອັນດັບໜຶ່ງຂອງພວກເຮົາ</p>
        </div>
        <div className="nk-swiper-container ">
          <div className="nk-best-seller-swiper ">
            <SliderPattern colum={7} />
          </div>
        </div>
      </div>


      <div className="mx-auto hidden h-96 w-full bg-gray-200 md:block" style={{ background: "url(./assets/img/banners/6.jpg) center 0px / cover no-repeat" }}>
        <div className="mx-auto flex flex-row md:max-w-7xl">
          <div className="h-96 w-1/2">
            <img className="h-full w-full object-contain" src="public/assets/img/banners/banners.png" alt="" />
          </div>
          <div className="p-5">
            <div className="mx-auto space-y-5 md:max-w-lg">
              <h1 className="text-2xl text-white font-medium">ໜ້າຮ້ານຄຳ ນາງວຽງຄຳ!</h1>
              <p className="text-sm text-white">
                ອອກແບບພະລິດ ແລະຈຳໜາຍຄຳ ຮູບປະພັນ,ຄຳແທ່ງ ຫຼາຍຮູບແບບ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full py-5 sm:px-6 md:px-12 lg:px-12  xl:px-0">
        <div className="container mx-auto bg-white">
          <div className="justify-center">
            <SliderPycenter colum={6} />
          </div>
        </div>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884m!2d102.6143941!3d17.9652263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687d93c167f9%3A0x5577837f17076440!2sตลาดเช้า!5e0!3m2!1sth!2sth!4vUNIQUE_ID"
        className="h-80 w-100 mt-0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" /> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884m!2d102.6143941!3d17.9652263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687d93c167f9%3A0x5577837f17076440!2sตลาดเช้า!5e0!3m2!1sth!2sth!4vUNIQUE_ID"
        className="h-80 w-100 mt-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />


    </>
  )
}

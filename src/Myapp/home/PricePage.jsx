import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Config } from '../../Config/connection';
import { Config, Urlimage } from '../../Config/connection';
import { LineChart } from './chartPrice';
import numeral from 'numeral';
import moment from 'moment';
import axios from 'axios';
function PricePage() {
    const api = Config.urlApi;
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

    const [active, setActive] = useState(1);
    const handleType = (index) => {
        setActive(index)
    }

    const [itemPrice,setItemPrice]=useState([]);
    const fetchPrices= async()=>{
        try {
            const response = await fetch(api + 'price/uprice/'+active);
            const jsonData = await response.json();
            setItemPrice(jsonData);
        } catch (error) {
            setItemPrice([])
        }
    }

    useEffect(() => {
        fecthData();
        fetchOption();
        fetchPrices();
    }, [active])
    return (
        <>
            <div className="mx-auto mt-3 max-w-7xl space-y-5 px-2 xl:px-0">
                <div className="flex items-center justify-between text-sm font-medium">
                    <div>
                        <Link to={'/'} ><span className='text-red fs-20px'><i className="fas fa-chevron-left"></i></span><span className='fs-18px text-dark'> ລາຍການລາຄາທຳຄຳປະຈຳວັນ</span>
                        </Link>
                    </div>
                    {/* <div className="space-x-2 font-normal sm:space-x-6">
                        <span className="cursor-pointer hover:underline">Email us</span>
                        <span className="cursor-pointer hover:underline">Share</span>
                        <span className="cursor-pointer hover:underline">Print</span>
                    </div> */}
                </div>
            </div>

            <div className="mx-auto max-w-7xl p-2">
                <div className="mt-3  w-full space-x-2 overflow-x-auto pb-3">
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
                                                                <td><i className="fa-solid fa-arrow-up-short-wide fs-4 text-red " /> : 
                                                                <strong >{numeral(item.price_sale * val.grams).format('0,00')} ₭
                                                                <div style={{margin:'-10px'}} className='fs-11px text-red ms-50px'>ລາຄາຂາຍ</div>
                                                                    </strong> 
                                                                
                                                                </td>
                                                                <td><i className="fa-solid fa-arrow-down-wide-short fs-4 text-green" /> :
                                                                 <strong >{numeral(item.price_buy * val.grams).format('0,00')} ₭
                                                                 <div style={{margin:'-10px'}} className='fs-11px text-green ms-50px'>ລາຄາຊື້ເຂົ້າ</div>
                                                                    </strong> </td>
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

                    <div className='font-medium fs-20px px-2 mb-3'>ປະຫວັດການອັບເດດລາຄາຊື້ຂາຍປະຈຳວັນ</div>
                   
                    <h4 className="section-titles fs-16px"><span className={`me-3 ${active === 1 ? '' : 'bg-gold text-dark'}`} onClick={() => handleType(1)} role='button'>ອັບເດດລາຄາຊື້ຂາຍຄຳ ຮູບປະພັນ</span> <span className={`me-3 ${active === 2 ? '' : 'bg-gold text-dark'}`} onClick={() => handleType(2)} role='button'>ອັບເດດລາຄາຊື້ຂາຍຄຳແທ່ງ</span></h4>
                    <div className="table-responsive">
                    <table className='table table-striped table-bordered align-middle text-nowrap'>
                        <thead className='thead-bg-vgk '>
                            <tr className=''>
                                <th className='text-white text-center' width="5%" rowSpan={2}>ລ/ດ</th>
                                <th className='text-white text-center' rowSpan={2}>ວັນທີ</th>
                                <th className='text-white text-center' colSpan={2}>ລາຄາຊື້ເຂົ້າ</th>
                                <th className='text-white text-center' colSpan={2}>ລາຄາຂາຍອອກ</th>
                                <th className='text-white text-center' width='5%' rowSpan={2}>#</th>
                            </tr>
                            <tr>
                                <th className='text-white text-end'>ຍອດ <i className="fa-solid fa-caret-up text-gold" /> <i className="fa-solid fa-caret-down text-green" /></th>
                                <th className='text-white text-end'>ລາຄາຊື້</th>
                                <th className='text-white text-end'>ຍອດ <i className="fa-solid fa-caret-up text-gold" /> <i className="fa-solid fa-caret-down text-green" /></th>
                                <th className='text-white text-end'>ລາຄາຂາຍ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemPrice.map((item,key)=>(
                            <tr>
                                <td className='text-center'>{key+1}</td>
                                <td className='text-center'>{moment(item.update_date).format('DD/MM/YYYY hh:mm')}</td>
                                <td className={`text-end ${item.buy > 0 ?'text-red': item.buy < 0 ?'text-green':''}`}>{item.buy > 0 ? '+':'' } {numeral(item.buy*item.grams).format('0,00.00')} </td>
                                <td className='text-end'>{numeral(item.price_buy_new*item.grams).format('0,00.00')} ₭</td>
                                <td className={`text-end ${item.sale > 0 ?'text-red': item.sale < 0 ?'text-green':''}`}>{item.sale > 0 ? '+':'' } {numeral(item.sale*item.grams).format('0,00.00')} {item.sale > 1 ?(<i className="fa-solid fa-caret-up text-red" />):item.sale < 0 ?(<i className="fa-solid fa-caret-down text-green" />) :''} </td>
                                <td className='text-end'>{numeral(item.price_sale_new*item.grams).format('0,00.00')} ₭</td>
                                <td className='text-center'>{item.price_img !=='' &&(<span role='button' className='text-red fs-18px'><i className="fa-solid fa-images"></i></span>)} </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricePage
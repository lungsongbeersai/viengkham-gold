import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TitlePorfile from './TitlePorfile';
import { Config, Urlimage } from '../../Config/connection';
import moment from 'moment';
import numeral from 'numeral';
import ViewInvioceOrder from './View-Invioce-Order';
function ItemOrders() {
    const api = Config.urlApi;
    const img=Urlimage.url;
const customer_id = '3f1beba2-b4c8-459c-b2d3-32761f98b629';
const [itemOrders, setItemOrders] = useState([]);
const fetchOrders = async () => {
    const response = await fetch(`${api}paysale/fetchOrder/${customer_id}`);
        const jsonData = await response.json();
        setItemOrders(jsonData);
}
const [show, setShow] = useState(false);
const [order, setOrder] = useState({});
const handleViewOrder = (data) => {
    setOrder(data);
    setShow(true);
}



const handleDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl); // Replace with your server URL
      if (!response.ok) {
          throw new Error('File download failed');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const fileExtension = fileUrl.split('.').pop(); // Get the extension from the URL
      const fileName = `${new Date().getTime()}.${fileExtension}`; 

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
  } catch (error) {
      alert('ຂໍອະໄພບໍ່ມີໄຟລ໌ໃນໂຟນເດີ ກະລຸນາອັບເດດໄຟລ໌ເຂົ້າໃໝ່!', error);
  }
  }

useEffect(() => {
    fetchOrders();
}, []);
    const location = useLocation();
    return (
        <div className="mx-auto mt-2 w-full space-y-4 px-4 text-sm xl:max-w-7xl">
            <div id="nav-link-top" className="fs-16px">
                <span className="text-blue-700 hover:underline">
                    <Link to={'/'}>ໜ້າຫຼັກ</Link>
                </span>
                <span className='px-3'>
                    <i className="fas fa-chevron-right text-xs" />
                </span>
                <span>ບັນຊີຂອງຂ້ອຍ</span>
            </div>
            <TitlePorfile parth={location.pathname} />
            <div className="animate-nk-acc-tab block space-y-12 mb-3">
                {/* Personal Info - Start */}
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white py-4 shadow">
                    <div className="flex flex-auto items-center justify-between px-4">
                        <div className="text-base font-semibold sm:text-lg">
                            ລາຍການສັ່ງຊື້
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md ">
                        <table className="table w-full ">
                            <thead className="uppercase text-white text-left">
                                <tr>
                                    <th scope="col" className="text-left">ລ/ດ</th>
                                    <th scope="col" className="text-left">ວັນທີສັ່ງຊື້</th>
                                    <th scope="col" className="text-left">ເລກທີ</th>
                                    <th scope="col" className="text-left">ຈຳນວນ</th>
                                    <th scope="col" className="text-right">ຍອດເງິນ</th>
                                    <th scope="col" className="text-left">ລາລະອຽດ</th>
                                    <th scope="col" className="text-left">ສະຖາານະ</th>
                                    <th scope="col" className="text-center">ການຕັ້ງຄ່າ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemOrders.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{moment(item.paysale_date).format('DD/MM/YYYY hh:mm')}</td>
                                <td>{item.pay_sale_code}</td>
                                <td>{item.qty_baht} ບາດ</td>
                                <td className='text-right'>{numeral(item.balance_gold).format('0,0.00')} ₭</td>
                                <td>{item.pays_remark}</td>
                                <td>{item.status_pays===1 ? 'ລໍຖາກວດສອບ' : item.status_pays===1 ?'ກວດສອບແລ້ວ':'ໄດ້ຮັບການມອບຮັບແລ້ວ'}</td>
                                <td className='text-center'>
                                    <button type='button' onClick={() =>handleDownload(`${img}document/paysale/${item.file_transfer}`)} className='hover:text-white hover:bg-danger  border rounded mr-2 py-1 px-2 '><i className="fa-solid fa-receipt"></i></button>
                                    <button type='button' onClick={() => handleViewOrder(item)} className='hover:text-white hover:bg-primary rounded border py-1 px-2 '><i className="fa-solid fa-eye"></i></button>
                                </td>
                            </tr>
                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ViewInvioceOrder show={show} handleClose={()=>setShow(false)} data={order} />
        </div>
    )
}

export default ItemOrders
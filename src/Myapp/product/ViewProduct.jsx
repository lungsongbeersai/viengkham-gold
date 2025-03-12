import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ViewProduct = ({ show,handleClose, data }) => {
  const img=Urlimage.url;

  console.log(data)
  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body >
      <div className="px-2 pt-0 text-right" >
        <span onClick={handleClose} className="h-10 w-10 cursor-pointer rounded-full py-1 px-2 text-xl hover:bg-gray-300 hover:text-gray-50">
          <i className="fas fa-times" />
        </span>
      </div>
      <div className="flex h-full flex-col space-x-0 space-y-2 p-2 sm:flex-row sm:space-x-6 sm:space-y-0">
        {/* Item Image Section - Start */}
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col items-center space-x-0 space-y-4 sm:flex-row-reverse sm:space-y-0 sm:space-x-1">
            {/* Large Product Image - Start */}
            <div className="relative">
              <img  className="h-full w-full object-contain" src={`${img}${data.file_image !== '' ? 'pos/' + data.file_image : 'title/' + data.title_image}`}  alt=""  />
            </div>
            {/* Large Product Image - End */}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="space-y-1">
            <h1 className="text-xl font-medium sm:text-3xl">
              {data.tile_name +' '+ data.qty_baht+' '+data.option_name}
            </h1>
            <div>
              <span className="text-sm font-semibold sm:text-2xl">{numeral(data.price_sale * data.grams).format('0,0')} ₭</span>
             
            </div>
           
            <div className="flex items-center space-x-2">
              <p>
                <span className="font-semibold">ນ້ຳໜັກ: </span>{data.grams} g
              </p>
              <p>
                <span className="ml-5 font-semibold sm:ml-10">SKU: </span>
                {data.code_gold}
              </p>
            </div>
           
            {/* Add to Cart & Buy Now button - End */}
            <div className="pb-5">
              <p className="text-xs">
                ທ່ານສາມາດເຂົ້າມາເລືອກຊື້ໄດ້ທີ່ຮ້ານຄຳ ນາງວຽງຄຳ ເທົ່ານັ້ນພວກເຮົາມີສິນຄ້າໃຫ້ບໍລິການແກ່ທ່ານທຸກຮູບແບບ
                <br />
                <b className='ms-4'>ຂໍອະໄພທີ່ບໍ່ສະດວກໃນການສັ່ງຊື້ ທອງຄຳຮູບປະພັນໄດ້,  ແຕ່ທ່ານສາມາສັ່ງຊື້ທອງຄຳແທງໄດ້ຜ່ານເວັບໄຊຂອງພວກເຮົາໄດ້
                  <br />
                  <br />
                  <Link to={'/ordering'} > <i className="fa-solid fa-hand-point-right"></i> ກົດສັ່ງຊື່ທອງຄຳຮູບປະພັນ</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* Item Information - End */}
      </div>
        </Modal.Body>
      </Modal>
    </>

  )
}

export default ViewProduct
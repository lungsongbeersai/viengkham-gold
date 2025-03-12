import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu() {
  return (
    <div  className="fixed inset-x-0 bottom-0 z-[1999] block bg-white py-2 px-4 text-[10px] shadow-[0px_-4px_15px_rgba(0,0,0,0.3)] lg:hidden" >
    <div className="xs:w-11/12 mx-auto flex w-full items-center justify-between ">
     
    <div id="mob-sticky-home" className="w-1/5 border-b border-red border-b-2">
        <Link to={'/'} className='active '>
          <div className="flex flex-col flex-wrap  items-center text-red">
            <span className="text-lg"><i className="fas fa-home"></i></span>
            <span className='fs-16px'>ໜ້າຫຼັກ</span>
          </div>
        </Link>
      </div>
      <div id="mob-sticky-wishlist" className="w-1/5 ">
        <Link to={'/product'}>
          <div className="flex flex-col flex-wrap items-center text-red">
          <span className="text-lg"><i className="fa-solid fa-layer-group"></i></span>
            <span className='fs-16px'>ສິນຄ້າ</span>
          </div>
        </Link>
      </div>
      <div id="mob-sticky-cart" className="w-1/5">
        <Link to={'/ordering'}>
          <div className="flex flex-col flex-wrap items-center text-red">
            <div className="relative">
              <span className="text-lg"><i className="fas fa-shopping-cart"></i></span>
            </div>
            <span className='fs-16px'>ຊື້ສິນຄ້າ</span>
          </div>
        </Link>
      </div>
      <div id="mob-sticky-account" className="w-1/5">
        <Link to={'/profile'}>
          <div className="flex flex-col flex-wrap items-center text-red">
            <span className="text-lg"><i className="fas fa-user"></i></span>
            <span className='fs-16px'>ຂໍ້ມູນ</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default MobileMenu
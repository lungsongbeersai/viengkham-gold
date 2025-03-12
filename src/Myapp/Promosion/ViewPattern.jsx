import React from 'react'
import { Config,Urlimage } from '../../Config/connection';
import { Modal } from 'react-bootstrap';
function ViewPattern({ show,handleClose, data }) {
    const img=Urlimage.url;
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body className='items-center justify-center'>
      <div className="px-2 pt-0 text-right" >
        <span onClick={handleClose} className="h-10 w-10 cursor-pointer rounded-full py-1 px-2 text-xl hover:bg-gray-300 hover:text-gray-50">
          <i className="fas fa-times" />
        </span>
      </div>
      <div className="flex h-full flex-col space-x-0 space-y-2 p-2 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col items-center space-x-0 space-y-4 sm:flex-row-reverse sm:space-y-0 sm:space-x-1">
            <div className="relative">
              <img  className="h-full w-full object-contain" src={`${img}'pattern/'${data.pattern_img}`}  alt=""  />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="space-y-1">
            <h1 className="text-xl font-medium sm:text-3xl">
              Deep Red new fashion dress
            </h1>
            <div>
              <span className="text-sm font-semibold sm:text-2xl">$129.95</span>
              <span className="text-gray-400 line-through">$159.95</span>
              <span className="ml-10 bg-green-700 px-3 py-1 text-base font-semibold text-white">
                Save $30
              </span>
            </div>
            <div className="flex flex-row items-center">
              <div className="inline-flex space-x-1">
                <span className="text-yellow-400">
                  <i className="fas fa-star" />{" "}
                </span>
                <span>(4.9)</span>
              </div>
              <div className="ml-10 flex flex-auto items-center space-x-2 sm:ml-20">
                <span className="flex">
                  <img
                    className="z-30 h-7 w-7 rounded-full border-2 border-gray-50"
                    src="assets/img/user-profile/avatar-1.jpg"
                    alt=""
                  />
                  <img
                    className="z-20 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                    src="assets/img/user-profile/avatar-2.jpg"
                    alt=""
                  />
                  <img
                    className="z-10 -ml-3 h-7 w-7 rounded-full border-2 border-gray-50"
                    src="assets/img/user-profile/avatar-3.jpg"
                    alt=""
                  />
                </span>
                <span>
                  <a className="underline" href="#customers-rating-reviews">
                    123 Reviews
                  </a>
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p>
                <span className="font-semibold">Model: </span>NKS1234LS
              </p>
              <p>
                <span className="ml-5 font-semibold sm:ml-10">SKU: </span>
                0123456789
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-green-500">In Stock</span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Gift Eligibility: </span>This
                item is gift eligible.
                <span>
                  <a className="underline" href="#">
                    Learn more.
                  </a>
                </span>
              </p>
            </div>
            <div>
            </div>
           
            <div className="pb-5">
              <p className="text-xs">
                <span>
                  <i className="fas fa-lock" />
                </span>{" "}
                This is the secure transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
        </Modal.Body>
      </Modal>
  )
}

export default ViewPattern
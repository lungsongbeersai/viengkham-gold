import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import TitlePorfile from './TitlePorfile';
function PorfilePage() {
const token=localStorage.getItem('token');
  const location = useLocation();
  const navigate=useNavigate();
//   useEffect(()=>{
// if(!token){
//   navigate('/login')
// }
//   },[token])
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
    {/* Account Top - Start */}
  <TitlePorfile parth={location.pathname} />
    {/* Account Top - End */}
    {/* Account Overview - Start */}
    <div id="accOverview" className="animate-nk-acc-tab block space-y-12">
      {/* Personal Info - Start */}
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white py-4 shadow">
        <div className="flex flex-auto items-center justify-between px-4">
          <div className="text-base font-semibold sm:text-lg">
          ລາຍລະອຽດສ່ວນຕົວ/Personal Details
          </div>
          <div>
            <Link to={'/setting'}>
              <div className="btn-gradient w-28 sm:w-40">Edit Profile</div>
            </Link>
          </div>
        </div>
        <div className="w-full border-b border-gray-400" />
        <div className="space-y-2 px-4">
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <div className="w-52 text-sm">ຊື່ແລະນາມສະກຸນ:</div>
            <span className="font-semibold">John Doe Smith</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <div className="w-52 text-sm">ວັນເດືອນປິເກີດ:</div>
            <span className="font-semibold">01/08/1987</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ໂທລະສັບ/Phone:</span>
            <span className="font-semibold">(123) 456 7890</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ອີເມວ/Email address:</span>
            <span className="font-semibold">johndoesmith@email.com</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ເລກບັດປະຈຳຕົວ /ID card number :</span>
            <span className="font-semibold">Neykart.com</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ແຂວງ / Porvince:</span>
            <span className="font-semibold">Elkhart</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ເມືອງ / District:</span>
            <span className="font-semibold">INDIANA</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ບ້ານ / Villages:</span>
            <span className="font-semibold">46514</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ໝາຍເຫດ / Description:</span>
            <span className="font-semibold">United States</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ວັນທີລົງທະບຽນ:</span>
            <span className="font-semibold">
              (GMT-07:00) Pacific Time (US &amp; Canada)
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center">
            <span className="w-52 text-sm">ເອກະສານ:</span>
            <span className="font-semibold">English (US)</span>
          </div>
        </div>
      </div>
      {/* Personal Info - End */}
      {/* Orders & Purchase - Start */}
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white py-4 shadow">
        <div className="flex flex-auto items-center justify-between px-4">
          <div className="text-base font-semibold sm:text-lg">
          ຄໍາສັ່ງ & ການຊື້ /  Orders &amp; Purchase
          </div>
          <div>
            <a href="account-orders-purchase.html">
              <div className="text-xs text-gray-300 hover:underline">
                View All
              </div>
            </a>
          </div>
        </div>
        <div className="w-full border-b border-gray-400" />
        <h1 className="px-4 text-left text-base font-semibold">ຄໍາສັ່ງທີ່ເຄື່ອນໄຫວ / Active Orders</h1>
        {/* Active Orders - Start */}
        <div id="acc-overview-op" className="nk-na-tabContent block space-y-4">
          <div className="flex flex-col space-x-0 space-y-4 px-2 py-2 sm:space-y-6 md:flex-nowrap lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:flex-nowrap sm:space-y-0 sm:space-x-4 lg:w-2/3">
              {/* 1. Active Order Status - Start */}
              <div className="w-full space-y-3 rounded border border-gray-400 p-2 sm:w-1/2">
                <div className="flex flex-auto flex-row space-x-1 border-b border-gray-400 pb-4">
                  <div className="w-2/6">
                    <img
                      className="h-24 rounded"
                      src="assets/img/products/fashion/men/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-3/6 space-y-1">
                    <p className="line-clamp-2">
                      Nike Red shoes lasts release apparel for all ages
                    </p>
                    <p className="font-semibold">$129.95</p>
                    <p className="text-gray-400">Order#: 123456</p>
                    <p className="cursor-pointer py-1 text-sky-600 hover:underline">
                      View details
                    </p>
                  </div>
                  <div className="w-1/6 text-right">QTY 1</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-left">
                    <p className="font-semibold">Date Purchased</p>
                    <p className="text-xs text-gray-400">December 01, 2022</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Estimated Delivery</p>
                    <p className="text-xs text-gray-400">December 03, 2022</p>
                  </div>
                </div>
                {/* Order Status - Start */}
                <div className="px-2">
                  <ul className="border-primary-600 relative border-l-4">
                    <li className="nk-li-order-track">
                      <span className="nk-span-checked-order">
                        <span>
                          <i className="fas fa-check" />
                        </span>
                      </span>
                      <h3 className="nk-checked-order-status">Oder Accepted</h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-unchecked-order">
                        <span>
                          <i className="fas fa-check" />
                        </span>
                      </span>
                      <h3 className="nk-unchecked-order-status">
                        Order Processed
                      </h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-unchecked-order">
                        {/* <span><i className="fas fa-check"></i></span> */}
                      </span>
                      <h3 className="nk-unchecked-order-status">
                        Order In Transit
                      </h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-unchecked-order">
                        {/* <span><i className="fas fa-check"></i></span> */}
                      </span>
                      <h3 className="nk-unchecked-order-status">
                        Delivered to the Customer
                      </h3>
                    </li>
                  </ul>
                </div>
                {/* Order Status - End */}
              </div>
              {/* 1. Active Order Status - End */}
              {/* 2. Active Order Status - Start */}
              <div className="w-full space-y-3 rounded border border-gray-400 p-2 sm:w-1/2">
                <div className="flex flex-auto flex-row space-x-1 border-b border-gray-400 pb-4">
                  <div className="w-2/6">
                    <img
                      className="h-24 rounded"
                      src="assets/img/products/fashion/women/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-3/6 space-y-1">
                    <p className="line-clamp-2">
                      Women Long Red dress lasts release Apparel for women.
                    </p>
                    <p className="font-semibold">$21.95</p>
                    <p className="text-gray-400">Order#: 123456</p>
                    <p className="cursor-pointer py-1 text-sky-600 hover:underline">
                      View details
                    </p>
                  </div>
                  <div className="w-1/6 text-right">QTY 1</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-left">
                    <p className="font-semibold">Date Purchased</p>
                    <p className="text-xs text-gray-400">December 01, 2022</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Estimated Delivery</p>
                    <p className="text-xs text-gray-400">December 03, 2022</p>
                  </div>
                </div>
                {/* Order Status - Start */}
                <div className="px-2">
                  <ul className="border-primary-600 relative border-l-4">
                    <li className="nk-li-order-track">
                      <span className="nk-span-checked-order">
                        <span>
                          <i className="fas fa-check" />
                        </span>
                      </span>
                      <h3 className="nk-checked-order-status">Oder Accepted</h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-checked-order">
                        <span>
                          <i className="fas fa-check" />
                        </span>
                      </span>
                      <h3 className="nk-checked-order-status">Order Processed</h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-unchecked-order">
                        {/* <span><i className="fas fa-check"></i></span> */}
                      </span>
                      <h3 className="nk-unchecked-order-status">
                        Order In Transit
                      </h3>
                    </li>
                    <li className="nk-li-order-track">
                      <span className="nk-span-unchecked-order">
                        {/* <span><i className="fas fa-check"></i></span> */}
                      </span>
                      <h3 className="nk-unchecked-order-status">
                        Delivered to the Customer
                      </h3>
                    </li>
                  </ul>
                </div>
                {/* Order Status - End */}
              </div>
              {/* 2. Active Order Status - End */}
            </div>
            {/* 3. Active Order Status - Start */}
            <div className="w-full space-y-3 rounded border border-gray-400 p-2 sm:w-1/2 lg:w-1/3">
              <div className="flex flex-auto flex-row space-x-1 border-b border-gray-400 pb-4">
                <div className="w-2/6">
                  <img
                    className="h-24 rounded"
                    src="assets/img/products/fashion/kids/1.jpg"
                    alt=""
                  />
                </div>
                <div className="w-3/6 space-y-1">
                  <p className="line-clamp-2">
                    Dark green men's suit lasts release Apparel for all ages.
                  </p>
                  <p className="font-semibold">$32.95</p>
                  <p className="text-gray-400">Order#: 123456</p>
                  <p className="cursor-pointer py-1 text-sky-600 hover:underline">
                    View details
                  </p>
                </div>
                <div className="w-1/6 text-right">QTY 1</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold">Date Purchased</p>
                  <p className="text-xs text-gray-400">December 01, 2022</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Estimated Delivery</p>
                  <p className="text-xs text-gray-400">December 03, 2022</p>
                </div>
              </div>
              {/* Order Status - Start */}
              <div className="px-2">
                <ul className="border-primary-600 relative border-l-4">
                  <li className="nk-li-order-track">
                    <span className="nk-span-checked-order">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                    </span>
                    <h3 className="nk-checked-order-status">Oder Accepted</h3>
                  </li>
                  <li className="nk-li-order-track">
                    <span className="nk-span-checked-order">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                    </span>
                    <h3 className="nk-checked-order-status">Order Processed</h3>
                  </li>
                  <li className="nk-li-order-track">
                    <span className="nk-span-checked-order">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                    </span>
                    <h3 className="nk-checked-order-status">Order In Transit</h3>
                  </li>
                  <li className="nk-li-order-track">
                    <span className="nk-span-unchecked-order">
                      <span>
                        <i className="fas fa-check" />
                      </span>
                    </span>
                    <h3 className="nk-unchecked-order-status">
                      Delivered to the Customer
                    </h3>
                  </li>
                </ul>
              </div>
              {/* Order Status - End */}
            </div>
            {/* 3. Active Order Status - End */}
          </div>
        </div>
        {/* Active Orders - End */}
      </div>
      {/* Orders & Purchase - End */}
      {/* Shipping, Billing & Payment Method -  */}
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white py-4 shadow">
        <div className="flex flex-auto items-center justify-between px-4">
          <div className="text-base font-semibold sm:text-lg">
            Shipping, Billing &amp; Payment Method
          </div>
          <div>
            <a href="account-shipping-billing.html">
              <div className="text-xs text-gray-500 hover:underline">Edit</div>
            </a>
          </div>
        </div>
        <div className="w-full border-b border-gray-400" />
        <div className="mt-5 flex flex-col space-x-0 space-y-4 px-2 py-2 sm:space-y-4 md:flex-row md:flex-nowrap md:space-y-0 md:space-x-4">
          <div className="flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:flex-nowrap sm:space-y-0 sm:space-x-4 md:w-2/3">
            <div className="w-full rounded border border-gray-400 p-3 sm:w-1/2">
              <div className="flex items-center justify-between">
                <h1 className="whitespace-nowrap text-left text-base font-semibold">
                  Delivery Address
                </h1>
                <span className="rounded-full bg-green-200 px-3 py-1 text-xs text-green-600">
                  Primary
                </span>
              </div>
              <div className="space-y-1 py-2 text-sm">
                <p className="font-semibold">John Doe Smith</p>
                <p>johndoesmith@email.com</p>
                <p>(123) 345-6789</p>
                <p>12345 N Park Ave,</p>
                <p>STE 67110</p>
                <p>Elkhart, IN, 46514, US</p>
              </div>
            </div>
            <div className="w-full rounded border border-gray-400 p-3 sm:w-1/2">
              <div className="flex items-center justify-between">
                <h1 className="whitespace-nowrap text-left text-base font-semibold">
                  Billing Address
                </h1>
                <span className="rounded-full bg-green-200 px-3 py-1 text-xs text-green-600">
                  Primary
                </span>
              </div>
              <div className="space-y-1 py-2 text-sm">
                <p className="font-semibold">John Doe Smith</p>
                <p>johndoesmith@email.com</p>
                <p>(123) 345-6789</p>
                <p>12345 N Park Ave,</p>
                <p>STE 67110</p>
                <p>Elkhart, IN, 46514, US</p>
              </div>
            </div>
          </div>
          <div className="w-full rounded border border-gray-400 p-3 sm:w-1/2 md:w-1/3">
            <div className="flex items-center justify-between">
              <h1 className="whitespace-nowrap text-left text-base font-semibold">
                Payment Method
              </h1>
              <span className="rounded-full bg-green-200 px-3 py-1 text-xs text-green-600">
                Primary
              </span>
            </div>
            <div className="space-y-1 py-2 text-sm">
              <p className="font-semibold">John Doe Smith</p>
              <p>johndoesmith@email.com</p>
              <p>(123) 345-6789</p>
              <p>12345 N Park Ave,</p>
              <p>STE 67110</p>
              <p>Elkhart, IN, 46514, US</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  
  )
}

export default PorfilePage
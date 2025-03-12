import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
function AboutPage() {
  return (
    <>
      <div id="nav-link-top" >
        <div className="mx-auto w-full py-3 px-4 text-sm sm:px-6 md:px-8 lg:px-12 xl:max-w-7xl xl:px-0 fs-16px">
          <span className="text-blue-700 hover:underline">
            <Link to={'/'}>ໜ້າຫຼັກ</Link>
          </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <span>ຂໍ້ມູນຮ້ານຄຳ ນາງວຽງຄຳ</span>
        </div>
      </div>

      <div className="mx-auto w-full space-y-16 px-4 sm:px-6 md:px-12 lg:px-12 xl:max-w-6xl xl:px-0">

        <div className="antialiased">
          <div className="w-2/5 space-y-2">
            <h1 className="text-xl font-bold text-orange">ຂໍ້ມູນການຕິດຕໍ່?</h1>
            <div className="w-24 border-2 border-red"></div>
          </div>
          <div className="pt-6"></div>
          <div className="row">
            <div className="col-sm-6" >
              <div className="grid px-3 rounded bg-white py-6 shadow ">
                <div className="  text-center">
                  <div className="text-4xl text-center">
                    <img src="./assets/img/logo/logo.png" className='w-24 text-center' alt="" />
                  </div>
                </div>
                <div className="text-base font-bold fs-22px">ທີ່ຢູ່ຮ້ານຄຳ ນາງວຽງຄຳ</div>
                <div className='mt-4'>
                  <ul className="sidebar-recent-post">
                    <li>
                      <div className="info">
                        <h4 className="title text-dark fs-18px">ທີ່ຢູ່ຮ້ານ :
                        <span className="date fs-15px text-gray-600">ຕັ້ງຢູ່ຕະຫລາດເຊົ້າມໍຊັ້ນ2</span>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4 className="title text-dark fs-18px">ຖະໜົນ :
                        <span className="date fs-15px text-gray-600">ຕັ້ງຢູ່ໃຈກາງລະວາງ ຖະໜົນລ້ານຊ້າງ ກັບ ຖະໜົນໜອງບອນ </span>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4 className="title text-dark fs-18px">ບ້ານ :
                        <span className="date fs-15px text-gray-600">ບ້ານ ຫັດສະດີ </span>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4 className="title text-dark fs-18px">ເມືອງ :
                        <span className="date fs-15px text-gray-600">ເມືອງ ຈັນທະບູລີ</span>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <h4 className="title text-dark fs-18px">ແຂວງ :  <span className="date fs-15px text-gray-600"> ນະຄອນຫຼວງວຽງຈັນ</span></h4>
                       
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="grid px-2 rounded bg-white py-6 text-center shadow ">
                <div className="h-full w-full">
                  <span className="mx-auto text-4xl"> <i className="fas fa-headset"></i></span>
                </div>
                <div className="text-base font-bold fs-22px mb-3">ຂໍ້ມູນການຕິດຕໍ່</div>
                <div className='text-left px-2'>
                  <ul className="sidebar-list fs-18px ">
                    <li>
                      <div className="info">
                        <a href="tel:+8562095555609" className='text-dark'><i className="fa-solid fa-phone" /> : 20 95 555 609 ,94424369</a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <a href="#" className='text-dark'><i className="fa-solid fa-envelope" /> : Email</a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <a href="https://www.facebook.com/profile.php?id=100064645995670" target="_blank" className='text-dark'><i className="fa-brands fa-facebook-f" /> : ຮ້ານຄຳນາງວຽງຄຳ </a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <a href="https://wa.me/8562095555609" target="_blank" rel="noopener noreferrer" className='text-dark'><i className="fa-brands fa-whatsapp" /> : 020 95 555 609</a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <a href="https://www.tiktok.com/@vkgold888" target="_blank" className='text-dark'><i className="fa-brands fa-tiktok" /> : vkgold888</a>
                      </div>
                    </li>
                    <li>
                      <div className="info">
                        <a href="#" className='text-dark'><i className="fa-brands fa-instagram" /> : Instagram</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="antialiased">
          <div className="w-full space-y-1">
            <h1 className="text-xl font-bold text-orange">ທີ່ຢູ່ຮ້ານຄຳ ນາງວຽງຄຳ</h1>
            <div className="w-24 border-2 border-red"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884m!2d102.6143941!3d17.9652263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687d93c167f9%3A0x5577837f17076440!2sตลาดเช้า!5e0!3m2!1sth!2sth!4vUNIQUE_ID"
              className="h-90 w-100 mt-2 mb-4"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap xl:space-x-1">
          <div className="w-full space-y-1">
            <h1 className="text-xl font-bold text-orange">ກ່ຽວກັບຮ້ານຄຳ ນາງວຽງຄຳ</h1>
            <div className="w-24 border-2 border-red"></div>
            <div className="pt-1">
              <p className="w-full sm:w-6/6">
                ຮ້ານຄຳ ນາງວຽງຄຳ ເປິດມາຫລາຍກວ່າ25ປີ ທີ່ຮ້ານວຽງຄຳໄດ້ຢູ່ຄູ່ກັບປະເທດລາວເພື່ອເປັນສື່ກາງໃນການມອບຂອງຂວັນຄ່າສຳລັບໂອກາດພິເສດຕ່າງໆ ພ້ອມກັບການສືບຕໍ່ຄວາມຄຸ້ມຄ່າໃນການລົງທຶນທອງຄໍາ ທັງການຊື້ທອງຄໍາແທ່ງແລະການລົງທຶນຜ່ານທາງອອນລາຍ.
                ນອກເຫນືອຈາກການຈັດຈໍາຫນ່າຍ ແລະຮັບຜະລິດທອງຄໍາແທ່ງຕາມຄວາມຕ້ອງການແລ້ວ ທາງຮ້ານສາມາດຊື້ ແລະສັ່ງເຮັດທອງຮູບພັນໄດ້ທຸກຢ່າງຕາມທີ່ຕ້ອງການ ໂດຍຈະແມ່ນເປັນສ້ອຍຄໍຄຳແທ້ເພື່ອເປັນຂອງຂວັນໃຫ້ກັບໂຕເອງຫລືຄົນທີ່ເຈົ້າຮັກ, ປີ່ເຊຍະທອງແທ້ເພື່ອດຶງໂຊກລາດມາໃຫ້ກັບຊີວິດ, ກອບພະຫລີ່ມຄໍາພ້ອມສ້ອຍເພື່ອເສີມມົງຄົນ ທີ່ເຈົ້າສາມາດເລືອກລວດລາຍໄດ້ຕາມຕ້ອງການ ຫລືຈະເປັນທອງຮູບພັນໃນໂອກາດພິເສດ ເຊັ່ນ ການເຮັດຈີ້ທອງຄໍາເພື່ອເປັນຂອງຂວັນໃຫ້ກັບເດັກແຮກເກີດ, ລວມທັງກໍາໄລ ແລະຕ່າງຫູທອງແທ້ ກໍສາມາດສັ່ງເຮັດໄດ້ເຊັ່ນກັນ.
                ຫມັ້ນໃຈໄດ້ວ່າທຸກງານຝີມືຈະໄດ້ຮັບການອອກແບບ ແລະຈັດທໍາຢ່າງປະນີດໂດຍຊ່າງຕີຄຳຄູ່ຮ້ານທີ່ມີປະສົບການສູງເປັນແນ່ນອນ.
              </p>
              <p className="w-full sm:w-6/6">
                ຈຸດເດັນທີ່ສຸດຂອງຮ້ານຄຳວຽງຄຳ ບໍ່ວ່າເຈົ້າຈະຊື້ຄຳຮູບປະພັນວັນມື້ຫລືມື້ໃດ ຈະຊື້ໃຫ້ໂຕເອງຫລືເປັນຂອງຂວັນໃຫ້ເດັກແລກເກີດ ເນື້ອຂອງຄຳແທ້ຮູບພັນນັ້ນກໍຈະບໍ່ປ່ຽນແປງໄປຕາມເວລາ ແລະຍັງສາມາດຮັກສາຄຸນຄ່າແລະມູນຄ່າໃນຕົວມັນເອງໄປໄດ້ຍາວນານ.
              </p>
              <p className="w-full sm:w-6/6">
                ທອງຮູບພັນຂອງ “ຄຳວຽງຄຳ” ຈະມີຄວາມບໍລິສຸດ99.99ແບບຫຼັກໆ ທີ່ຈະເຮັດໃຫ້ເຄື່ອງປະດັບຫລືຂອງຂວັນທີ່ເຈົ້າເລືອກມີມູນຄ່າຕະຫລອດໄປ.
              </p>
              <p className="w-full sm:w-6/6">
                ສຳລັບຜູ້ທີ່ຕ້ອງການຊື້ສາຍຄໍຄຳຮູບພັນທີ່ມີຄຸນນະພາບດີໃນລາຄາມິດຕະພາບ ທີ່ເວັບໄຊຂອງ ພວກເຮົາມີຄຳຮູບພັນໃຫ້ເລືອກຫຼາກຫລາຍແບບ ບໍ່ວ່າຈະເປັນຈີ້ທອງຄໍາ, ສ້ອຍຄໍ, ສາຍແຂນ, ຕ່າງຫູ, ກອບພະໂອບຄຳ, ຄຳແຜ່ນພິມລາຍ ຫລືຄຳຮູບພັນແບບອື່ນໆ ເຈົ້າສາມາດເລືອກຊົມແລະສັ່ງຊື້ໄດ້ທາງເວັບໄຊ ແລະຢູ່ຫນ້າຮ້ານຂອງ ວຽງຄຳ ໄດ້ເລຍ
              </p>
            </div>
          </div>

        </div>

        <div className="antialiased ">
          <div className="w-3/5 space-y-3">
            <h1 className="text-xl font-bold text-orange">ທີມງານຂອງພວກເຮົາ</h1>
            <div className="w-24 border-2 border-red"></div>
          </div>
          <div className="pt-3">
            <div className="container mx-auto bg-white">
              <div className="justify-center">

                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk01.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk02.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk03.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk04.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk05.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk06.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk07.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk08.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk09.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk10.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk11.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full max-w-xs text-center">
                      <img className="mx-auto h-48 w-full rounded-lg object-cover object-center"
                        src="public/assets/img/our-team/vk12.jpg" alt="" />
                      <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600">CEO</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutPage
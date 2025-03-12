import React, { useState, useEffect } from 'react'
import { Config, Urlimage } from '../Config/connection';
import { useTitle } from '../Config/select-option';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import numeral from 'numeral';
function Footer() {
  const api = Config.urlApi;
  const image = Urlimage.url;
  const itemTiles = useTitle();

  const [itemRecomende, setItemRecomende] = useState([]);
  const fetchRecomende = async () => {
    try {
      const response = await fetch(api + 'recd/limit/' + 8);
      const jsonData = await response.json();
      setItemRecomende(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchRecomende();
  }, [])
  return (
    <>
      <footer className="nk-main-footer pb-16 lg:pb-0">
        <div className="nk-footer-container">
          <div className="nk-top-footer">

            <div className="nk-footer-one">
              <div className="space-y-3">
                <div className="nk-footer-logo-title"><img src="./assets/img/logo/logo.png" className='w-28' alt="" />
                  <p className="text-md">ຮ້ານຄຳ ນາງວຽງຄຳ</p></div>
                <div>- ຕັ້ງຢູ່ຕະຫລາດເຊົ້າມໍຊັ້ນ2</div>
                <div className='fs-14px mt-1'>- ບ້ານ ຫັດສະດີ ,ເມືອງ ຈັນທະບູລີ</div>
                <div className='fs-14px mt-1'>- ແຂວງ ນະຄອນຫຼວງວຽງຈັນ</div>
                <p className="mb-lg-4 mb-0">
                  <span>ສິນຄ້າຄຸນນະພາບມາດຕະຖານຄຳ 99.99%</span><br />
                  <span>ຮັບປະກັນລາຄາຄືນຕາມລາຄາຄຳ</span><br />
                  <span>ສິນຄ້າທຸກອັນມາພ້ອມປ້າຍລາຄາ ແລະ ໃບຮັບປະກັນ.</span><br />
                  <span>ບໍລິການສ້ອມແປງຟຣີຕະຫຼອດຊີວິດ</span>
                </p>

              </div>
            </div>

            <div className="space-y-3">
              <h1 className="nk-footer-nav-title">ໝວດສິນຄ້າ</h1>
              <div className="nk-footer-nav-link-div">
                {itemTiles.map((item, index) => (
                  <div><Link className="nk-footer-nav-link" to={'/pdc?p=' + item.tile_uuid}><i className="fa-solid fa-arrow-right" /> {item.tile_name}</Link></div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="nk-footer-nav-title">ຜະລິດຕະພັນຫຼ້າສຸດ</h1>
              <div className="nk-footer-nav-link-div">
                {itemRecomende.map((item, index) =>
                  <div><a className="nk-footer-nav-link" href="javascript:;"><i className="fa-solid fa-angle-right"></i> {item.recomennde_name}</a></div>
                )}

              </div>
            </div>
            <div>
              <h1 className="nk-footer-nav-title">ຕິດຕໍ່ຂອງພວກເຮົາ</h1>
              <div className="nk-footer-nav-link-div">
                <div><i className="fa-solid fa-phone fs-14px" /> :<a className="nk-footer-nav-link" href="tel:+8562095555609"> (+856) 20 95 555 609</a></div>
                <div><i className="fa-solid fa-phone fs-14px" /> : <a className="nk-footer-nav-link" href="tel:+8562094424363"> (+856) 020 94 424 363</a></div>
                <div><i className="fa-brands fa-whatsapp  fs-14px" /> : <a className="nk-footer-nav-link" href="https://wa.me/8562095555609" target="_blank" rel="noopener noreferrer"> WhatsApp</a></div>
                <div><i className="fa-solid fa-envelope fs-14px" /> :  <a className="nk-footer-nav-link" href="#!">Email</a></div>
                <div><i className="fa-brands fa-facebook-f fs-14px" /> : <a className="nk-footer-nav-link" href="https://www.facebook.com/profile.php?id=100064645995670" target='_blank'>Facebook</a></div>
                <div><i className="fa-brands fa-tiktok fs-14px" /> : <a className="nk-footer-nav-link" href="https://www.tiktok.com/@vkgold888" target='_blank'>Tiktok</a></div>
                <div><i className="fa-solid fa-map-location-dot fs-14px" /> : <a className="nk-footer-nav-link" href="https://maps.app.goo.gl/Ec2sMx2JNsQEUKoL7" target='_blank'> Map (GPS) </a></div>
              </div>
            </div>
          </div>

          <div className="nk-border-footer"></div>
          <div className="nk-bottom-footer">
            <div>
              <h6 className=""> ສະຫງວນລິຂະສິດ © {numeral(new Date().getFullYear()).format('YYYY')} ສະຫງວນລິຂະສິດທັງໝົດ.</h6>
            </div>
          </div>
        </div>
      </footer>

      <button id="back-to-top" className="nk-scroll-to-top" title="Go to Top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default Footer
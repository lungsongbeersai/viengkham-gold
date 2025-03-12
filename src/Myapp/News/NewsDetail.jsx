import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Config, Urlimage } from '../../Config/connection';
import Loading from '../../Layout/Loading';
import moment from 'moment';
import LightGallery from 'lightgallery/react';

function NewsDetail() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventId = atob(searchParams.get('v'));

  const [item, setItem] = useState({
    titleName: '',
    newText: '',
    newDate: '',
    dataList: []
  })
const [loading, setLoading] = useState(true);
  const showEvent = async () => {
    try {
      const response = await fetch(api + `news/view/${eventId}`);
      const data = await response.json();
      setItem({
        titleName: data.event.titleName,
        newText: data.event.newText,
        newDate: data.event.newDate,
        dataList: data.list || []
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  }

  const [itemNew, setItemNew] = useState([]);
  const fetchNewEvent = async () => {
    try {
      const response = await fetch(api + 'news/');
      const jsonData = await response.json();
      setItemNew(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const [itemTiles, setItemTiles] = useState([]);
  const fetchTile = async () => {
    try {
      const response = await fetch(api + 'tileps/');
      const jsonData = await response.json();
      setItemTiles(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchNewEvent()
    showEvent();
    fetchTile();
  }, [eventId,])
  return (
    <>
      <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
        <div className=" text-sm">
          <span className="text-blue-700 hover:underline">
            <Link to={'/'}>ໝ້າຫຼັກ</Link>
          </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <Link to={'/news'} className=''>ລາຍການຂ່າວສານ</Link>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" /> {item.titleName}
          </span>
        </div>
        <div className="content mt-1">
          <div className="container">
            <div className="row gx-lg-5">
              {loading === true ? 
              <Loading  size="large"
              text="ກຳລັງໂຫລດ..."
              textColor="#f12424" />
              :
             
              <div className="col-lg-9">
                <div className="post-detail section-container">
                  <h4 className="post-title">
                    {item.titleName}
                  </h4>
                  <div className="post-by mb-1">
                    Date <span className="divider">|</span>
                    {moment(item.newDate).format('DD/MM/YYYY')}
                  </div>
                  <LightGallery>
                    {item.dataList && item.dataList.map((row, index) => (
                      <a
                        //  data-lg-size="1400-1400"
                        className="gallery__item"
                        data-src={`${img}potstnew/${row.img_list}`}
                        data-sub-html={row.newText}
                      >
                        <div className="post-image">
                          <div className="post-image-cover" style={{ backgroundImage: `url(${img}potstnew/${row.img_list})` }}></div>
                        </div>
                        <div className="post-desc">
                          {row.newText}
                        </div>
                      </a>
                    ))}
                  </LightGallery>
                  <div className="post-desc">
                    <div dangerouslySetInnerHTML={{ __html: item.newText }} />
                  </div>
                </div>
              </div>
}
              <div className="col-lg-3">
                <div className="sticky top-24 xl:top-5">
                  <div className="section-container">
                    <h4 className="section-title fs-16px">
                      <span>ປະເພດພະລິດຕະພັນ</span>
                    </h4>
                    <ul className="sidebar-list">
                      {itemTiles.map((row, index) => (
                        <li key={index} className='fs-15px'><Link to={'/pdc?p' + row.tile_uuid}><i className="fa-solid fa-angle-right" /> {row.tile_name} ({row.qty_stock})</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="section-container">
                    <h4 className="section-title fs-16px">
                      <span>ລາຍການຂ່າວສານ</span>
                    </h4>
                    <ul className="sidebar-recent-post">
                      {itemNew.slice(0, 10).map((item, key) => (
                        <li>
                          <div className="info">
                            <h4 className="title"><Link to={'/nd?v=' + btoa(item.event_id)}>{item.titleName}</Link></h4>
                            <div className="date">{moment(item.newDate).format('DD/m/YYYY')}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="section-container">
                    <h4 className="section-title">
                      <span>Follow Us</span>
                    </h4>
                    <ul className="sidebar-social-list">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetail
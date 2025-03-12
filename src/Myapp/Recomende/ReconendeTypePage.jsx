import React,{useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Config, Urlimage } from '../../Config/connection';
import { Card, Row, Col } from 'react-bootstrap';
import { useTitle } from '../../Config/select-option';
import numeral from 'numeral';
import ViewRecomend from '../Promosion/ViewRecomend';
function ReconendeTypePage() {
const api = Config.urlApi;
const img = Urlimage.url;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const typeId = searchParams.get('id');
    const itemTiles = useTitle();

    const [itemRecomende, setItemRecomende] = useState([]);
    const fetchRecomende = async () => {
        try {
            const response = await fetch(api + 'recd/title/'+typeId);
            const jsonData = await response.json();
            setItemRecomende(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

const [titleName, setTitleName] = useState('');

    useEffect(() => {
        fetchRecomende();
    }, [typeId]);

    useEffect(() => {
      if (itemRecomende.length > 0 && typeId) {
          const foundItem = itemRecomende.find(item => item.title_id_fk === typeId);
          if (foundItem) {
              setTitleName(foundItem.tile_name); 
          }
      }
  }, [itemRecomende, typeId,titleName]);


  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleView = (item) => {
    setShow(true);
    setData(item)
  }
  return (
    <div id="newArrival">
        <div className="mx-auto w-full py-3 px-4 text-sm sm:px-6 md:px-8 lg:px-12 xl:max-w-7xl xl:px-0 fs-15px">
          <span className="text-blue-700 hover:underline">
            <Link to={'/'}>ໜ້າຫຼັກ </Link>
          </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <span>
          <Link to={'/recomend'}>ສິນຄ້າແນະນຳ</Link> </span>
          <span className='px-2'>
            <i className="fas fa-chevron-right text-xs" />
          </span>
          <span>{titleName}</span>
        </div>

        <div className="mx-auto mt-1 w-full px-2 sm:w-full sm:px-6 xl:max-w-7xl xl:px-2">
          <div className="flex flex-col justify-center sm:justify-between md:flex-row md:items-center">
            <h4 className="text-base font-bold uppercase fs-18px"> ລາຍການສິນຄ້າແນະນຳ</h4>
            <div className="hidden justify-center md:flex md:flex-row md:space-x-4 md:text-sm" >
             
              {itemTiles.map((rols, index) => (
                <div key={index} className={`${typeId === rols.tile_uuid ? 'new-active' : 'hover:text-primary'} cursor-pointer`}>
                  <Link to={`/rtd?id=${rols.tile_uuid}`} className={`${typeId === rols.tile_uuid ? 'text-primary' : 'text-gray-600'}`}>{rols.tile_name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="nk-swiper-container">
            <div className="px-2 nk-new-swiper">
              <div className="swiper-wrapper">
                <Row>
                  {itemRecomende.map((item, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} className='px-1 mb-1'>
                      <Card className='group  flex-grow xl:flex-shrink xl:flex-grow-0 xl:overflow-hidden'>
                        <div className=" overflow-hidden">
                          <div className="absolute left-0 top-2 bg-orange text-xs font-bold uppercase text-white/90 sm:text-sm">
                            <span className="p-1">{item.qty_baht + ' ' + item.option_name}</span>
                          </div>
                          <div className="mx-auto w-full bg-no-repeat md:w-full">
                            <Card.Img variant="top" role='button' onClick={() => handleView(item)} className='h-full w-full object-cover text-xs md:h-full md:w-full'
                              src={`${img}pos/${item.recd_image}`} />
                          </div>
                          <Card.Body>
                            <div className="product-name line-clamp-1 cursor-pointer text-sm text-gray-700 hover:underline">
                              <a href="javascript:void(0)">
                                <p>{item.recomennde_name}</p>
                              </a>
                            </div>
                            <div>
                              <a className="flex items-center justify-between text-xs" href="javascript:void(0)"  >
                                <span className="text-primary">
                                  <span className="font-semibold text-gray-700">{item.tile_name}</span>
                                </span>
                                <span className="text-red-600 hover:underline">({item.qty_baht + ' ' + item.option_name})</span>
                              </a>
                            </div>
                            <span className="text-sm font-extrabold sm:text-lg">
                              {numeral(item.price_sale * item.qty_baht).format('0,00')} ₭
                            </span>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>

        </div>

        {/* <div className="flex flex-row items-center justify-center py-7">
          <span className="px-3"><a href="javascript:void(0)" className={`${currentPage === 1 && 'disabled'}`} onClick={() => setCurrentPage(currentPage - 1)}><i className="fas fa-chevron-left"></i></a ></span>
          <span className="space-x-3">
            {pageNumbers.map(number => (
              <a className={`rounded px-2 py-1 ${currentPage === number ? 'bg-orange text-gray-50' : 'hover:bg-primary-300 hover:text-gray-50'}`} href="javascript:void(0)" onClick={() => setCurrentPage(number)}>{number}</a>
            ))}
          </span>
          <span className="hover:text-primary-800 px-3" ><a href="javascript:void(0)" className={`${currentPage === pageNumbers.length && 'disabled'}`} onClick={() => setCurrentPage(currentPage + 1)}><i className="fas fa-chevron-right"></i></a ></span>
        </div> */}

<ViewRecomend show={show} handleClose={()=>setShow(false)} data={data} />
      </div>
  )
}

export default ReconendeTypePage
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Config, Urlimage } from '../../Config/connection';
import Loading from '../../Layout/Loading';
import moment from 'moment';
function ApplyjobPage() {
  const api = Config.urlApi;
  const img = Urlimage.url;
  const [itemJob, setItemJob] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const fetchApplyJob = async () => {
    try {
      const response = await fetch(`${api}job/`);
      const jsonData = await response.json();
      setItemJob(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false)
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


  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(itemJob.length / itemsPerPage)));
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const displayedItems = itemJob.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    fetchApplyJob();
    fetchTile();
  }, [page, limit])

  return (
    <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
      <div className="text-sm fs-16px">
        <span className="text-blue-700 hover:underline">
          <Link to={'/'}>ໝ້າຫຼັກ</Link>
        </span>
        <span className='px-2'>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span>ລາຍການປະກາດຮັບສະໝັກພະນັກງານ</span>
      </div>
      <div className="row gx-lg-5 mt-4 px-2">
        <div className="col-lg-8">
          {isloading ? (<div className='text-center'>
            <Loading size="medium" text="ກໍາລັງໂຫລດຂໍ້ມູນ...." textColor="red" />
          </div>) : (
            displayedItems.map((item, index) => (
              <div key={index} className="card p-0 shadow-md sm:p-8">
                <img className="card-img-top " src={`${img}job/${item.job_image}`} alt="" />
                <div className="card-body ">
                  <h5 className="card-title">{item.apply_job_title}</h5>
                  <div className="text-new"> ເລີ່ມສະໝັກ : {moment(item.start_date).format('DD/MM/YYYY')} <span className="divider">-|-</span> {moment(item.end_date).format('DD/MM/YYYY')}</div>
                  <p className="card-text post-desc">
                    <div className="text-new" dangerouslySetInnerHTML={{ __html: item.apply_job_text }}></div>
                  </p>
                  <Link to={'/r?j=' + btoa(item.apply_job_id)} className="btn btn-dark text-gold btn-outline-danger"> <i className="fa-regular fa-hand-point-right me-3" /> ລົງທະບຽນສະໝັກງານ</Link>
                </div>
              </div>
            ))
          )}
        {currentPage.length>0 &&  

          <div className="flex flex-row items-center justify-center py-7">
            <span className="cursor-not-allowed px-3 text-gray-300" >
              <a href="javascript:void(0)" className={`${currentPage === 1 ? 'disabled' : ' text-dark'}`} onClick={handlePrevPage}>Prev</a >
            </span>
            <span className="space-x-3">
              {[...Array(Math.ceil(itemJob.length / itemsPerPage)).keys()].map(pageNumber => (
                <a key={pageNumber + 1} className={` ${currentPage === pageNumber + 1 ? 'bg-gold' : ''} rounded px-2 py-1 text-gray-50`} href="javascript:void(0)" onClick={() => handlePageClick(pageNumber + 1)}>{pageNumber + 1}</a>
              ))}
            </span>
            <span className="hover:text-dark-100 px-3" >
              <a href="javascript:void(0)" className={`text-dark ${currentPage === Math.ceil(itemJob.length / itemsPerPage) ? 'disabled' : ''}`} onClick={handleNextPage}>Next</a>
            </span>
          </div>
          }
        </div>
        <div className="col-sm-4 col-lg-4 p-2 ">
          <div className="sticky top-24 xl:top-5">
            <div className="card shadow-md">
              <div className="card-header py-1">
                <h3 className="card-title fs-22px">ລາຍການສະໝັກງານ</h3>
              </div>
              <div className="card-body p-0">
                {/* <div className="hidden text-sm lg:block "> */}
                  <ul className="mt-2 space-y-3 px-4 text-slate-500">
                    {itemJob.slice(0, 20).map((item, index) => (
                      <li key={index}>
                        <span><i className="fa-solid fa-indent fs-18px me-3 text-red"></i> </span>
                        <a className="hover:underline fs-18px text-dark" href="javascript:void(0)">{item.apply_job_title}  </a>
                        <p className='date text-sm ms-5 text-red'>{moment(item.start_date).format('DD/MM/YYYY')}</p>

                      </li>
                    ))}
                  </ul>
                {/* </div> */}
              </div>
            </div>


            <div className="card shadow-md mt-4">
              <div className="card-header py-1">
                <h3 className="card-title fs-22px">ປະເພດພະລິດຕະພັນ</h3>
              </div>
              <div className="card-body p-0">
                {/* <div className="hidden text-sm lg:block "> */}
                  <ul className="mt-2 space-y-3 px-4 text-slate-500">
                  {itemTiles.map((row, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle-arrow-right me-3 text-red"></i>
                        <Link className="hover:underline fs-18px text-dark" to={'/pdc?p=' + row.tile_uuid}>{row.tile_name}  </Link>
                      </li>
                    ))}
                  </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyjobPage
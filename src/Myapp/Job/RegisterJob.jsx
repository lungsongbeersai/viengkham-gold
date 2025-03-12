import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Config, Urlimage } from '../../Config/connection';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
function RegisterJob() {
  const api = Config.urlApi;
  const img = Urlimage.url;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = atob(searchParams.get('j'));


  const [item, setItem] = useState({
    apply_job_title: '',
    apply_job_text: '',
    start_date: '',
    end_date: '',
    job_image: ''
  })

  const showJob = async () => {
    try {
      const response = await fetch(api + `job/single/${jobId}`);
      const data = await response.json();
      setItem({
        apply_job_title: data.apply_job_title,
        apply_job_text: data.apply_job_text,
        start_date: data.start_date,
        end_date: data.end_date,
        job_image: data.job_image
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // ==========================

  const [dataRegis, setDataRegis] = useState({
    apply_job_fk: jobId,
    staff_name: '',
    staff_phone: '',
    staff_email: '',
    staff_address: '',
    staff_doct: ''
  })
  const handleChange = (name, value) => {
    setDataRegis({
      ...dataRegis, [name]: value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDataRegis({
      ...dataRegis,
      staff_doct: file
    });
  };

  const resetForm = () => {
    setDataRegis({
      apply_job_fk: jobId,
      staff_name: '',
      staff_phone: '',
      staff_email: '',
      staff_address: '',
      staff_doct: ''
    });
  }
  const [Loading,setLoading]=useState(false)
  const handleRegister = async (evnet) => {
    evnet.preventDefault();
    const inputData = new FormData();
    for (const key in dataRegis) {
      inputData.append(key, dataRegis[key]);
    }
    setLoading(true)
    try {
      const response = await axios.post(api + 'job/register', inputData);
      if (response.status === 200) {
        toast.success('ການລົງທະບຽນສະໝັກງານສຳເລັດ ກະລຸນາລໍການຕອບກັບຈາກ ຮ້ານຄຳ ນາງວຽງຄຳ');
        setDataRegis({
          apply_job_fk: jobId,
          staff_name: '',
          staff_phone: '',
          staff_email: '',
          staff_address: '',
          staff_doct: ''
        })
      }
    } catch (error) {
      toast.error('ການລົງທະບຽນສະໝັກງານ ໄດ້ລົມເຫລວກະລຸນາລອງໃໝ່');
      console.error('Error inserting data:', error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    showJob();
  }, [jobId])
  return (
    <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
      <div className="text-sm fs-16px px-3">
        <span className="text-blue-700 hover:underline">
          <Link to={'/'} className='text-blue-700 hover:underline'>ໝ້າຫຼັກ</Link>
        </span>
        <span className='px-2 '>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span> <Link to={'/job'} className='text-blue-700 hover:underline'>ລາຍການຮັບສະໝັກ </Link></span>
        <span className='px-2'>
          <i className="fas fa-chevron-right text-xs" />
        </span>
        <span>ລົງທະບຽນສະໝັກງານ</span>
      </div>

      <div className="row gx-lg-5 mt-4 px-2">
        <div className="col-lg-6">
          <div key={item.apply_job_id} className="card p-0 shadow-md sm:p-8">
            <img className="card-img-top " src={`${img}job/${item.job_image}`} alt="" />
            <div className="card-body ">
              <h5 className="card-title">{item.apply_job_title}</h5>
              <div className="text-new"> ເລີ່ມສະໝັກ : {moment(item.start_date).format('DD/MM/YYYY')} <span className="divider">-|-</span> {moment(item.end_date).format('DD/MM/YYYY')}</div>
              <p className="card-text">
                <div className="text-new" dangerouslySetInnerHTML={{ __html: item.apply_job_text }}></div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header py-1">
              <h4 className="my-2 text-center">ລົງທະບຽນສະໝັກງານ</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>

                <div className="mb-4 flex border-b-4 border-yellow-500 bg-yellow-100 p-4 r " role="alert" >
                  <div className="flex-shrink-0 text-yellow-700">
                    <i className="fa-solid fa-circle-info fs-22px"></i>
                  </div>
                  <div className="ml-3 text-sm font-medium text-yellow-700">
                    ການລົງທະບຽນສະໝັກງານ ກະລຸນາປ້ອນ ຊື່ ແລະ ນາມສະກຸນ ທີ່ຢູ່ເບີໂທລະສັບທີ່ຖຶກຕ້ອງ ແລ້ວທາງຮ້ານຄຳ ນາງວຽງຄຳ ຈະຕິດຕໍ່ກັບພາຍໃນ 1-5 ວັນ
                  </div>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">ຊື່ແລະນາມສະກຸນ <span className="text-danger">*</span></label>
                  <input type="text" value={dataRegis.staff_name} onChange={(e) => handleChange('staff_name', e.target.value)} className="form-control" placeholder='ຊື່ແລະນາມສະກຸນ' required />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">ເບີລະສັບ <span className="text-danger">*</span></label>
                  <input type="tel" value={dataRegis.staff_phone} onChange={(e) => handleChange('staff_phone', e.target.value)} className="form-control" placeholder='020 9999 9999' required />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input type="text" value={dataRegis.staff_email} onChange={(e) => handleChange('staff_email', e.target.value)} className="form-control" placeholder='**@gmail.com' />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">ລາຍລະອຽດ <span className="text-danger">*</span></label>
                  <textarea role='2' value={dataRegis.staff_address} onChange={(e) => handleChange('staff_address', e.target.value)} className="form-control" placeholder='ລາຍລະອຽດ ທີ່ຢູ່ປະຈຸບັນ...' />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">ເອກະສານແນບ ( CV )</label>
                  <input type="file" onChange={handleFileChange} className="form-control" accept="image/*.doc,.docx,.pdf,.jpg, .jpeg, .png" />
                </div>

                <div className="form-group mt-5">
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <button type="button" onClick={resetForm} className="btn btn-danger w-100">ເລີ່ມໃໝ່</button>
                    </div>
                    <div className="col-md-6 col-6 ">
                      <button type="submit" className="btn btn-dark w-100" disabled={Loading ? true:false}>ບັນທຶກການສະໝັກງານ</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterJob
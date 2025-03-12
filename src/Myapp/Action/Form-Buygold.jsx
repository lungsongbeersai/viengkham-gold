import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import TitlePorfile from './TitlePorfile';
import { Config,Urlimage } from '../../Config/connection';
import { useBank } from '../../Config/select-option';
import numeral from 'numeral';
import moment from 'moment';
import axios from 'axios';
function FormBuygold() {
  const location = useLocation();
  const api = Config.urlApi;
  const img = Urlimage.url;
  const [price, setPrice] = useState({
    grams: '',
    price_sale: '',
    type_id_fk: '',
  });

  const [values, setValues] = useState({
    custom_id_fk:'',
    cardholder_name: '',
    transfer_number: '',
    date_transfer: new Date(),
    file_transfer: '',
    pays_remark: '',
    status_pays: 1,
    qty_baht: 1,
    qty_grams: 1,
    balance_gold: 0,
    price_gram: 0,
  });

  const handleQtybath = (value) => {
    const grams = parseFloat(price.grams) || 0;
    const inputValue = parseFloat(value) || 0;
    const gramsTotal = grams * inputValue;
    setValues({
      ...values,
      qty_baht: value,
      qty_grams: grams * inputValue,
      balance_gold: gramsTotal * price.price_sale
    });
  };

  const [bank, setBank] = useState({
    acount_name: '',
    acount_number: '',
    back_qr: ''
  });
  const itemBank = useBank();
  const showQrbanck = async (value) => {
    const filteredBanks = itemBank.filter(item => item.bank_id == value);
    if (filteredBanks.length > 0) {
      filteredBanks.map(data => {
        setBank({
          acount_name: data.acount_name,
          acount_number: data.acount_number,
          back_qr: img + 'logo/' + data.back_qr
        });
      });
    } else {
      setBank({
        acount_name: '',
        acount_number: '',
        back_qr: ''
      })
    }
  };
  const handleChange = (name, value) => {
    setValues({
      ...values, [name]: value
    })
  }

  const handleFilePayment = (e) => {
    const file = e.target.files[0];
    setValues({
      ...values, file_transfer: file
    });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setCheckFile(false)
    }
  }

   // =========================================
   const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in values) {
        formData.append(key, values[key]);
    }
    axios.post(`${api}paysale/payment`, formData)
        .then(response => {
            console.log(response.data);
            if (response.data.status === 200) {
               alert(response.data.message)
            } else {
                alert(response.data.message)
            }
    })
}

  useEffect(() => {
    const showPrice = async () => {
      try {
        const response = await fetch(`${api}price/prices`);
        const jsonData = await response.json();
        setPrice({
          grams: jsonData.grams,
          price_sale: jsonData.price_sale,
          type_id_fk: jsonData.type_id_fk,
        });
        setValues({
          ...values,
          price_gram: jsonData.price_sale,
          qty_grams: jsonData.grams,
          balance_gold: jsonData.grams * jsonData.price_sale
        })

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    showPrice();
  }, []);
const [checked,setChecked]=useState(false);
const handleCheck = (event) => {
  setChecked(event.target.checked);
};

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
      <TitlePorfile parth={location.pathname} />
      <div className="animate-nk-acc-tab block space-y-12">
        <div className="row mb-4">
          <div className="col-md-6 ">
            <div className='bg-show-price rounded p-4'>
              <div className='text-white'>
                ການສັ່ງຊື້ ຕ້ອງບໍ່ຕ່ຳກວ່າ 1 ບາດຂຶ້ນໄປ !
              </div>
              <svg width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" y2="1" x2="1" x1="1" y1="0.1433">
                    <stop stop-color="rgb(255, 213, 127)" offset="0" />
                    <stop stop-color="rgb(179, 149, 0)" offset="0.4817" />
                    <stop stop-color="rgb(179, 149, 0)" offset="1" />
                  </linearGradient>
                </defs>
                <text font-family="arial" font-size="20" fill="url(#grad2)" font-weight="bold">
                  <tspan x="10" y="45">ລາຄາ:</tspan>
                </text>
              </svg>
              <svg width="550" height="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" y2="1" x2="1" x1="1" y1="0.1433">
                    <stop stop-color="rgb(255, 213, 127)" offset="0" />
                    <stop stop-color="rgb(179, 149, 0)" offset="0.4817" />
                    <stop stop-color="rgb(179, 149, 0)" offset="1" />
                  </linearGradient>
                </defs>
                <text font-family="arial" font-size="40" id="svg_1" y="45" x="288" fill="url(#grad2)" font-weight="bold">
                  <tspan x="10" y="45">{numeral(price.price_sale * price.grams).format('0,0.00')} /ບາດ</tspan>
                </text>
              </svg>

              <svg width="550" height="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" y2="1" x2="1" x1="1" y1="0.1433">
                    <stop stop-color="rgb(255, 213, 127)" offset="0" />
                    <stop stop-color="rgb(179, 149, 0)" offset="0.4817" />
                    <stop stop-color="rgb(179, 149, 0)" offset="1" />
                  </linearGradient>
                </defs>
                <text font-family="arial" font-size="20" id="svg_1" y="45" x="288" fill="url(#grad2)" font-weight="bold">
                  <tspan x="10" y="45">ນ້ຳໜັກ : {price.grams} g</tspan>
                </text>
              </svg>

              <div className="form-group mt-2 col-sm-6">
                <label htmlFor="" className='form-label text-white'>ຈຳນວນສັ່ງຊື້ ( ບາດ )</label>
                <input type="number" className='form-control' value={values.qty_baht} onChange={(e) => handleQtybath(e.target.value)} placeholder='ຈຳນວນສັ່ງຊື້' />
              </div>

              <svg width="550" height="50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" y2="1" x2="1" x1="1" y1="0.1433">
                    <stop stop-color="rgb(255, 213, 127)" offset="0" />
                    <stop stop-color="rgb(179, 149, 0)" offset="0.4817" />
                    <stop stop-color="rgb(179, 149, 0)" offset="1" />
                  </linearGradient>
                </defs>
                <text font-family="arial" font-size="40" id="svg_1" y="45" x="288" fill="url(#grad2)" font-weight="bold">
                  <tspan x="10" y="45"> {numeral(values.balance_gold).format('0,0.00')} ₭</tspan>
                </text>
              </svg>
              <div className='text-white'> ລວມນຳໜັກ: {values.qty_grams} g</div>
            </div>


          </div>
          <div className="col-md-6 p-2">
            <div className='card p-3'>
              <h4>II. ຂໍ້ມູນການຊຳລະເງິນ</h4>
              <div className="form-group">
                <label htmlFor="" className='form-label'>ສອງທາງສຳລະ</label>
                <select onChange={(e) => showQrbanck(e.target.value)} className='form-control'>
                  <option value="">ເລືອກສອງທາງສຳລະ</option>
                  {itemBank.map((item, index) => (
                    <option key={index} value={item.bank_id}>{item.bank_name}</option>
                  ))}
                </select>
              </div>
              {bank.acount_name !== '' && (
                <div className="mt-3">
                  <h5>ຊື່ບັນຊີ: {bank.acount_name}</h5>
                  <h5>ເລກບັນຊີ: {bank.acount_number}</h5>
                  <center>  <img src={bank.back_qr} className='w-50' alt="" /></center>
                </div>
              )}
              <div className="form-group mb-2 mt-4">
                <label htmlFor="" className='form-label'>ຊື່ບັນຊີ <span className="text-danger">*</span></label>
                <input type="text" className='form-control' onChange={(e) => handleChange('cardholder_name', e.target.value)} placeholder='ຊື່ຜູ້ຖືບັດ /Cardholder Name' required />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="" className='form-label'>ເລກບັນຊີ <span className="text-danger">*</span></label>
                <input type="text" className='form-control' onChange={(e) => handleChange('transfer_number', e.target.value)} placeholder='XXX-XXXX-XXXX' required />
              </div>
              <div className="row">
                <div className="form-group col-12 mb-2">
                  <label htmlFor="" className='form-label'>ວັນທີຊຳລະ <span className="text-danger">*</span></label>
                  <input type="datetime-local" value={moment(values.date_transfer).format('YYYY-MM-DD hh:mm:ss')} onChange={(e) => handleChange('date_transfer', e.target.value)} className='form-control' required />
                </div>
                <div className="form-group col-12 mb-2">
                  <label className="form-label">ໝາຍເຫດ <span className="text-danger">*</span></label>
                  <textarea rows={2} onChange={(e) => handleChange('pays_remark', e.target.value)} placeholder='ໝາຍເຫດ.....' className="form-control required " required />
                </div>
                <div className="form-group  col-12 mb-2">
                  <label htmlFor="" className='form-label'>ສະລິບການໂອນ</label>
                  <input type="file" accept="image/*" onChange={handleFilePayment} className="form-control" required />
                </div>
                <div className="form-group row">
                  <div className="col-sm-8">
                <div className="mb-4 flex items-center mt-4">
                    <input type="checkbox" onChange={handleCheck}
                      className="focus:ring-blue-500 text-primary h-4 w-4 " />
                    <label  className="ml-3 text-sm font-medium text-gray-900" >ກວດສອບ ຂໍ້ມູນຂອງທ່ານຖຶກຕ້ອງແລ້ວບໍ່ </label>
                  </div>
                  </div>
                  <div className="col-sm-4">
                  <button type='summit' className='btn btn-primary w-40 mt-3' disabled={!checked}>ຢືນຢັນການສັ່ງຊື້</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FormBuygold
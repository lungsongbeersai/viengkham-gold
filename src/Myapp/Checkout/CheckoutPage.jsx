import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useProvince2, useDistrict, useBank } from '../../Config/select-option';
import { Config, Urlimage } from '../../Config/connection';
import moment from 'moment';
import numeral from 'numeral';
import axios from 'axios';
function CheckoutPage() {
    const api = Config.urlApi;
    const img = Urlimage.url;
    const itemProvince = useProvince2();
    const itemBank = useBank();

    const [idDist, setIdDist] = useState(null);
    const handleShowDist = (value) => {
        setIdDist(value)
    }
    const itemDistrict = useDistrict(idDist);
    const [bank, setBank] = useState({
        acount_name: '',
        acount_number: '',
        back_qr: ''
    });
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

    const [price, setPrice] = useState({
        grams: '',
        price_sale: '',
        type_id_fk: '',
    });


    const [values, setValues] = useState({
        customId: '',
        cus_fname: '',
        cus_lname: '',
        cus_dob: null,
        villageName: '',
        district_id_fk: '',
        cus_tel: '',
        email: '',
        card_number: '',
        file_doc: '',
        status_register: '3',
        cus_remark: '',
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

    const handleChange = (name, value) => {
        setValues({
            ...values, [name]: value
        })
    }

    const handleSelectFile = (value) => {
        const file = value.target.files[0];
        setValues({
            ...values, file_doc: file
        })
    }

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
    }, [idDist])

    // =======================================


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
        console.log(values);
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

    // ====================================
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
    const [selectedPrefix, setSelectedPrefix] = useState('020'); // State for selected dropdown item
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleSelect = (prefix) => {
        setSelectedPrefix(prefix);
        setDropdownOpen(false); // Close the dropdown after selection
    };
    return (
        <>
            <div className="mx-auto w-full py-3 px-0 text-sm md:px-6 xl:max-w-7xl xl:px-4">
                <div className="py-1 text-lg">
                    <span className="text-blue-700 hover:underline">
                        <Link to={'/'}>ໝ້າຫຼັກ</Link>
                    </span>
                    <span className='px-2'>
                        <i className="fas fa-chevron-right text-xs" />
                    </span>
                    <span>ລົງທະບຽນຊື້ທອງຄຳ ຮ້ານຄຳ ນາງວຽງຄຳ</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="mt-2 space-y-2 border border-gray-400 bg-white p-3 text-sm">
                                <div className="text-lg font-semibold mb-4">1. ລາຍລະອຽດລູກຄ້າ</div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ຊື່ລູກຄ້າ <span className="text-danger">*</span></label>
                                    <div className="col-sm-8">
                                        <input className="form-control rounded " type="text" value={values.cus_fname} onChange={(e) => handleChange('cus_fname', e.target.value)} placeholder='ຊື່ລູກຄ້າ /First Name' required />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ນາມສະກຸນ <span className="text-danger">*</span></label>
                                    <div className="col-sm-8">
                                        <input className="form-control rounded " type="text" value={values.cus_lname} onChange={(e) => handleChange('cus_lname', e.target.value)} placeholder='ນາມສະກຸນ / Last Name' required />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'> ໂທລະສັບຫຼັກ /Primary Phone <span className="text-danger">*</span></label>
                                    <div className="col-sm-8">
                                        <div className="input-group">

                                            <button type="button" className="btn btn-default border border-end-0" onClick={toggleDropdown} aria-expanded={dropdownOpen} >
                                                {selectedPrefix}  <span className="caret"></span>
                                            </button>
                                            {dropdownOpen && (
                                                <div className="dropdown-menu show">
                                                    <a href="ajvascript:;" className="dropdown-item" onClick={() => handleSelect('020')}>
                                                        020
                                                    </a>
                                                    <a href="ajvascript:;" className="dropdown-item" onClick={() => handleSelect('030')}>
                                                        030
                                                    </a>
                                                </div>
                                            )}
                                            <input type="tel" className="form-control" value={values.cus_tel} onChange={(e) => handleChange('cus_tel', e.target.value.slice(0, 8))} placeholder='999 99 999' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>  ອີເມວ /Email address</label>
                                    <div className="col-sm-8">
                                        <input type='text' className="form-control" value={values.email} onChange={(e) => handleChange('email', e.target.value)} placeholder='***@gmail.com' />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'> ເລກບັດປະຈຳຕົວ /ID card number <span className="text-danger">*</span></label>
                                    <div className="col-sm-8">
                                        <input type='text' className="form-control " value={values.card_number} onChange={(e) => handleChange('card_number', e.target.value)} placeholder='ເລກບັດປະຈຳຕົວ' required />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ແຂວງ / Porvince</label>
                                    <div className="col-sm-8">
                                        <select type='text' className="form-control" onChange={(e) => handleShowDist(e.target.value)} >
                                            <option value={''}>ເລືອກແຂວງ</option>
                                            {itemProvince.map(province => (
                                                <option key={province.province_id} value={province.province_id}>
                                                    {province.province_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ເມືອງ / District</label>
                                    <div className="col-sm-8">
                                        <select type='text' className="form-control " value={values.district_id_fk} onChange={(e) => handleChange('district_id_fk', e.target.value)} >
                                            <option value={''}>ເລືອກເມືອງ</option>
                                            {itemDistrict.map(item => (
                                                <option key={item.district_id} value={item.district_id}>
                                                    {item.district_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ບ້ານ / Villages</label>
                                    <div className="col-sm-8">
                                        <input type='text' className="form-control " value={values.villageName} onChange={(e) => handleChange('villageName', e.target.value)} placeholder='ບ້ານ / Villages' />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ໝາຍເຫດ / Description</label>
                                    <div className="col-sm-8">
                                        <textarea type='text' className="form-control " value={values.cus_remark} onChange={(e) => handleChange('cus_remark', e.target.value)} placeholder='ໝາຍເຫດ /Remark' />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <label htmlFor="" className='col-sm-4 form-label text-lg-end'>ເອກະສານ</label>
                                    <div className="col-sm-8">
                                        <input type='file' className="form-control " onChange={handleSelectFile} accept="image/*" />
                                        <p className="form-text mb-0 fs-12px text-muted f-w-600 mt-10px">ອັບໂຫລດຮູບບັດປະຈຳຕົວ ຫຼື ໜັງສືຜ່ານແດນ  /Upload a photo of your ID or passport</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className='mt-3'><u>ເງືອນໄຂການສັ່ງຊື້</u> </h5>
                            <p>ການສັ່ງຊື້ທອງຄຳຈາກຮ້ານຄຳ ນາງວຽງຄຳ ຂອງພວກເຮົາ ທ່ານສາມາດຊື້ໄດ້ສະເພາະທອງຄຳແທງເທົ່ານັ້ນ    <br />
                                ສ່ວນທອງຄຳຮູບປະພັນ ທ່ານສາມາດເຂົ້າມາຊື້ໄດ້ທີ່ໜ້າຮ້ານຄຳ ນາງວຽງຄຳ ພວກເຮົາມີສິນຄ້າລາກຫຼາຍລາຍການໃຫ້ການບໍລິການແກ່ທ່ານ  <br />
                                <b>ການສັ່ງຊື້ :</b> ທ່ານຈະຕ້ອງປ້ອນຂໍ້ມູນທີ່ຖຶກຕ້ອງຕາມການແນະນຳຈາກຮ້ານຄຳ ນາງວຽງຄຳ ທີ່ໄດ້ລະບຸໄວ້ຕາມແບບຟອມຄາງເທິງນັ້ນ,  <br />
                                ຂໍ້ມູນນີ້ຈະເປັນຫຼັກຖານໃນການໄປຮັບທອງຄຳຈາກທາງຮ້ານ, ແລະ ຈະມີພະນັກງານກວດສອບຂໍ້ມູນທີ່ມີການປ້ອນບັນທຶກໄວ້ໃຫ້ຕົງກັບ ຂໍ້ມູນຕາມໃບບິນທີ່ມີການມາຢັງຢຶນໄວ້  <br />
                                <b>* ເວລາການສັ່ງຊື້ສຳເລັດ ກະລຸນາດາວໂຫລດໃບບິນໄວ້ ເພື່ອນຳມາເປັນໃບຢັງຢຶນໃນການຮັບສ້ນຄ້າ ຈາກຮ້ານຄຳ ນາງວຽງຄຳ</b>
                            </p>
                        </div>

                        <div className="col-sm-5">
                            <div className="w-full mt-2">
                                <div className="space-y-2 border border-gray-400 bg-white p-2 text-sm">
                                    <h1 className="border-b border-gray-400 pb-2 text-base font-semibold fs-22px"> I ຂໍ້ມູນການສັ່ງຊື້ທອງຄຳ</h1>
                                    <div className=" flex-row w-full">
                                        <div> ! ສະບາຍດີລູກຄ້າທຸກທ່ານ ໃນຄະນະນີ້ທ່ານສາມາດຊື້ໄດ້ສະເພາະ ທອງຄຳແທ່ງເທົ່ານັ້ນ </div>
                                        <div className="text-orange">ສ່ວນຄຳຮູບປະພັນ ພວກເຮົາຈະໃຫ້ບໍລິການຊື້ທອງຄຳທີ່ເປັນຮູບປະພັນໄດ້ໄວໆນີ້</div>
                                    </div>
                                    <div className="row px-3">
                                        <div className="col-6">
                                            <div className="form-group mb-2">
                                                <label htmlFor="" className='form-label'>ປ້ອນຈຳນວນບາດ</label>
                                                <input type="number" value={values.qty_baht} onChange={(e) => handleQtybath(e.target.value)} className='form-control border-2 border-gold bg-black text-gold text-center rounded-pill' placeholder='00' required />
                                            </div>
                                            <div className="form-group">
                                                <div className='p-2 border-2 border-gold bg-black text-gold text-center rounded-pill fs-bold' >{values.qty_grams} g</div>
                                            </div>
                                        </div>
                                        <div className="form-group border-2 border-gold bg-black text-gold  tracking-wider col-6 rounded">
                                            <label htmlFor="" className='form-label'>ລາຄາ</label>
                                            <h5>{numeral(price.price_sale * price.grams).format('0,0.00')} ກິບ / <span className='fs-14px'>ບາດ</span></h5>
                                            <p className='fs-16px'>ນ້ຳໜັກ: {price.grams} / g</p>
                                        </div>
                                        <div className="col-sm-12 mt-4">
                                            <div className="p-3 text-center border-2 border-gold bg-black  text-gold fs-22px rounded-pill">
                                                {numeral(values.balance_gold).format('0,0.00')} ₭
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <hr />
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
                                                <button type='summit' className='btn btn-primary w-100 mt-3'>ຢືນຢັນການສັ່ງຊື້</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CheckoutPage
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import numeral from 'numeral';
import moment from 'moment';
import { Urlimage } from '../../Config/connection';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
function ViewInvioceOrder({ show, handleClose, data }) {
    const img = Urlimage.url;
    useEffect(() => {

    }, [data]);

    const downloadPDF = (fileName) => {
        const modalBody = document.querySelector('.modal-body');
        html2canvas(modalBody).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(fileName + '.pdf'); // specify PDF file name
        });
    };

    const downloadIMG = (fileName) => {
        const modalBody = document.querySelector('.modal-body'); // select the modal body content
        html2canvas(modalBody).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = fileName + '.png'; // specify image file name
            link.click();
        });
    };
    const handleDownload = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl); // Replace with your server URL
            if (!response.ok) {
                throw new Error('File download failed');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const fileExtension = fileUrl.split('.').pop(); // Get the extension from the URL
            const fileName = `${new Date().getTime()}.${fileExtension}`;

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            alert('ຂໍອະໄພບໍ່ມີໄຟລ໌ໃນໂຟນເດີ ກະລຸນາອັບເດດໄຟລ໌ເຂົ້າໃໝ່!', error);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl">
                <div className='text-right p-2'>
                    <button type="button" onClick={() => downloadIMG(data.pay_sale_code)} className='btn btn-primary btn-sm me-2'><i className="fa-regular fa-image"></i> ຮູບ</button>
                    <button type="button" onClick={() => downloadPDF(data.pay_sale_code)} className='btn btn-danger btn-sm me-2'><i className="fa-solid fa-download"></i> PDF</button>
                    <button type='button' onClick={handleClose} className='btn btn-warning btn-sm'> <i className="fa-solid fa-xmark"></i></button>
                </div>
                <Modal.Body className='p-lg-3 p-0 modal-body' >
                    <div className="" style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('./assets/img/logo/logo.png')`, // Replace with your image path
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.1, // Adjust opacity
                        zIndex: 0,
                    }} />
                    <div className="row px-lg-5" style={{ position: "relative" }}>
                        <div className="col-2">
                            <img src="./assets/img/logo/logo.png" width={'80%'} alt="" />
                        </div>
                        <div className="col-6 fs-14px">
                            <div className='text-dark fs-18px'>ຊື່ຮ້ານຄ້າ: ຮ້ານຄຳ ນາງວຽງຄຳ</div>
                            <div className='text-dark fs-16px'>ເບີໂທລະສັບ: 020 95 555 609</div>
                            <div className='text-dark'>ທີ່ຢູ່ຮ້ານ: ຕະຫລາດເຊົ້າມໍຊັ້ນ2, ບ້ານ ຫັດສະດີ ,ເມືອງ ຈັນທະບູລີ</div>
                            <div>ແຂວງ ນະຄອນຫຼວງວຽງຈັນ</div>
                        </div>
                        <div className="col-4 text-end">
                            <div>NO: {data.pay_sale_code}</div>
                            <div>Date: {moment(data.paysale_date).format('DD/MM/YYYY')}</div>
                            <div>Time: {moment(data.paysale_date).format('hh:mm:ss')}</div>
                            <div className={`fs-16px ${data.status_pays === 1 ? 'text-red' : data.status_pays === 2 ? 'text-orange' : 'itext-green'}`} > {data.status_pays === 1 ? 'ຍັງບໍ່ໄດ້ຮັບການກວດສອບ' : data.status_pays === 2 ? 'ໄດ້ຮັບການກວດສອບແລ້ວ' : 'ການມອບຮັບສິນຄ້າສຳເລັດ'} </div>
                        </div>
                        <h3 className='text-center p-3'>ບິນມອບຮັບເງິນສົດ</h3>
                        <table className='w-100 text-nowrap mt-3 fs-16px'>
                            <tr>
                                <td width={'7%'} className='text-end'>ຊື່ລຸກຄ້າ:</td>
                                <td className='border-bottom'>{data.cus_fname} {data.cus_lname}</td>
                                <td width={'7%'}>ເບິໂທລະສັບ:</td>
                                <td className='border-bottom'>{data.cus_tel}</td>
                                <td width={'7%'}>ທີ່ຢູ່ປະຈຸບັນ:</td>
                                <td className='border-bottom' width={'30%'}>{data.villageName + ', ' + data.district_name + ', ' + data.province_name}</td>
                            </tr>
                        </table>

                        <div className="table-responsive mt-3">
                            <table className='w-100 table-sm table-bordered align-middle text-nowrap'>
                                <thead className='bg-viengkham'>
                                    <tr >
                                        <th className=''>ລ/ດ</th>
                                        <th className=' text-left'>ລາຍການສິນຄ້າ</th>
                                        <th className=' text-center'>ຈຳນວນ</th>
                                        <th className=' text-center'>ນຳໜັກ</th>
                                        <th className=' text-end'>ລວມລາຄາ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">{1}</td>
                                        <td className="">ທອງຄຳແທ່ງ</td>
                                        <td className="text-center"> {data.qty_baht} ບາດ  </td>
                                        <td className="text-center">{data.qty_grams} g</td>
                                        <td className="text-end"> {numeral(data.balance_gold).format('0,0.00')} </td>
                                    </tr>
                                    {[2, 3, 4, 5].map((item) => (
                                        <tr key={item}>
                                            <td className="text-center">{item}</td>
                                            <td>-</td>
                                            <td></td>
                                            <td></td>
                                            <td className='text-end'>-</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-6 text-center mt-3" >
                            <QRCodeSVG className='qrcode'
                                value={`${data.pay_sale_uuid}-vk`}
                                size={'250'}
                                bgColor={"#ffffff"}
                                level={"L"}
                                includeMargin={false}
                                imageSettings={{
                                    src: "/assets/img/logo/logo.png",
                                    excavate: true,
                                    height: 50,
                                    width: 50,
                                }}
                            />
                        </div>
                        <div className="col-6">
                            <table className='w-100 text-nowrap'>
                                <tr>
                                    <td className='text-end'>ລວມຍອດທັງໝົດ:</td>
                                    <td className='text-end'>{numeral(data.balance_gold).format('0,0.00')} ₭</td>
                                </tr>
                                <tr>
                                    <td className='text-end'>ສ່ວນຫຼຸດ:</td>
                                    <td className='text-end'>{numeral(data.balance_discount).format('0,0.00')} ₭</td>
                                </tr>
                                <tr>
                                    <td className='text-end'>ລວມເງິນ:</td>
                                    <td className='text-end'>{numeral(data.balance_gold - data.balance_discount).format('0,0.00')} ₭</td>
                                </tr>
                                <tr>
                                    <td className='text-end text-blue'>ຊື່ບັນຊີ:</td>
                                    <td className=''>{data.cardholder_name}</td>
                                </tr>
                                <tr>
                                    <td className='text-end text-blue'>ເລກທີ່ການໂອນ:</td>
                                    <td className=''>{data.transfer_number}</td>
                                </tr>
                                <tr>
                                    <td className='text-end text-blue'>ເອກະສານໂອນຈ່າຍ:</td>
                                    <td className=''> <span className='text-right ms-3 text-red' onClick={() => handleDownload(`${img}document/paysale/${data.file_transfer}`)} role='button'><i className="fa-solid fa-download"></i> {data.file_transfer}</span> </td>
                                </tr>
                            </table>
                        </div>
                        {data.status_pays === 3 && (
                            <div className="px-4 p-3">
                                <div className=" fs-16px text-green"> <i className="fa-solid fa-check"></i> ທ່ານໄດ້ມີການຮັບສິນຄ້າຈາກຮ້ານຄຳ ນາງວຽງຄຳ ແລ້ວ ເມືອວັນທີ:<b>{moment(data.date_approved).format('DD/MM/YYYY hh:mm:ss')}</b>
                                    <div className="fs-18px"> ຜູ້ອະນຸມັດອອກ: {data.userName}</div>
                                </div>
                            </div>
                        )}
                        <hr className='mt-2' />
                        <h5>ໝາຍເຫດ.</h5>
                        <ul className='px-3 ms-2'>
                            <li> ລູກຄ້າຈະຕ້ອງດາວໂຫຼດໃບບິນເພື່ອເປັນຫຼັກຖານໃນການຮັບສິນຄ້າ ຖ້າບໍ່ມີໃບບິນຫຼື ລັກຖານການສັ່ງຊື້ຈະບໍ່ສາມາດໄປຮັບສິນຄ້າໄດ້</li>
                            <li>ລູກຄ້າສາມາດຖືບິນນີ້ເຂົ້າມາຮັບສິນຄ້າຈາກທາງຮ້ານຄຳ ນາງວຽງຄຳ ເທົ່ານັ້ນ </li>
                            <li>ຫ້າມບໍ່ໃຫ້ມີການລອກລຽນແບບເພື່ອມຮັບສິນຄ້າ ຖ້າພົບເຫັນຈະມີການດຳເນີນຕາມກົດໝາຍ </li>
                            <li>ຂໍຂອບໃຈອຸດໜູນ ແລະ ໃຫ້ຄວາມໄວ້ວ່າງໃຈໃນຮ້ານຄຳ ນາງວຽງຄຳ ຂອງພວເຮົາ </li>
                        </ul>
                        <h5 className='text-center text-red'>ຂໍຂອບໃຈ ທີ່ໃຫ້ຄວາມໄວ້ວ່າງໃຈ ໃນຮ້ານຄຳ ນາງວຽງຄຳຂອງພວກເຮົາ </h5>

                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ViewInvioceOrder
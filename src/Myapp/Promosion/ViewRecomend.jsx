import React,{useState,useEffect} from 'react'
import {Modal,Card} from 'react-bootstrap';
import { Urlimage } from '../../Config/connection';
import numeral from 'numeral';
function ViewRecomend({show,handleClose,data}) {
  const img = Urlimage.url;

  return (
    <Modal
    show={show}
    onHide={handleClose}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body className='p-0'>
      <Card className='view'>
      <Card.Img variant="top" src={`${img}pos/${data.recd_image}`} />
      <span onClick={handleClose} className='view-top-right btn btn-danger btn-sm rounded-circle'><i className="fa-solid fa-circle-xmark" /></span>
      <Card.Body>
        <Card.Title>{data.recomennde_name}</Card.Title>
        <Card.Text>
         <p>{data.tile_name} <span className='text-danger'>({data.qty_baht + ' ' + data.option_name})</span></p>
         <div className='text-right'> {numeral(data.price_sale * data.qty_baht).format('0,00')} ₭</div>
         <p>{data.recd_remark}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Modal.Body>
  </Modal>
  )
}

export default ViewRecomend
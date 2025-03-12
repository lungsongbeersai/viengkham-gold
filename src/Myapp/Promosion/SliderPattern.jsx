import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../style.css";
import { Card} from "react-bootstrap";
import { Config,Urlimage } from '../../Config/connection';
import numeral from 'numeral';
import axios from 'axios';
function SliderPattern({colum}) { 
    
    const api = Config.urlApi;
    const img = Urlimage.url;
  
    const [show, setShow] = useState(false);
    
    const [valuepat, setValuepat] = useState({
        type_id_fk: '',
        title_id_fk: '',
        option_id_fk: ''
    })
    const [itemPattern, setItemPattern] = useState([]);
    const fetchPattern = async () => {
        try {
            const response = await axios.post(`${api}pattern/`, valuepat);
            setItemPattern(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchPattern();
    }, [])

  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: colum,
      slidesToScroll: colum,
      initialSlide: 2,
      nextArrow: null,
      prevArrow: null,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2
          }
        }
      ]
    };


    // const [data, setData] = useState({})
    // const ViewPattern = (data) => {
    //     setData(data);
    //     setShow(true);
    // };
  
    return (
        <>
        <Slider {...settings} controls={false}>
          {itemPattern.slice(0, 20).map((val, index) => (
            <div key={index}>
              <PatternCard imgSrc={`${img}pattern/${val.pattern_img}`}
              cardTitle= {val.pattern_name}
              cardText={val.pattern_remart}
              price={numeral(val.pattern_pirce).format('0,00')}  />
            </div>
          ))}
        </Slider>
        </>
      );
    }

    const PatternCard = ({ imgSrc,cardTitle,cardText,price }) => {
        return (
            <>
          <Card>
           <Card.Img variant="top" src={imgSrc} 
            role="button"  className="custom-card-img" />
            <Card.Body className='py-1 px-1'>
              <Card.Title className='line-clamp-1 fs-16px'>{cardTitle}</Card.Title>
              <Card.Text className='mt-0 line-clamp-1'>{cardText}</Card.Text>
              <div className="product-price text-orange text-end">{price} ₭</div> 
            </Card.Body>
          </Card>

          </>
        );
      }

export default SliderPattern
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './OtherProduct.css';
import Carousel from 'react-bootstrap/Carousel';

function OtherProducts() {
    useEffect(() => {
        otherproductDisplay();
    }, []);

    const [otherProducts, setotherProducts] = useState([]);

    const slicedotherProduct=otherProducts.slice(4, 17);
    const otherproductDisplay = async () => {
        await axios.get('https://fakestoreapi.com/products').then(response => {
            console.log(response.data);
            setotherProducts(response.data);
        })
    }
    return (
        <section className="otherproducts">

                <Carousel className='carosel p-3 mb-2 bg-light'>
                    {
                        slicedotherProduct.map((other) => {
                            return (

                                <Carousel.Item>
                                    <img
                                        className="d-inline-block img-fluid"
                                        src={other.image}
                                        alt={other.title}
                                    />
                                    <div className='caroselcaption'>
                                    <Carousel.Caption>
                                        <h3 className='text-black price'>${other.price}</h3>
                                        <p className='text-black description'>{other.description.substring(0, 200)}</p>
                                    </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
        </section>
    )
}

export default OtherProducts

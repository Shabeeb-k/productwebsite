import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Product.css';

// Import Bootstrap CSS
import { Card, Col, Container, Row } from 'react-bootstrap';

function Product() {
    useEffect(() => {
        productDisplay();
    }, []);

    const [products, setProducts] = useState([]);

    const slicedProduct = products.slice(0, 4);

    // let description = products.description;
    // console.log("hi",description);    
    // if ((products.description || []).length > 5) {
    //     let description = products.description.substring(0, 10);
    //     console.log("hi",description);
    // }

    const productDisplay = async () => {
        await axios.get('https://fakestoreapi.com/products').then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
    }



    return (
        <section className="products">
            <div className="d-flex" style={{ height: '5rem' }}>
                {
                    slicedProduct.map((pro) => {
                        return (

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 my-5">
                                        <Container>
                                        <Row>
                                        <Col md="3 ">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" className='cardImg' src={pro.image} />
                                                <Card.Body>
                                                    <Card.Title>{pro.title}</Card.Title>
                                                    <Card.Title>Price:${pro.price}</Card.Title>
                                                    <Card.Title >Rating:{pro.rating.rate} <span className="rati">★</span></Card.Title>
                                                    <Card.Text>
                                                        {pro.description.substring(0, 190)}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                            </Row>
                                            </Container>
                                    </div>

                                </div>
                            </div>


                        );
                    })
                }
            </div>
        </section>
    )
}

export default Product

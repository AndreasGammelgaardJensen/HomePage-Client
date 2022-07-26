import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';


const Layout=()=> {
    return (
        <div>
        <Header/>
            <Container fluid>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={7}>
                        <Outlet/>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            <div className='App-footer'>
                <Footer/>
      </div>
        </div>
        
    )
}

export default Layout;
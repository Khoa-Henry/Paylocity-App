import React, { useEffect } from 'react';
// import Profile from './Profile';
import AppComponent from './AppComponent';
import './style.css';
// import Girlpic from '../Communitypage/Images/girlpic.jpg'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Person from '../Dashboardpage/person.jpg';
import {Modal, Container, Row, Col } from 'react-bootstrap';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

function DashBoard (props) {

    const handleClose = () => props.setShow(false);

        
    // useEffect(()=>{
    // use api to record the the emotions to users
    // })


    const logout = ()=>{
        props.setCurrentUser([])
    }

    return (

        <div> 
            <Modal 
            show={props.show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>How are you feeling today?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col style={{color:'red'}}>
                                <MoodBadOutlinedIcon onClick={handleClose}/>
                                Worst
                            </Col>
                            <Col style={{color:'orange'}}>
                                <SentimentDissatisfiedOutlinedIcon onClick={handleClose}/>
                                Not Good
                            </Col >
                            <Col style={{color:'grey'}}>
                                <SentimentSatisfiedIcon onClick={handleClose}/>
                                Ok
                            </Col>
                            <Col style={{color:'green'}}>
                                <SentimentSatisfiedOutlinedIcon onClick={handleClose}/>
                                Good
                            </Col>
                            <Col style={{color:'lime'}}>
                                <SentimentVerySatisfiedOutlinedIcon onClick={handleClose}/>
                                Best
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>   
            </Modal>
            <div>
                <div>
                    {props.currentUser.map(item=>
                        <h1 className="ui header" style={{paddingLeft:'10%', paddingTop:'5%'}}>
                            <img src={Person} className="ui circular image"/>
                            <div className="content">
                                {item.firstName} {item.lastName}
                                <div className="sub header">{item.position}</div>
                            </div>
                        </h1>)}
                    {/* <div>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>  
                    </div> */}
                </div>
            </div>
            <div className="ui divider" ></div>
            <AppComponent/>
            
            <div style={{position:'fixed', bottom:'30px', left:'37%'}}>
                <Link to='/login'><Button onClick={()=>logout()} className="ui fluid primary large button">Logout</Button></Link>
            </div>
        </div>
    );
};



export default DashBoard;
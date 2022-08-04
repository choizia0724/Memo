import React from "react";
import DummyData from "./static/MOCK_DATA.js";
import Header from "./header.js"
import Memo from "./memo.js"

//부트스트랩
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//폰트어썸
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";
//my_style
import './global-style.css'
import './App.css';


const Footer = ()=>{
  return(
  <footer className="p-4 mt-3"><div className="text-center">Copyright ⓒ Zia</div></footer>
  )
}



const List = () => { 
  return(
    <Row className='userlists'>
      {DummyData.map((data)=>{
        return(
          <Col sm={6} md={4} className='userlist mb-3 text-center' key={data.id}>
            <div className="thumb">
              <img src={data.image} alt={data.name}/>
            </div>
            <div className="user-content">
              <div className='name'>{data.name}</div>
              <Row className="icons">
                <Col className="email"><FontAwesomeIcon className='fa icon' icon={faAt}/></Col>
                <Col className="location"><FontAwesomeIcon className='fa icon' icon={faLocationDot}/></Col>
                <Col className="comment"><FontAwesomeIcon className='fa icon' icon={faCommentDots}/></Col>
              </Row>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}


const Features = () => {
  return(
    <section className="features">
      <div>
        <h2 className="text-center mt-3">Memo</h2>
        <Memo/>
      </div>
      <div>
        <h2 className="text-center">About Us</h2>
        <List />
      </div>
    </section>
  )
}


const App = () => {
  return (
    <div className="App">
      <main>
        <Header/>
        <Container>
        <Features />
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

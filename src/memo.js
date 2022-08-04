import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Content from './static/Content'
import Memolist from './memolist.js'


import './App.css';

const Memo = ()=>{
    const [memo,setMemo] = useState(...[Content])
    const [id,setId] = useState(memo.length+1)
    const [subject, setSubject] = useState('');
    const [msg,setMsg] = useState('');
   

    const handleButtonClick = (event) => {

        const content={
            id,
            subject : subject,
            content : msg,
        };
        setId(id+1)
        setMemo([...memo,content])
    }
    const handleChangeSubject = (event) => {
         setSubject(event.target.value)
      };
    
      const handleChangeMsg = (event) => {
        setMsg(event.target.value)
      };
      
      const handleDelete = id =>{
        setMemo(memo.filter(msg => msg.id !== id))
      }
      
    return(
        <>
        <div className="button-wrap mb-3">
        <Form>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>To Do List</Form.Label>
                    <Form.Control type="email" placeholder="subject" onChange={handleChangeSubject}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Form>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control onChange={handleChangeMsg}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <div className="d-grid gap-2 mt-2 mb-3">
            <Button onClick={handleButtonClick} variant="success">Success</Button>
            </div>
        </div>
        <div className="text-right">total:{memo.length}</div>
        <Accordion className="mb-4" defaultActiveKey="0">
            {      
                memo.map(x=>{
                    return(
                        <Memolist key={x.id} memo={x} onErase={handleDelete}/>
                    )
                })  
            }
        </Accordion>
        </>
    )
}

export default Memo
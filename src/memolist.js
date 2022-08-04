import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Memolist = ({memo,onErase})=>{
    return(
        
        <Accordion.Item eventKey={memo.id} id={memo.id}>
            <Accordion.Header>
                <span ><FontAwesomeIcon  onClick={() => onErase(memo.id)}icon={faTrashCan} /></span>
                <div className="memo-subject">{memo.subject}</div>
            </Accordion.Header>
            <Accordion.Body>
                <div className="memo-content">{memo.content}</div>
                
            </Accordion.Body>
        </Accordion.Item>
        
    )
}


export default Memolist
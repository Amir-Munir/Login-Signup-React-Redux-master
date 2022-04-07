import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { loadTODO } from './Store/Actions/Actions';
import img from '../image/img.jpg';

ReactModal.setAppElement('#root')

export const ButtonApi = () => {

    const users = useSelector(state => state.todo.todo);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [fiveUser, setFiveUser] = useState([]);
    const dispatch = useDispatch();

    let newUsers;

    useEffect(() => {
        dispatch(loadTODO())
    }, []); 

    const btn = (index,Quantity) =>{
        setModalIsOpen(true);
        newUsers = [...users];
        const next20 = newUsers.splice(index,Quantity)
        setFiveUser(next20)        
    }
    return (
        <div className='btn_div' >
            <button className='btns' onClick={()=> btn(0,20)}>1</button>
            <button className='btns' onClick={()=> btn(20,20)}>2</button>
            <button className='btns' onClick={()=> btn(40,20)}>3</button>
            <button className='btns' onClick={()=> btn(60,20)}>4</button>
            <button className='btns' onClick={()=> btn(80,20)}>5</button>
            <div className='reactModal__div'>
                    <ReactModal isOpen={modalIsOpen}
                        style={
                            {
                                overlay:{
                                    backgroundColor : "gray"
                                },
                                content: {
                                    color: "#0a0a0a"
                                }
                            }
                        }
                    >       <button className='reactModal__button' style={{float: 'right'}} onClick={()=> setModalIsOpen(false)}>Close</button>
                            <CarouselProvider className='slider center'
                                totalSlides={20}
                            >
                                <Slider className='slider' style={{backgroundImage: `url(${img})`}} >
                                {fiveUser.map((obj,index) => (
                                    <Slide className='slider' key={index} index={index}> 
                                        <h1 style={{color: 'black'}}>{obj.id}</h1>
                                        <h2>{obj.title}</h2>
                                        <p>{obj.body}</p>
                                    </Slide>
                                    ))}
                                </Slider>
                                <ButtonBack className='slider-btn'>Back</ButtonBack>
                                <ButtonNext className='slider-btn'>Next</ButtonNext>
                            </CarouselProvider>
                        
                    </ReactModal>
                </div>
        </div>
    )
};

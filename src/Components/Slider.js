import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useSelector, useDispatch } from 'react-redux'
import { loadTODO } from './Store/Actions/Actions';
import img from '../image/img.jpg';

export const CarouselSlider = () => {
    const users = useSelector(state => state.todo.todo )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTODO())
    }, []);
    return(
        
    <CarouselProvider className='slider center' 
        totalSlides={users.length}
    >
        <Slider className='slider' style={{backgroundImage: `url(${img})`}} >
        {users.map((obj,index) => (
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
        
    )
}
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import TypeOut from 'react-typeout';

import { inputValue, langDropDownValue, loadShazam, resultDropDownValue } from "./Store/Actions/Actions";
// import back from '../image/back.jpg' 

const words = ['Identify songs playing around you!']
export const Shazam = () => {
    const dispatch = useDispatch()
    const searchVal = useSelector(state => state.shazam.inputValue ? state.shazam.inputValue : '')
    const languageVal = useSelector(state => state.shazam.langDropdown ? state.shazam.langDropdown : '')
    const resultVal = useSelector(state => state.shazam.resultDropdown ? state.shazam.resultDropdown : '')
    // debugger
    // const songArtist = useSelector(state => state.shazam.loadShazam.data && state.shazam.loadShazam.data.artists.hits ? state.shazam.loadShazam.data.artists.hits : [])
    const songDetails = useSelector(state => state.shazam.loadShazam.data && state.shazam.loadShazam.data.tracks.hits ? state.shazam.loadShazam.data.tracks.hits : [])

    const searchBtn = () => {
        // debugger
        dispatch(loadShazam({term: searchVal, locale: languageVal, offset: '0', limit: resultVal}))
    }

    const inputVal= (e) => {
        const value = e.target.value
        dispatch(inputValue(value))
    }
    
    const languageDropdown = (e) => {
        const value = e.target.value
        dispatch(langDropDownValue(value))
    }

    const limitDropdown = (e) => {
        const value = e.target.value
        dispatch(resultDropDownValue(value))
    }

    return(
        <div className="back-img"> 
        
            <div className="s132">
                <form>
                    <div>
                        <p>
                            <strong>
                            <TypeOut style={{color:'black',display:'block'}} words={words} typeSpeed={100} />
                            </strong>
                        </p>
                    </div>
                    <div className="inner-form">
                    <div className="input-field first-wrap d-flex align-items-center">
                        <div className="input-select mx-2">
                        <select className="form-select" aria-label="Default select example" onChange={languageDropdown} data-trigger="" name="choices-single-default">
                        <option>Language</option>
                            <option value={'ur'}>Urdu</option>
                            <option value={'en'}>English</option>
                            <option value={'hi'}>Hindi</option>
                        </select>
                        </div>
                        <div className="input-select">
                        <select className="form-select" value='Results' aria-label="Default select example"onChange={limitDropdown} name="choices-single-default">
                            <option>Results</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        </div>
                    </div>
                    <div className="input-field second-wrap">
                        <input onChange={inputVal} id="search" type="text" placeholder="Enter Keywords" />
                    </div>
                    <div className="input-field third-wrap">
                        <button onClick={(e)=> searchBtn(e)} className="btn-search" type="button">Search</button>
                    </div>
                    </div>
                </form>
            </div>
            {songDetails.map((el,index) => (
            <div key={index} className="song-details" style={{display : "block"}}>
                        <img alt="" src={el.track.images.coverart} style={{display : "block"}}/>
                        <h4>{el.track.title}</h4>
                        <h4>{el.track.subtitle}</h4>
            </div>
            ))}
        </div>
    )
}
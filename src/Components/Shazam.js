import React from "react";
import { useDispatch } from 'react-redux';
import { loadShazam } from "./Store/Actions/Actions";

export const Shazam = () => {
    const dispatch = useDispatch()
    dispatch(loadShazam({term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'}))
    return(
        <div>
            <div className="s132">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <div className="input-select">
              <select data-trigger="" name="choices-single-default">
                <option placeholder="">Category</option>
                <option>Subject A</option>
                <option>Subject B</option>
                <option>Subject C</option>
              </select>
            </div>
          </div>
          <div className="input-field second-wrap">
            <input id="search" type="text" placeholder="Enter Keywords" />
          </div>
          <div className="input-field third-wrap">
            <button className="btn-search" type="button">Search</button>
          </div>
        </div>
      </form>
    </div>
    {/* <script src="js/extention/choices.js"></script> */}
    {/* <script>
      const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      }); */}
        </div>
    )
}
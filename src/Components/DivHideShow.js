import React, { useState } from "react"

import BtnData from "./BtnData"
import DivData from "./DivData"

export const DivHideAndShow = () => {
  const [active, setActive] = useState("Web-Design-Development")

  return (
    <div className="row col-lg-4">
      {BtnData.map((ele, index) => (
        <button key={index} onClick={() => setActive(ele.id)}>
          {ele.name}
        </button>
      ))}
      {DivData.map((ele, index) => (
        <div key={index} className={`${ele.label === active ? "active-tab" : "tabs"}`}>
          {ele.name}
        </div>
      ))}
      {/* {active === "Web-Design-Development" ? (
        <div className="show-div">Div 1</div>
      ) : active === "Mobile-App-Development" ? (
        <div className="show-div">Div 2</div>
      ) : active === "UI-UX-Design" ? (
        <div className="show-div">Div 3</div>
      ) : active === "Software-Testing-Consulting" ? (
        <div className="show-div">Div 4</div>
      ) : null} */}
    </div>
  )
}

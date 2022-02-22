import React, { useState, useEffect } from "react"
import ReactModal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import {
  addVal,
  cashPay,
  subtractVal,
} from "./Store/Actions/Actions"

export const Cart = () => {
  const dispatch = useDispatch()
  const cartData = useSelector((state) => state.menuReducer.cart)
  const cashValue = useSelector((state) => state.menuReducer.cashPay)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  // console.log(cartData)
  const [itemChange, setItemChange] = useState(false)
// debugger
 const totalAmount = cartData?.map(item => {
   if(item.quantity > 1){
     return item.price * item.quantity
   }
   return item.price
 })?.reduce((acc,curr) => acc + curr, 0)

  const modalButton = () => {
    setModalIsOpen(true)
  }

  const addOne = (obj) => {
    // console.log("increasing")
    setItemChange(!itemChange)
    dispatch(addVal(obj))
  }

  const subOne = (obj) => {
    setItemChange(!itemChange)
    dispatch(subtractVal(obj))
  }

  const cash = (e) => {
    const cashValue = e.target.value
    dispatch(cashPay(cashValue))
    console.log(cashValue)
  }

  const checkOutPay = () => {
    if (cashValue == totalAmount) return alert("Cash payed")
    return alert("Please Pay Total Price")
  }

  return (
    <>
    <li onClick={() => {modalButton()}} className='header__item cart_li'>Cart</li>
    <div className="reactModal__div">
      <ReactModal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "#0a0a0a",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <button
          style={{ float: "right", marginTop: "2px" }}
          className="reactModal__button"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        {cartData.map((obj, index) => (
          <div style={{ width: "600px", marginTop: "5px" }} key={index}>
            <img
              style={{ width: "100px", heigh: "100px" }}
              src={obj.img}
              alt="..."
            />
            <p className="cart-p">{obj.name}</p>
            <p className="cart-p">Price{obj.price}$</p>
            <button
              onClick={() => subOne(obj)}
              style={{
                margin: "8px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
              className="btn btn-primary"
            >
              -
            </button>
            <p className="cart-p">Quantity {obj.quantity}</p>
            <button
              onClick={() => addOne(obj)}
              style={{ margin: "8px" }}
              className="btn btn-primary"
            >
              +
            </button>
          </div>
        ))}
        <div>
          
            <div >
              <p
                className="cart1-p"
                style={{ marginLeft: "20px", marginTop: "20px" }}
              >
                Total
              </p>
              <p className="cart1-p">{totalAmount}$</p>
            </div>

          <input
            className="reactModal__input"
            onChange={cash}
            style={{ width: "300px" }}
            type="text"
            placeholder="Pay Cash in $"
          />
          <button
            onClick={checkOutPay}
            style={{ width: "300px", height: "50px", display: "block" }}
            className="reactModal__button"
          >
            CheckOut
          </button>
        </div>
      </ReactModal>
    </div>
    </>
  )
}

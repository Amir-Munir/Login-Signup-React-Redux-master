import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, addVal, subtractVal } from './Store/Actions/Actions';


export const Menu = () => {

    // const currentOrder = useSelector(state => state.menuReducer.order.items);
    const products = useSelector(state => state.menuReducer.products.items);
    const dispatch = useDispatch();

    let sortProducts = products.sort(function(a,b){
        return a.id - b.id;
    })

    const addOne = (item) => {
        // debugger
        // item.quantity = 1
        dispatch(addVal(item))
    }

    const subOne = (item) => {
        // item.quantity = 1
        dispatch(subtractVal(item))
    }
    // debugger
    // const Quantity = (id) =>{
    //  const quantityVal = currentOrder.find(obj => obj.id === id)
    //  const number = quantityVal ? quantityVal.quantity : 1;
    //  return number;
    // }

    const cart = (item) => {
        dispatch(addToCart(item))
    }

    return (
        <div className='container-fluid'>
            <div className='menu row justify-content-center'>
        {sortProducts.map( (item,index) => (
            <div key={index} className='col-md-6 col-lg-4'>
            <div  className="card menu-card" style={{width: "18rem"}}>
            <img src={item.img} style={{height:"165px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <span className="card-title" >{item.name}</span>
                <span style={{paddingLeft:"15px"}} className="card-title" >{item.price}$</span>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick={() => subOne(item)} style={{margin:"8px" , paddingLeft:'14px', paddingRight:"14px"}} className="btn btn-primary">-</button>
                <span className='card-span' >{item.quantity ? item.quantity : 1}</span>
                <button onClick={() => addOne(item)} style={{margin:"8px"}} className="btn btn-primary">+</button>
                <button onClick={() => cart(item)} style={{float:"right", marginTop:"7px"}} className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
            </div>
        ))}
    </div>
        </div>
    )
};

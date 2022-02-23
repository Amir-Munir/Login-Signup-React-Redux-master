import { products } from "../../Products"

const initialState = {
  products,
  cart: [],
  cashPay: 0,
}

function findItem(items, itemToFind) {
  return items.filter((item) => item.id !== itemToFind.id)
}

const MenuCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-1":
      let found = findItem(state.products.items, action.payload)
      // state.products.items.filter(
      //   (item) => item.id !== action.payload.id
      // )
      // debugger 
      const item = action.payload
      item.quantity++
      found.push(item)
      // if(found){
      // const filter = state.products.items.filter(i =>
      //     i.id !== action.payload.id)
      // debugger
    
      return {
        ...state,
        products: {
          items: found,
        },
      }
    // }
    // else{
    // return{
    //     ...state,
    //     products: {items:[...state.products, action.payload]}
    // }

    // }

    case "SUBTRACT-1":
      // debugger
      if (action.payload.quantity !== 1) {
        let found = findItem(state.products.items, action.payload)

        const item = action.payload
        item.quantity--

        found.push(item)
    
        return {
          ...state,
          products: {
            items: found,
          },
        }
      } else {
        return {
          ...state,
        }
      }
    // const found1 = state.products.find(item => item.id === action.payload.id );
    // // debugger
    // if(found1){
    //         if(found1.quantity === 1){
    //             const remove = state.products.items.filter(i =>i.id !== action.payload.id)
    //             // debugger
    //             return{
    //                 products : remove
    //             }
    //         }
    //     return{
    //         products :{items: [ { ...found1, quantity: found1.quantity - 1}]}
    //     }
    // }
    // else{
    //     return{
    //         products:{items: [...state.products, action.payload]}
    //     }

    // }

    case "ADDTOCART":
      // debugger
      const itemFound =  state.cart.find(item => item.id === action.payload.id)
      if(itemFound){
        alert("Item already in Cart")
        return {
          ...state
        }
      } 
      // debugger
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "CASH":
      return {
        ...state,
        cashPay: action.payload,
      }

    default:
      return state
  }
}
export default MenuCartReducer

import axios from 'axios';

////////////////////////////////////////// todo actions /////////////////////////////////
export const loadTODO = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            dispatch({
                type: 'GET_TODO',
                payload: { data: res?.data} // Optional chaining
            })
        }
    )
};

export const deleteUser = (id) => dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        // debugger
        if(res.status === 200){

            dispatch({
                type: 'DELETE',
                payload:  id 
            } )
        }
    }
    )
    
};

export const view = id => {
    return {
        type: 'VIEW',
        payload: id
    }
}

export const addNewUser = add => {
    // debugger
    return{
        type: "ADD",
        payload: add
    }
}

export const newUserAddTodo = obj => {
    return{
        type: "NEWTODO",
        payload: obj
    }
}

///////////////////////////////////////////// LogIn/SignUp actions ///////////////////////////

export const signUP = (signup) => {

    return{
        type: 'SIGNUP',
        payload: signup
    }
};

export const Login = (login) => {
    return{
        type: 'LOGIN',
        payload: login
    }
};

export const emailValidation = eVal => {
    return{
        type: "EMAIL-VALIDATION",
        payload: eVal
    }
}

export const passwordValidation = pVal => {
    return{
        type: "PASSWORD-VALIDATION",
        payload: pVal
    }
}

export const email_Error = err => {
    return{
        type: "EMAIL-ERROR",
        payload: err
    }
}

export const password_Error = err => {
    return{
        type: "PASSWORD-ERROR",
        payload: err
    }
}


///////////////////////////////////////////// Menu/Cart actions ///////////////////////////

export const addVal = (val) => {
    return{
        type: "ADD-1",
        payload: val
    }
}

export const subtractVal = (val) => {
    return{
        type: "SUBTRACT-1",
        payload: val
    }
}

export const addToCart = (obj) => {
    return{
        type: "ADDTOCART",
        payload: obj
    }
}

export const totalPrice = (total) => {
    // debugger
    return{
        type: "TOTAL",
        payload: total
    }
}
export const cashPay = (value) => {
    return{
        type: "CASH",
        payload: value
    }
}



///////////////////////////////////////////////////// Shazam Actions //////////////////////////////////


export const loadShazam = (params) => dispatch => {
    var options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',params,
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': '6a230a336cmsh8590d7ba60fbbfep1ef06bjsn0e12cbfdb625'
      }
    };
    axios.get('https://shazam.p.rapidapi.com/search',options)
    .then(res => {
        dispatch({
            type: 'LOAD-SHAZAM',
            payload: {data: res.data}
        })
    })
} 




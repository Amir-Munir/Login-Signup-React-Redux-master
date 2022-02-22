import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './Store/Actions/Actions';

export const LogIn = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = useSelector(state => state.regForm.login)

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(Login({ name, value }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        const user = atob(localStorage.getItem("User"));
        const userData = JSON.parse(JSON.stringify(user))
        if(userData.name === getData.name
            && userData.email === getData.email
            && userData.password === getData.password)
        {
            navigate("/api")
        }
        else{
            alert("Email, Password invalid")
        }
    }
    return (
            <div className='container'>
                {/* <Link to='/signUp'>
                    <button 
                    className='bloc-tab'>
                    SignUp
                    </button>
                </Link> */}
                <h1>Login</h1>
                <form>
                    <div>
                        <input type="text" name="name" onChange={onChange} placeholder='Name' className="box" />
                        <input type="email" name="email" onChange={onChange} placeholder='Email' className="box" />
                        <input type="password" name="password" onChange={onChange} placeholder='Password' className="box" />
                    </div>
                    <div>
                        <button className='bloc-tab' onClick={onSubmit}  type='submit'>Submit</button>
                    </div>
                </form>
            </div>
    )
}

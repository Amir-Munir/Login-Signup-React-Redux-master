import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
import { emailValidation, email_Error, passwordValidation, password_Error, signUP } from './Store/Actions/Actions';


export const SignUp = () => {

    const dispatch = useDispatch();
    const setLocalData = useSelector(state => state.regForm.signup )
    const emailValid = useSelector(state => state.regForm.eVal)
    const pasValid = useSelector(state => state.regForm.pVal)
    const emailError = useSelector(state => state.regForm.email_Error)
    const passwordError = useSelector(state => state.regForm.password_Error)


    const regex = /^([_\.\.0-9a-zA-Z]+)@([_\.\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    const regexp = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;


    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
// debugger

        switch(name){
            case 'name':
                if(name === 'name'){
                    dispatch(signUP({ name, value }));
                }
                break;
            case 'email':
                // debugger
                if(regex.test(value) === true){
                    dispatch(emailValidation(true))
                    dispatch(signUP({ name, value }));
                    dispatch(email_Error(null))
                }
                else {
                    // debugger
                    dispatch(email_Error("Email must contains (@,DomainName)"))
                }
                break;
            case 'password':
                if(regexp.test(value) === true){
                    dispatch(passwordValidation(true))
                    dispatch(signUP({ name, value }));
                    dispatch(password_Error(null))
                }
                else{
                    dispatch(password_Error("Minimum eight characters, at least one letter, one number and one special character"))
                }
                break;
        
            default:
                alert("Something is wrong")
        }


        // if(name === 'name'){
        //     return dispatch(signUP({ name, value }));
        // }
        // if(name === 'email' && true === regex.test(value)){
        //     emailValid = true; 
        //     dispatch(signUP({ name, value }));
        //     }else{
        //         dispatch(error("Email is not valid"))
        //     }
            
        // if(name === 'password' && true === regexp.test(value)){
        //     pasValid = true;
        //     dispatch(signUP({ name, value }));
        //     }else{
        //         dispatch(error("Password is not valid"))
        //     }

        }
        const onSubmit = (e) => {
            e.preventDefault()
            // debugger
            if(emailValid === true && pasValid === true){
                localStorage.setItem("User",btoa(JSON.stringify(setLocalData)));
            }
        }
        

    return (
            <div className='container'>
                {/* <Link to='/'>
                    <button 
                    className='bloc-tab'>
                        Login
                    </button>
                </Link> */}
                <h1>SignUp</h1>
                <form>
                    <input type="text" name="name" placeholder='Name' className="box" onChange={onChange} />
                    <input type="email" name="email" placeholder='Email' className="box"  onChange={onChange} /><br />
                    {emailError && <span style={{color:"white", fontSize: "12px"}}>{emailError}</span>}
                    {emailError && <br />}<input type="password" name="password" placeholder='Password' className="box" onChange={onChange} /> <br />
                    {passwordError && <p style={{color:"white" , fontSize: '12px',padding:'5px 20px', textAlign: "center"}}>{passwordError}</p>}
                    <button className='bloc-tab' type="submit" onClick={onSubmit} id="button">Submit</button>
                </form>
            </div>
    )
}
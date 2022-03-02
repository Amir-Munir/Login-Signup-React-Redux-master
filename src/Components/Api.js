import React, { useEffect, useState } from 'react';
import {loadTODO, newUserAddTodo, view } from './Store/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import Modal from 'react-modal'
import DeleteUser from './DeleteUser';
import { addNewUser } from './Store/Actions/Actions';

Modal.setAppElement('#root');
ReactModal.setAppElement('#root')

export const Api = () => {

    const todos = useSelector(state => state.todo.todo);
    const viewByID = useSelector(s => s.todo.view ? s.todo.view : {});
    const addUser = useSelector(s => s.todo.add ? s.todo.add : {});

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);


    useEffect(() => {
        dispatch(loadTODO())
    }, []);

    const viewUser = (obj) => { 
        // debugger
        setModalIsOpen(true);
        dispatch(view(obj))
    }

    const add = () => {
        setModalIsOpen1(true);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(addNewUser({ name, value }))
    } 

    const onAdd = (e) => {
        e.preventDefault()
        dispatch(newUserAddTodo(addUser))
    }

    return (
        <div>
        <div className="app-container">
            <table className="center">
                <div className='reactModal__div'>
                    <ReactModal isOpen={modalIsOpen1}
                        style={
                            {
                                overlay:{
                                    backgroundColor : "gray"
                                },
                                content: {
                                    color: "#0a0a0a",
                                    backgroundColor: "#ffffff",
                                }
                            }
                        }
                    >
                        <input className='reactModal__input' name="userId" onChange={onChange}  type="text" placeholder='userId'></input>
                        <input  className='reactModal__input' name="id" onChange={onChange}  type="text" placeholder='Id'></input>
                        <input className='reactModal__input' name="title" onChange={onChange}  type="text" placeholder='title'></input>
                        <input className='reactModal__input' name="body" onChange={onChange}  type="text" placeholder='body'></input>
                        <button className='reactModal__button' onClick={onAdd}>Add</button>
                        <button className='reactModal__button' onClick={()=> setModalIsOpen1(false)}>Close</button>
                    </ReactModal>
                </div>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Action
                            <button 
                                type="button" className="btn btn-outline-dark float-right"
                                onClick={()=>add()}>
                                Add User
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((t,index) => (
                        <tr key={index}>
                            
                            <td>{t.id}</td>
                            <td>{t.title}</td>
                            <td><DeleteUser userId={t.id}/>
                                <button 
                                        type="button" className="btn btn-outline-dark float-right"
                                        onClick={()=>viewUser(t)}>
                                        View
                                </button>
                            </td>
                        </tr>
                    ))}
                        <div >
                            <Modal  isOpen={modalIsOpen}
                                style={
                                    {
                                        overlay:{
                                            backgroundColor : "gray"
                                        },
                                        content: {
                                            color: "#0a0a0a"
                                        }
                                    }
                                }
                            > 
                                <h1 className='modal__h1' >{viewByID.id ? viewByID.id : ''}</h1>
                                <h1 className='modal__h1'>{viewByID.title ? viewByID.title : ''}</h1>
                                <p>{viewByID.body ? viewByID.body : ''}</p>
                                <div>
                                    <button className='reactModal__button' onClick={()=> setModalIsOpen(false)}>Close</button>
                                </div>
                            </Modal> 
                        </div>
                </tbody>
            </table>
        </div>
    </div>
    )
}

import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteUser } from './Store/Actions/Actions';

export default function DeleteUser({userId}) {
    const dispatch = useDispatch();

    return (
        <button 
            type="button"
            className="btn btn-outline-dark float-right"
            onClick={()=> dispatch(deleteUser(userId))}
            >
            Delete
        </button>
    )
};
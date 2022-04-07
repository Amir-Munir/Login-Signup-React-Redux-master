import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Modal, Button } from 'react-bootstrap';
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'; 
// import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
// import ToolkitProvider from 'react-bootstrap-table-next'
// import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';

import { MaxId, MinId, sortData, sortOrder } from './Store/Actions/Actions';


export const ReactBootstrapTable= () => {
    const userData = useSelector(state => state.tableReducer.Users )
    const maximumId = useSelector(state => state.tableReducer.max)
    const minimumId = useSelector(state => state.tableReducer.min)
    const sortType = useSelector(state => state.tableReducer.sort)
    const [modalInfo, setModalInfo] = useState([]);
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const maxId = Math.max(...userData.map(o => o.Id));
        dispatch(MaxId(maxId))
        const minId = Math.min(...userData.map(o => o.Id));
        dispatch(MinId(minId))
    }, []);
    const rowEvents = {
        onClick: (e, row) => {
            // debugger
            setModalInfo(row)
            toggleTrueFalse()
        }
    }

    const toggleTrueFalse = () => {
        setShow(true)
    }

    const onTableChange = (type, newState) => {
        const newArr = newState.data.reverse()
        // debugger
        dispatch(sortData(newArr))
        // console.log(newArr)
        dispatch(sortOrder(newState.sortOrder))
        // console.log(newState.sortOrder)
        // console.log(type)
    }

    const nextUser = () => {
        // debugger
        let indexOfUser = userData.findIndex((el) => el.Id === modalInfo.Id )
        indexOfUser += 1;
        const findLength = userData.reduce((a) => a + Object.length, 0)
        if(findLength > indexOfUser) {
            setModalInfo(userData[indexOfUser])
        }
    }

    const previousUser = () => {
        // debugger
        let indexOfUser = userData.findIndex((el) => el.Id === modalInfo.Id )
        indexOfUser -= 1;
        const findLength = userData.reduce((a) => a + Object.length, 0)
        if(indexOfUser >= 0) {
            setModalInfo(userData[indexOfUser])
        }
    }

    const ModelContent = () => {
        return(
            <Modal className='bootstra-Modal' show={show} >
                <Modal.Header >
                    <Modal.Title>
                        <strong>{modalInfo.name}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <ol>
                            <strong>ID : </strong>{modalInfo.Id}
                        </ol>
                        <ol>
                            <strong>Name : </strong>{modalInfo.name}
                        </ol>
                        <ol>
                           <strong>Email : </strong>{modalInfo.email}
                        </ol>
                        <ol>
                            <strong>Company : </strong>{modalInfo.company}
                        </ol>
                    </ul>
                </Modal.Body>
                <Modal.Footer className='justify-content-between'>
                    <div className='two_buttons'>
                    {(minimumId === modalInfo.Id) && sortType === 'asc' ? '' : maximumId === modalInfo.Id && sortType === 'desc' ? '': <Button variant='btn btn-info' onClick={previousUser} className='modal-footer-btn' >Previous</Button> }
                    {maximumId === modalInfo.Id && sortType === 'asc' ? '' : minimumId === modalInfo.Id && sortType === 'desc'  ? '' : <Button variant='btn btn-info' onClick={nextUser} className='modal-footer-btn' >Next</Button>}
                    </div>
                    <div>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        )
    }
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selectColumnPosition: 'left',
      };

    const columns = [
      {
        dataField: 'Id',
        text: 'ID',
        sort: true,
        editable:false,
      },
      {
        dataField: 'name',
        text: 'Name',
        filter: textFilter()
      }, 
      {
        dataField: 'email',
        text: 'Email'
      }, 
      {
        dataField: 'company',
        text: 'Company'
      }
    ];

    // const { SearchBar } = Search;
    // <ToolkitProvider
    //     keyField="id"
    //     data={ userData }
    //     columns={ columns }
    //     search={{
    //         defaultSearch: 'search something here'
    //     }}
    // >
    // </ToolkitProvider>

// console.log(...userData)
return(
    <div>
        {/* <SearchBar
            { ...userData }
            style={{ width: "400px", height: "40px" }}
        /> */}

        <BootstrapTable
            keyField='Id'
            data={ userData }
            columns={ columns }
            selectRow={ selectRow }
            remote={ {
                filter: true,
                pagination: true,
                sort: true,
                cellEdit: true
              } }
            // striped
            hover
            pagination={ paginationFactory() }
            // cellEdit={ cellEditFactory
            //     ({
            //         mode:"dbclick",
            //         blurToSave: true
            //     }) }
            filter={filterFactory()}
            rowEvents={rowEvents}
            onTableChange={onTableChange}
        />
        {show ? <ModelContent /> : null}
    </div>
);

}
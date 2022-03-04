import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'; 
// import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
// import ToolkitProvider from 'react-bootstrap-table-next'
import BootstrapTable from 'react-bootstrap-table-next';
import { useSelector } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


export const ReactBootstrapTable= () => {
    const userData = useSelector(state => state.tableReducer.Users )
    const [modelInfo, setModalInfo] = useState([]);
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    
  
    const rowEvents = {
        onClick: (e, row, column) => {
            debugger
            setModalInfo(row)
            toggleTrueFalse()
        }
    }

    const toggleTrueFalse = () => {
        setShow(true)
    }

    const ModelContent = () => {
        return(
            <Modal className='bootstra-Modal' show={show} >
                <Modal.Header >
                    <Modal.Title>
                        <strong>{modelInfo.name}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <ol>
                            <strong>ID : </strong>{modelInfo.Id}
                        </ol>
                        <ol>
                            <strong>Name : </strong>{modelInfo.name}
                        </ol>
                        <ol>
                           <strong>Email : </strong>{modelInfo.email}
                        </ol>
                        <ol>
                            <strong>Company : </strong>{modelInfo.company}
                        </ol>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='btn btn-info' className='modal-footer-btn' >Previous</Button>
                    <Button variant='btn btn-info' className='modal-footer-btn' >Next</Button>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }

    const onTableChange = (sort, newState) => {
        console.log(newState)
    }
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
            onTableChange={onTableChange()}
        />
        {show ? <ModelContent /> : null}
    </div>
);

}
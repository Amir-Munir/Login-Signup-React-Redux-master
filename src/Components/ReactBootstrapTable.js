import React from 'react';
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'; 
// import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import BootstrapTable from 'react-bootstrap-table-next';
// import ToolkitProvider from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { useSelector } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

export const ReactBootstrapTable= () => {
    const userData = useSelector(state => state.tableReducer.Users )
    // const ToolkitProvider = window.ReactBootstrapTable2Toolkit.default;

    const columns = [
      {
        dataField: 'Id',
        text: 'ID',
        sort: true,
        editable:false
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
            striped
            hover
            pagination={ paginationFactory() }
            cellEdit={ cellEditFactory({
                mode:"dbclick",
                blurToSave: true
            }) }
            filter={filterFactory()}
        />
    </div>
);

}
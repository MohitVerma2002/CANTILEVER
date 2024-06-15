import { Pagination } from "react-bootstrap";

import React from 'react';

function CustomPagination(props){
const {currentPage , totalPages, handlePageClick} = props;

const renderPageItems = ()=>{
    const pageItems = [];
     
    for(let i = 1; i<=totalPages ;i++){
        pageItems.push(
            <Pagination.Item key={i} active={i === currentPage}onClick={()=>handlePageClick(i)}>{i} </Pagination.Item>
        )
    }
    return pageItems;
}
return <div className="d-flex justify-content-center">
    <Pagination>
        <Pagination.Prev disabled={currentPage === 1} onClick={()=> handlePageClick(currentPage-1)}/>
        {renderPageItems()}
        <Pagination.Next disabled={currentPage === 3} onClick={()=> handlePageClick(currentPage+1)}/>
    </Pagination>
</div>
}

export default CustomPagination
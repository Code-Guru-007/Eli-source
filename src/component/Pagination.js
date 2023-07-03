import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {

    const {itemsCount, pageSize, onPageChange, currentPage, onPageIncrease, onPageDecrease, onPageSize } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);

    // console.log(`===${itemsCount}+++++++${pageSize}`)
    
    const pages = _.range(1, pagesCount + 1);

    return (
        <>
            <select className="form-control" onChange={(event) => onPageSize(event)} style={{width:"80px", marginRight:"20px"}} id="sel1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
            <ul className="pagination">
                <li className={currentPage === 1 ? "page-item disabled":"page-item"}><a onClick={() => onPageDecrease()} className="page-link" style={{padding: "0px!important", height:"38px"}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></a></li>
                {pages.map((page) => <li key={page} className={page === currentPage ? "page-item active" : "page-item"}><a onClick={() => onPageChange(page)}className="page-link">{page}</a></li>)}                
                <li className={currentPage === pagesCount ? "page-item disabled":"page-item"}><a onClick={() => onPageIncrease()} className="page-link" style={{padding: "0px!important", height:"38px"}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></a></li>

            </ul>
        </>
    );
}

export default Pagination;
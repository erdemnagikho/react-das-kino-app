import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './Paginate.scss';

const Paginate = (props) => {
    const { currentPage, totalPages, paginate } = props;

    const [page, setPage] = useState();
    const [totalPageNumber, setTotalPageNumber] = useState(totalPages);

    useEffect(() => {
        setPage(currentPage);
        setTotalPageNumber(totalPages);
    }, [currentPage, totalPages]);

    return (
        <div>
            <span className="pageCount">
                {page} - {totalPageNumber}
            </span>
            <button
                className={page > 1 ? 'paginate-button' : 'paginate-button disable'}
                onClick={() => paginate('prev')}>
                Prev
                </button>
            <button
                className={page === totalPageNumber ? 'paginate-button disable' : 'paginate-button'}
                onClick={() => paginate('next')}>
                Next
                </button>
        </div>
    );
};

Paginate.propTypes = {
    curretPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
}

export default Paginate;

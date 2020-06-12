import React, { useState } from 'react';
import './MainContent.scss';
import SlideShow from '../slide-show/SlideShow';
import Paginate from '../paginate/Paginate';

const MainContent = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (type) => {
        if (type === 'prev' && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }

    return (
        <div className="main-content">
            <SlideShow images={images} auto={true} />
            <div className="grid-movie-title">
                <div className="movieType">Now Playing</div>
                <div className="paginate">
                    <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;

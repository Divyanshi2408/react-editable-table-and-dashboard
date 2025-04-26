import React from 'react';

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalUsers / usersPerPage);


  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
    
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; 
          </button>
        </li>

        {/* Page Number Buttons */}
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

       
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo; 
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

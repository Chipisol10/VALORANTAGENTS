import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 mx-1 ${currentPage === page ? 'bg-blue-400 text-white' : 'bg-blue-200'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

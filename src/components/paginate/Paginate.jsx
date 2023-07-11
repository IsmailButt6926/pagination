import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
const Paginate = (props) => {
  const { onPageChange, totalPages } = props

  //we can get the page number from this function
  const handlePageClick = (event) => {
    // Calculate the selected page number
    const selectedPage = event.selected + 1
    onPageChange(selectedPage)
  }

  return (
    <>
      <ReactPaginate
        breakLabel={"..."}
        nextLabel={"next"}
        previousLabel={"previous"}
        pageRangeDisplayed={2}
        pageCount={totalPages} //Total number of pages // we can calculate total num of pages divide by pageSize (limit in a single page)
        onPageChange={handlePageClick}
        containerClassName={"flex -space-x-px text-sm justify-center"}
        pageClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        previousClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        nextClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        breakClassName={"flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        activeClassName={"bg-black text-white"}
      />
    </>
  )
}

export default Paginate
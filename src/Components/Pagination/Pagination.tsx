import React from 'react'
import ReactPaginate from 'react-paginate'
import './PaginationStyle.css'
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'

interface IPagination{
  onPageChange: (page:number) => void,
  totalPages: number
}

interface IPage{
  selected: number
}

const Pagination = ({onPageChange, totalPages}: IPagination): JSX.Element => {

  const handlePageClick=(data:any)=>{
      debugger
  }

  return (
      <ReactPaginate
        className='pagination'
        breakLabel="..."
        nextLabel={<AiOutlineCaretRight/>}
        onPageChange={({selected}: IPage)=>onPageChange(selected+1)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={<AiOutlineCaretLeft/>}
        // renderOnZeroPageCount={null}
      /> 
  )
}

export default Pagination
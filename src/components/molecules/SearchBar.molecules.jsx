import React from 'react'

const SearchBar = () => {
    return (
        <div className='border border-gray--primary w-full h-8 flex items-center justify-between rounded-[5px] px-[86.32px]'>
            <input className='outline-none w-full text-black mr-4' />
            <img className='w-3 h-3' src='/search.png' />
        </div>
    )
}

export default SearchBar
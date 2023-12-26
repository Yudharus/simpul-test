import React from 'react'

const ButtonTask = ({ onClick }) => {
    return (
        <div className='w-[118.55px] h-10 rounded-[5px] border border-gray--primary flex items-center justify-center ml-[114.23px] cursor-pointer' onClick={onClick}>
            <p className='font-lato font-bold text-black--primary'>My Task</p>
            <img src='/dropdown.png' className='w-[20px] h-[20px] ml-1' />
        </div>
    )
}

export default ButtonTask
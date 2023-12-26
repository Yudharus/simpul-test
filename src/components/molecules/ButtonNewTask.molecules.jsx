import React from 'react'

const ButtonNewTask = ({ onClick }) => {
    return (
        <div className='w-[98.8px] h-10 rounded-[5px] bg-blue--primary items-center justify-center flex cursor-pointer' onClick={onClick}>
            <h1 className='font-lato text-white font-bold'>New Task</h1>
        </div>
    )
}

export default ButtonNewTask
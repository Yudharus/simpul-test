import React from 'react'

const ButtonQuick = ({ onClick }) => {
    return (
        <div className='w-[68px] h-[68px] rounded-full bg-blue--primary items-center justify-center flex cursor-pointer' onClick={onClick}>
            <img src='/cloud-lightning.png' className='w-14	h-14' />
        </div>
    )
}

export default ButtonQuick
import React from 'react'

const ButtonQuickInbox = ({ additionalClass }) => {
    return (
        <div className={`w-[60px] h-[60px] rounded-full bg-white2--primary items-center justify-center flex cursor-pointer  ${additionalClass}`}>
            <img src='/inbox.png' className='w-[22.222px] h-[22.222px]' />
        </div>
    )
}

export default ButtonQuickInbox
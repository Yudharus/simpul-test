import React from 'react'

const UserInbox = () => {
    return (
        <div className='flex'>
            <div className='w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white--primary -mr-4'>
                <img src='/user-black.png' className='w-[18px] h-[18px]' />
            </div>
            <div className='w-[34px] h-[34px] rounded-full flex items-center justify-center bg-blue--primary'>
                <img src='/user-white.png' className='w-[18px] h-[18px]' />
            </div>
        </div>
    )
}

export default UserInbox
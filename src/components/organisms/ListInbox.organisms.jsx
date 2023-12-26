import React from 'react'
import UserInbox from '../molecules/UserInbox.molecules'

const ListInbox = ({ onClickCard, title, chat, user }) => {
    return (
        <div onClick={onClickCard} className=' cursor-pointer'>
            <div className='my-[22px] flex'>
                <UserInbox />
                <div className='ml-[17px] w-full'>
                    <div className='flex '>
                        <p className='text-base font-bold text-blue--primary font-lato mr-4 w-[414.73px]'>{title}</p>
                        <p className='text-sm font-normal text-black--primary font-lato'>January 1,2021 19:10</p>
                    </div>
                    <p className='text-sm font-bold text-black--primary font-lato'>{user}:</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm	 font-normal text-black--primary font-lato'>{chat}</p>
                        <div className='w-2.5 h-2.5 bg-red--indicator rounded-full' />
                    </div>
                </div>
            </div>
            <div className='w-full h-px bg-gray--primary' />
        </div>
    )
}

export default ListInbox
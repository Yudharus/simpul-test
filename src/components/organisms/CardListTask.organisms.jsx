import React, { useEffect, useState } from 'react'
import ButtonTask from '../molecules/ButtonTask.molecules'
import ButtonNewTask from '../molecules/ButtonNewTask.molecules'
import { MoonLoader } from "react-spinners";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const CardListTask = ({ dataTask }) => {
    const [isMyTask, setIsMyTask] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isShow, SetIsShow] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [isNewTask, setIsNewTask] = useState(false)
    const [id, setId] = useState(0)
    const taskDone = dataTask.slice(3, 4)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    function minimize(id) {
        setId(id)
        SetIsShow(!isShow)
    }

    function checked(id) {
        setId(id)
        setIsChecked(!isChecked)
    }
    return (

        <div>
            <div className='flex justify-between'>
                <ButtonTask onClick={() => setIsMyTask(!isMyTask)} />
                <ButtonNewTask onClick={() => setIsNewTask(!isNewTask)} />
            </div>
            {
                isMyTask ? (
                    <div className='w-[288px] rounded-[5px] border border-gray--primary absolute top-20 bg-white flex flex-col pb-[13.11px] pt-[15.11px]'>
                        <p className='ml-[15.24px] font-lato font-bold text-black--primary'>Personal Errands</p>
                        <div className='w-full h-px bg-gray--primary my-2' />
                        <p className='ml-[15.03px] font-lato font-bold text-black--primary'>Urgent To-Do</p>
                    </div>
                ) : null
            }
            {
                isLoading ?
                    (
                        <div className='items-center justify-center flex mt-8'>
                            <MoonLoader size={50} color={'#333'} loading={true} />

                        </div>
                    ) : (
                        <div className='h-[370px] overflow-y-auto'>
                            {
                                dataTask.map(v => {
                                    return (
                                        <div>
                                            <div className='flex mt-[21px]'>
                                                {
                                                    id == v.id && isChecked ?
                                                        <img src='/checked.png' className='w-6 h-6 mr-[22.5px] cursor-pointer' onClick={() => checked(v.id)} /> :
                                                        <div className='w-[18px] h-[18px] border-2 border-gray--primary mr-[22.5px] mt-1 cursor-pointer' onClick={() => checked(v.id)}>

                                                        </div>
                                                }
                                                <div className='flex flex-col w-full'>
                                                    <div className='flex justify-between '>
                                                        <p className='font-lato font-bold text-black--primary w-1/2'>{v.title}</p>
                                                        <div className='flex items-center'>
                                                            <p className='mr-[19.7px] font-lato text-red--indicator font-normal text-sm'>2 Days Left</p>
                                                            <p className='mr-[10.32px] font-lato text-black--primary font-normal text-sm'>12/06/2021</p>
                                                            {
                                                                isShow ?
                                                                    <img src='/dropdown-up.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => minimize(v.id)} /> :
                                                                    <img src='/dropdown.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => minimize(v.id)} />
                                                            }

                                                            <Popup contentStyle={{ width: "126px" }} trigger={<img src='/more-black.png' className='w-4 h-[14px] cursor-pointer' />} position="bottom right" >
                                                                <p className='px-4 font-lato font-normal text-red--indicator cursor-pointer'>Delete</p>
                                                            </Popup>
                                                        </div>
                                                    </div>
                                                    {
                                                        id == v.id && isShow ? (
                                                            <>

                                                                <div className='flex items-center mt-[17.11px]'>
                                                                    <img src='/watch.png' className='w-[20px] h-[20px] mr-[18px]' />
                                                                    <div className='flex items-center justify-between border border-gray--primary rounded-[5px] w-[193px] h-10 pl-[15.62px] pr-[13px]'>
                                                                        <p className='font-lato font-normal text-black--primary'>12/06/2021</p>
                                                                        <img src='/calendar.png' className='w-4 h-4' />
                                                                    </div>
                                                                </div>
                                                                <div className='flex mt-[13px]'>
                                                                    <img src='/pencil.png' className='w-[15px] h-[15px] mr-[23.57px] mt-1' />
                                                                    {v.body}
                                                                </div>
                                                            </>
                                                        ) : null
                                                    }

                                                </div>
                                            </div>
                                            <div className='w-full h-px bg-gray--primary mt-[19.58px]' />
                                        </div>
                                    )
                                })
                            }
                            {
                                taskDone.map(v => {
                                    return (
                                        <div>
                                            <div className='flex mt-[21px]'>
                                                <div className='w-[18px] h-[18px] border-2 border-gray--primary mr-[22.5px] mt-1'>

                                                </div>
                                                <div className='flex flex-col w-full'>
                                                    <div className='flex justify-between '>
                                                        <p className='font-lato font-bold text-gray--primary line-through w-1/2'>{v.title}</p>
                                                        <div className='flex items-center'>

                                                            <p className='mr-[10.32px] font-lato text-black--primary font-normal text-sm'>3/06/2021</p>
                                                            {
                                                                isShow ?
                                                                    <img src='/dropdown-up.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => SetIsShow(!isShow)} /> :
                                                                    <img src='/dropdown.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => SetIsShow(!isShow)} />
                                                            }

                                                            <Popup contentStyle={{ width: "126px" }} trigger={<img src='/more-black.png' className='w-4 h-[14px] cursor-pointer' />} position="bottom right" >
                                                                <p className='px-4 font-lato font-normal text-red--indicator cursor-pointer'>Delete</p>
                                                            </Popup>

                                                        </div>
                                                    </div>
                                                    {
                                                        isShow ? (
                                                            <>

                                                                <div className='flex items-center mt-[17.11px]'>
                                                                    <img src='/watch.png' className='w-[20px] h-[20px] mr-[18px]' />
                                                                    <div className='flex items-center justify-between border border-gray--primary rounded-[5px] w-[193px] h-10 pl-[15.62px] pr-[13px]'>
                                                                        <p className='font-lato font-normal text-black--primary'>12/06/2021</p>
                                                                        <img src='/calendar.png' className='w-4 h-4' />
                                                                    </div>
                                                                </div>
                                                                <div className='flex mt-[13px]'>
                                                                    <img src='/pencil.png' className='w-[15px] h-[15px] mr-[23.57px] mt-1' />
                                                                    {v.body}
                                                                </div>
                                                            </>
                                                        ) : null
                                                    }

                                                </div>
                                            </div>
                                            <div className='w-full h-px bg-gray--primary mt-[19.58px]' />
                                        </div>
                                    )
                                })
                            }

                            {
                                isNewTask ? (
                                    <div className='flex mt-[21px] justify-between '>
                                        <div className='flex'>
                                            {
                                                isChecked ?
                                                    <img src='/checked.png' className='w-6 h-6 mr-[22.5px] cursor-pointer' onClick={() => setIsChecked(!isChecked)} /> :
                                                    <div className='w-[18px] h-[18px] border-2 border-gray--primary mr-[22.5px] mt-1 cursor-pointer' onClick={() => setIsChecked(!isChecked)}>

                                                    </div>
                                            }
                                            <div>
                                                <div className='border border-gray--primary rounded-5 w-[380px] h-10 flex items-center justify-center px-[14.22px] rounded-[5px]'>
                                                    <input className='outline-none w-full' placeholder='Type Task Title' />
                                                </div>
                                                <div className='flex items-center mt-[17.11px]'>
                                                    <img src='/watch-black.png' className='w-[20px] h-[20px] mr-[18px]' />
                                                    <div className='flex items-center justify-between border border-gray--primary rounded-[5px] w-[193px] h-10 pl-[15.62px] pr-[13px]'>
                                                        <p className='font-lato font-normal text-black--primary'>Set Date</p>
                                                        <img src='/calendar.png' className='w-4 h-4' />
                                                    </div>
                                                </div>
                                                <div className='flex mt-[13px]'>
                                                    <img src='/pencil-black.png' className='w-[15px] h-[15px] mr-[23.57px] mt-1' />
                                                    <p>No Description</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex'>
                                            {
                                                isShow ?
                                                    <img src='/dropdown-up.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => SetIsShow(!isShow)} /> :
                                                    <img src='/dropdown.png' className='w-[20px] h-[20px] mr-[15px] cursor-pointer' onClick={() => SetIsShow(!isShow)} />
                                            }

                                            <Popup contentStyle={{ width: "126px" }} trigger={<img src='/more-black.png' className='w-4 h-[14px] cursor-pointer' />} position="bottom right" >
                                                <p className='px-4 font-lato font-normal text-red--indicator cursor-pointer'>Delete</p>
                                            </Popup>
                                        </div>
                                    </div>
                                ) : null
                            }

                        </div>
                    )
            }

        </div>

    )
}

export default CardListTask

import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MoonLoader } from "react-spinners";
import { GetChat } from '../../lib/fetching';


const CardRoomChat = ({ goBack, dataChat }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const datachatSingle = dataChat.slice(0, 1)
  const dataChatNewMassage = dataChat.slice(8, 9)
  console.log(dataChatNewMassage)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('scrollContainer');
      const currentScrollPos = scrollContainer.scrollTop;
      const isScrollingDown = currentScrollPos > scrollPos;

      if (isScrollingDown && !isScrolled) {
        setIsScrolled(true);
      } else if (!isScrollingDown && isScrolled) {
        setIsScrolled(false);
      }

      setScrollPos(currentScrollPos);
    };

    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='absolute right-20 bottom-32 w-[734px] min-h-[500px] bg-white rounded'>
      <div className='flex items-center justify-between  pl-[25px] pr-[21px] pt-[19.62px] pb-[19px] '>
        <div className='flex items-center'>
          <img src='/arrow-left-black.png' className='w-6	h-6 cursor-pointer' onClick={goBack} />
          <div className='ml-[14.43px]'>
            <p className='font-lato font-bold text-base	text-blue--primary'>I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
            <p className='font-lato font-medium text-xs	text-black--tertiary'>3 Participants</p>
          </div>
        </div>
        <img src='/x.png' className='w-3.5 h-3.5' />
      </div>
      <div className='w-full h-px bg-white--tertiary' />
      <div id='scrollContainer' className='pl-[25px] pr-[21px] pt-[19.62px] pb-[19px] h-[370px] overflow-y-auto'>

        {
          datachatSingle.map(v => {
            return (

              <div className='flex flex-col  items-end justify-end mb-[7.94px]'>
                <p className='font-lato text-purple2--chats font-bold'>You</p>
                <div className='flex justify-end'>
                  <Popup contentStyle={{ width: "126px" }} trigger={<img className='w-4	h-4 mr-1 cursor-pointer' src='/more-black.png' />} position="bottom left" >
                    <div className='w-full h-20 justify-center flex flex-col'>
                      <p className='px-4 font-lato font-normal text-blue--primary'>Edit</p>
                      <div className='w-full h-px bg-white--tertiary my-2' />
                      <p className='px-4 font-lato font-normal text-red--indicator'>Delete</p>
                    </div>
                  </Popup>
                  <p className='bg-purple--chats w-2/3 pt-2.5 pl-2.5 pb-2.5 pr-[12.4px] rounded-[5px] font-lato text-black--primary '>
                    {v.body}
                    <p className='font-lato text-black--primary text-sm	mt-1'>19:32</p>
                  </p>
                </div>
              </div>
            )
          })
        }


        <div className='flex items-center justify-between pb-[6.92px] pt-[15.1px]'>
          <div className='w-[217px] h-px bg-black--primary' />
          <h1 className='font-lato font-bold text-black--primary'>Today June 09,2021</h1>
          <div className='w-[217px] h-px bg-black--primary' />
        </div>

        {
          dataChat.map(v => {
            return (
              <div className='flex flex-col mt-[10.22px] mb-[7.94px]'>
                <p className='font-lato text-orange--chats font-bold ml-'>{v.email}</p>
                <div className='flex'>
                  <p className='bg-vanilla--chats w-2/3 pt-2.5 pl-2.5 pb-2.5 pr-[12.4px] rounded-[5px] font-lato text-black--primary '>
                    {v.body}
                    <p className='font-lato text-black--primary text-sm	mt-1'>19:32</p>
                  </p>
                  <Popup contentStyle={{ width: "126px" }} trigger={<img className='w-4	h-4 ml-1 cursor-pointer' src='/more-black.png' />} position="bottom left" >
                    <div className='w-full h-20 justify-center flex flex-col'>
                      <p className='px-4 font-lato font-normal text-blue--primary'>Edit</p>
                      <div className='w-full h-px bg-white--tertiary my-2' />
                      <p className='px-4 font-lato font-normal text-red--indicator'>Delete</p>
                    </div>
                  </Popup>
                </div>
              </div>
            )
          })
        }

        <div className='flex items-center justify-between pb-[6.92px] pt-[15.1px]'>
          <div className='w-[250px] h-px bg-red--indicator' />
          <h1 className='font-lato font-bold text-red--indicator'>New Message</h1>
          <div className='w-[250px] h-px bg-red--indicator' />
        </div>

        {
          dataChatNewMassage.map(v => {
            return (
              <div className='flex flex-col mt-[10.22px] mb-[7.94px]'>
                <p className='font-lato text-orange--chats font-bold ml-'>{v.email}</p>
                <div className='flex'>
                  <p className='bg-vanilla--chats w-2/3 pt-2.5 pl-2.5 pb-2.5 pr-[12.4px] rounded-[5px] font-lato text-black--primary '>
                    {v.body}
                    <p className='font-lato text-black--primary text-sm	mt-1'>19:32</p>
                  </p>
                  <Popup contentStyle={{ width: "126px" }} trigger={<img className='w-4	h-4 ml-1 cursor-pointer' src='/more-black.png' />} position="bottom left" >
                    <div className='w-full h-20 justify-center flex flex-col'>
                      <p className='px-4 font-lato font-normal text-blue--primary'>Edit</p>
                      <div className='w-full h-px bg-white--tertiary my-2' />
                      <p className='px-4 font-lato font-normal text-red--indicator'>Delete</p>
                    </div>
                  </Popup>
                </div>
              </div>
            )
          })
        }


      </div>
      {
        isLoading ?
          <div className=' w-full px-5 flex mb-[11px]'>
            <div className='bg-white--stickers w-full h-[54.41px] flex items-center p-2.5  rounded-[5px]'>
              <MoonLoader size={20} color={'#2F80ED'} loading={true} />
              <p className='font-lato font-bold text-black--primary ml-[11px]'>Please wait while we connect you with one of our team ...</p>
            </div>
          </div> : null
      }

      <div className=' w-full px-5 flex '>
        {
          isScrolled == false ? (
            <div className='w-[141.83px] h-[33.89px] rounded-[5px] bg-white2--primary absolute bottom-16 left-1/2 items-center justify-center flex'>
              <p className='font-lato font-bold text-blue--primary'>New Message</p>
            </div>
          ) : null
        }
        <div className='h-10 w-full border border-gray--primary rounded-[5px] items-center justify-center flex px-4 py-2.5'>
          <input className='w-full outline-none' placeholder='Type a new message' color='#000' />
        </div>
        <div className='flex items-center justify-center h-10 w-[76px] bg-blue--primary rounded-[5px] ml-[14px]'>
          <p className='font-lato font-bold text-white'>Send</p>
        </div>
      </div>
    </div>
  )
}

export default CardRoomChat
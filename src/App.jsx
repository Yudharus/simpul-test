import React, { useEffect, useState } from 'react'
import ButtonMenu from './components/molecules/ButtonMenu.molecules'
import CardListInbox from './components/organisms/CardListInbox.organisms';
import CardRoomChat from './components/organisms/CardRoomChat.organisms';
import CardTask from './components/organisms/CardTask.organisms';
import { GetChat } from './lib/fetching';

const App = () => {
  const [isRoomChat, setIsRoomChat] = useState(false)
  const [menu, setMenu] = useState("")
  const [chatData, setChatData] = useState([])

  useEffect(() => {
    const initData = async () => {
      try {
        const chat = await GetChat()
        const filterChat = chat.slice(0, 10)

        setChatData(filterChat)
      } catch (error) {
        console.log(error)
      }
    }
    initData()
  }, [])


  return (
    <div className=' h-screen bg-black--secondary'>
      {
        menu == "task" ? <CardTask /> : (
          <>
            {
              isRoomChat ? <CardRoomChat dataChat={chatData} goBack={() => setIsRoomChat(!isRoomChat)} /> : <CardListInbox dataChat={chatData} onClick={() => setIsRoomChat(!isRoomChat)} />
            }
          </>
        )

      }
      <ButtonMenu onClickQuickInbox={() => setMenu("inbox")} onClickQuickTask={() => setMenu("task")} />
    </div >
  )
}

export default App
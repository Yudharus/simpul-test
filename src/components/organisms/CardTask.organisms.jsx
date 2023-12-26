import React, { useEffect, useState } from 'react'
import CardListTask from './CardListTask.organisms'
import { GetTask } from '../../lib/fetching'

const CardTask = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        const initData = async () => {
            try {
                const response = await GetTask()
                const filterTask = response.slice(0, 10)
                setTask(filterTask)
            } catch (error) {
                console.log(error)
            }
        }
        initData()
    }, [])

    return (
        <div className={`absolute right-20 bottom-32 w-[734px] min-h-[500px] px-8 py-6 bg-white rounded `}>
            <CardListTask dataTask={task} />
        </div>

    )
}

export default CardTask
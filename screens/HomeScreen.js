import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getTasks } from '../api'

import TasksList from '../components/TasksList'

const HomeScreen = () => {

  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const data = await getTasks()
    console.log(data)
    setTasks(data)
  }

  useEffect(() => {
    //console.log('loaded') // para comprobar que se ejecuta el useEffect
    loadTasks()
  }, [])

  return (
    <View>
      <TasksList tasks={tasks} />
    </View>
  )
}

export default HomeScreen

import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'

import TaskItem from './TaskItem'
import { getTasks } from '../api'

const TasksList = () => {

  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  const loadTasks = async () => {
    const data = await getTasks()
    console.log(data)
    setTasks(data)
  }

  useEffect(() => {
    //console.log('loaded') // para comprobar que se ejecuta el useEffect
    loadTasks()
  }, [])


  const renderItem = ({ item }) => {
    return <TaskItem task={item} />
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks();
    setRefreshing(false)
  }, []);

  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id + ''} // con + '' --- convierte el id en string, que es lo espera el KeyStractor
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={['#78e08f']}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  )
}

export default TasksList

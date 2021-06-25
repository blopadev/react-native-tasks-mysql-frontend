import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import TaskItem from './TaskItem'
import { deleteTask, getTasks } from "../api";

const TasksList = () => {

  const [tasks, setTasks] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  const isFocused = useIsFocused();  // es  true or false según cambie de pantalla o no

  const loadTasks = async () => {
    const data = await getTasks()
    console.log(data)
    setTasks(data)
  }

  useEffect(() => {
    //console.log('loaded') // para comprobar que se ejecuta el useEffect
    loadTasks()
  }, [isFocused]) // cada vez que cambio de pantalla se ejecuta el useEffect


  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadTasks();
    setRefreshing(false)
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };

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

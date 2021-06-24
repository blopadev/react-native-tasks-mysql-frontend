import React from 'react'
import { View, Text, FlatList } from 'react-native'

const TasksList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + ''} // con + '' --- convierte el id en string, que es lo espera el KeyStractor
      renderItem={({ item }) => {
        console.log(item);
        return <Text>{item.title} </Text>
      }}
    />
  )
}

export default TasksList

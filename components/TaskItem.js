import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TaskItem = ({ task }) => {
  return (
    <View style={styles.itemContainer} >
      <Text style={styles.itemTitle} >{task.title} </Text>
      <Text style={styles.itemTitle} >{task.description} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    //flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  itemTitle: {
    color: "#ffffff",
  },
});

export default TaskItem

import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.desc}</Text>
    </View>
    <Switch value={task.completed} onValueChange={onToggle} />
    <Button title="Delete" onPress={onDelete} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default TaskItem;

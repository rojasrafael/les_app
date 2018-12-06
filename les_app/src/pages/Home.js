import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const event = [
  {
    name: "projeto1",
    hours: "100h"
  },
  {
    name: "projeto2",
    hours: "120h"
  },
  {
    name: "projeto3",
    hours: "140h"
  },
  {
    name: "projeto4",
    hours: "160h"
  },
  {
    name: "projeto5",
    hours: "180h"
  },
  {
    name: "projeto6",
    hours: "200h"
  },
  {
    name: "projeto7",
    hours: "220h"
  }
]

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
}

export const ListItem = ({ name, hours }) => (
  <View style={styles.listContainer} >
    <Text>{name}</Text>
    <Text>{hours}</Text>
  </View>
)

export const Home = () => (
  <ScrollView style={styles.container} >
    {event.map(item => (
      <ListItem name={item.name} hours={item.hours} key={item.name} />
    ))}
  </ScrollView>
)

export default Home;
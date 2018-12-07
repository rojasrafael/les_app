import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const event = [
  {
    name: "Casas Bahia",
    hours: "10h"
  },
  {
    name: "Pontofrio",
    hours: "12h"
  },
  {
    name: "Nike",
    hours: "16h"
  },
  {
    name: "Adidas",
    hours: "18h"
  },
  {
    name: "Reebok",
    hours: "20h"
  },
  {
    name: "Osklen",
    hours: "22h"
  },
  {
    name: "Nike",
    hours: "16h"
  },
  {
    name: "Adidas",
    hours: "18h"
  },
  {
    name: "Reebok",
    hours: "20h"
  },
  {
    name: "Osklen",
    hours: "22h"
  },
  {
    name: "Nike",
    hours: "16h"
  },
  {
    name: "Adidas",
    hours: "18h"
  },
  {
    name: "Reebok",
    hours: "20h"
  },
  {
    name: "Osklen",
    hours: "22h"
  },
  {
    name: "Magazine Luiza",
    hours: "40h"
  },
  {
    name: "Nike",
    hours: "16h"
  },
  {
    name: "Adidas",
    hours: "18h"
  },
  {
    name: "Reebok",
    hours: "20h"
  },
  {
    name: "Osklen",
    hours: "22h"
  }
]

const styles = {
  container: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: " #f5f5f0"
  },
  listContainer: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderStyle: "solid",
    borderBottomColor: "#f5f5f0",
    borderBottomWidth: 1,
    fontSize: 30,
    fontWeight: "bold"
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
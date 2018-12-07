import React from 'react';
import { Alert, View, Text, DatePickerAndroid, TouchableWithoutFeedback, TimePickerAndroid, Button } from 'react-native';

import moment from "moment"

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: 30
  },
  button: {
    width: 400,
    color: "#adc2eb",
    fontSize: 35
  }
}
export class EventCreator extends React.Component {
  state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    date: "DD/MM/YYYY",
    time: "HH:mm"
  }
  
  render () {
    const { date, time } = this.state;

    return (
      <View style={styles.container} >
        <TouchableWithoutFeedback onPress={() => this.setState({ isDatePickerVisible: true })} >
          <View
            style={{
              marginBottom: 20, marginTop: 20, fontSize: 30, borderStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: 1, }}
          >
            <Text >Data de Inserção</Text>
            <Text >{`${date}`}</Text>
            {this.renderDatePicker()}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({ isTimePickerVisible: true })} >
          <View
            style={{
              marginBottom: 20, marginTop: 20, fontSize: 20, borderStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: 1,}}
          >
            <Text >Hora</Text>
            <Text >{`${time}`}</Text>
            {this.renderTimePicker()}
          </View>
        </TouchableWithoutFeedback>
        <Button
          title="Clockar"
          style={styles.button}
          onPress={() => { Alert.alert('Registro realizado!');}}
                       />
      </View>
    )
  }

  renderDatePicker = () => {
    const { isDatePickerVisible } = this.state;

    if (!isDatePickerVisible) return null;

    try {
      DatePickerAndroid.open({
        mode: 'spinner',
        date: new Date(),
        maxDate: new Date()
      })
        .then(({action, year, month, day}) => {
          if (action === DatePickerAndroid.dismissedAction) {
            this.setState({ isDatePickerVisible: false, date: "DD/MM/YYYY" })
            return;
          }          

          const date = new Date(year, month, day)

          const momentDate = moment(date).format('DD/MM/YYYY')

          this.setState({ date: momentDate, isDatePickerVisible: false })
        })
    } catch (err) {
      return null
    }

    return null
  }

  renderTimePicker = () => {
    const { isTimePickerVisible } = this.state;    

    if (!isTimePickerVisible) return null;    

    try {
      TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: true,
        mode: "clock"
      }).then(({action, hour, minute}) => {        
        if (action === TimePickerAndroid.dismissedAction) {          
          this.setState({ isTimePickerVisible: false, time: "HH:mm" });
          return;
        }
  
        this.setState({ time: `${hour}:${minute}`, isTimePickerVisible: false })
      })
    } catch (err) {
      
      return null
    }
    
    return null
  }
}

export default EventCreator;
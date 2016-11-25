
import React, {Component} from 'react';

import{
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';

import moment from 'moment';
import keepAwake from 'react-native-keep-awake';
import BackgroundTimer from 'react-native-background-timer';
import Video from 'react-native-video';
var Sound = require('react-native-sound');

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center'
  },
  timeText:{
    color:'#999999',
    fontSize:70
  },
  dateText:{
    color:'#999999',
    fontSize:40
  }
});

var whoosh = new Sound('bell.wav', Sound.MAIN_BUNDLE, (error) => {
});

Platform.OS === 'ios' ? whoosh.setCategory('Playback') : ;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL")
    };

    BackgroundTimer.setInterval(() => {
      whoosh.play((success) => {});
    },60000);
  }

  render(){
    
    setTimeout(()=>{
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      });
    },1000);

    return(
      <View style={styles.container}>
          <Text style={styles.timeText}>{this.state.time}</Text>
          <Text style={styles.dateText}>{this.state.date}</Text>
        </View>
    );
  }
}

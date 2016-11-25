
import React, {Component} from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';


var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static title = 'TabBar';
  static description = 'Tab-based navigation';
  static displayName = 'TabBarExample';

  state = {
    selectedTab : 'redTab',
    notifiCount: 0,
    press: 0
  }

  _renderContent = (color: string, pageText: string, num?:number) => {
    return(
      <View style = {[styles.tabContent, {backgroundColor:color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  }

  render(){
    return(
      <TabBarIOS
        unselectedTintColor = 'white'
        tintColor = 'yellow'
        barTintColor= 'darkslateblue'>
        <TabBarIOS.Item
          title="Red Tab"
          selected = {this.state.selectedTab === 'redTab'}
          onPress={()=>{
            this.setState({
              selectedTab: 'redTab',
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Blue Tab"
          selected = {this.state.selectedTab === 'blueTab'}
          onPress = {()=>{
            this.setState({
              selectedTab:'blueTab'
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

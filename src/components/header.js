import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  NativeModules,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import logo from '../assets/images/ET.png';
const Headers = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.mainView}>
      <View style={styles.menuIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            console.log('asd asdba das d');
          }}>
          <Icon
            name={'menu'}
            size={36}
            color="#ea6618"
            style={styles.menuIcons}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: -15}}>
        <Image
          source={logo}
          style={{width: 30, height: 30, marginRight: -10}}
        />
        {/* <Text style={styles.mainHead}>ET</Text> */}
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 25,
    // paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Platform.OS == 'ios' ? 20 : 30,
  },
  menuIcon: {marginLeft: -50, marginTop: -20},
  menuIcons: {width: 40, height: 50},
  mainHead: {fontSize: 24, color: '#ea6618', fontWeight: 'bold'},
});

export default Headers;

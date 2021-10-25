import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import logo from '../assets/images/ET.png';
import Icon from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MatrielIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import cargo from '../assets/images/cargo-boat.png'
import contact from '../assets/images/contacts.png'

const DrawerScreen = ({props, navigation,}) => {
const [screenName,setScreenName] =useState('home')
    // console.log(props,'names')
  return (
    <View style={styles.draw}>
      {/* <DrawerContentScrollView> */}
      {/* MAIN DRAWER OPTIONS */}

      <View style={{flex: 1, marginLeft: 20}}>
        <View style={{marginTop: 30,}}>
            {/* <View style={{alignItems:'center'}}> */}
            <View style={{width:132,height:225,marginLeft:50}}>
          <Image
            source={logo}
            style={{width: '90%', height: '60%', }}
            />
            {/* </View> */}
            </View>
          <TouchableOpacity
            onPress={() => {setScreenName('home');navigation.navigate('home')}}
            style={{
                backgroundColor: screenName =='home'?'rgba(234, 102, 24, 0.1)':'white',
                padding:10,
              width: '90%',
              marginTop: -30,
              flexDirection: 'row',
            }}>
            <AntDesign name={'home'} size={28} color="#ea6618" />
            <Text
              style={{
                fontSize: 16,
                color: '#ea6618',
                marginLeft: 15,
                marginTop: 5,
              }}>
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setScreenName('personal');navigation.navigate('personal')}}
            style={{
                backgroundColor: screenName =='personal'?'rgba(234, 102, 24, 0.1)':'white',
                padding:10,
              width: '90%',
              marginTop: 10,
              flexDirection: 'row',
            }}>
            {/* <AntDesign name={'home'} size={28} color="#ea6618" /> */}
            <Image source={cargo} style={{width:35,height:35,marginTop:3}}/>
            <Text
              style={{
                fontSize: 16,
                color: '#ea6618',
                marginLeft: 6,
                marginTop: 5,
              }}>
              PERSONAL CARGO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setScreenName('commercial');navigation.navigate('commercial')}}
            style={{
                backgroundColor: screenName =='commercial'?'rgba(234, 102, 24, 0.1)':'white',
                padding:10,
              width: '90%',
              marginTop: 10,
              flexDirection: 'row',
            }}>
           <Image source={cargo} style={{width:35,height:35,marginTop:3}}/>
            <Text
              style={{
                fontSize: 16,
                color: '#ea6618',
                marginLeft: 6,
                marginTop: 5,
              }}>
              COMMERCIAL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setScreenName('contact');navigation.navigate('contact')}}
            style={{
                backgroundColor: screenName =='contact'?'rgba(234, 102, 24, 0.1)':'white',
                padding:10,
              width: '90%',
              marginTop: 10,
              flexDirection: 'row',
            }}>
             <Image source={contact} style={{width:23,height:23,marginTop:3}}/>
            <Text
              style={{
                fontSize: 16,
                color: '#ea6618',
                marginLeft: 6,
                marginTop: 5,
              }}>
              CONTACT
            </Text>
          </TouchableOpacity>
          {/* Notification */}
        </View>
      </View>


      {/* </DrawerContentScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  draw: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default DrawerScreen;
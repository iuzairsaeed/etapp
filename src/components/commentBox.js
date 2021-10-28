import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import maninblack from '../assets/images/maninblack.jpeg';
const CommentBox = ({txt, img, clientName}) => {
  return (
    <>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          marginHorizontal: 20,
          elevation: 5,
          width: 300,
          borderWidth: 1,
          borderColor: '#bdc1c6',
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image
            source={img}
            style={{width: 80, height: 80, borderRadius: 20}}
          />
          <Text style={{margin: 5, color: '#ea6618'}}>{clientName}</Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 10,
            width: '70%',
            textAlign: 'center',
            marginLeft: '15%',
            color: 'gray',
          }}>
          {txt}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default CommentBox;

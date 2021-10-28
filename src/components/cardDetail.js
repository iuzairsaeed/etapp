import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CardDetail = ({txt, img, side, head, onchange}) => {
  return (
    <>
      {
        side ? (
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              width: '90%',
              marginLeft: '5%',
              borderWidth: 1,
              borderColor: '#bdc1c6',
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 20,
              paddingVertical: 10,
              marginBottom: 10,
            }}>
            {/* // <View style={{width:'90%',marginLeft:'5%',paddingVertical:10, marginTop: 30,borderRadius:10,borderColor:'#bdc1c6',borderWidth:1}}> */}
            <Text style={{fontSize: 16, marginLeft: 10, color: '#ea6618'}}>
              {head}
            </Text>
            <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
              <Image source={img} style={styles.imgStl} />
              <Text
                style={{
                  flex: 1,
                  color: '#4e5861',
                  fontSize: 11,
                  color: 'gray',
                  width: '95%',
                  marginLeft: '2.5%',
                }}>
                {txt}
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => onchange()}>
                <Icon
                  name={'keyboard-arrow-up'}
                  size={36}
                  color="black"
                  style={{height: 25}}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          // <View style={styles.mainView}>
          //     <View style={styles.childView}>
          //         <Text style={{ fontSize: 18 }}>{head}</Text>
          //         <Text style={styles.defi}>{txt}</Text>
          //     </View>
          //     <View style={styles.childView}>
          //         <Image source={img} style={styles.imgStl} />
          //     </View>

          // </View>
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              width: '90%',
              marginLeft: '5%',
              borderWidth: 1,
              borderColor: '#bdc1c6',
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 20,
              paddingVertical: 10,
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 16, marginLeft: 10, color: '#ea6618'}}>
              {head}
            </Text>
            <Text style={styles.defi}>{txt}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => onchange()}>
                <Icon
                  name={'keyboard-arrow-down'}
                  size={36}
                  color="black"
                  style={{height: 25}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
        // <View style={styles.mainView}>
        //     <View style={styles.childView}>
        //         <Image source={img} style={styles.imgStl} />
        //     </View>
        //     <View style={styles.childView}>
        //         <Text style={{ fontSize: 18 }}>{head}</Text>
        //         <Text style={styles.defi}>{txt}</Text>
        //     </View>
        // </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '80%',
    height: 120,
    justifyContent: 'space-around',
    marginTop: 30,
  },
  childView: {width: '40%'},
  defi: {
    color: '#4e5861',
    fontSize: 11,
    color: 'gray',
    width: '95%',
    marginLeft: '2.5%',
  },
  imgStl: {flex: 1, width: '40%', height: 80, borderRadius: 10, marginLeft: 10},
});

export default CardDetail;

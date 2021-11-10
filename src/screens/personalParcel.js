import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import imgOne from '../assets/images/trucks.jpeg';
import container from '../assets/images/container.jpeg';
import CardDetail from '../components/cardDetail';

const PersonalParcel = ({navigation}) => {
  let widthScreen = Dimensions.get('window').width;
  const [cardSide, setCardSide] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Image source={imgOne} style={{height: 300, width: widthScreen}} />
          <View style={{position: 'absolute', top: 30, left: 30}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              PERSONAL CARGO
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                width: widthScreen * 0.8,
              }}>
              The stress-free solution to all your shipping requirements. Get
              the best personal cargo services and deliver whatever you want to.
            </Text>
          </View>

          <CardDetail
            side={cardSide}
            head="Full Container Freight"
            img={container}
            txt="Do you want to bring your personal effect products with you to a new destination? Fret not! Export and Import Terminal Inc. deals with a plethora of exceptional services to transport your goods safely at competitive prices within the given time. Whether you are moving for business purposes, transporting your personal belongings, or sending items to your loved ones to another location, our professionals have the expertise to offer proper handling of your fragile products. Your all valuable belongings are in safe hands with our trained staff. We take care of everything from packing, documentation and to moving goods to the final destination. If you are planning to relocate or want to send belongings, allow us to facilitate you with our exceptional shipment services."
            onchange={() => setCardSide(!cardSide)}
            noOfLines={5}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 50,
              marginBottom: 20,
            }}>
            West African Destination Info
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Transit Time : 6 – 8 Weeks
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Container Size: 20″ and 40″
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Goods must be properly blocked and braced
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'gray',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Cargo Required
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('quickquote')}
            style={{
              alignSelf: 'center',
              marginBottom: 30,
              justifyContent: 'center',
              height: 50,
              width: '50%',
              backgroundColor: 'black',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Quick Quote
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalParcel;

// import { View, Text,Button,SafeAreaView,ScrollView } from 'react-native';
// import React from 'react';
// import Header from '../components/header'

// const Personal=({ navigation })=> {
//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
//              <Header navigation={navigation} />
//             <ScrollView style={{flex:1,backgroundColor:'white'}}>
//                 <View>
// <Text>Personal</Text>
//                 </View>

// </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   export default Personal;

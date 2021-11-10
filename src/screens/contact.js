import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import imgOne from '../assets/images/map.jpeg';
import pin from '../assets/images/pin.png';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Textarea} from 'native-base';

const Contact = ({navigation}) => {
  let widthScreen = Dimensions.get('window').width;
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const doContact = () => {
    const {name, phone, email, subject, message} = contactData;
    setLoading(true);
    if (!name) {
      alert('Name is required');
      setLoading(false);
    } else if (!email) {
      alert('Email is required');
      setLoading(false);
    } else if (!phone) {
      alert('Contact Number is required');
      setLoading(false);
    } else if (!subject) {
      alert('Subject is required');
      setLoading(false);
    } else if (!message) {
      alert('Comment is required');
      setLoading(false);
    } else {
      fetch(
        `https://api.codyfied.com/sendcontactemail?name=${name}&phone=${phone}&email=${email}&subject=${subject}&message=${message}`,
      )
        .then(res => {
          res.json().then(data => {
            setLoading(false);
            alert('Successfully Submitted');
            setContactData({
              name: '',
              phone: '',
              email: '',
              subject: '',
              message: '',
            });
            // console.log("contact success", data)
          });
        })
        .catch(err => {
          setLoading(false);
          console.log('categories data err', err);
        });
    }
  };
  // console.log(contactData, 'contactData');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <View>
          <Image source={imgOne} style={{height: 300, width: widthScreen}} />
          <View style={{width: '90%', marginLeft: '5%'}}>
            {/* Address Box */}
            <Text
              style={{
                width: widthScreen - 20,
                color: '#ea6618',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 20,
              }}>
              Get in touch with us. We’ll be happier to assist you in fulfilling
              your shipment needs without any compromise to quality.{' '}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              {/* <Image source={pin} style={{width:30,height:30}}/> */}
              <Icon
                name={'address'}
                size={20}
                color="#ea6618"
                style={{marginTop: 5}}
              />
              <Text
                style={{
                  width: '80%',
                  color: '#ea6618',
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                143 castle road 517 district, kiyev port south Canada
              </Text>
            </View>

            {/* Contact number Box */}
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <MaterialIcons
                name={'local-phone'}
                size={20}
                color="#ea6618"
                style={{marginTop: 0}}
              />
              <Text
                style={{
                  color: '#ea6618',
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                0780-2323-2322
              </Text>
            </View>

            {/* EMAIL BOX */}
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <MaterialIcons
                name={'email'}
                size={20}
                color="#ea6618"
                style={{marginTop: 0}}
              />
              <View>
                <Text
                  style={{
                    color: '#ea6618',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  info@yourmail.com
                </Text>
                <Text
                  style={{
                    color: '#ea6618',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  transpix@yourmail2.com
                </Text>
                <Text
                  style={{
                    color: '#ea6618',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  ship@yourmail3.com
                </Text>
              </View>
            </View>
            {/* EMAIL BOX END*/}

            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 50,
              }}>
              For Queries{' '}
            </Text>
            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
                Name *
              </Text>
              <TextInput
                onChangeText={e => setContactData({...contactData, name: e})}
                value={contactData.name}
                style={{
                  height: 40,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
                Email *
              </Text>
              <TextInput
                onChangeText={e => setContactData({...contactData, email: e})}
                value={contactData.email}
                style={{
                  height: 40,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
                Contact *
              </Text>
              <TextInput
                keyboardType="number-pad"
                onChangeText={e => setContactData({...contactData, phone: e})}
                value={contactData.phone}
                style={{
                  height: 40,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
                Subject *
              </Text>
              <TextInput
                onChangeText={e => setContactData({...contactData, subject: e})}
                value={contactData.subject}
                style={{
                  height: 40,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black', fontSize: 16, marginBottom: 2}}>
                Comment *
              </Text>
              {/* <TextInput onChangeText={(e) => setContactData({ ...contactData, message: e })} value={contactData.message} style={{ height: 120, width: '100%', borderWidth: 1, borderColor: 'black' }} /> */}
              <Textarea
                onChangeText={e => setContactData({...contactData, message: e})}
                value={contactData.message}
                rowSpan={5}
                bordered
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginBottom: 2,
                  borderColor: 'black',
                }}
              />
            </View>

            {loading ? (
              <ActivityIndicator
                style={{marginVertical: 10}}
                size="large"
                color="#ea6618"
              />
            ) : (
              <TouchableOpacity
                onPress={() => doContact()}
                style={{
                  justifyContent: 'center',
                  height: 50,
                  width: '100%',
                  backgroundColor: '#ea6618',
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

// import { View, Text,Button,SafeAreaView,ScrollView } from 'react-native';
// import React from 'react';
// import Header from '../components/header'

// const Contact=({ navigation })=> {
//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
//              <Header navigation={navigation} />
//             <ScrollView style={{flex:1,backgroundColor:'white'}}>
//                 <View>
// <Text>Contact</Text>
//                 </View>

// </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   export default Contact;

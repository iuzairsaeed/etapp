import { View, Text, Button, SafeAreaView, ScrollView, ActivityIndicator, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/header'
import imgOne from '../assets/images/ship.jpeg'
import container from '../assets/images/container.jpeg'
import CardDetail from '../components/cardDetail';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Textarea } from 'native-base'
import CheckBox from '@react-native-community/checkbox';

const QuickQuote = ({ navigation }) => {
  let widthScreen = Dimensions.get('window').width
  const [cardSide, setCardSide] = useState(true);
  const [dest, setDest] = useState("ghana");
  const [toggleCheckBox, setToggleCheckBox] = useState({
    car: false,
    barrel: false,
    package: false,
    cargo: false,
    other: false
  })

  const [fItem, setItem] = useState([])
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    phone: '', email: '', subject: '', message: ''
  })
  const [loading, setLoading] = useState(false)

  const addFitem = (val, item) => {
    console.log(val, item, 'asdasd')
    if (val) {
      setItem([...fItem, item])
    }
    else {
      let index = fItem.indexOf(item);
      let arr = [...fItem]
      arr.splice(index, 1);
      setItem(arr)
    }
  }


  const doQuote = () => {
    const { firstName, lastName,
      phone, email, message } = contactData
    setLoading(true)
    if (!firstName) {
      alert('First Name is required')
      setLoading(false)
    }
    else if (!lastName) {
      alert('Last Name is required')
      setLoading(false)
    }
    else if (!email) {
      alert('Email is required')
      setLoading(false)
    }
    else if (!phone) {
      alert('Contact Number is required')
      setLoading(false)
    }
    else if (!message) {
      alert('Description is required')
      setLoading(false)
    }
    else if (fItem.length < 1) {
      alert('Select Freight Item')
      setLoading(false)
    }
    else {
      fetch(`https://api.codyfied.com/sendqouteemail?firstname=${firstName}&lastname=${lastName}&phone=${phone}&email=${email}&destination=${dest}&fitem=${fItem}&description=${message}`)
        .then(res => {
          res.json().then(data => {
            setLoading(false)
            setContactData({
              firstName: '',
              lastName: '',
              phone: '', email: '', subject: '', message: ''
            })
            setItem([])
            setToggleCheckBox({
              car: false,
              barrel: false,
              package: false,
              cargo: false,
              other: false
            })
            setDest('ghana')
            alert('Successfully Submitted')

            // console.log("contact success", data)
          })
        }).catch(err => {
          setLoading(false)
          console.log("categories data err", err)
        })

    }
  }
  // console.log(fItem, 'fItem')


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header navigation={navigation} />
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <Image source={imgOne} style={{ height: 300, width: widthScreen, opacity: 0.6 }} />
          <View style={{ position: 'absolute', top: 30, left: 30 }}>
            {/* <Text style={{ color: '#ea6618',fontWeight:'bold', fontSize: 18, }}>REQUEST A QUOTE FOR DELIVERY</Text> */}
            <Text style={{ color: '#ea6618', fontWeight: 'bold', fontSize: 24, width: '80%' }}>REQUEST A QUOTE FOR DELIVERY</Text>
          </View>

          {/* FORMS */}
          <View style={{ width: '90%', marginLeft: '5%' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 50 }}>REQUEST A QUOTE </Text>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>First Name *</Text>
              <TextInput onChangeText={(e) => setContactData({ ...contactData, firstName: e })} value={contactData.firstName} style={{ height: 40, width: '100%', borderWidth: 1, borderColor: 'black' }} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Last Name *</Text>
              <TextInput onChangeText={(e) => setContactData({ ...contactData, lastName: e })} value={contactData.lastName} style={{ height: 40, width: '100%', borderWidth: 1, borderColor: 'black' }} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Email *</Text>
              <TextInput onChangeText={(e) => setContactData({ ...contactData, email: e })} value={contactData.email} style={{ height: 40, width: '100%', borderWidth: 1, borderColor: 'black' }} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Contact *</Text>
              <TextInput keyboardType="number-pad" onChangeText={(e) => setContactData({ ...contactData, phone: e })} value={contactData.phone} style={{ height: 40, width: '100%', borderWidth: 1, borderColor: 'black' }} />
            </View>


            {/* <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Subject *</Text>
              <TextInput onChangeText={(e) => setContactData({ ...contactData, subject: e })} value={contactData.subject} style={{ height: 40, width: '100%', borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Your Message *</Text>
              <Textarea onChangeText={(e) => setContactData({ ...contactData, message: e })} value={contactData.message} rowSpan={5} bordered style={{ color: 'black', fontSize: 16, marginBottom: 2, borderColor: 'black' }} />
            </View> */}


            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Destination</Text>


            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('ghana')}
            >
              <Fontisto
                name={dest == 'ghana' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'ghana' ? "#ea6618" : "gray"}
              />
              <Text >Ghana</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('togo')}
            >
              <Fontisto
                name={dest == 'togo' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'togo' ? "#ea6618" : "gray"}
              />
              <Text >Togo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('benin')}
            >
              <Fontisto
                name={dest == 'benin' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'benin' ? "#ea6618" : "gray"}
              />
              <Text >Benin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('nigeria')}
            >
              <Fontisto
                name={dest == 'nigeria' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'nigeria' ? "#ea6618" : "gray"}
              />
              <Text >Nigeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('cote')}
            >
              <Fontisto
                name={dest == 'cote' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'cote' ? "#ea6618" : "gray"}
              />
              <Text >Côte d'Ivoire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('liberia')}
            >
              <Fontisto
                name={dest == 'liberia' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'liberia' ? "#ea6618" : "gray"}
              />
              <Text >Liberia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('sierra')}
            >
              <Fontisto
                name={dest == 'sierra' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'sierra' ? "#ea6618" : "gray"}
              />
              <Text >Sierra Leone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('gambia')}
            >
              <Fontisto
                name={dest == 'gambia' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'gambia' ? "#ea6618" : "gray"}
              />
              <Text >The Gambia</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{width:'50%',marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}
onPress={()=>setDest('gambia')}
 > 
<Fontisto 
name={true ? 'radio-btn-active' : 'radio-btn-passive'}
size={20}
style={{marginRight:10,marginTop:-2}}
color={true?"#ea6618":"gray"}
/>
<Text >Nigeria</Text>
  </TouchableOpacity> */}
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('guinea')}
            >
              <Fontisto
                name={dest == 'guinea' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'guinea' ? "#ea6618" : "gray"}
              />
              <Text >Guinea</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('guineab')}
            >
              <Fontisto
                name={dest == 'guineab' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'guineab' ? "#ea6618" : "gray"}
              />
              <Text >Guinea-Bissau</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('burkina')}
            >
              <Fontisto
                name={dest == 'burkina' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'burkina' ? "#ea6618" : "gray"}
              />
              <Text >Burkina Fasa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('senegal')}
            >
              <Fontisto
                name={dest == 'burksenegalina' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'senegal' ? "#ea6618" : "gray"}
              />
              <Text >Senegal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('mali')}
            >
              <Fontisto
                name={dest == 'mali' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'mali' ? "#ea6618" : "gray"}
              />
              <Text >Mali</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('niger')}
            >
              <Fontisto
                name={dest == 'niger' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'niger' ? "#ea6618" : "gray"}
              />
              <Text >Niger</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('cameroon')}
            >
              <Fontisto
                name={dest == 'cameroon' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'cameroon' ? "#ea6618" : "gray"}
              />
              <Text >Cameroon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '50%', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}
              onPress={() => setDest('other')}
            >
              <Fontisto
                name={dest == 'other' ? 'radio-btn-active' : 'radio-btn-passive'}
                size={20}
                style={{ marginRight: 10, marginTop: -2 }}
                color={dest == 'other' ? "#ea6618" : "gray"}
              />
              <Text >Other</Text>
            </TouchableOpacity>

            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 20 }}>Freight Item
</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }} onPress={() => {
                addFitem(!toggleCheckBox.car, 'car');
                setToggleCheckBox({ ...toggleCheckBox, car: !toggleCheckBox.car })
              }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox.car}
                  onValueChange={(newValue) => {
                    addFitem(newValue, 'car');
                    setToggleCheckBox({ ...toggleCheckBox, car: newValue })
                  }}
                  tintColors={{ true: '#ea6618', false: 'gray' }}
                />
                <Text style={{ margin: 5, fontSize: 14 }}>Car</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }} onPress={() => { addFitem(!toggleCheckBox.barrel, 'barrel'); setToggleCheckBox({ ...toggleCheckBox, barrel: !toggleCheckBox.barrel }) }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox.barrel}
                  onValueChange={(newValue) => {
                    addFitem(!toggleCheckBox.barrel, 'barrel');
                    setToggleCheckBox({ ...toggleCheckBox, barrel: newValue })
                  }}
                  tintColors={{ true: '#ea6618', false: 'gray' }}
                />
                <Text style={{ margin: 5, fontSize: 14 }}>Barrel</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }} onPress={() => {
                addFitem(!toggleCheckBox.package, 'package');
                setToggleCheckBox({ ...toggleCheckBox, package: !toggleCheckBox.package })
              }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox.package}
                  onValueChange={(newValue) => {
                    addFitem(!toggleCheckBox.package, 'package');
                    setToggleCheckBox({ ...toggleCheckBox, package: newValue })
                  }}
                  tintColors={{ true: '#ea6618', false: 'gray' }}
                />
                <Text style={{ margin: 5, fontSize: 14 }}>Package</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }} onPress={() => {
              addFitem(!toggleCheckBox.cargo, 'cargo');
              setToggleCheckBox({ ...toggleCheckBox, cargo: !toggleCheckBox.cargo })
            }}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox.cargo}
                onValueChange={(newValue) => {
                  addFitem(!toggleCheckBox.cargo, 'cargo');
                  setToggleCheckBox({ ...toggleCheckBox, cargo: newValue })
                }}
                tintColors={{ true: '#ea6618', false: 'gray' }}
              />
              <Text style={{ margin: 5, fontSize: 14 }}>Cargo-Personal/Commercial</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row' }} onPress={() => {
                addFitem(!toggleCheckBox.other, 'other');
                setToggleCheckBox({ ...toggleCheckBox, other: !toggleCheckBox.other })
              }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox.other}
                  onValueChange={(newValue) => {
                    addFitem(!toggleCheckBox.other, 'other');
                    setToggleCheckBox({ ...toggleCheckBox, other: newValue })
                  }}
                  tintColors={{ true: '#ea6618', false: 'gray' }}
                />
                <Text style={{ margin: 5, fontSize: 14 }}>Other</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 16, marginBottom: 2 }}>Description *</Text>
              {/* <TextInput style={{height:120,width:'100%',borderWidth:1,borderColor:'black'}}/> */}
              <Textarea onChangeText={(e) => setContactData({ ...contactData, message: e })} value={contactData.message} rowSpan={5} bordered style={{ color: 'black', fontSize: 16, marginBottom: 2, borderColor: 'black' }} />
            </View>


            {loading ?
              <ActivityIndicator style={{ marginVertical: 10 }} size="large" color="#ea6618" /> :
              <TouchableOpacity onPress={() => doQuote()} style={{ justifyContent: 'center', marginBottom: 20, height: 50, width: '100%', backgroundColor: '#ea6618' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Submit</Text>
              </TouchableOpacity>
            }
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default QuickQuote;




// import { View, Text,Button,SafeAreaView,ScrollView } from 'react-native';
// import React from 'react';
// import Header from '../components/header'

// const QuickQuote=({ navigation })=> {
//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
//              <Header navigation={navigation} />
//             <ScrollView style={{flex:1,backgroundColor:'white'}}>
//                 <View>
// <Text>QuickQuote</Text>
//                 </View>

// </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   export default QuickQuote;
import { View, Text, Button,SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React,{useState} from 'react';
import Header from '../components/header'
import imgOne from '../assets/images/imgOne.jpeg'
import ocean from '../assets/images/ocean.jpeg'
import airport from '../assets/images/airport.jpeg'
import barrel from '../assets/images/barrel.jpeg'
import hamburg from '../assets/images/hamburg.jpeg'
import freighter from '../assets/images/freighter.jpeg'
import packages from '../assets/images/package.jpeg'
import maninblack from '../assets/images/maninblack.jpeg'
import persons from '../assets/images/person.png'
import CardDetail from '../components/cardDetail';
import CommentBox from '../components/commentBox';
const Home = ({ navigation }) => {
    console.log(Dimensions.get('window').width, 'asdas');
    const [cardInd,setCardInd] =useState([
        {side:true, head:"Ocean Freight" ,img:ocean, txt:"Whether you’re importing or exporting, Elite Import and Export has your international shipping covered port to port or door…"
    },
   { side:false ,head:"Air Freight", img:airport, txt:"The fastest way to import and export goods internationally is by air. Our air cargo specialists will assess your… "},
   {side:false ,head:"Barrel Shipping", img:barrel, txt:"Pack a barrel and give us a call today, our shipping experts will pick up your barrels at any… "},
   {side:false, head:"Container Shipping", img:hamburg, txt:"Over a decade experience specializing in container shipping since, Elite Import and Export is your reliable choice for shipping…"},
  { side:false, head:"Roll-on/Roll-off" ,img:freighter, txt:"If you are planning to ship your vehicles and heavy duty equipments to any destination, do not hesitate to… "},
  {side:false, head:"Package Delivery" ,img:packages, txt:"Have a smaller package you need shipped internationally fast? We ship and deliver 25kg to 100kg packages from the…"}
])

const toggleCard=(ind,val)=>{
console.log(ind,val)
var newArr = [...cardInd]
newArr[ind].side=!val
setCardInd(newArr)
}

    let widthScreen = Dimensions.get('window').width
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header navigation={navigation} />
            <ScrollView>
                <View>
                    <Image source={imgOne} style={{ height: 300, width: widthScreen }} />
                    <View style={{ position: 'absolute', top: 30, left: 30 }}>
                        <Text style={{ color: 'white', fontSize: 18, }}>WE ARE TRANSPIX</Text>
                        <Text style={{ color: 'white', fontSize: 24, width: '80%' }}>NO# 1 SOLUTION FOR TRANSPORT</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('quickquote')} style={{ justifyContent: 'center', position: 'absolute', top: 150, 
                    left: 30, height: 50, width: 120, backgroundColor: '#ea6618' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Quick Quote</Text>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold', }}>Elite Import & Export, LLC</Text>
                        <Text style={{ color: '#ea6618', textAlign: 'center', fontSize: 10, width: '80%', marginLeft: '10%' }}>We offer customers a comprehensive suite of shipping solutions and logistics services.</Text>
                        {
                           cardInd && cardInd.map((val,ind)=>{
                               return(
                                    <CardDetail key={ind} side={val.side} head={val.head} img={val.img} txt={val.txt} onchange={()=>toggleCard(ind,val.side)}/>)
                           })
                        }
                        {/* <CardDetail side={true} head="Ocean Freight" img={ocean} txt="Whether you’re importing or exporting, Elite Import and Export has your international shipping covered port to port or door…" />
                        <CardDetail side={false} head="Air Freight" img={airport} txt="The fastest way to import and export goods internationally is by air. Our air cargo specialists will assess your… " />
                        <CardDetail side={false} head="Barrel Shipping" img={barrel} txt="Pack a barrel and give us a call today, our shipping experts will pick up your barrels at any… " />
                        <CardDetail side={false} head="Container Shipping" img={hamburg} txt="Over a decade experience specializing in container shipping since, Elite Import and Export is your reliable choice for shipping…" />
                        <CardDetail side={false} head="Roll-on/Roll-off" img={freighter} txt="If you are planning to ship your vehicles and heavy duty equipments to any destination, do not hesitate to… " />
                        <CardDetail side={false} head="Package Delivery" img={packages} txt="Have a smaller package you need shipped internationally fast? We ship and deliver 25kg to 100kg packages from the…" /> */}

                    </View>
{/* Comment Section */}
<View style={{backgroundColor:'white',}}>
{/* <View style={{}}> */}
<Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold',color:'#ea6618' }}>CUSTOMER REVIEWS</Text>
<ScrollView horizontal={true} style={{height:300,width:'100%'}} showsHorizontalScrollIndicator={false}>
<View style={{flexDirection:'row',marginTop:20,width:'100%'}}>
<CommentBox img={persons} clientName="John Abdulai" txt="The best logistics company you can rely on. Very professional and customer friendly. 5years and counting."/>
<CommentBox img={maninblack} clientName="Jeffrey Agbodo" txt="They are reliable and trust worthy solution to all your shipments needs from the United States of America to Ghana."/>
<CommentBox img={persons} clientName="Martin Tweneboa-Kodua" txt="One of the best shipping company’s I have ever come across. Been with them for over 5 years and I don’t regret it.."/>
{/* <CommentBox img={maninblack} clientName="Jeffrey Agbodo" txt="They are reliable and trust worthy solution to all your shipments needs from the United States of America to Ghana."/> */}
</View>
</ScrollView>
{/* </View> */}
</View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

export default Home;


// import { View, Text,Button,SafeAreaView,ScrollView } from 'react-native';
// import React from 'react';
// import Header from '../components/header'

// const Home=({ navigation })=> {
//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
//              <Header navigation={navigation} />
//             <ScrollView style={{flex:1,backgroundColor:'white'}}>
//                 <View>
// <Text>Home</Text>
//                 </View>

// </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   export default Home;
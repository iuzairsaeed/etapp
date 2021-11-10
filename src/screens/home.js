import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import imgOne from '../assets/images/imgOne.jpeg';
import ocean from '../assets/images/ocean.jpeg';
import airport from '../assets/images/airport.jpeg';
import barrel from '../assets/images/barrel.jpeg';
import hamburg from '../assets/images/hamburg.jpeg';
import freighter from '../assets/images/freighter.jpeg';
import packages from '../assets/images/package.jpeg';
import maninblack from '../assets/images/maninblack.jpeg';
import persons from '../assets/images/person.png';
import CardDetail from '../components/cardDetail';
import CommentBox from '../components/commentBox';
const Home = ({navigation}) => {
  console.log(Dimensions.get('window').width, 'asdas');
  const [cardInd, setCardInd] = useState([
    {
      side: true,
      head: 'Ocean Freight',
      img: ocean,
      txt: `Are you concerned about the high-priced transportation of your goods? Are you looking for the most affordable way to transport your goods? If yes, then you've landed at the perfect place. Export and Import Terminal Inc. offers high-end ocean freight management solutions to cater to your shipment needs with ease. Whether you want to export and import your products, we ensure that timely delivery is done because we can understand the value of time. With years of experience and vast knowledge, our professionals make sure to not only transport your goods but also navigate the ins and outs of routes, extensive consultation, and stress-free documentation. Connect your business globally with us as we create value for your assets.`,
    },
    {
      side: false,
      head: 'Air Freight',
      img: airport,
      txt: `Want to transport huge volumes of goods to long distances in the fastest way, without worrying about the high cost of transportation? Export and Import Terminal Inc. here is at your service. We at Export and Import Terminal Inc. commit to providing comprehensive services to ensure safe and reliable delivery of your products. We understand that time is money for you. Therefore, our dedicated team of specialists combines their expertise in-ground services and integrated air networks to make sure your supplies must arrive in perfect condition and on time. Our superior expedited delivery services unlock the competitive advantage through its long-term relationship in this industry, business longevity, and extensive network of vehicles and airlines partners. From the moment you book us until your shipment reaches its destination, we cater to your all needs ensuring superior customer service.`,
    },
    {
      side: false,
      head: 'Barrel Shipping',
      img: barrel,
      txt: `If you wish to transport your goods most conveniently regardless of the size and type of goods, then this might be the best choice for you. Barrel shipping has now become one of the most common means of transporting luggage due to secure and water and dustproof protection. With a wide range of barrels with varying capacities, our team allows you to transport your goods with no limitation of quantity in the safest manner. We have always prioritized customer service because we acknowledge the worth of customers for the businesses. With our outstanding customer service, our experienced team is always available to guide you through the whole process.  Our professionals will assist you to choose suitable barrels for your products along with an order tracking facility so that you can always be updated about the destination of your barrel. Choose our tailor-made packages today and transport your heavy luggage with the best rates and around-the-clock support from our experts.`,
    },
    {
      side: false,
      head: 'Container Shipping',
      img: hamburg,
      txt: `In this competitive world of business, container shipping is the backbone of the global economy as more than a billion tons of cargo are carried through containers annually.  We prioritize the business requirements of our client, which helps us to control your every consignment with our extensive expertise in this industry. Our team thrives to exceed your expectations by facilitating you with fully integrated solutions, navigation, planning, efficient fuel use, reporting, and maintenance systems.  So what are you waiting for? Get a quote from us right now and boost your business to new growth levels.`,
    },
    {
      side: false,
      head: 'Roll-on/Roll-off',
      img: freighter,
      txt: `Oversea shipping of vehicles and heavy equipment has never been easier as we are specialized in huge floating parking platforms to carry your oversized cargo. From the moment the vehicle is handed over to us to the moment, it reaches its destination, we provide unparalleled services to ensure your peace of mind. Export and Import Terminal Inc. has extensive knowledge and experience in shipping every kind of vehicle with great efficiency and security. Therefore, tighten your seatbelts and get ready to grab the best possible services now. We would love to be your source for vehicle shipping experience.`,
    },
    {
      side: false,
      head: 'Package Delivery',
      img: packages,
      txt: `Do you have a smaller package to ship fast? Let us be at your service. Being full-fledged shipping and logistic firm, we promise to deliver your packages in the fastest and safest way. Long established relationships in the cross trading industry enable us to handle your all packages and parcels efficiently and smoothly. Our professionals at Export and Import Terminal Inc. ensure that your products are packed properly for handling and transportation at competitive rates. Consult us for delivering your parcels with complete safety.`,
    },
  ]);

  const toggleCard = (ind, val) => {
    console.log(ind, val);
    var newArr = [...cardInd];
    newArr[ind].side = !val;
    setCardInd(newArr);
  };

  let widthScreen = Dimensions.get('window').width;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <ScrollView>
        <View>
          <Image source={imgOne} style={{height: 300, width: widthScreen}} />
          <View style={{position: 'absolute', top: 30, left: 30}}>
            <Text style={{color: 'white', fontSize: 18}}>WE ARE TRANSPIX</Text>
            <Text style={{color: 'white', fontSize: 24, width: '80%'}}>
              NO# 1 SOLUTION FOR TRANSPORT
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('quickquote')}
            style={{
              justifyContent: 'center',
              position: 'absolute',
              top: 150,
              left: 30,
              height: 50,
              width: 120,
              backgroundColor: '#ea6618',
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Quick Quote
            </Text>
          </TouchableOpacity>
          <View style={{backgroundColor: 'white'}}>
            <Text
              style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>
              Elite Import & Export, LLC
            </Text>
            <Text
              style={{
                color: '#ea6618',
                textAlign: 'center',
                fontSize: 10,
                width: '80%',
                marginLeft: '10%',
              }}>
              We offer customers a comprehensive suite of shipping solutions and
              logistics services.
            </Text>
            {cardInd &&
              cardInd.map((val, ind) => {
                return (
                  <CardDetail
                    key={ind}
                    side={val.side}
                    head={val.head}
                    img={val.img}
                    txt={val.txt}
                    onchange={() => toggleCard(ind, val.side)}
                    noOfLines={5}
                  />
                );
              })}
            {/* <CardDetail side={true} head="Ocean Freight" img={ocean} txt="Whether you’re importing or exporting, Elite Import and Export has your international shipping covered port to port or door…" />
                        <CardDetail side={false} head="Air Freight" img={airport} txt="The fastest way to import and export goods internationally is by air. Our air cargo specialists will assess your… " />
                        <CardDetail side={false} head="Barrel Shipping" img={barrel} txt="Pack a barrel and give us a call today, our shipping experts will pick up your barrels at any… " />
                        <CardDetail side={false} head="Container Shipping" img={hamburg} txt="Over a decade experience specializing in container shipping since, Elite Import and Export is your reliable choice for shipping…" />
                        <CardDetail side={false} head="Roll-on/Roll-off" img={freighter} txt="If you are planning to ship your vehicles and heavy duty equipments to any destination, do not hesitate to… " />
                        <CardDetail side={false} head="Package Delivery" img={packages} txt="Have a smaller package you need shipped internationally fast? We ship and deliver 25kg to 100kg packages from the…" /> */}
          </View>
          {/* Comment Section */}
          <View style={{backgroundColor: 'white'}}>
            {/* <View style={{}}> */}
            <Text
              style={{
                textAlign: 'center',
                marginTop: 30,
                fontWeight: 'bold',
                color: '#ea6618',
              }}>
              CUSTOMER REVIEWS
            </Text>
            <ScrollView
              horizontal={true}
              style={{height: 300, width: '100%'}}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', marginTop: 20, width: '100%'}}>
                <CommentBox
                  img={persons}
                  clientName="John Abdulai"
                  txt="The best logistics company you can rely on. Very professional and customer friendly. 5years and counting."
                />
                <CommentBox
                  img={maninblack}
                  clientName="Jeffrey Agbodo"
                  txt="They are reliable and trust worthy solution to all your shipments needs from the United States of America to Ghana."
                />
                <CommentBox
                  img={persons}
                  clientName="Martin Tweneboa-Kodua"
                  txt="One of the best shipping company’s I have ever come across. Been with them for over 5 years and I don’t regret it.."
                />
                {/* <CommentBox img={maninblack} clientName="Jeffrey Agbodo" txt="They are reliable and trust worthy solution to all your shipments needs from the United States of America to Ghana."/> */}
              </View>
            </ScrollView>
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

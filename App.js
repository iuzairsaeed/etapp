
import React ,{useEffect}from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNav from './src/config/navigation';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
const App= () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
   
<MainNav />

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

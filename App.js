import React from "react";
import 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from './src/navigation/DrawerNavigation';
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";
import { Conjunto } from "./src/navigation/DrawerNavigation";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import firebaseApp from './src/firebase/credenciales'; // Ruta al archivo con las credenciales de Firebase




const App = () =>{
  return(

      <Conjunto />
  )
}

export default App;
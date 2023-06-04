import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList  } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, Image, View } from 'react-native';
import { Divider, NativeBaseProvider } from "native-base";
import Categorías from "../screens/Categorías";
import SettingScreen from "../screens/SettingScreen";
import SeguridadScreen from "../screens/SeguridadScreen";
import Notificación from "../screens/Notificación";
import idioma from "../screens/idioma";
import Tema from "../screens/Tema";
import Profile from "../screens/Profile";
import AgregarAnuncio from "../screens/AgregarAnuncio";
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import VerTuActividad from '../screens/VerTuActividad';
import ChangePassword from '../screens/ChangePassword';
import SuspenderMiCuenta from '../screens/SuspenderMiCuenta';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import EditInfo from '../screens/EditInfo';
import SobreNosotros from '../screens/SobreNosotros';
import Contacto from '../screens/Contacto';
import VisualizarAnuncios from '../screens/VisualizarAnuncios';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); // Importa el StackNavigator


function AuthStack() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login">
        {() => (
            <Stack.Navigator >
                <Stack.Screen name="Login"  component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
         )}
        </Stack.Screen>
        
        
      </Stack.Navigator>
    );
  }

  function CustomDrawerContent(props) {
    const [user, setUser] = useState(null);
    const firebaseApp = initializeApp(firebaseConfig);
  
    useEffect(() => {
      const fetchData = async () => {
        const auth = getAuth(firebaseApp);
        const currentUser = auth.currentUser;
  
        if (currentUser) {
          const db = getFirestore();
          const userRef = doc(db, 'usuarios', currentUser.uid);
          const userDoc = await getDoc(userRef);
  
          if (userDoc.exists()) {
            setUser(userDoc.data());
          }
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ padding: 16 }}>
          <Image source={require('../images/usuario.png')} style={{ width: 150, height: 150 }} />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>{user?.nombre}</Text>
          <Text style={{ fontSize: 16, color: "#f8f8f8", marginTop: 16 }}>{user?.numeroControl}</Text>
        </View>
        <Divider />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }
  

  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#3E77B6',
          },
          drawerLabelStyle: {
            color: '#f8f8f8',
          },
        }}
      >
        <Drawer.Screen name="Inicio" component={() => <VisualizarAnuncios categoria={"General"} />} />
        <Drawer.Screen name="Mi Perfil">
          {() => (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Mi Perfil" component={Profile} />
              <Stack.Screen name="EditInfo" component={EditInfo} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Publicar" component={AgregarAnuncio} />
        <Drawer.Screen name="Notificaciones" component={Notificación} />
        <Drawer.Screen name="Sobre Nosotros">
          {() => (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Sobre Nosotros" component={SobreNosotros} />
              <Stack.Screen name="Contacto" component={Contacto} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Configuracion">
          {() => (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Configuracion" component={SettingScreen} />
              <Stack.Screen name="Idioma" component={idioma} />
              <Stack.Screen name="Tema" component={Tema} />
              <Stack.Screen name="Seguridad" component={SeguridadScreen} />
              <Stack.Screen name="Actividad" component={VerTuActividad} />
              <Stack.Screen name="Cambiarp" component={ChangePassword} />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Suspender mi Cuenta" component={SuspenderMiCuenta} />
      </Drawer.Navigator>
    );
  }

export function Conjunto(){
    return(
      <NavigationContainer>
        <NativeBaseProvider>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    )
}
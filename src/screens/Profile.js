import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';

const Profile = () => {
  const [user, setUser] = useState(null);
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const navigation = useNavigation();

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

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0069c0" barStyle="light-content" />

      <View style={styles.userContainer}>
        <Image source={require('../images/usuario.png')} style={styles.userIcon} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nombre: {user.nombre}</Text>
        <Text style={styles.infoText}>Rol: {user.rol}</Text>
        <Text style={styles.infoText}>Carrera: {user.carrera}</Text>
        <Text style={styles.infoText}>Semestre: {user.grado}</Text>
        <Text style={styles.infoText}>Numero de Control: {user.numeroControl}</Text>
        <Text style={styles.infoText}>Turno: {user.turno}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditInfo')}>
        <Text style={styles.editButtonText}>Editar información</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  userContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#0069c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;

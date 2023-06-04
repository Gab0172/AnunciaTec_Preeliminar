import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Picker, SafeAreaView } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [rol, setRol] = useState('');
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const handleRegistro = async (nombre, rol) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getFirestore();
        const userRef = doc(db, 'usuarios', user.uid);
        setDoc(userRef, {
          nombre: nombre,
          rol: rol,
          carrera: 'Sin información',
          turno: 'Sin información',
          grado: 'Sin información',
          numeroControl: 'Sin información'
        })
          .then(() => {
            console.log('Usuario registrado:', user);
          })
          .catch((error) => {
            console.log('Error al guardar datos del usuario:', error);
          });
      })
      .catch((error) => {
        console.log('Error al registrar el usuario:', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../images/logo.jpg')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Correo"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={rol}
          onValueChange={(itemValue) => setRol(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Selecciona un rol" value="" />
          <Picker.Item label="Maestro" value="maestro" />
          <Picker.Item label="Alumno" value="alumno" />
        </Picker>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAceptarTerminos(!aceptarTerminos)}
        >
          {aceptarTerminos ? (
            <Text style={styles.checkmark}>&#10003;</Text>
          ) : null}
        </TouchableOpacity>
        <Text style={styles.label}>Acepto los Términos y Condiciones</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, !aceptarTerminos && styles.disabledButton]}
        onPress={() => handleRegistro(nombre, rol)}
        disabled={!aceptarTerminos}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    color: 'black',
  },
  pickerItem: {
    fontSize: 15,
    color: 'black',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 16,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

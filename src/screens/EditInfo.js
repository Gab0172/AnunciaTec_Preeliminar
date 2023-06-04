import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, StyleSheet, Picker, SafeAreaView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { firebaseApp } from '../firebase/credenciales';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';

const EditarInformacion = ({ navigation }) => {
  const [carrera, setCarrera] = useState('');
  const [grado, setGrado] = useState('');
  const [numeroControl, setNumeroControl] = useState('');
  const [turno, setTurno] = useState('');
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const currentUser = auth.currentUser;

  const handleUpdate = async () => {
    try {
      const db = getFirestore();
      const userRef = doc(db, 'usuarios', currentUser.uid);

      await updateDoc(userRef, {
        carrera: carrera,
        numeroControl: numeroControl,
        grado: grado,
        turno: turno,
      });

      alert('Para que tu informacion se vea actualizada, cierra y vuelve a iniciar sesion');
      navigation.navigate('Mi Perfil');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#007AFF" />
      <Text style={styles.title}>Editar Información</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Carrera</Text>
        <Picker
          style={styles.picker}
          selectedValue={carrera}
          onValueChange={(value) => setCarrera(value)}
        >
          <Picker.Item label="Ingeniería en TICS" value="Ingeniería en TICS" />
          <Picker.Item label="Ingeniería Mecanica" value="Ingeniería Mecanica" />
          <Picker.Item label="Ingeniería Química" value="Ingeniería Química" />
          <Picker.Item label="Ingeniería Industrial" value="Ingeniería Industrial" />
          <Picker.Item label="Ingeniería Electrónica" value="Ingeniería Electrónica" />
          <Picker.Item label="Ingeniería Eléctrica" value="Ingeniería Eléctrica" />
          <Picker.Item label="Ingeniería Gestión Empresarial" value="Ingeniería Gestión Empresarial" />
          <Picker.Item label="Administración" value="Administración" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numero de control</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu numero de control"
          onChangeText={(text) => setNumeroControl(text)}
          value={numeroControl}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Semestre</Text>
        <Picker
          style={styles.picker}
          selectedValue={grado}
          onValueChange={(value) => setGrado(value)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Turno</Text>
        <Picker
          style={styles.picker}
          selectedValue={turno}
          onValueChange={(value) => setTurno(value)}
        >
          <Picker.Item label="Matutino" value="Matutino" />
          <Picker.Item label="Vespertino" value="Vespertino" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditarInformacion;

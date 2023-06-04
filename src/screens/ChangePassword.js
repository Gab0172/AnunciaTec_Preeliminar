import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, updatePassword } from 'firebase/auth';
import { firebaseApp } from '../firebase/credenciales';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';

const NewPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleConfirm = async () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      try {
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);
        const user = auth.currentUser;

        await updatePassword(user, password);
        alert('Contraseña actualizada correctamente');
      } catch (error) {
        console.log(error);
        alert('Error al actualizar la contraseña');
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nueva Contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.visibilityBtn} onPress={handlePasswordVisibility}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.visibilityBtn} onPress={handleConfirmPasswordVisibility}>
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmBtnText}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonR} 
      onPress={() => navigation.goBack()}>
        <Text style={styles.buttonTextR}>Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc'
  },
  visibilityBtn: {
    padding: 10
  },
  confirmBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: 18
  },
  buttonR: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextR: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NewPasswordScreen;

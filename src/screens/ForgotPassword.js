import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const CodeVerificationScreen = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  
  const handleSendCode = () => {
    // Aquí podrías llamar a una función que envíe el código al correo del usuario
  };
  
  const handleVerifyCode = () => {
    // Aquí podrías llamar a una función que verifique el código ingresado por el usuario
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ingresa tu correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Ingresa el código de verificación</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verificar código</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00a8cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CodeVerificationScreen;

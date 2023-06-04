import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Button, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/credenciales';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Login = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario inició sesión:', user.uid);
        navigation.navigate('DrawerNavigation');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          alert('Error Usuario o contraseña incorrectos');
        } else {
          alert('Error', 'Ocurrió un error al iniciar sesión');
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.jpg')} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalMessage}>Invalid username or password.</Text>
          <Button style={styles.modalButton} title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 50,
    },
    input: {
      width: '80%',
      height: 50,
      borderWidth: 1,
      borderColor: '#808080',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      fontSize: 16,
      color: '#000',
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#4B0082',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },
    link: {
      marginTop: 10,
      color: '#4B0082',
      textDecorationLine: 'underline',
    },
    errorModal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    errorBox: {
      width: '80%',
      backgroundColor: '#FFF',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#808080',
    },
    errorTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    errorText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    errorButton: {
      width: '50%',
      height: 50,
      backgroundColor: '#4B0082',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    errorButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
    cancelButton: {
      backgroundColor: '#808080',
      marginTop: 10,
    },
    cancelButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
    registerButton: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0d6efd'
    },
    registerButtonText: {
        color: '#0d6efd',
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: '#0d6efd',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
      },
      loginText: {
        color: '#ffffff',
        fontSize: 18,
      },
      forgotPasswordButton: {
        alignSelf: 'flex-center',
        marginBottom: 20,
      },
      forgotPasswordText: {
        color: '#0d6efd',
        fontSize: 14,
      },
      modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
      },
      modalMessage: {
        fontSize: 16,
        marginBottom: 20,
      },
      modalButton: {
        backgroundColor: '#FFC107',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-end',
      },
      modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
  });
  
  export default Login;

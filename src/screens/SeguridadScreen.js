import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SeguridadScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seguridad</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cambiarp')}>
          <Icon name="password" size={24} color="#333" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Privacidad</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Actividad')}>
          <Icon name="activity" size={24} color="#333" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Mi Actividad</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonR} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonTextR}>Regresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonsContainer: {
    width: '60%',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 16,
  },
  buttonIcon: {
    marginRight: 16,
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

export default SeguridadScreen;

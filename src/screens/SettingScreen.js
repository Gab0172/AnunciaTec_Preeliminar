import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Idioma')}>
          <Icon name="language" size={24} color="#333" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tema')}>
          <Icon name="palette" size={24} color="#333" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Tema</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Seguridad')}>
          <Icon name="security" size={24} color="#333" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Seguridad y privacidad</Text>
        </TouchableOpacity>
      </View>
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
});

export default SettingsScreen;

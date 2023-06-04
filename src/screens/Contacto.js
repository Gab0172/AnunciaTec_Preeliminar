import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";

import Logotipo from "../images/Logotipo.png";

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Center flex={1}>
          <Box maxWidth="90%" mx="auto">
            <Center>
              <Image
                source={Logotipo}
                style={{
                  width: "100%",
                  aspectRatio: 1,
                  marginBottom: 50,
                }}
              />
            </Center>
            <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
              Correo electrónico: Anunciatec@gmail.com {"\n"}
              Teléfono: 45454545
            </Text>
          </Box>
        </Center>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default ContactScreen;

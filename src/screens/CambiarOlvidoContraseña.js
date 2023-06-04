import React from "react";
import { Image, Text, SafeAreaView, StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  Input,
  FormControl,
  Stack,
  Button,
  HStack,
} from "native-base";

import Logotipo from "./assets/Logotipo.png";

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: "lg" }}>
          Olvidé mi contraseña
        </Text>
      </Box>
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
          <FormControl>
            <Stack space={4} alignItems="center">
              <FormControl.Label
                style={{ color: "blue", whiteSpace: "nowrap" }}
              >
                Correo institucional
              </FormControl.Label>
              <Input />
              <FormControl.Label>Código</FormControl.Label>
              <Input />
              <HStack space={2} alignItems="center">
                <Button colorScheme="blue">Enviar código</Button>
                <Button colorScheme="blue">Verificar código</Button>
              </HStack>
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
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
});

export default ForgotPasswordScreen;
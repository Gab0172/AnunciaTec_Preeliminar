import React, { useState } from "react";
import { Image, Text, SafeAreaView } from "react-native";
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

const NewPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    // Aquí puedes agregar la lógica para cambiar la contraseña
    console.log(`Nueva contraseña: ${password}`);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Box bg="blue.600" p={4}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: "lg" }}>
            Nueva contraseña
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
                <FormControl.Label style={{ color: "blue" }}>
                  Nueva contraseña
                </FormControl.Label>
                <Input
                  type="password"
                  placeholder="Ingresa tu nueva contraseña"
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                />
                <FormControl.Label style={{ color: "blue" }}>
                  Confirmar contraseña
                </FormControl.Label>
                <Input
                  type="password"
                  placeholder="Confirma tu nueva contraseña"
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                />
                <Button colorScheme="blue" onPress={handleChangePassword}>
                  Cambiar
                </Button>
              </Stack>
            </FormControl>
          </Box>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default NewPasswordScreen;

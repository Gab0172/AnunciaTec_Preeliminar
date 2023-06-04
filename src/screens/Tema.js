import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

import {
  NativeBaseProvider,
  Center,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  HStack,
  Radio,
  VStack,
} from "native-base";

const ThemeSettingsScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("light");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Center flex={1}>
          <Box maxWidth="90%" mx="auto">
            <FormControl>
              <Stack space={4} alignItems="center">
                <Text fontSize="xl">Tema:</Text>
                <VStack space={4} alignItems="flex-start">
                  <Radio.Group
                    name="theme"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <VStack space={3}>
                      <Radio value="light">Claro</Radio>
                      <Radio value="dark">Oscuro</Radio>
                    </VStack>
                  </Radio.Group>
                </VStack>
              </Stack>
            </FormControl>
          </Box>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
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

export default ThemeSettingsScreen;

import React from "react";
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
  Input,
  Select
} from "native-base";

const languageOptions = ["Español", "Inglés"];

const LanguageSettingsScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Center flex={1}>
          <Box maxWidth="90%" mx="auto">
            <FormControl>
              <Stack space={4} alignItems="center">
                <Text fontSize="xl">Idioma:</Text>
                <Select
                  minWidth={200}
                  fontSize="md"
                  placeholder="Seleccione un idioma"
                >
                  {languageOptions.map((option) => (
                    <Select.Item label={option} value={option} key={option} />
                  ))}
                </Select>

                <Center>
                  <Button colorScheme="blue" mt={4}>
                    Aplicar
                  </Button>
                </Center>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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

export default LanguageSettingsScreen;

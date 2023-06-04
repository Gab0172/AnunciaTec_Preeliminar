import React from "react";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider, Box, VStack, HStack, Text, Divider, Button } from "native-base";

const SuspendAccountScreen = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Box bg="blue.600" p={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="lg">
              Suspender mi cuenta
            </Text>
          </HStack>
        </Box>
        <Box flex={1} p={4}>
          <VStack space={2} alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg" textAlign="center" mt={10} mb={6}>
              Estás a punto de suspender tu cuenta, esto quiere decir que las preguntas, respuestas, mensajería y otra
              actividad que hayas realizado durante el uso de esta aplicación será eliminada.
            </Text>
            <Button colorScheme="blue" onPress={() => {}}>
              Eliminar mi cuenta
            </Button>
          </VStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SuspendAccountScreen;

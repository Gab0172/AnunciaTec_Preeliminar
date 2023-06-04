import React from "react";
import {SafeAreaView, StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Pressable
} from "native-base";

const NotificationsScreen = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      carrera: "Carrera ITIC",
      usuario: "Claudia Morán",
      accion: "publicó un nuevo aviso",
    },
    {
      id: 2,
      carrera: "Taller de investigación",
      usuario: "Caritina",
      accion: "comentó en un aviso",
    },
    {
      id: 3,
      carrera: "Servicio social",
      usuario: "Claudia Morán",
      accion: "respondió a un aviso",
    },
  ];

  const handleNotificationPress = (id) => {
    console.log(`Notification ${id} pressed`);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Box bg="blue.600" p={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="lg">
              Notificaciones
            </Text>
          </HStack>
        </Box>
        <Box flex={1} p={4}>
          {notifications.map((notification) => (
            <Pressable
              key={notification.id}
              onPress={() => handleNotificationPress(notification.id)}
            >
              {({ isPressed }) => (
                <VStack
                  space={2}
                  alignItems="flex-start"
                  backgroundColor={isPressed ? "gray.100" : "transparent"}
                  p={2}
                >
                  <Text fontWeight="bold" fontSize="lg" mb={1}>
                    {notification.carrera}
                  </Text>
                  <HStack alignItems="center">
                    <Text fontSize="sm" color="gray.500">
                      {notification.usuario}
                    </Text>
                    <Text fontSize="sm" color="gray.500" mx={1}>
                      ·
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {notification.accion}
                    </Text>
                  </HStack>
                  <Divider my={2} />
                </VStack>
              )}
            </Pressable>
          ))}
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default NotificationsScreen;

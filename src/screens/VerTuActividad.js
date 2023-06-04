import React from "react";
import {
  NativeBaseProvider,
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Pressable,
  Icon,
} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native";

const ActivityScreen = ({ navigation }) => {
  const ads = [
    {
      id: 1,
      title: "Aviso 1",
      description: "Aviso 1",
    },
    {
      id: 2,
      title: "Aviso 2",
      description: "Aviso 2",
    },
    {
      id: 3,
      title: "Aviso 3",
      description: "Aviso 3",
    },
  ];

  const handleEditAdPress = (id) => {
    console.log(`Edit ad ${id} pressed`);
  };

  const handleDeleteAdPress = (id) => {
    console.log(`Delete ad ${id} pressed`);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Box bg="blue.600" p={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="lg">
              Mi actividad
            </Text>
          </HStack>
        </Box>
        <Box flex={1} p={4}>
          {ads.map((ad) => (
            <VStack
              key={ad.id}
              space={2}
              alignItems="flex-start"
              backgroundColor="transparent"
              p={2}
              borderBottomWidth={1}
              borderBottomColor="gray.300"
            >
              <Text fontWeight="bold" fontSize="lg" mb={1}>
                {ad.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {ad.description}
              </Text>
              <HStack space={2} alignItems="center" mt={2}>
                <Pressable onPress={() => handleEditAdPress(ad.id)}>
                  {({ isPressed }) => (
                    <Icon
                      as={<MaterialIcons name="edit" />}
                      size="sm"
                      color={isPressed ? "gray.500" : "gray.400"}
                    />
                  )}
                </Pressable>
                <Pressable onPress={() => handleDeleteAdPress(ad.id)}>
                  {({ isPressed }) => (
                    <Icon
                      as={<MaterialIcons name="close" />}
                      size="sm"
                      color={isPressed ? "gray.500" : "gray.400"}
                    />
                  )}
                </Pressable>
              </HStack>
            </VStack>
          ))}
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default ActivityScreen;

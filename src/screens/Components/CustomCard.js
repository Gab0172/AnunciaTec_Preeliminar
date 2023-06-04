import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  IconButton,
  Popover,
  MenuItem,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const CustomCard = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <Box style={styles.card}>
      <VStack space={4} style={styles.content}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text style={styles.cardTitle}>{title}</Text>
          <Popover
            trigger={(triggerProps) => {
              return (
                <IconButton
                  icon={
                    <MaterialIcons name="more-vert" size={24} color="black" />
                  }
                  size="sm"
                  variant="ghost"
                  {...triggerProps}
                  onPress={() => console.log("hizo algo xd")}
                />
              );
            }}
          >
            {/* <Popover.Content accessibilityLabel="header menu">
              <MenuItem>Action 1</MenuItem>
              <MenuItem>Action 2</MenuItem>
              <MenuItem>Action 3</MenuItem>
            </Popover.Content> */}
          </Popover>
        </HStack>
        <Text style={styles.cardDescription}>{description}</Text>
        <Button onPress={onButtonClick}>{buttonText}</Button>
      </VStack>
    </Box>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    width: "auto", // Agrega un ancho mayor aquí
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 20, // Agrega más padding aquí
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 10,
  },
  content: {
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    // Estilos para la descripción
    fontSize: 16,
    color: "gray",
  },
});

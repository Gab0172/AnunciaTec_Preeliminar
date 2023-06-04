import React from "react";
import { Box, Button, HStack, NativeBaseProvider, Text } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";

const Navbar = ({ titulo }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box style={styles.box} bg="blue.600">
          <HStack style={styles.hStack_1}>
            <Button style={{ backgroundColor: "green", marginRight: 10 }}>
              Drawer
            </Button>
            <Text style={styles.textNavbar}>{titulo}</Text>
          </HStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Navbar;

const styles = StyleSheet.create({
    hStack_1: {
      alignItems: "center",
    },
    box: {
      padding: 16,
      backgroundColor: "#3182CE",
      fontColor: "white",
    },
    textNavbar: {
      textAlign: "center",
      fontSize: 32,
      color: "white",
      paddingTop: 14,
    },
  });
  

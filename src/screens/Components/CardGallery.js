import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Box, Divider, Text } from "native-base";
import CustomCard from "./CustomCard";

const CardGallery = ({ title, items }) => {
  {console.log(items)}
  return (
    <Box style={styles.container}>
      <Text style={styles.galleryTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item) => (
          <Box key={item.docId} style={styles.cardContainer}>
            <CustomCard
              title={item.titulo}
              description={item.descripcion}
              buttonText="Saber más"
              onButtonClick={() => console.log("Card " + item.docId)}
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  galleryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: "row",
  },
  cardContainer: {
    marginRight: 10,
  },
});

export default CardGallery;
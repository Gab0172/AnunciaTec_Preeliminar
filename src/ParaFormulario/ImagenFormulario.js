import React from "react";
import { Center, Image } from "native-base";

const ImagenFormulario = ({urlImagen}) => {
  return (
    <Center>
      <Image
        source={{
          uri: urlImagen,
        }}
        alt="Vista de anuncio"
        size="2xl"
        resizeMode="cover"
        borderRadius={20}
      />
    </Center>
  );
};

export default ImagenFormulario;
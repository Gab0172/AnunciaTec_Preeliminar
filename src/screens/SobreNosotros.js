import React from 'react';
import {
  NativeBaseProvider,
  VStack,
  Text,
  Divider,
  Button,
  Image,
  Center,
  ScrollView,
} from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SobreNosotros = () => {
  const navigation = useNavigation();

  const imagen_ita =
    'https://aguascalientes.tecnm.mx//wp-content/uploads/2017/01/Escudo04.JPG';

  const TituloApartado2 = 'Proyecta - Tec';
  const ContenidoApartado2 =
    'Comprometidos en mantener a los estudiantes, profesores y a la comunidad educativa informada sobre todos los eventos relevantes dentro de nuestra institución educativa.';

  const TituloApartado3 = 'Misión';
  const ContenidoApartado3 =
    'Nuestra misión es proporcionar un servicio de calidad a nuestra comunidad educativa, brindando información actualizada y recordatorios pertinentes en el momento oportuno.';

  const TituloApartado4 = 'Visión';
  const ContenidoApartado5 =
    'Nuestra visión es convertirnos en el principal medio de comunicación dentro de la comunidad educativa, alcanzando un alto nivel de compromiso y satisfacción entre estudiantes y profesores.';

  const ContenidoFooter = 'Anuncia-Tec versión 1.1.2';

  return (
    <NativeBaseProvider contentContainerStyle={{ flexGrow: 1 }}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <VStack>
            <Image
              source={{ uri: imagen_ita }}
              alt="Logo"
              style={styles.image}
            />

            <Divider borderColor="black" style={styles.divider} />
            <Text style={styles.sectionTitle}>{TituloApartado2}</Text>
            <Text style={styles.paragraph}>{ContenidoApartado2}</Text>
            <Center>
              <Button
                style={styles.btnContacto}
                onPress={() => navigation.navigate('Contacto')}>
                Contacto
              </Button>
            </Center>

            <Divider borderColor="black" style={styles.divider} />
            <Text style={styles.sectionTitle}>{TituloApartado3}</Text>
            <Text style={styles.paragraph}>{ContenidoApartado3}</Text>

            <Divider borderColor="black" style={styles.divider} />
            <Text style={styles.sectionTitle}>{TituloApartado4}</Text>
            <Text style={styles.paragraph}>{ContenidoApartado5}</Text>
            <Divider borderColor="black" style={styles.divider} />

            <Text style={styles.footer}>{ContenidoFooter}</Text>
          </VStack>
        </SafeAreaView>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContacto: {
    width: '50%',
    backgroundColor: '#3182CE',
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 20,
    padding: 10,
    textAlign: 'justify',
  },
  footer: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: 'gray',
  },
});

export default SobreNosotros;

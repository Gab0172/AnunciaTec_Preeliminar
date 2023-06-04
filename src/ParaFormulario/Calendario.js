// import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    TextInput,
    SafeAreaView,
    View,
    Button,
  } from "react-native";
  import { Calendar, LocaleConfig } from "react-native-calendars";
  import * as React from "react";
  import { useState } from "react";
  
  LocaleConfig.locales["esp"] = {
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "En.",
      "Feb.",
      "Mar.",
      "Abr.",
      "Mayo",
      "Jun.",
      "Jul.",
      "Agt.",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dic.",
    ],
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mier.", "Jue.", "Vier.", "Sab."],
    today: "Hoy",
  };
  
  LocaleConfig.defaultLocale = "esp";
  
  const Calendario = ({ metodo }) => {
    const [selected, setSelected] = useState("");
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [anio, setAnio] = useState("");
    const [hora, setHora] = useState("");
    const [minuto, setMinuto] = useState("");
  
    return (
      <SafeAreaView>
        <View>
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
              setDia(day.dateString[8] + day.dateString[9]);
              setMes(day.dateString[5] + day.dateString[6]);
              setAnio(
                day.dateString[0] +
                  day.dateString[1] +
                  day.dateString[2] +
                  day.dateString[3]
              );
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.baseText}>{"Hora :    "}</Text>
            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              value={hora}
              onChangeText={setHora}
            />
            <Text style={styles.baseText}>{":"}</Text>
            <TextInput
              style={styles.input}
              keyboardType={"numeric"}
              value={minuto}
              onChangeText={setMinuto}
              placeholderTextColor="#800080"
            />
          </View>
          <Text style={styles.baseText}>
            Fecha establecida:{" "}
            {dia + " / " + mes + " / " + anio + ", " + hora + ":" + minuto}
          </Text>
          <Button
            title="Establecer fecha"
            borderRadius="md"
            colorScheme="cyan"
            onPress={(e) => {
              let formatoFecha =
                dia + " / " + mes + " / " + anio + ", " + hora + ":" + minuto;
              metodo(formatoFecha);
            }}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    baseText: {
      fontSize: 14,
      textAlign: "center",
      height: 40,
      fontWeight: "bold",
      margin: 12,
      padding: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      color: "green",
      textAlign: "center",
      textAlignVertical: "center",
      borderColor: "#800080",
      fontSize: 18,
    },
    button: {
      marginBottom: 20,
      padding: 30,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 16,
    },
  });
  
  export default Calendario;
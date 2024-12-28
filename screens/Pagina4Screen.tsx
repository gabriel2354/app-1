import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina4Screen() {

  const [kelvin, setKelvin] = useState<number | string>('')
  const [celsius, setCelsius] = useState<number | null>(null)
  const [fahrenheit, setFahrenheit] = useState<number | null>(null)

  function convertirTemperaturas() {
    const kelvinValue = parseFloat(kelvin as string)
    if (isNaN(kelvinValue) || kelvinValue <= 0) {
      Alert.alert('Error', 'Por favor, ingresa un valor válido en Kelvin.')
      return
    }

    const celsiusValue = kelvinValue - 273.15
    const fahrenheitValue = (kelvinValue - 273.15) * 9 / 5 + 32

    setCelsius(celsiusValue)
    setFahrenheit(fahrenheitValue)
  }

  return (
    <ImageBackground source={{ uri : 'https://images.unsplash.com/photo-1662387709820-5ea1c001c67b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D'}}
    style={styles.container}>
      <Text style={{ fontSize: 30 }}>Conversor de Temperatura</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese la temperatura en Kelvin'
        keyboardType='numeric'
        onChangeText={(texto) => setKelvin(texto)}
        value={kelvin.toString()}
      />

      <Button title='Convertir' onPress={() => convertirTemperaturas()} />

      {celsius !== null && fahrenheit !== null && (
        <View style={styles.resultados}>
          <Text style={{ fontSize: 20 }}>Celsius: {celsius.toFixed(2)}°C</Text>
          <Text style={{ fontSize: 20 }}>Fahrenheit: {fahrenheit.toFixed(2)}°F</Text>
        </View>
      )}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#ddd',
    fontSize: 20,
    height: 50,
    width: '85%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  resultados: {
    marginTop: 20,
    alignItems: 'center',
  },
})
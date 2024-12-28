import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina3Screen() {

  const [nombre, setnombre] = useState('')
  const [edad, setedad] = useState(0)

  useEffect(() => {
    if (edad < 0) setedad(0)
  }, [edad])

  function usuario() {
    Alert.alert('Mensaje', `${nombre} tiene ${edad} años`)
  }

  return (
    <ImageBackground  source={{ uri : 'https://images.unsplash.com/photo-1710384897899-02c7b08bc54e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
     style={styles.container}>
      <Text style={styles.title}>FORMULARIO</Text>
      <TextInput
        style={styles.input}
        placeholder='INGRESAR NOMBRE'
        onChangeText={(texto) => setnombre(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder='INGRESAR EDAD'
        keyboardType='numeric'
        onChangeText={(texto) => setedad(+texto)}
      />
      <View style={styles.buttonContainer}>
        <Button title='ACEPTAR' color="#007BFF" onPress={() => usuario()} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f0f8ff', 
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, 
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 18,
    height: 50,
    width: '85%',
    marginVertical: 10, 
    paddingHorizontal: 10,
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 20, 
    width: '85%',
    borderRadius: 5,
    overflow: 'hidden', 
  },
})
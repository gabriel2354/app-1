import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta2 from '../components/Tarjeta2';

export default function Pagina2Screen() {
  const [datos, setdatos] = useState([]); // Inicializa como arreglo vacío

  useEffect(() => {
    async function leer() {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setdatos(json); // Usar setdatos para actualizar el estado
    }
    leer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()} // Proveer claves únicas
        renderItem={({ item }) => <Tarjeta2 datos={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

import { Alert, Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any) {
  //  console.log(props);

  function detalles(item: any){
    Alert.alert( item.name,item.description + '\nAtributos: ' + item.atributos)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={ () => detalles(props.informacion)}>
      <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
      <View style={styles.fila}>
      <Image source={{ uri: props.informacion.image}} 
      style={styles.img}
      />
      <Text style={styles.textDescripcion}>{props.informacion.description}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:25,
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    img:{
    height:150,
    width:150,
    resizeMode:'contain'

    },
    container:{
        backgroundColor:'#666',
        margin:2,
        borderRadius: 20

    },
    fila:{
      flexDirection:'row'
    },
    textDescripcion:{
      color:'white',
      width:'65%',
      
    }
})
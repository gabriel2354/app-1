import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any) {
  //  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
      <Image source={{ uri: props.informacion.image}} 
      style={styles.img}
      />
    </View>
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

    }
})
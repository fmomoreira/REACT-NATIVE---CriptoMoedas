import React, { useState, useEffect, Fragment  } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const api ="https://www.mercadobitcoin.net/api/"

let dados = {}

async function getCripto(){
  let response = await fetch(`${api}BTC/ticker/`)
  let data =  await response.json()

  return data.ticker
  }
  

  

export default function Frase() {


  const [cripto, setCripto] = useState([])
  
  useEffect(() => {
 

  }, [])


    return (
      <View style={styles.cardCripto}>
                <Text style={styles.buy} >{cripto.name}</Text>           
      </View>
    );
  }


  const styles = StyleSheet.create({
    cardCripto: {
      flex: 1,
      flexDirection:"row",
      justifyContent:"center",
      width:"80%",
      backgroundColor: "#f3f4f5",
      marginTop: 10,
      marginLeft: "auto",
      marginRight: "auto",
      padding:"2rem",
      

      
      
      
    },
    buy:{
        fontSize:"2rem",
    },

  });

 
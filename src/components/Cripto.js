import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFetch } from '../hooks/useFetch';


export default function Cripto(props) {
const {data} = useFetch(`https://www.mercadobitcoin.net/api/${props.symbol}/ticker/`)
 if(!data){
   return (
    <View style={moeda.cardCripto}>
    <Text style={moeda.nome} >{props.nome}</Text>
    <Text style={moeda.buy} >R$ buscando...</Text>
    <Text style={moeda.info} >Quantidade negociada nas últimas 24 horas...</Text>
    <Text style={moeda.textdescription}>buscando...</Text>
  </View>
   )
  
 }
  return (
  
    
    <View style={styles.cardCripto}>
      <Text style={styles.nome} >{props.nome}</Text>
      <Text style={styles.buy} >R$ {Number(data.last).toFixed(2)}</Text>
      <Text style={styles.info} >Quantidade negociada nas últimas 24 horas...</Text>
      <Text style={styles.textdescription}>{data.vol}</Text>
    </View>
    
  );
}


const moeda = StyleSheet.create({
  cardCripto: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    width: "90%",
    //backgroundColor: "#2a2b2b",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2rem",
    borderRadius: 22,
    marginBottom: "2rem"
    
  },

  nome: {
    width: "100%",
    fontSize: 28,
    fontWeight:"bold",
    color: "#f48120",
    margin: 0,
    paddingBottom: 10

  },
  buy: {
    width: "100%",
    fontSize: 32,
    color: "#FFFFFF"
  },
  info: {
    marginTop:"1rem",
    width: "100%",
    fontSize: 16,
    color: "#FFFFFF"
  },
  textdescription: {
    marginTop:"0.5rem",
    width: "100%",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight:"bold"
  },
});






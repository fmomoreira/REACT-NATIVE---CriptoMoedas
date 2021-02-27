import React from 'react';
import Cripto from './src/components/Cripto';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'


export default function App(){
  return(

    <SafeAreaView style={styles.dashboard}>
      <ScrollView>
        <Cripto symbol="BTC"  nome="Biticoins"/>
        <Cripto symbol="BCH"  nome="BitcoinCash"/>
        <Cripto symbol="ETH"  nome="Ethereum"/>
        <Cripto symbol="LTC"  nome="Litecoin"/>
        <Cripto symbol="LINK" nome="ChainLink"/>
        <Cripto symbol="XRP"  nome="Riplle"/>
        <Cripto symbol="USDC" nome="USD Coin"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  dashboard: {
    fontSize: 12,
    color: "#FFFFFF",
    backgroundColor: "#0a0a0a",
    paddingTop:"2rem",
    paddingBottom:"2rem",
  }
 

});


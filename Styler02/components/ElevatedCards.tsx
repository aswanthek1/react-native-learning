import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText} >ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container} >
        <View style={[styles.card, styles.cardElevated]} >
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
            <Text>😎😎😋</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        padding:8
    },
    card: {
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:4,
        margin:8
    },
    cardElevated: {
        backgroundColor:"#CAD5E2",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"black"
    }
})
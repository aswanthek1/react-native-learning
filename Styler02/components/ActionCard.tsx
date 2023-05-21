import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText} >Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headerContainer}>
       <Text style={styles.headerText} >
        What's new in Javascript 21 - ES12
       </Text>
        </View>
        <Image
        source={{
            uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        }}
        style={styles.cardImage} 
        />
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText} numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.  
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text style={styles.socialLinks} >Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
            >
                <Text style={styles.socialLinks} >Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        width:340,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:10,
        color:'white'
    },
    elevatedCard: {
        backgroundColor:"#E07C24",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4
    },
    headerContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        color:'black',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage: {
        height:190,
    },
    bodyContainer: {
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    bodyText:{
        color:"white"
    },
    socialLinks:{
        fontSize:16,
        color:'black',
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },
})
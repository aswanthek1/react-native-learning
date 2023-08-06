

import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';


function App(): JSX.Element {

const [randomBackground, setRandomBackground] = useState('#ffffff')
const [copiedText, setCopiedText] = useState('#ffffff')

const generateColor = () => {
  const hexRange = '0123456789ABCDEF'
  let color = "#"
  
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  setRandomBackground(color)
}

const copyToClipBoard = async() => {
  Clipboard.setString(randomBackground)
  // setCopiedText(randomBackground)
   Alert.alert('Copied Color', await Clipboard.getString())
}

  return (
          <>
          <StatusBar backgroundColor={randomBackground} />
          <View style={[styles.container, {backgroundColor:randomBackground}]}>
            <TouchableOpacity onPress={() =>generateColor() }>
              <View style={styles.actionButton}>
                <Text style={styles.actionBtnTxt}>
                  Press me
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={copyToClipBoard}>
                <Text>Copy Color to Clipboard</Text>
              </TouchableOpacity>
              <Text selectable={true} style={styles.colorText} >{randomBackground}</Text>
            </View>
          </View>
          </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color:'#ffffff',
    textTransform: 'uppercase'
  },
  textContainer: {
    alignItems:'center',
    justifyContent: 'center',
    position:'absolute',
    bottom: 40,
    width: "80%",
    gap:10
  },
  colorText: {
    fontSize:20,
  }
});

export default App;

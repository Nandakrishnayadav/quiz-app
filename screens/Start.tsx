import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen: FC<StartScreenProps> = ({startGame}) => {
  return (
    <View style={styles.body}>
      <View style={styles.heading}>
        <Text style={styles.title}>Quiz App</Text>
        <Text style={styles.description}>Totalizza un punteggio di almeno 5 risposte corrette per passare il quiz</Text>
      </View>

      <View>
        <TouchableHighlight style={styles.startButton} onPress={startGame}>
          <Text style={styles.buttonText}>Inizia</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  heading: {
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description:{
    marginTop:10,
    textAlign: 'center',
    fontSize: 17,
    color: 'orange',

  },
  startButton: {
    backgroundColor: '#8854c0',
    borderRadius: 8,
    minWidth: 150,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default StartScreen;
import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Modal} from 'react-native';



interface ResultModalProps {
  isVisible: boolean;
  restartGame: () => void;
  score: number;
  numberQuestions: number;
}

const ResultModal: FC<ResultModalProps> = ({
  isVisible,
  restartGame,
  score,
  numberQuestions,
}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.dialog}>
          <Text style={score>=5 ? styles.bgGreen : styles.bgRed}>
          {score>=5 ?'Bene hai passato il quiz.' : 'Non hai passato il quiz.'}
          </Text>
          <Text style={styles.dialogText} >
        
           Il tuo risultato e' {score}/{numberQuestions} risposte esatte.{' '}
          </Text>

          <TouchableHighlight
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => restartGame()}>
            <Text style={styles.buttonText}>Riprova</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    height: '100%',
    padding: 15,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  dialogText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderRadius:10
  },
  buttonPrimary: {
    backgroundColor: '#8854c0',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  bgRed:{
   
    fontSize: 35,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  bgGreen:{
  
    fontSize: 35,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default ResultModal;
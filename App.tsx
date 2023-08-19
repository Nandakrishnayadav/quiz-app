
import React, {FC, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import StartScreen from './screens/Start';
import GameScreen from './screens/Play';

const App: FC = () => {
  const [isPlaying, setPlaying] = useState(false);

  function startGame() {
    setPlaying(true);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{backgroundColor: '#000'}}>
        {!isPlaying ? <StartScreen startGame={startGame} /> : <GameScreen />}
      </SafeAreaView>
    </>
  );
};

export default App;
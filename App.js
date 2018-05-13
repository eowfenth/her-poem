/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#840f1b',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  poemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  poemContainer: {
    justifyContent: 'center',
  },
  poemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});


const Poem = () => (
  <View style={styles.poemContainer}>
    <Text style={styles.poemTitle}>lorem</Text>
    <Text />
    <Text style={styles.poemText}>Repellendus quis</Text>
    <Text style={styles.poemText}>perferendis sed omnis.</Text>
    <Text style={styles.poemText}>Dolorum voluptatem est ut.</Text>
    <Text style={styles.poemText}>Incidunt ipsum odit</Text>
    <Text style={styles.poemText}>voluptatibus magni</Text>
    <Text style={styles.poemText}>libero temporibus.</Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <Swiper
      cards={['Poem']}
      infinite
      renderCard={card => (
        <View style={styles.card}>
          {card === 'Poem' && <Poem />}
        </View>
      )}
      cardIndex={0}
      backgroundColor="#840f1b"
      stackSize={3}
    />
  </View>
);

export default App;

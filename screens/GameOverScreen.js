import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require("../assets/success.png")} /> */}
        <Image source={{uri: 'https://c.files.bbci.co.uk/59FA/production/_118443032_30e62d0c-74ac-48e5-bbc6-17fd273391b7.jpg'}}
        style={styles.image}
        resizeMode="cover"/>
      </View>
      <Text>The game is over!</Text>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>The number we're playing is: {props.userNumber}</Text>
      <Button title="Khelba Abar?" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: '100%',
    width: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    color: 'black',
    overflow: 'hidden',
    marginVertical: 30
  }
});

export default GameOverScreen;

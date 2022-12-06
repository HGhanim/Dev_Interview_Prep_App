import React from 'react';
import {Button, StyleSheet, Text, View, ViewStyle} from 'react-native';
type Style = {
  container: ViewStyle;
  header: ViewStyle;
  body: ViewStyle;
  buttons: ViewStyle;
};
const ResultCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Quiz Finished</Text>
        <Text>BETTER STUDY!</Text>
      </View>
      <View style={styles.body}>
        <Text>There were 10 Questions.</Text>
        <Text>25%</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="NEW QUIZ" />
        <Button title="QUIT APP" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create<Style>({
  container: {
    borderWidth: 1,
    borderColor: 'yellow',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  body: {
    marginTop: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    //borderWidth: 1,
    //borderColor: 'red',
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
});

export default ResultCard;

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
type Style = {
  container: ViewStyle;
  header: ViewStyle;
  body: ViewStyle;
  buttons: ViewStyle;
  percentView: ViewStyle;
  questionsView: ViewStyle;
  percentText: TextStyle;
  questionsText: TextStyle;
  correctText: TextStyle;
  finishedText: TextStyle;
  commentText: TextStyle;
};
const ResultCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.finishedText}>QUIZ FINISHED!</Text>
        <Text style={styles.commentText}>BETTER STUDY!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.questionsView}>
          <Text style={styles.questionsText}>There were 10 Questions.</Text>
          <Text style={styles.correctText}>Corrent Answers: 4</Text>
        </View>
        <View style={styles.questionsView}>
          <Text style={styles.percentText}>40%</Text>
        </View>
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
    alignItems: 'center',
  },
  buttons: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  percentView: {},
  questionsView: {},
  percentText: {},
  questionsText: {},
  finishedText: {},
  commentText: {},
  correctText: {},
});

export default ResultCard;

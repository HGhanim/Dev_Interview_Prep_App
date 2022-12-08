import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
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
  newButton: ViewStyle;
  quitButton: ViewStyle;
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
          <Text style={styles.questionsText}>
            {'There were 10\nQuestions.'}
          </Text>
          <Text style={styles.correctText}>Corrent Answers: 4</Text>
        </View>
        <View style={styles.questionsView}>
          <Text style={styles.percentText}>40%</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.newButton}>
          <Text>NEW QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quitButton}>
          <Text>QUIT APP</Text>
        </TouchableOpacity>
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
    padding: 10,
    borderRadius: 10,
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
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  percentView: {},
  questionsView: {},
  percentText: {
    color: 'red', //TODO: change to red/green/yellow depending on the score
    fontSize: 25,
  },
  questionsText: {
    color: '#36454f',
  },
  finishedText: {
    color: '#36454f',
    fontSize: 22,
  },
  commentText: {
    color: 'red', //TODO: change to red/green/yellow depending on the score
    alignSelf: 'center',
    fontSize: 18,
  },
  correctText: {
    color: '#36454f',
  },
  newButton: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    padding: 10,
  },
  quitButton: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    padding: 10,
  },
});

export default ResultCard;

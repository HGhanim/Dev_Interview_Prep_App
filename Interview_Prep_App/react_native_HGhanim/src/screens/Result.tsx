import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import ResultCard from '../components/ResultCard';
type Style = {
  container: ViewStyle;
};
const Result: React.FC = () => {
  return (
    <View style={styles.container}>
      <ResultCard />
    </View>
  );
};
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
});

export default Result;
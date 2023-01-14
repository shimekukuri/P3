import { View, StyleSheet, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreen() {
  return (
    <View style={style.padding}>
      <Text>Meals Overview Container</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverViewScreen;

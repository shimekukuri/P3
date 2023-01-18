import { View, StyleSheet, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreen({
  route: {
    params: { categoryId },
  },
}) {
  const MEAL = MEALS.filter((X) => X.categoryIds.indexOf(categoryId) >= 0);

  return (
    <View style={style.padding}>
      <Text>Meals Overview Container {categoryId}</Text>
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

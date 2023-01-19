import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverViewScreen({
  route: {
    params: { categoryId },
  },
}) {
  const MEAL = MEALS.filter((X) => X.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = (itemData) => {
    const { item } = itemData;
    const { title, imageUrl, duration, complexity, affordability } = item;

    return (
      <MealItem
        title={title}
        imageURL={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        data={MEAL}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
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

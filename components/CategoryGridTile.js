import { Text, Pressable, View, StyleSheet, Platform } from 'react-native';

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={style.gridItem}>
      <Pressable
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPress : null,
        ]}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[style.innerContainer, { backgroundColor: color }]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPress: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

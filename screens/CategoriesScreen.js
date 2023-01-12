import React from 'react';
import { FlatList } from 'react-native';
import Category from '../models/category';
import { NavigationContainer } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { StatusBar } from 'expo-status-bar';

function renderCategoryItem(itemData) {
  return (
    <>
      <StatusBar style="light" />
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    </>
  );
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

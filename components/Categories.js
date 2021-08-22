import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const categoryStyle = (selected) => {
  return selected ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    fontSize: 20,
  } : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    marginVertical: 10,
  }
}


export const Categories = (props) => {
  return (
    <>
      <Text style={categoriesStyles.categoriesTitle}>Categories</Text>
      <View style={categoriesStyles.categories}>
        {props.categories.map((category, id) => {
          return (
            <View key={id.toString()} style={categoryStyle(props.selectedCategory === category.title)} onTouchEnd={() => props.setSelectedCategory(category.title)}>
              <Image style={{width: 48, height: 48}} source={category.imageName} />
              <Text style={props.selectedCategory === category.title ? {paddingTop: 8, fontSize: 14} : {paddingTop: 8, fontSize: 12} }>{category.title}</Text>
            </View>
          )
        })}
      </View>
    </>
  )
};

const categoriesStyles = StyleSheet.create({
  categories: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    marginHorizontal: 16,
  },
})
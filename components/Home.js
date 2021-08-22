import {Header} from "./Header";
import {Categories} from "./Categories";
import {ExpensesOnCategory} from "./ExpensesOnCategory";
import {StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";

const categories = [
  {
    imageName: require('../assets/categories-svgs/ic_shopping.png'),
    title: 'Shopping',
  },
  {
    imageName: require('../assets/categories-svgs/ic_Food.png'),
    title: 'Food',
  },
  {
    imageName: require('../assets/categories-svgs/ic_grocery.png'),
    title: 'Grocery',
  },
  {
    imageName: require('../assets/categories-svgs/ic_medical.png'),
    title: 'Medical',
  },
  {
    imageName: require('../assets/categories-svgs/ic_restaurant.png'),
    title: 'Restaurant',
  },
  {
    imageName: require('../assets/categories-svgs/ic_taxi.png'),
    title: 'Transport',
  },
  {
    imageName: require('../assets/categories-svgs/ic_working.png'),
    title: 'Working',
  },
  {
    imageName: require('../assets/categories-svgs/ic_launcher.png'),
    title: 'Save Money',
  },
]

const shoppingExpenses = [
  {
    date: '21.08.2021',
    title: 'Buy products',
    amount: 24.21,
  },
  {
    date: '15.08.2021',
    title: 'Buy products',
    amount: 37.92,
  },
  {
    date: '14.08.2021',
    title: 'Buy products',
    amount: 14.55,
  },
  {
    date: '11.08.2021',
    title: 'Buy products',
    amount: 25.02,
  },
]

const restaurantExpenses = [
  {
    date: '22.08.2021',
    title: 'Pinky Bandisky',
    amount: 14.59,
  },
  {
    date: '11.08.2021',
    title: 'The BoBo restaurant',
    amount: 27.92,
  },
  {
    date: '02.08.2021',
    title: 'The View',
    amount: 34.55,
  },
]



export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Unselected');
  const [selectedExpenses, setSelectedExpenses] = useState(shoppingExpenses);

  const selectHandler = (selectedCategory) => {
    switch (selectedCategory) {
      case "Shopping": {
        setSelectedExpenses(shoppingExpenses);
        break;
      }
      case "Restaurant" : {
        setSelectedExpenses(restaurantExpenses);
        break;
      }
      default:
        setSelectedExpenses([]);
        break;
    }

    setSelectedCategory(selectedCategory);
  }

  return (
    <View style={styles.app}>
      <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={selectHandler}/>
      <ExpensesOnCategory expenses={selectedExpenses} selectedCategory={selectedCategory} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react'

import { View, StyleSheet } from 'react-native'

import { HeaderTitle } from 'react-navigation-stack'
import MealItem from '../Components/MealItem'

import { CATEGORIES } from '../Data/dummy-data'

import CategoriesScreen from './CategoriesScreen'
import MealList from '../Components/MealList'

import { useSelector } from 'react-redux'
import DefaultText from '../Components/DefaultText'


const CategoryMealsScreen = props => {


    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)
    
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if (displayedMeals.length === 0) {
        return (
            <View style={{flex :1 , justifyContent : 'center', alignItems : 'center'}}>
                <DefaultText>No Meals found , please check yout filters !! </DefaultText>
            </View>
        )
    }


    return(
        <MealList listData= {displayedMeals} navigation = {props.navigation} /> 
    )
}



CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return{
    headerTitle : selectedCategory.title,


    }
}



export default CategoryMealsScreen
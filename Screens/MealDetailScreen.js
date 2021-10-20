import React , {useEffect, useCallback }from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Constants/Colors'
import DefaultText from '../Components/DefaultText'
import {useSelector, useDispatch} from 'react-redux'
import  {toggleFavorite}  from '../Store/Actions/Meals'

const ListItem = props => {
    return (
        <View style= {styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId')
    const currentMealIsFavorite = useSelector (state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])



    useEffect(() => {
        // props.navigation.setParams({mealTitle : selectedMeal.title})
        props.navigation.setParams({toggleFav : toggleFavoriteHandler})
    } , [toggleFavoriteHandler])

    useEffect (() => {
        props.navigation.setParams({isFav : currentMealIsFavorite})
    }, [currentMealIsFavorite])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>  {selectedMeal.duration}m</DefaultText>
                <DefaultText> {selectedMeal.affordability.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}> Ingredients </Text>
            {selectedMeal.ingredients.map(ingredient => (<ListItem key = {ingredient}>{ingredient}</ListItem>))}
            <Text style={styles.title}> Steps </Text>
            {selectedMeal.steps.map(step => (<ListItem key = {step}>{step}</ListItem>))}
          
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    const isFavorite = navigationData.navigation.getParam('isFav')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: mealTitle,
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon
                        name={isFavorite ? 'star' : 'star-o'}
                        size={23}
                        style ={{marginRight : 15}}
                        color={Colors.primaryColor}
                        onPress= {toggleFavorite}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem : {
        marginVertical : 10,
        marginHorizontal : 20,
        borderColor : '#ccc',
        borderWidth : 1
    }

})


export default MealDetailScreen
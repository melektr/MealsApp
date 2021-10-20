import React from 'react'
import { View, StyleSheet  } from 'react-native'
import MealList from '../Components/MealList'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../Constants/Colors'
import {useSelector } from 'react-redux'
import DefaultText from '../Components/DefaultText'
const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    if (favMeals.length === 0 || !favMeals) {
        return <View style ={styles.content}>
            <DefaultText>No Favorite meals found . Start adding Same please ! </DefaultText>
        </View>
    }


    return(
        <MealList listData = {favMeals} navigation = {props.navigation}/> 
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft : () => (
            <Icon name='th-list' style={styles.iconStyle} onPress={()=>{navData.navigation.toggleDrawer()}}/>
        )
        }

}

const styles = StyleSheet.create({
  
    content :{
        flex :1  ,
        justifyContent :'center',
        alignItems : 'center'

    },
    iconStyle : {
        marginLeft : 15,
        color : Colors.accentColor,
        fontSize : 23
    } 

})


export default FavoritesScreen
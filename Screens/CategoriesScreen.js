import React from 'react'

import {  StyleSheet, FlatList} from 'react-native'

import { CATEGORIES } from '../Data/dummy-data'

import CategoryGridTile from '../Components/CategoryGridTile'

import Icon  from 'react-native-vector-icons/FontAwesome';

import Colors from '../Constants/Colors'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            title = {itemData.item.title}
            onSelect = {() => {
                props.navigation.navigate('CategoryMeals', params={
                    categoryId : itemData.item.id
                })
            }}
            color ={itemData.item.color}
            />
        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}
    CategoriesScreen.navigationOptions = (navData) =>{
        return {
        headerTitle: 'Meals Category',
        headerLeft : () => (
            <Icon name='th-list' style={styles.iconStyle} onPress={()=>{navData.navigation.toggleDrawer()}}/>
        )
        }
    }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },

    iconStyle :{
        marginLeft : 15,
        fontSize : 23,
        color : Colors.accentColor
    }

})


export default CategoriesScreen
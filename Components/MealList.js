import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}

            onSelectMeal={() => props.navigation.navigate('MealDetail', params = {
                mealId: itemData.item.id,
                mealTitle : itemData.item.title
            
            })} />


    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '90%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default MealList
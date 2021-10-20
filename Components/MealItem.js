import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import DefaultText from './DefaultText'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <DefaultText style={styles.title} numberOfLines={1}>{props.title}</DefaultText>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>  {props.duration}m</DefaultText>
                        <DefaultText> {props.affordability.toUpperCase()}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "whitesmoke",
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)', //la transparence de la couleur du fond
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: 'white',
        textAlign: 'center'
    }
})

export default MealItem
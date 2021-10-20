import React, { useState , useEffect , useCallback} from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../Constants/Colors'
import {useDispatch} from 'react-redux'
import {setFilters} from '../Store/Actions/Meals'
import DeaultText from '../Components/DefaultText'
const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label} </Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }} />
        </View>
    )
}
const FiltersScreen = props => {
    const {navigation } = props 
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback (() => {
       
        const appliedFilters = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegetarian : isVegetarian,
            vegan : isVegan
        }

        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan,dispatch])

    useEffect(() => {
        navigation.setParams({save : saveFilters})
    } , [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title} >Available Filters / Restrictions </Text>
            {/* <View style={{flex: 1}} > */}
            <FilterSwitch label='Gluten-Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label='Lactose-Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
        </View>
        // </View>
    )
}


FiltersScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Filter Meals ',
        headerLeft: () => (
            <Icon name='th-list' style={styles.iconStyle} onPress={() => { navData.navigation.toggleDrawer() }} />
        ),
        headerRight  : () => (
            <Icon name='save' style={styles.iconStyle} onPress={navData.navigation.getParam('save')} />
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",


    },
    iconStyle: {
        marginLeft: 15,
        color: Colors.primaryColor,
        fontSize: 23
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "80%",
        marginVertical: 15
    },
    title: {
        fontSize: 22,
        fontFamily: 'OpenSans-Bold',
        margin: 20,
        textAlign: 'center'
    }

})


export default FiltersScreen
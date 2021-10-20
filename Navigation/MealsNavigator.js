import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator} from 'react-navigation-drawer';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../Constants/Colors'
import { Platform } from 'react-native'
import FavoritesScreen from '../Screens/FavoritesScreen'
import FiltersScreen from '../Screens/FiltersScreen'
import Icon  from 'react-native-vector-icons/FontAwesome';



// ============================>  Navigation Options <==================================
const defaultNavOptions = {
    headerTitleStyle : {
        fontFamily : 'OpenSans-Regular'
    },
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
}



// ============================>  Meals Stack Navigator <==================================

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultNavOptions
    }
)

// ============================>  Favorite Meals Stack Navigator <==================================

const FavsNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail : MealDetailScreen
},

{
    defaultNavigationOptions: defaultNavOptions
})

// ============================>  Filters Meals Stack Navigator <==================================

const FiltersNavigator = createStackNavigator({
    Filters : FiltersScreen,
    
},

{
    defaultNavigationOptions: defaultNavOptions
})


// ============================>  TAAAAAB Navigation <==================================

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
               return (
               <Icon name='glass' size={25} color={tabInfo.tintColor}
               />);
            }
        }},
        Favorites: {
            screen : FavsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                   return (
                   <Icon name='star' size={25}  color = {tabInfo.tintColor}
                   />);
                }
            }
        }
            
    },
   {
        tabBarOptions: {
            labelStyle :{
                fontFamily : 'OpenSans-Bold'
            },
            activeTintColor: Colors.accentColor
        }
    })

// ============================>  Draaawer Navigation <==================================

const MainNavigator = createDrawerNavigator({
    MealsFavs : {
        screen: MealsFavTabNavigator, navigationOptions : { drawerLabel : 'Meals'}
    },
    Filters : FiltersNavigator
},{
    contentOptions : {
        activeTintColor : Colors.accentColor,
       
    }
}) 
export default createAppContainer(MainNavigator)
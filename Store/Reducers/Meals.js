import { MEALS } from '../../Data/dummy-data'
import { TOGGLE_FAVORITE } from '../Actions/Meals'
import { SET_FILTERS } from '../Actions/Meals'
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const favExistingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (favExistingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(favExistingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }

        case SET_FILTERS :
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                return true
            })
            return { ...state, filteredMeals : updatedFilteredMeals}

        default:
            return state
    }

}

export default mealsReducer
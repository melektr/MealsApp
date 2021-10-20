import React from 'react'
import MealsNavigator from './Navigation/MealsNavigator'
import {createStore , combineReducers } from 'redux'
import {Provider } from 'react-redux'
import mealsReducer from './Store/Reducers/Meals'



const rootReducer = combineReducers({
  meals : mealsReducer
})

const store = createStore(rootReducer)

export default function App()  {
  return(
    <Provider store = {store}>
   <MealsNavigator />
   </Provider>


  )
}
 
import { combineReducers } from '@reduxjs/toolkit'
import MainSlice from '../main/redux/main.slice';

const rootReducer = combineReducers({projectwizard: MainSlice})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
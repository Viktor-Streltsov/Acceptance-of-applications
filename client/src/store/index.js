import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import tariffReducer from './slices/tariffSlice'
import preloaderReducer from './slices/preloaderSlice'
import applicationReducer from './slices/applicationSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        tariffReducer,
        preloaderReducer,
        applicationReducer,
    }
})
import {configureStore} from "@reduxjs/toolkit";
import dotOptionReducer from "../reducers/DotOptionSlice/dotOptionSlice";
import fourRectReducer from "../reducers/fourRectSlice/fourRectSlice";
import sideIconsReducer from "../reducers/sideIconsSlice/sideIconsSlice";


export const Store =configureStore({
    reducer:{
        sideSlice:sideIconsReducer,
        fourRect:fourRectReducer,
        threeDots:dotOptionReducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),
})


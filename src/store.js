import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from './gallery.state'


const store = configureStore({
    reducer: {
        gallery: galleryReducer
    }
})

export default store
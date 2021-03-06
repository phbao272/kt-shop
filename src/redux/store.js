import { configureStore } from '@reduxjs/toolkit'

import productReducer from './product/productSlice'
import keyboardReducer from './keyboard/keyboardSlice'
import keycapReducer from './keycap/keycapSlice'
import switchReducer from './switch/switchSlice'
import sortFilterReducer from './sort-filter/sortFilterSlice'
import shoppingCartReducer from './shopping-cart/shoppingCartSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        keyboard: keyboardReducer,
        keycap: keycapReducer,
        switch: switchReducer,
        sortFilter: sortFilterReducer,
        shoppingCart: shoppingCartReducer,
    },
})

export default store

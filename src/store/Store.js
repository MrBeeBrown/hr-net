import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/Slice';

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export default store;

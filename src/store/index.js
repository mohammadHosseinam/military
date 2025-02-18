import { configureStore } from '@reduxjs/toolkit';
import timelineReducer from './slices/timeline';

const store = configureStore({
    reducer: {
        timeline: timelineReducer,
    }
});

export default store;
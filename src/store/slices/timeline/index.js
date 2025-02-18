import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 1
};

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
        }
    }
});

export const { setStep } = timelineSlice.actions;
export default timelineSlice.reducer;
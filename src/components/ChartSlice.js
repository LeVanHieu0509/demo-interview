import { createSlice } from '@reduxjs/toolkit';
import Utils from '~/Utils';

const initialState = {
    value: {
        datasets: {},
    },
};

export const ChartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        Randomize: (state, action) => {
            console.log('action', action.payload);
            state.value = action.payload;
        },
    },
});

//action
export const ChartActions = ChartSlice.actions;
//selector
export const SelectDataRandomize = (state) => {
    console.log('value', state.chart.value);
    return state.chart.value;
};
// export const selectScheduleTour = (state) => state.chart.Schedule;

//reducers
const chartReducer = ChartSlice.reducer;
export default chartReducer;

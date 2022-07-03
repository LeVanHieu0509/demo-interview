import chartReducer from '~/components/ChartSlice';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');
const rootReducer = combineReducers({
    chart: chartReducer,
});
const store = configureStore({
    reducer: rootReducer,
});
export default store;

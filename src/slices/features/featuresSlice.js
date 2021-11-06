import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchFeatureData } from "../../data/dataQueries";

const initialState = {
    data: [],
    metaData: {}
};

export const featuresSlice = createSlice({
    name: "features",
    initialState,
    reducers: {
        setFeatures: (state, action) => {
            const { payload } = action;
            state.data = payload.data
            state.metaData = payload.metaData
        },
        orderFeatures: (state, action) => {
            const { type, items } = action.payload;
            state.data = sort(items, type);
        }
    }
})

export const { setFeatures, orderFeatures } = featuresSlice.actions;
export default featuresSlice.reducer;

export const getFeatureData = createAction("features/setFeatures", () => {
    const featureData = fetchFeatureData();
    return {
        payload: {data: [...featureData.data], metaData: featureData.metaData}
    };
});

export const sortFeatures = createAction("features/orderFeatures", function(items, type) {
    return {
        payload: {
            type,
            items
        }
    };
})

function sort(items, type) {
    let copyArray = [...items];

    copyArray.sort((a, b) => {
        if (a.properties[type] < b.properties[type]) {
            return -1;
        }
        if (a.properties[type] > b.properties[type]) {
            return 1;
        }
        return 0;
    });

    if (copyArray[0].id === items[0].id) {
        return copyArray.reverse();
    }
    return copyArray;
}
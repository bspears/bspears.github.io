import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user/userSlice.js";
import siteReducer from "../slices/site/siteSlice.js";
import featuresReducer from "../slices/features/featuresSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        site: siteReducer,
        features: featuresReducer,
    },
});
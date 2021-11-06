import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchSiteData } from "../../data/dataQueries";

const initialState = {
    title: "",
    heroImage: "",
    logoImage: "",
};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        setSiteData: (state, action) => {
            const { payload } = action;
            state.title = payload.title
            state.heroImage = payload.heroImage
            state.logoImage = payload.logoImage
        }
    }
})

export const { setSiteData } = siteSlice.actions;
export default siteSlice.reducer;

export const getSiteData = createAction("site/setSiteData", () => {
    const siteData = fetchSiteData();
    return {
        payload: {
         ...siteData
        }
    };
});

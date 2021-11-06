import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchUser } from "../../data/dataQueries";

const initialState = {
    firstName: "",
    lastName: "",
    avatarImage: "",
    phone: "",
    email: "",
    bio: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { payload } = action;
            state.firstName = payload.firstName
            state.lastName = payload.lastName
            state.avatarImage = payload.avatarImage
            state.phone = payload.phone
            state.email = payload.email
            state.bio = payload.bio
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const getUser = createAction("user/setUser", () => {
    const userData = fetchUser();
    return {
        payload: {
         ...userData
        }
    };
});

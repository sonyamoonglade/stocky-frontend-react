import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthPayload} from "./actions/payload.types";


export interface UserState {
    firstname: string | null
    lastname: string | null
    isAuthenticated: boolean | null

}

const initialState:UserState = {
    firstname: null,
    lastname: null,
    isAuthenticated: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        auth: (state,action:PayloadAction<AuthPayload>) => {
            const {firstname,lastname} = action.payload
            state.firstname = firstname
            state.lastname = lastname
            state.isAuthenticated = true
        },

        logout: (state) => {
            state.isAuthenticated = null
            state.lastname = null
            state.firstname = null
        },



    }
})

export const userActions = userSlice.actions

export default userSlice.reducer
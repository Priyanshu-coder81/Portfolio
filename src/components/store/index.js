import {configureStore, createSlice} from "@reduxjs/toolkit"


const headerSlice = createSlice({
    name: 'header',
    initialState: false,
    reducers: {

    }
})

const store = configureStore({reducer:{
    header: headerSlice.reducer
}})


export const headerActions = headerSlice.actions;
export default store;
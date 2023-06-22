import {createSlice} from "@reduxjs/toolkit"

const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState: {
        application: [],
        applicationHelp: [],
        userApplication: [],
    },
    reducers: {
        setApplication: (state, action) => {
            state.application = action.payload
        },
        setUserApplication: (state, action) => {
            state.userApplication = action.payload
        },
        setApplicationHelp: (state, action) => {
            state.applicationHelp = action.payload
        }
    }
})

export const {
    setApplication,
    setApplicationHelp,
    setUserApplication
} = applicationSlice.actions

export default applicationSlice.reducer